#!/usr/bin/env python3
"""
Convert ophthalmology mind-map PDFs into hierarchy-preserving JSON, Markdown,
and extracted clinical images for mindmaps.html.

The source PDFs were exported by macOS Quartz. Their text reading order is not
the mind-map hierarchy, but the PDFs retain the vector connector paths. This
tool matches connector endpoints to text-label anchors, orients each edge away
from the central root, and builds a real tree.

Examples:
  python tools/mindmap_converter.py
  python tools/mindmap_converter.py --skip-images
  python tools/mindmap_converter.py --input "MindmapPDF/Retina" --limit 5

Default output:
  mindmaps/generated/manifest.json
  mindmaps/generated/data/<id>.json
  mindmaps/generated/markdown/<id>.md
  mindmaps/generated/img/<id>_01.png
  mindmaps/generated/report.json
"""

from __future__ import annotations

import argparse
import concurrent.futures
import hashlib
import json
import math
import os
import re
import sys
import tempfile
import unicodedata
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Iterable

import fitz  # PyMuPDF
from PIL import Image


CONVERTER_VERSION = "2.0.0"
WATERMARK_RE = re.compile(
    r"mashayekhi|ophthalmology\s+mind\s+maps|american\s+academy", re.I
)
CASE_FOLDER_RE = re.compile(r"^case[ _]example[s]?[ _](.+)$", re.I)

CATEGORY_NAMES = {
    "external diseases": "External Diseases",
    "glaucoma": "Glaucoma",
    "lens": "Lens",
    "neuroophthalmology": "Neuroophthalmology",
    "orbit and eyelids": "Orbit & Eyelids",
    "pathology and tumor": "Pathology & Tumors",
    "ped ophthalmology": "Pediatric Ophthalmology",
    "retina": "Retina",
    "uveitis": "Uveitis",
}

CATEGORY_ORDER = [
    "Case examples",
    "External Diseases",
    "Glaucoma",
    "Lens",
    "Neuroophthalmology",
    "Orbit & Eyelids",
    "Pathology & Tumors",
    "Pediatric Ophthalmology",
    "Retina",
    "Uveitis",
]

CHAR_REPLACEMENTS = {
    "\ufb00": "ff",
    "\ufb01": "fi",
    "\ufb02": "fl",
    "\ufb03": "ffi",
    "\ufb04": "ffl",
    "\u00ad": "",
    "\u200b": "",
    "\ufffe": "-",
}


@dataclass
class Label:
    key: int
    text: str
    rect: fitz.Rect
    font_size: float
    spans: list[dict[str, Any]] = field(default_factory=list)

    @property
    def cx(self) -> float:
        return (self.rect.x0 + self.rect.x1) / 2

    @property
    def cy(self) -> float:
        return (self.rect.y0 + self.rect.y1) / 2


@dataclass
class Edge:
    a: int
    b: int
    score: float


def clean_text(text: str) -> str:
    for old, new in CHAR_REPLACEMENTS.items():
        text = text.replace(old, new)
    text = unicodedata.normalize("NFKC", text)
    text = re.sub(r"[ \t\r\f\v]+", " ", text)
    text = re.sub(r"\s*\n\s*", " ", text)
    return text.strip()


def slugify(text: str, max_len: int = 58) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    slug = re.sub(r"[^a-z0-9]+", "_", text.lower()).strip("_")
    return slug[:max_len].rstrip("_") or "mindmap"


def stable_id(pdf: Path, input_root: Path) -> str:
    relative = pdf.relative_to(input_root).as_posix()
    digest = hashlib.sha1(relative.encode("utf-8")).hexdigest()[:8]
    return f"{slugify(pdf.stem)}_{digest}"


def classify(pdf: Path, input_root: Path) -> tuple[str, str]:
    relative = pdf.relative_to(input_root)
    folder = relative.parts[0] if len(relative.parts) > 1 else "Uncategorized"
    case_match = CASE_FOLDER_RE.match(folder)
    if case_match:
        sub = case_match.group(1).replace("_", " ").strip()
        sub = re.sub(r"\badenexa\b", "adnexa", sub, flags=re.I)
        return "Case examples", sub.title()
    category = CATEGORY_NAMES.get(folder.casefold(), folder.replace("_", " "))
    return category, ""


