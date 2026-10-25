# Daily Study data

```
daily_study/
  books.json          list of books (id, title, short, dir)
  kanski/             one folder per book: index.json, chNN.json, build_index.py
  wills/
  local/              gitignored, never pushed: figures kept only on this computer
    wills/            folder name = book id
      images.json     which bite gets which picture
      img/            the picture files
      tools/          scripts used to extract and match them
    kanski/           same layout (1,116 figures)
```

`daily_study.html` loads this data in steps, so adding books or pictures doesn't slow the first load:

1. `books.json`: the list of books, loaded at page open.
2. `<book>/index.json`: chapter and bite titles, loaded when that book is selected.
3. `<book>/chNN.json`: a chapter's bites, loaded when one of its bites is opened.
4. Images: loaded only when their bite is open and they scroll into view.

## Adding a book

Make `daily_study/<id>/` with its `index.json` and chapter files, and add `{"id": "<id>", ..., "dir": "daily_study/<id>/"}` to `books.json`. Bite ids should be unique across books (e.g. `w08-02` for Wills).

## Public pictures in a bite

Only for images you have the right to publish. Give the bite an `images` array; `src` is relative to the book's folder:

```json
"images": [{"src": "img/ch08/rop.jpg", "caption": "Stage 3 ROP", "alt": "ROP ridge", "credit": "CGMH"}]
```

## Local-only figures (never published)

`daily_study/local/<id>/images.json` maps bite ids to pictures; `src` is relative to `local/<id>/`:

```json
{"w08-02": [{"src": "img/fig-8.2.1.jpg", "caption": "Fig 8.2.1: ROP stage 1", "credit": "Wills Eye Manual 8e"}]}
```

The live site has no `local/` folder, so other visitors see no figures. Two ways to see them yourself:

- **On the live site:** click **🖼 Import local figures** in the sidebar and pick the `daily_study/local` folder. That imports every book at once; picking one book's folder, e.g. `local/wills`, also works. The page copies each `images.json` and its pictures into that browser's IndexedDB. Nothing is uploaded. A progress bar shows while copying. Re-imports only copy figures that are new or changed (by file size and modified time) and drop ones no longer listed, so re-importing after adding a book is quick. Re-import once per browser or computer, after clearing site data, or after the figures change.
- **Without importing:** run `study_local.bat`, which serves the repo at http://localhost:8777.
