"""Rebuild daily_study/vaughan/index.json from the chNN.json files.

Run after adding or editing a chapter file:  python daily_study/vaughan/build_index.py
"""
import datetime
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))

CHAPTERS = [
    "Anatomy & Embryology of the Eye", "Ophthalmologic Examination", "Ophthalmic Emergencies",
    "Lids & Lacrimal Apparatus", "Conjunctiva & Tears", "Cornea", "Uveal Tract & Sclera", "Lens",
    "Vitreous", "Retina", "Glaucoma", "Strabismus", "Orbit", "Neuro-Ophthalmology",
    "Ocular Disorders Associated with Systemic Diseases", "Immunologic Diseases of the Eye",
    "Special Subjects of Pediatric Interest", "Ophthalmic Genetics", "Ophthalmic Trauma",
    "Causes & Prevention of Vision Loss", "Optics & Refraction", "Ophthalmic Therapeutics",
    "Lasers in Ophthalmology", "Low Vision", "Vision Rehabilitation",
]

out = {
    "book": "Vaughan & Asbury's General Ophthalmology (19th ed.)",
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