def rect_union(spans: Iterable[dict[str, Any]]) -> fitz.Rect:
    rects = [fitz.Rect(s["bbox"]) for s in spans]
    out = fitz.Rect(rects[0])
    for rect in rects[1:]:
        out.include_rect(rect)
    return out


def split_text_block(block: dict[str, Any], next_key: int) -> tuple[list[Label], int]:
    """Split a PDF text block if Quartz merged neighboring map labels.

    Spans are unioned when they are contiguous on one line or overlap on
    adjacent wrapped lines. Independent labels such as "alcohol" and "HAC"
    remain separate even when PyMuPDF reports one block.
    """
    raw: list[dict[str, Any]] = []
    for line_index, line in enumerate(block.get("lines", [])):
        for span in line.get("spans", []):
            text = clean_text(span.get("text", ""))
            if not text:
                continue
            item = dict(span)
            item["text"] = text
            item["_line"] = line_index
            raw.append(item)
    if not raw:
        return [], next_key

    parent = list(range(len(raw)))

    def find(i: int) -> int:
        while parent[i] != i:
            parent[i] = parent[parent[i]]
            i = parent[i]
        return i

    def union(i: int, j: int) -> None:
        ri, rj = find(i), find(j)
        if ri != rj:
            parent[rj] = ri

    for i, left in enumerate(raw):
        a = fitz.Rect(left["bbox"])
        for j in range(i + 1, len(raw)):
            right = raw[j]
            b = fitz.Rect(right["bbox"])
            size = max(float(left.get("size", 3)), float(right.get("size", 3)))
            if left["_line"] == right["_line"]:
                gap = max(b.x0 - a.x1, a.x0 - b.x1, 0)
                if gap <= max(5.0, size * 2.2):
                    union(i, j)
                continue
            vertical_gap = max(b.y0 - a.y1, a.y0 - b.y1, 0)
            x_overlap = min(a.x1, b.x1) - max(a.x0, b.x0)
            aligned = abs(a.x0 - b.x0) <= max(5.0, size * 1.8)
            if vertical_gap <= max(3.2, size * 1.4) and (x_overlap > 0 or aligned):
                union(i, j)

    groups: dict[int, list[dict[str, Any]]] = defaultdict(list)
    for index, span in enumerate(raw):
        groups[find(index)].append(span)

    labels: list[Label] = []
    for spans in groups.values():
        spans.sort(key=lambda s: (round(float(s["bbox"][1]), 2), float(s["bbox"][0])))
        line_groups: list[list[dict[str, Any]]] = []
        for span in spans:
            if not line_groups or span["_line"] != line_groups[-1][0]["_line"]:
                line_groups.append([span])
            else:
                line_groups[-1].append(span)
        lines = [" ".join(s["text"] for s in line) for line in line_groups]
        text = clean_text(" ".join(lines))
        if not text:
            continue
        labels.append(
            Label(
                key=next_key,
                text=text,
                rect=rect_union(spans),
                font_size=max(float(s.get("size", 0)) for s in spans),
                spans=spans,
            )
        )
        next_key += 1
    return labels, next_key


def extract_labels(page: fitz.Page) -> list[Label]:
    labels: list[Label] = []
    key = 0
    for block in page.get_text("dict").get("blocks", []):
        if "lines" not in block:
            continue
        pieces, key = split_text_block(block, key)
        for label in pieces:
            if WATERMARK_RE.search(label.text):
                continue
            if label.font_size > 20:
                continue
            labels.append(label)
    return labels


def select_root(labels: list[Label], page: fitz.Page) -> tuple[Label, list[Label]]:
    """Select and, when necessary, rejoin a centered multi-line root title."""
    max_size = max(label.font_size for label in labels)
    numbered = [
        label
        for label in labels
        if re.match(r"^\d+(?:\.\d+)+\.?\s", label.text)
        and abs(label.cx - page.rect.width / 2) <= page.rect.width * 0.22
        and abs(label.cy - page.rect.height / 2) <= page.rect.height * 0.22
    ]
    largest = (
        numbered
        if numbered
        else [label for label in labels if label.font_size >= max_size - 0.25]
    )
    seed = min(
        largest,
        key=lambda label: math.hypot(
            label.cx - page.rect.width / 2, label.cy - page.rect.height / 2
        ),
    )
    title_parts = [
        label
        for label in largest
        if abs(label.cx - seed.cx) <= 80
        and abs(label.cy - seed.cy) <= 45
        and abs(label.font_size - seed.font_size) <= 0.25
    ]
    if len(title_parts) == 1:
        return seed, labels
    title_parts.sort(key=lambda label: (label.cy, label.cx))
    merged_rect = fitz.Rect(title_parts[0].rect)
    for label in title_parts[1:]:
        merged_rect.include_rect(label.rect)
    merged = Label(
        key=seed.key,
        text=clean_text(" ".join(label.text for label in title_parts)),
        rect=merged_rect,
        font_size=max(label.font_size for label in title_parts),
        spans=[span for label in title_parts for span in label.spans],
    )
    merged_keys = {label.key for label in title_parts}
    remaining = [label for label in labels if label.key not in merged_keys]
    remaining.append(merged)
    return merged, remaining


