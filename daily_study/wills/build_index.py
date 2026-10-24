"""Rebuild daily_study/wills/index.json from the chNN.json files.

Run after adding or editing a chapter file:  python daily_study/wills/build_index.py
"""
import datetime
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))

CHAPTERS = [
    "Differential Diagnosis of Ocular Symptoms", "Differential Diagnosis of Ocular Signs",
    "Trauma", "Cornea", "Conjunctiva/Sclera/Iris/External Disease", "Eyelid", "Orbit",
    "Pediatrics", "Glaucoma", "Neuro-ophthalmology", "Retina", "Uveitis",
    "General Ophthalmic Problems", "Imaging Modalities", "Procedures & Appendices",
]

out = {
    "book": "The Wills Eye Manual: Office and Emergency Room Diagnosis (8th ed.)",
    "updated": datetime.date.today().isoformat(),
    "chapters": [],
}
for n, title in enumerate(CHAPTERS, 1):
    cid = "ch%02d" % n
    entry = {"id": cid, "num": n, "title": title, "file": cid + ".json", "chunks": []}
    path = os.path.join(HERE, cid + ".json")
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            ch = json.load(f)
        entry["chunks"] = [
            {"id": k["id"], "title": k["title"], "group": k.get("group", "")}
            for k in ch["chunks"]
        ]
    out["chapters"].append(entry)

with open(os.path.join(HERE, "index.json"), "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
print("index.json:", sum(len(c["chunks"]) for c in out["chapters"]), "bites")
