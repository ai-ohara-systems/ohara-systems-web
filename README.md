<p align="center">
  <img src="public/ohara-systems-logo.svg" alt="ohara.systems" width="120" />
</p>

<h1 align="center">ohara.systems</h1>

<p align="center">
  <em>"The sky isn't the limit — we can already reach the moon."</em><br/>
  Enterprise-ready AI solutions. For everyone.
</p>

<p align="center">
  <a href="https://ohara.systems">ohara.systems</a> ·
  <a href="https://demo-prism.ohara.systems">Live Demo</a> ·
  <a href="https://docs.ohara.systems">Docs</a>
</p>

---

Bilingual (DE/EN) marketing website for [ohara.systems](https://ohara.systems). German is the default locale; English lives under `/en/`.

## Table of Contents

- [Requirements](#requirements)
- [Local Development](#local-development)
- [Project Structure](#project-structure)
- [Content Editing](#content-editing)
- [i18n — Bilingual Pages](#i18n--bilingual-pages)
- [Production Deployment](#production-deployment)

---

## Requirements

| Dependency | Version |
|---|---|
| Node.js | 18+ |
| npm | 9+ |

---

## Local Development

```bash
npm install
npm run dev
```

Site runs at **http://localhost:4321**.

```bash
npm run dev       # Dev server with hot reload
npm run build     # Build static output to ./dist
npm run preview   # Preview the production build locally
```

---

## Project Structure

```
src/
  pages/
    index.astro               # German homepage
    products/
      model-prism.astro       # DE product page
      index.astro             # DE products overview
      prism-enterprise.astro  # DE Enterprise page
    courses.astro
    best-practices.astro
    impressum.astro
    datenschutz.astro
    license.astro
    404.astro
    en/                       # English pages (mirror of DE structure)
      index.astro
      products/
        model-prism.astro
        index.astro
      courses.astro
      best-practices.astro
      impressum.astro
      privacy.astro
      license.astro
  components/
    Nav.astro
    Footer.astro
    HomePage.astro
    SpaceAstronaut.astro
    SpaceMoon.astro
  layouts/
    Base.astro                # HTML shell, OG meta tags, canonical URL
  i18n/
    de.json                   # German UI strings
    en.json                   # English UI strings
public/
  ohara-systems-logo.svg      # ← use this one
  favicon.svg
```

---

## Content Editing

### Page copy

Content is inline in `.astro` files. Open the relevant file and edit the HTML directly.

For strings shared across pages (nav labels, taglines, CTAs), edit:
- `src/i18n/de.json` — German
- `src/i18n/en.json` — English

### Navigation

Edit `src/components/Nav.astro`. External links (blog, docs) carry `external: true` which adds `target="_blank"`.

### Footer

Edit `src/components/Footer.astro`. Same link structure as Nav.

### Logo

Always use `/ohara-systems-logo.svg`. The file `ohara-logo.svg` is legacy and must not be used.

---

## i18n — Bilingual Pages

- German (default): `/`, `/products/model-prism`, etc.
- English: `/en/`, `/en/products/model-prism`, etc.

**Adding a new page in both languages:**

1. Create `src/pages/my-page.astro` (German)
2. Create `src/pages/en/my-page.astro` (English)
3. Add links in `Nav.astro` and `Footer.astro` for both locales

**Language detection in components:**

```astro
---
const { lang = 'de' } = Astro.props;
const isDE = lang === 'de';
---
<p>{isDE ? 'Deutsch' : 'English'}</p>
```

The `lang` prop is passed down from each page via its layout call.

---

## Production Deployment

```bash
npm run build
# Static output in ./dist — deploy this folder
```

Fully static HTML — no server required. Deploy `dist/` to any static host or CDN.

---

## License

Licensed under the **Elastic License 2.0** with **Ohara Systems Additional Terms**.

- [LICENSE](./LICENSE) — Elastic License 2.0
- [OHARA_TERMS.md](./OHARA_TERMS.md) — Ohara Systems Additional Terms

No SaaS/hosted use without written approval. No white-labeling. For commercial licensing: **ai@ohara.systems**

Copyright (c) 2026–present Ohara Systems. All rights reserved.