def drawing_endpoints(drawing: dict[str, Any]) -> tuple[fitz.Point, fitz.Point] | None:
    points: list[fitz.Point] = []
    for item in drawing.get("items", []):
        for value in item[1:]:
            if isinstance(value, fitz.Point):
                points.append(value)
    if len(points) < 2:
        return None
    return points[0], points[-1]


def anchor_distance(point: fitz.Point, label: Label) -> float:
    left = math.hypot(point.x - label.rect.x0, point.y - label.cy)
    right = math.hypot(point.x - label.rect.x1, point.y - label.cy)
    return min(left, right)


def connector_edges(page: fitz.Page, labels: list[Label], root: Label) -> tuple[list[Edge], dict[str, Any]]:
    candidates = [label for label in labels if label.key != root.key]
    edges: dict[tuple[int, int], Edge] = {}
    examined = 0
    rejected = 0
    drawings = page.get_drawings()
    width_counts = Counter(
        round(float(drawing.get("width") or 0), 3)
        for drawing in drawings
        if drawing.get("type") == "s"
        and 0.02 <= float(drawing.get("width") or 0) <= 4.0
    )
    if width_counts:
        peak_count = max(width_counts.values())
        connector_width = max(
            width for width, count in width_counts.items() if count >= peak_count * 0.20
        )
    else:
        connector_width = 0.0

    for drawing in drawings:
        width = float(drawing.get("width") or 0)
        if drawing.get("type") != "s" or not (
            connector_width * 0.82 <= width <= connector_width * 1.18
        ):
            continue
        if len(drawing.get("items", [])) > 6:
            continue
        endpoints = drawing_endpoints(drawing)
        if not endpoints:
            continue
        examined += 1
        first, last = endpoints
        first_ranked = sorted((anchor_distance(first, label), label) for label in candidates)
        last_ranked = sorted((anchor_distance(last, label), label) for label in candidates)
        if not first_ranked or not last_ranked:
            rejected += 1
            continue

        # A zero-length decorative tail often lies entirely inside one label.
        if (
            first_ranked[0][1].key == last_ranked[0][1].key
            and first_ranked[0][0] < 3
            and last_ranked[0][0] < 3
        ):
            rejected += 1
            continue

        best: tuple[float, Label, Label] | None = None
        for distance_a, label_a in first_ranked[:4]:
            for distance_b, label_b in last_ranked[:4]:
                if label_a.key == label_b.key:
                    continue
                if distance_a > 24 or distance_b > 24:
                    continue
                side_a = math.copysign(1, label_a.cx - root.cx)
                side_b = math.copysign(1, label_b.cx - root.cx)
                side_penalty = 18 if side_a != side_b else 0
                radial_gap = abs(abs(label_a.cx - root.cx) - abs(label_b.cx - root.cx))
                radial_penalty = 8 if radial_gap < 1.5 else 0
                score = distance_a + distance_b + side_penalty + radial_penalty
                if best is None or score < best[0]:
                    best = (score, label_a, label_b)
        if best is None or best[0] > 42:
            rejected += 1
            continue
        score, label_a, label_b = best
        pair = tuple(sorted((label_a.key, label_b.key)))
        edge = Edge(label_a.key, label_b.key, score)
        if pair not in edges or edge.score < edges[pair].score:
            edges[pair] = edge

    return list(edges.values()), {
        "connector_candidates": examined,
        "connector_rejected": rejected,
        "connector_edges": len(edges),
        "connector_width": connector_width,
    }


