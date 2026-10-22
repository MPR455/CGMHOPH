"""Rebuild daily_study/index.json from the chNN.json files.

Run after adding or editing a chapter file:  python daily_study/build_index.py
"""
import datetime
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))

CHAPTERS = [
    "Examination Techniques", "Eyelids", "Lacrimal Drainage System", "Orbit",
    "Dry Eye", "Conjunctiva", "Cornea", "Corneal and Refractive Surgery",
    "Episclera and Sclera", "Lens", "Glaucoma", "Uveitis",
    "Retinal Vascular Disease", "Acquired Macular Disorders",
    "Hereditary Fundus Dystrophies", "Retinal Detachment", "Vitreous Opacities",
    "Strabismus", "Neuro-ophthalmology", "Ocular Tumours",
    "Ophthalmic Side Effects of Systemic Medication", "Trauma",
]

out = {
    "book": "Kanski's Clinical Ophthalmology (9th ed.)",
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
