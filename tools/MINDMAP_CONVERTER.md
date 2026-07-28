# Mind-map PDF converter

`mindmap_converter.py` converts every PDF under `MindmapPDF/` into the data
used by `mindmaps.html`.

## What it produces

- Hierarchical JSON in `mindmaps/generated/data/`
- Hierarchical Markdown in `mindmaps/generated/markdown/`
- Cropped clinical images in `mindmaps/generated/img/`
- A lazy-loading manifest in `mindmaps/generated/manifest.json`
- A quality report in `mindmaps/generated/report.json`

The converter reads the PDFs' vector connector paths, matches their endpoints
to text labels, and orients branches away from the central root. It does not
infer hierarchy from PDF text reading order.

## Run

From `0000_OPH cs database`:

```powershell
python tools/mindmap_converter.py
```

Faster hierarchy-only validation:

```powershell
python tools/mindmap_converter.py --skip-images
```

Test a small folder or batch:

```powershell
python tools/mindmap_converter.py --input "MindmapPDF/Retina" --limit 5
```

Use `--strict` in CI to return a nonzero exit status when any map is flagged
for manual review.