def make_tree(page: fitz.Page) -> tuple[dict[str, Any], dict[str, Any], set[int]]:
    labels = extract_labels(page)
    if not labels:
        raise ValueError("no usable text labels found")
    root, labels = select_root(labels, page)
    by_key = {label.key: label for label in labels}
    raw_edges, stats = connector_edges(page, labels, root)

    incoming: dict[int, list[tuple[float, int]]] = defaultdict(list)
    used: set[int] = set()
    for edge in raw_edges:
        a, b = by_key[edge.a], by_key[edge.b]
        radial_a = abs(a.cx - root.cx)
        radial_b = abs(b.cx - root.cx)
        if radial_a <= radial_b:
            parent_key, child_key = a.key, b.key
        else:
            parent_key, child_key = b.key, a.key
        if parent_key == child_key:
            continue
        incoming[child_key].append((edge.score, parent_key))
        used.update((parent_key, child_key))

    parent_of: dict[int, int] = {}
    for child_key, choices in incoming.items():
        choices.sort(key=lambda item: item[0])
        parent_of[child_key] = choices[0][1]

    # Remove the weakest edge in any accidental cycle.
    def has_cycle(start: int) -> bool:
        seen: set[int] = set()
        current = start
        while current in parent_of:
            if current in seen:
                return True
            seen.add(current)
            current = parent_of[current]
        return False

    for key in list(parent_of):
        if has_cycle(key):
            parent_of.pop(key, None)

    # Recover labels whose individual connector endpoint could not be matched.
    # This is deliberately secondary: connector-derived parents always win.
    # Process inward-to-outward so another recovered label can be its parent.
    available = set(used)
    available.add(root.key)
    recovered = 0
    for label in sorted(
        (item for item in labels if item.key not in available),
        key=lambda item: abs(item.cx - root.cx),
    ):
        radial = abs(label.cx - root.cx)
        side = 1 if label.cx >= root.cx else -1
        choices: list[tuple[float, int]] = []
        for parent_key in available:
            parent = by_key[parent_key]
            parent_radial = abs(parent.cx - root.cx)
            parent_side = 1 if parent.cx >= root.cx else -1
            if parent_key != root.key and parent_side != side:
                continue
            if parent_radial >= radial - 0.5:
                continue
            score = (
                abs(label.cy - parent.cy)
                + (radial - parent_radial) * 0.35
                + (15 if parent_key == root.key else 0)
            )
            choices.append((score, parent_key))
        parent_of[label.key] = min(choices)[1] if choices else root.key
        available.add(label.key)
        used.add(label.key)
        recovered += 1

    children: dict[int, list[int]] = defaultdict(list)
    for child_key, parent_key in parent_of.items():
        children[parent_key].append(child_key)

    component_roots = [
        key for key in used if key not in parent_of and key != root.key
    ]
    if not component_roots:
        # Fallback for a PDF with labels but no recoverable connector paths.
        component_roots = [
            label.key
            for label in labels
            if label.key != root.key and abs(label.cx - root.cx) > root.rect.width / 2
        ]
    children[root.key].extend(component_roots)
    used.add(root.key)

    for parent_key in children:
        children[parent_key] = sorted(
            set(children[parent_key]),
            key=lambda key: (by_key[key].cy, by_key[key].cx),
        )

    emitted: set[int] = set()

    def emit(key: int) -> dict[str, Any]:
        emitted.add(key)
        node: dict[str, Any] = {"label": by_key[key].text}
        kids = [child for child in children.get(key, []) if child not in emitted]
        if kids:
            node["children"] = [emit(child) for child in kids]
        return node

    tree = emit(root.key)
    tree["root"] = True
    # Keep root first in a predictable JSON order.
    tree = {"label": tree["label"], "root": True, **({"children": tree["children"]} if "children" in tree else {})}

    edge_ratio = stats["connector_edges"] / max(stats["connector_candidates"], 1)
    stats.update(
        {
            "text_labels": len(labels),
            "tree_nodes": len(emitted),
            "component_roots": len(component_roots),
            "spatially_recovered_labels": recovered,
            "connector_match_ratio": round(edge_ratio, 4),
            "root_font_size": round(root.font_size, 3),
        }
    )
    warnings: list[str] = []
    if len(emitted) < 2:
        warnings.append("tree contains fewer than two nodes")
    if edge_ratio < 0.50:
        warnings.append(f"low connector match ratio ({edge_ratio:.1%})")
    omitted = len(labels) - len(emitted)
    if omitted:
        warnings.append(f"{omitted} text labels omitted")
    stats["warnings"] = warnings
    return tree, stats, emitted


