# Daily Study data

`daily_study.html` loads this data in steps, so adding books or pictures doesn't slow the first load:

1. `books.json`: the list of books, loaded at page open.
2. `<book dir>/index.json`: chapter and bite titles, loaded when that book is selected.
3. `<book dir>/chNN.json`: a chapter's bites, loaded when one of its bites is opened.
4. Images: loaded only when their bite is open and they scroll into view (`loading="lazy"`).

## Adding a book

Add an entry to `books.json` (`id`, `title`, `short`, `dir`). Put its `index.json` and chapter files in `dir`.

## Adding pictures to a bite

Give the bite an `images` array:

```json
"images": [
  {"src": "img/ch08/rop-stage3.jpg", "caption": "Stage 3 ROP: ridge with <b>neovascularisation</b>", "alt": "ROP ridge", "credit": "CGMH"}
]
```

- `src` is relative to the book's folder (e.g. `daily_study/wills/img/ch08/...`). A full `https://` URL also works.
- Keep files small: JPG or WebP, about 1200 px wide, roughly 100–200 KB.
- `caption` may contain `<b>`; `alt` and `credit` are plain text.
- Pictures show below the numbered points; tap one to enlarge it.
- Only use images you have the right to publish (own photos, open-licence images with credit).

## Local-only figures (never published)

`daily_study/<book>/local/` is gitignored. If `local/images.json` exists, the page adds its pictures to the bites:

```json
{"w08-02": [{"src": "local/img/fig-8.2.1.jpg", "caption": "Fig 8.2.1: ROP stage 1", "credit": "Wills Eye Manual 8e"}]}
```

On the public site that file is missing, so those bites simply show no extra pictures. Two ways to see them:

- **On the live site:** click **🖼 Import local figures** in the sidebar and pick a book's folder (e.g. `daily_study/wills`), the `daily_study` folder, or the repo. The page copies each `local/images.json` and the pictures it lists into that browser's IndexedDB. Nothing is uploaded. Repeat once per browser or computer, or after clearing site data, or after the figures change.
- **Without importing:** run `study_local.bat`, which serves the repo at http://localhost:8777. The Wills figures were extracted with `daily_study/wills/local/tools/extract_figures.py` and `match_figures.py`.
