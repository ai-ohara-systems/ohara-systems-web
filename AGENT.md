# ohara.systems — Web Platform · Agent Context

> **Stack decision, content architecture, and implementation roadmap for the ohara.systems corporate web presence.**

---

## Mission

ohara.systems is a bilingual (🇩🇪 DE / 🇬🇧 EN) platform for AI practitioners, teams, and decision-makers.
It combines a company presence with genuine value: a curated blog, free courses, best-practice guides, and full product documentation — all in one place.

---

## Platform Sections

### 1. Home
- Clear value proposition for ohara.systems as an AI infrastructure & tooling company
- Featured products, latest blog posts, and a course teaser
- Language switcher (DE default, EN toggle)

### 2. Blog — "AI Insights"
- Active, opinionated blog covering AI engineering, LLMOps, cost optimization, model routing, agentic systems, and enterprise AI adoption
- Bilingual posts (DE + EN); each post available in both languages
- Tag/category taxonomy: `llmops`, `routing`, `cost`, `agentic`, `open-source`, `enterprise`, `tutorial`
- RSS feed per language
- Author profiles (team + guest authors)
- Series support (e.g. "Building a Production LLM Gateway — 5 parts")

### 3. Products
Showcase page per product with overview, feature list, quick-start, and link to docs.

| Product | Status | Tagline |
|---------|--------|---------|
| **Model Prism** | GA | Multi-tenant LLM gateway with intelligent routing & cost tracking |
| *(future products)* | — | — |

Each product card links to its dedicated docs section and the GitHub repo.

### 4. Free Courses
Self-paced, structured learning paths — no login required to read, optional account to track progress.

Planned courses:
- **LLM Gateway Fundamentals** — What a gateway does, when you need one, how to set it up (Model Prism walkthrough)
- **Prompt Routing in Practice** — Signal extraction, classifier models, cost tiers, rule sets
- **AI Cost Optimization** — Token economics, model tiers, routing strategies, baseline comparisons
- **Running AI in the Enterprise** — Multi-tenancy, RBAC, audit trails, LDAP, compliance
- **Agentic Systems 101** — Tool use, context management, multi-turn conversations

Course format: chapters → lessons → code examples → knowledge check (optional quiz).
Each lesson is a markdown document rendered as a clean reading page.

### 5. Best Practices & Articles
Long-form, evergreen technical guides. Separate from the time-stamped blog.

Examples:
- "Choosing the right LLM for the job" (tier decision framework)
- "Context window management — what every engineer should know"
- "Secure multi-tenant LLM deployments — checklist"
- "Evaluating routing accuracy — how to benchmark your classifier"

### 6. Product Docs
Full documentation for each product, versioned.

**Model Prism docs** (first to launch):
- Getting Started / Setup Wizard
- Architecture overview
- Providers & adapters
- Tenants, API keys, RBAC
- Auto-routing deep dive
- Routing rule sets
- Cost tracking & analytics
- Prompt logging & audit trail
- Horizontal scaling
- API reference (OpenAI-compatible + admin API)
- Environment variables reference
- Changelog

---

## i18n Strategy

- **Default language**: German (DE) — primary market
- **Secondary language**: English (EN) — international / developer audience
- URL structure: `ohara.systems/de/...` and `ohara.systems/en/...` (or `/` = DE, `/en/` = EN)
- All UI chrome, navigation, and product copy translated
- Blog posts: translated manually — not all posts guaranteed in both languages on day 1
- Docs: EN first (source of truth), DE translation follows

---

## Tech Stack (proposed)

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Astro** | Static-first, MDX content, minimal JS, excellent i18n support |
| Styling | **Tailwind CSS** | Rapid iteration, consistent design tokens |
| Content | **MDX + content collections** | Type-safe frontmatter, component embedding in markdown |
| Deployment | **Vercel / Cloudflare Pages** | Edge CDN, preview deployments, zero-config |
| Search | **Pagefind** | Static full-text search, no backend needed |
| Analytics | **Plausible** | Privacy-first, GDPR compliant (EU audience) |
| CMS (optional) | **Keystatic / Tina CMS** | Git-backed, no database, editors can write without code |

---

## Design Direction

- Dark-mode first (consistent with Model Prism's dark UI aesthetic)
- Accent palette: cyan `#38bdf8` · violet `#818cf8` · magenta `#e879f9` — matching the Model Prism brand
- Clean, minimal — let content breathe
- Logo: Model Prism neon prism SVG mark + "ohara.systems" wordmark in navbar

---

## Content Priorities (Launch MVP)

1. Home page (DE + EN)
2. Model Prism product page (DE + EN)
3. Model Prism docs (EN, core sections)
4. 3–5 blog posts to seed the blog
5. 1 free course: "LLM Gateway Fundamentals"

---

## Repository Structure (planned)

```
ohara-systems-web/
├── src/
│   ├── content/
│   │   ├── blog/          # blog posts (de/ + en/)
│   │   ├── courses/       # course chapters & lessons
│   │   ├── articles/      # best-practice long-form articles
│   │   └── docs/          # product docs (model-prism/...)
│   ├── pages/
│   │   ├── index.astro    # home (DE)
│   │   ├── en/            # EN mirror
│   │   ├── blog/
│   │   ├── products/
│   │   ├── courses/
│   │   └── docs/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro
│   │   ├── CourseLesson.astro
│   │   └── ProductCard.astro
│   ├── layouts/
│   │   ├── Base.astro
│   │   ├── BlogPost.astro
│   │   ├── DocsPage.astro
│   │   └── CoursePage.astro
│   └── i18n/
│       ├── de.json
│       └── en.json
├── public/
│   └── assets/ (logos, og-images, favicons)
├── astro.config.mjs
├── tailwind.config.mjs
├── AGENT.md              ← this file
└── README.md
```

---

## Open Questions / Decisions

- [ ] Custom domain setup: `ohara.systems` (main) + `prism.ohara.systems` (Model Prism app/docs subdomain)
- [ ] Whether docs live in this repo or in the product repo (`model-prism/docs/`)
- [ ] CMS needed on day 1 or write directly in git?
- [ ] Comment system for blog posts (Giscus / none)
- [ ] Newsletter integration (ConvertKit / Buttondown)

---

*Last updated: 2026-04-02 · Maintained by ohara.systems team*