def count_nodes(node: dict[str, Any]) -> int:
    return 1 + sum(count_nodes(child) for child in node.get("children", []))


def markdown_tree(node: dict[str, Any], depth: int = 0) -> list[str]:
    lines = [f"{'  ' * depth}- {node['label']}"]
    for child in node.get("children", []):
        lines.extend(markdown_tree(child, depth + 1))
    return lines


def image_regions(page: fitz.Page, repeat_min: int, min_area: float) -> list[fitz.Rect]:
    placements: list[fitz.Rect] = []
    seen_xrefs: set[int] = set()
    for info in page.get_images(full=True):
        xref = int(info[0])
        if xref in seen_xrefs:
            continue
        seen_xrefs.add(xref)
        rects = page.get_image_rects(xref)
        if len(rects) >= repeat_min:
            continue
        for rect in rects:
            if rect.width * rect.height >= min_area:
                placements.append(fitz.Rect(rect))
    if not placements:
        return []

    parent = list(range(len(placements)))

    def find(i: int) -> int:
        while parent[i] != i:
            parent[i] = parent[parent[i]]
            i = parent[i]
        return i

    def union(i: int, j: int) -> None:
        ri, rj = find(i), find(j)
        if ri != rj:
            parent[rj] = ri

    gap = 8.0
    for i, a in enumerate(placements):
        expanded = fitz.Rect(a.x0 - gap, a.y0 - gap, a.x1 + gap, a.y1 + gap)
        for j in range(i + 1, len(placements)):
            if expanded.intersects(placements[j]):
                union(i, j)

    groups: dict[int, list[fitz.Rect]] = defaultdict(list)
    for index, rect in enumerate(placements):
        groups[find(index)].append(rect)
    regions: list[fitz.Rect] = []
    for rects in groups.values():
        region = fitz.Rect(rects[0])
        for rect in rects[1:]:
            region.include_rect(rect)
        if region.width * region.height >= min_area:
            regions.append(region)
    return sorted(regions, key=lambda rect: (round(rect.y0 / 30), rect.x0))


def caption_for_region(page: fitz.Page, region: fitz.Rect) -> tuple[str, float]:
    candidates: list[tuple[float, float, str]] = []
    for block in page.get_text("blocks"):
        x0, y0, x1, y1, text, *_ = block
        overlap = min(x1, region.x1) - max(x0, region.x0)
        if overlap <= 0:
            continue
        if region.y1 - 3 <= y0 <= region.y1 + 8:
            value = clean_text(text)
            if value and not re.search(r"mashayekhi|ophthalmology\s+mind\s+maps", value, re.I):
                candidates.append((y0, y1, value))
    if not candidates:
        return "", region.y1
    candidates.sort(key=lambda item: (item[0], item[1]))
    caption = " ".join(text for _, _, text in candidates)[:500]
    return caption, max(item[1] for item in candidates)


def extract_images(
    page: fitz.Page,
    output_dir: Path,
    map_id: str,
    dpi: int,
    repeat_min: int,
    min_area: float,
) -> list[dict[str, str]]:
    regions = image_regions(page, repeat_min, min_area)
    if not regions:
        return []
    output_dir.mkdir(parents=True, exist_ok=True)
    pix = page.get_pixmap(dpi=dpi, alpha=False)
    rendered = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    scale = dpi / 72.0
    images: list[dict[str, str]] = []
    for index, region in enumerate(regions, 1):
        caption, caption_bottom = caption_for_region(page, region)
        x0 = max(0, int(region.x0 * scale))
        y0 = max(0, int(region.y0 * scale))
        x1 = min(rendered.width, int(region.x1 * scale))
        y1 = min(rendered.height, int((max(region.y1, caption_bottom) + 1.5) * scale))
        if x1 <= x0 or y1 <= y0:
            continue
        filename = f"{map_id}_{index:02d}.png"
        rendered.crop((x0, y0, x1, y1)).save(output_dir / filename, optimize=True)
        images.append({"file": filename, "caption": caption})
    return images


