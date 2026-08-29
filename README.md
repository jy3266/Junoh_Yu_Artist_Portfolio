# Junoh Yu — Artist Portfolio

Bilingual (한국어 / English) portfolio site for **Junoh Yu (유준오)**, transdisciplinary
visual and installation artist, educator, and creative technologist.

Live: https://jy3266.github.io/Junoh_Yu_Artist_Portfolio/

## Structure

```
index.html            Home — hero, categories, selected works, short bio
interactive.html      Interactive Media (2021—)
installation.html     Installation (2014—)
performance.html      Performance (2014—)
vr.html               VR-Hotline trilogy (2021—)
art-tech.html         Art & Tech — REBREATHE
about.html            Full artist statement
cv.html               Curriculum vitae
contact.html          Contact

assets/css/style.css  All styling
assets/js/data.js     ALL CONTENT — works, bio, CV, UI strings (ko + en)
assets/js/site.js     Language switching, grid rendering, lightbox
assets/img/works/     Artwork photography, one folder per work
assets/docs/          Downloadable portfolio PDF
```

No build step, no dependencies. Plain HTML/CSS/JS served straight from GitHub Pages.

## Editing content

Everything editable lives in **`assets/js/data.js`**. Nothing else needs to change.

### Add a new work

1. Create `assets/img/works/<slug>/` and add images named `01.jpg`, `02.jpg`, …
   (JPEG, max 1600px on the long edge keeps pages fast).
2. Add an entry to the `works` array:

```js
{
  slug: "my-new-work",          // must match the folder name
  cat: "installation",          // interactive | installation | performance | vr | arttech
  year: "2026",
  images: 3,                    // how many files are in the folder
  cover: 1,                     // optional — which image to use as the thumbnail
  title:      { ko: "제목",  en: "Title" },
  venue:      { ko: "전시명, 기관", en: "Exhibition, Institution" },   // optional
  dimensions: "100 × 100 × 200 cm",                                    // optional
  materials:  { ko: "재료…", en: "Materials…" },
  video:      "https://youtu.be/…"                                     // optional
}
```

Any field written as `{ ko, en }` switches with the language toggle. A field written as a
plain string (like `dimensions`) is shown as-is in both languages.

### Edit the bio, CV, or interface text

- Artist statement → the `bio` object (`ko` and `en` arrays, one string per paragraph).
- CV → the `cv` object (`education`, `teaching`, `awards`, `exhibitions`, `publications`).
- Buttons, section headings, nav labels → the `ui` object at the top of the file.

### Change the default language

The site remembers each visitor's choice in `localStorage`, and falls back to their
browser language. To force a default, edit `readStoredLang()` in `assets/js/site.js`.

## Local preview

Open the folder with any static server, e.g.:

```bash
npx serve .          # or: python -m http.server 8000
```

Opening the files directly with `file://` will not work — the pages load `data.js`
and images by relative path.

## Deploying

Pushing to `main` publishes automatically via GitHub Pages (Settings → Pages → Deploy
from branch → `main` / root). `.nojekyll` is present so no files are skipped.

---

© 2026 Junoh Yu. All rights reserved.
Artwork images and text are the property of the artist.
