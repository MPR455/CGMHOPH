CONSULT NOTE TEMPLATE BANK
==========================

GitHub upload location
----------------------
consult_template/custom_templates.js

In the repository this is:
C:\Users\user\Documents\GitHub\CGMHOPH\consult_template\custom_templates.js

How to publish a template
-------------------------
Recommended browser workflow:
1. Build or load a Consult Note.
2. Click "Save current builder to bank", then confirm the title/category.
3. In Template Bank, edit it further if needed.
4. Click "Export GitHub JS" in the Consult Template Bank controls.
5. Replace consult_template/custom_templates.js in GitHub with the downloaded
   custom_templates.js file, then commit and push.

Manual workflow:
1. Open custom_templates.js.
2. Copy the commented example object into the array.
3. Fill these fields:
   - id: unique template title shown in "Start from template"
   - category: category dropdown label
   - reply: Impression and Plan
   - s: Subjective example
   - o: Objective / ophthalmic examination example
   - p: medication/order lines
   - addendum: optional extra content
4. Keep commas between template objects.
5. Commit and push both this folder and index.html to GitHub.

Important behavior
------------------
- A new unique id adds a new template.
- A published template with the same id replaces the earlier built-in or
  browser-stored copy whenever the page loads.
- Templates created or edited in Template Bank are stored in that browser.
  Export JSON is a portable backup. Export GitHub JS produces the replacement
  file used by GitHub Pages.
- Use ### for information that must be confirmed. Do not include identifiable
  patient information in a published template.

Treatment Plan templates
------------------------
The browser-exported Progress Note Treatment Plan bank is published at:
progress_template/treatment_plan_templates.js

They are displayed in Template Bank under "Progress Note Treatment Plan" and
are applied from Progress Note > Plan > Use hospitalization template.