def atomic_json(path: Path, value: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(
        "w", encoding="utf-8", dir=path.parent, delete=False, suffix=".tmp"
    ) as stream:
        json.dump(value, stream, ensure_ascii=False, indent=2)
        stream.write("\n")
        temporary = Path(stream.name)
    os.replace(temporary, path)


def atomic_text(path: Path, value: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(
        "w", encoding="utf-8", dir=path.parent, delete=False, suffix=".tmp"
    ) as stream:
        stream.write(value)
        temporary = Path(stream.name)
    os.replace(temporary, path)


def write_markdown(
    path: Path,
    tree: dict[str, Any],
    source: str,
    category: str,
    subcategory: str,
    images: list[dict[str, str]],
) -> None:
    lines = [
        "---",
        f'title: {json.dumps(tree["label"], ensure_ascii=False)}',
        f'category: {json.dumps(category, ensure_ascii=False)}',
        f'subcategory: {json.dumps(subcategory, ensure_ascii=False)}',
        f'source_pdf: {json.dumps(source, ensure_ascii=False)}',
        "---",
        "",
        f"# {tree['label']}",
        "",
    ]
    if images:
        lines.extend(["## Images", ""])
        for image in images:
            caption = image.get("caption") or "Extracted clinical image"
            lines.extend([f"![{caption}](../img/{image['file']})", ""])
    lines.extend(["## Hierarchy", ""])
    for child in tree.get("children", []):
        lines.extend(markdown_tree(child))
    lines.append("")
    atomic_text(path, "\n".join(lines))


def relative_web_path(path: Path, base: Path) -> str:
    return path.relative_to(base).as_posix()


def path_is_relative_to(path: Path, base: Path) -> bool:
    try:
        path.relative_to(base)
        return True
    except ValueError:
        return False


def process_pdf(
    pdf: Path,
    input_root: Path,
    output_root: Path,
    web_base: Path,
    args: argparse.Namespace,
) -> tuple[dict[str, Any], dict[str, Any]]:
    map_id = stable_id(pdf, input_root)
    category, subcategory = classify(pdf, input_root)
    relative_source = pdf.relative_to(web_base).as_posix()
    data_path = output_root / "data" / f"{map_id}.json"
    markdown_path = output_root / "markdown" / f"{map_id}.md"
    image_dir = output_root / "img"

    document = fitz.open(pdf)
    if not document:
        raise ValueError("PDF has no pages")
    page = document[0]
    tree, stats, _ = make_tree(page)
    if args.skip_images:
        images = []
    elif args.reuse_images and map_id in args.existing_images:
        images = [
            {"file": image["file"], "caption": image.get("caption", "")}
            for image in args.existing_images[map_id]
        ]
    else:
        images = extract_images(
            page,
            image_dir,
            map_id,
            args.dpi,
            args.repeat_min,
            args.min_image_area,
        )

    metadata = {
        "converter_version": CONVERTER_VERSION,
        "source_pdf": relative_source,
        "page_count": len(document),
        "stats": stats,
    }
    output_tree = {**tree, "_meta": metadata}
    atomic_json(data_path, output_tree)
    write_markdown(
        markdown_path,
        tree,
        relative_source,
        category,
        subcategory,
        images,
    )
    title = tree["label"]
    entry: dict[str, Any] = {
        "id": map_id,
        "title": title,
        "short": title,
        "category": category,
        "subcategory": subcategory,
        "dataFile": relative_web_path(data_path, web_base),
        "markdownFile": relative_web_path(markdown_path, web_base),
        "sourcePdf": relative_source,
        "nodeCount": count_nodes(tree),
        "quality": "review" if stats["warnings"] else "ok",
    }
    if images:
        entry["images"] = [
            {
                **image,
                "src": relative_web_path(image_dir / image["file"], web_base),
            }
            for image in images
        ]
    report = {
        "id": map_id,
        "source": relative_source,
        "title": title,
        "category": category,
        **stats,
    }
    return entry, report


def parse_args(argv: list[str]) -> argparse.Namespace:
    script = Path(__file__).resolve()
    repo = script.parent.parent
    parser = argparse.ArgumentParser(
        description="Convert Quartz-exported mind-map PDFs to JSON, Markdown, and images."
    )
    parser.add_argument("--input", type=Path, default=repo / "MindmapPDF")
    parser.add_argument("--output", type=Path, default=repo / "mindmaps" / "generated")
    parser.add_argument("--skip-images", action="store_true")
    parser.add_argument(
        "--reuse-images",
        action="store_true",
        help="Reuse image entries already present in the output manifest.",
    )
    parser.add_argument("--dpi", type=int, default=220)
    parser.add_argument("--repeat-min", type=int, default=8)
    parser.add_argument("--min-image-area", type=float, default=700)
    parser.add_argument("--limit", type=int)
    parser.add_argument(
        "--workers",
        type=int,
        default=min(6, os.cpu_count() or 1),
        help="Number of PDFs to process in parallel (default: up to 6).",
    )
    parser.add_argument("--strict", action="store_true", help="Exit nonzero if any map needs review.")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv or sys.argv[1:])
    args.input = args.input.resolve()
    args.output = args.output.resolve()
    repo = Path(__file__).resolve().parent.parent
    args.existing_images = {}
    if args.reuse_images:
        existing_manifest = args.output / "manifest.json"
        if existing_manifest.exists():
            existing = json.loads(existing_manifest.read_text(encoding="utf-8"))
            args.existing_images = {
                entry["id"]: entry.get("images", [])
                for entry in existing.get("maps", [])
                if entry.get("images")
            }
    if not args.input.exists():
        print(f"error: input does not exist: {args.input}", file=sys.stderr)
        return 2
    if args.input.is_file():
        pdfs = [args.input] if args.input.suffix.casefold() == ".pdf" else []
    else:
        pdfs = sorted(args.input.rglob("*.pdf"), key=lambda path: path.as_posix().casefold())
    if args.limit:
        pdfs = pdfs[: args.limit]
    print(f"Converting {len(pdfs)} mind-map PDFs from {args.input}")
    canonical_root = repo / "MindmapPDF"
    catalog_root = (
        canonical_root
        if all(path_is_relative_to(pdf, canonical_root) for pdf in pdfs)
        else (args.input.parent if args.input.is_file() else args.input)
    )

    entries: list[dict[str, Any]] = []
    reports: list[dict[str, Any]] = []
    failures: list[dict[str, str]] = []
    completed = 0

    def accept(pdf: Path, result: tuple[dict[str, Any], dict[str, Any]] | Exception) -> None:
        nonlocal completed
        completed += 1
        if isinstance(result, Exception):
            failures.append({"source": str(pdf), "error": str(result)})
            print(f"[{completed:03d}/{len(pdfs):03d}] ERROR  {pdf.name}: {result}", file=sys.stderr)
            return
        entry, report = result
        entries.append(entry)
        reports.append(report)
        marker = "REVIEW" if report["warnings"] else "OK"
        print(
            f"[{completed:03d}/{len(pdfs):03d}] {marker:6s} "
            f"{entry['nodeCount']:3d} nodes  {pdf.relative_to(catalog_root)}"
        )

    if args.workers <= 1:
        for pdf in pdfs:
            try:
                accept(pdf, process_pdf(pdf, catalog_root, args.output, repo, args))
            except Exception as exc:
                accept(pdf, exc)
    else:
        with concurrent.futures.ProcessPoolExecutor(max_workers=args.workers) as executor:
            future_to_pdf = {
                executor.submit(process_pdf, pdf, catalog_root, args.output, repo, args): pdf
                for pdf in pdfs
            }
            for future in concurrent.futures.as_completed(future_to_pdf):
                pdf = future_to_pdf[future]
                try:
                    accept(pdf, future.result())
                except Exception as exc:
                    accept(pdf, exc)

    categories = [name for name in CATEGORY_ORDER if any(e["category"] == name for e in entries)]
    categories.extend(
        sorted({e["category"] for e in entries} - set(categories), key=str.casefold)
    )
    entries.sort(
        key=lambda entry: (
            categories.index(entry["category"]),
            entry.get("subcategory", "").casefold(),
            entry["title"].casefold(),
        )
    )
    manifest = {
        "schemaVersion": 2,
        "converterVersion": CONVERTER_VERSION,
        "categories": categories,
        "maps": entries,
    }
    atomic_json(args.output / "manifest.json", manifest)

    review_count = sum(bool(report["warnings"]) for report in reports)
    report_doc = {
        "converterVersion": CONVERTER_VERSION,
        "input": str(args.input),
        "output": str(args.output),
        "pdfCount": len(pdfs),
        "converted": len(entries),
        "needsReview": review_count,
        "failures": failures,
        "maps": reports,
    }
    atomic_json(args.output / "report.json", report_doc)
    print(
        f"Done: {len(entries)} converted, {review_count} flagged for review, "
        f"{len(failures)} failed."
    )
    print(f"Manifest: {args.output / 'manifest.json'}")
    if failures or (args.strict and review_count):
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
