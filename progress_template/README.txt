PROGRESS-NOTE TEMPLATE OVERRIDES
================================

index.html loads custom_templates.js before progress_note.js.
Edit custom_templates.js, save it, and reload the page to update the toolbox cards.

The two editable arrays are:

1. window.CGMH_PROGRESS_EXAM_TEMPLATES
   Examination templates.

2. window.CGMH_PROGRESS_PLAN_TEMPLATES
   Diagnostic, Therapeutic, Patient education, and Measurable goal templates.


EXAMINATION TEMPLATE FORMAT
---------------------------

{
  id: 'unique-id',
  group: 'Corneal operations',
  rank: 1,
  common: 'Common',
  status: 'Postoperative',
  title: 'Card title',
  f: { cornea: 'Finding ###', anteriorChamber: 'Finding ###' }
}

Valid examination field keys:

visualAcuity, pressure, pupil, motility, lid, conjunctiva, cornea,
anteriorChamber, iris, lens, vitreous, disc, macula, retina, wound


PLAN TEMPLATE FORMAT
--------------------

{
  id: 'unique-id',
  group: 'Maintenance medication',
  rank: 1,
  common: 'Common long-term care',
  status: 'Maintenance',
  title: 'Card title',
  d: '- Diagnostic text: ###',
  t: '- Therapeutic text: ###',
  e: '- Patient education text: ###',
  g: '- Measurable goal text: ###'
}

Use \n inside a quoted string for a new line.
Keep every id unique.
Reusing a built-in id intentionally replaces that built-in card.
Keep ### wherever patient-specific information, medication details, dates,
targets, or clinical decisions must be confirmed.

The "Common medication regimens" cards intentionally list commonly used or
label-based examples. They are references, not automatic order sets. Delete
every medication that was not actually ordered and confirm indication,
laterality, concentration, route, frequency, duration/taper, allergies,
interactions, organ function, contraindications, and the attending surgeon's
plan before using the note clinically.


BROWSER EDITING AND GITHUB EXPORT
---------------------------------

In Template Bank, open "Progress Note Treatment Plan". You can:

- create a new Treatment Plan;
- edit or delete an existing Treatment Plan;
- import/export JSON as a portable backup;
- export a GitHub-ready JavaScript file.

To publish browser edits, click "Export GitHub JS" and replace this repository
file with the downloaded file:

progress_template/treatment_plan_templates.js

Then commit and push it to GitHub. Browser edits are otherwise stored only in
that browser. The Progress Note Plan toolbox uses the edited bank immediately.


WHY CUSTOM_TEMPLATES.JS IS JAVASCRIPT
-------------------------------------

This project is a static webpage and can also be opened directly from a local
file. A linked JavaScript data file works in both local-file and GitHub Pages
use without requiring a web server or a fetch request. The file contains only
editable template data; the application behavior remains in progress_note.js.


PRODUCTION ACCESS
-----------------

The Progress Note button in index.html opens:

index.html?tab=progress

On GitHub Pages this becomes:

https://mpr455.github.io/CGMHOPH/?tab=progress
