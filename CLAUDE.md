# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Production build → dist/ (runs image optimizer)
npm run preview    # Preview production build locally
npm run lint       # ESLint
```

No test suite is configured.

## Architecture

React 19 portfolio app for Lior Shviro — Data Scientist / LLM Workflows Analyst. Stack: Vite 8, Tailwind CSS, React Router DOM v7. Deploys to Netlify.

**Entry flow:** `main.jsx` → `App.jsx` (wraps in `<BrowserRouter>` with `<Routes>`) → `HomePage.jsx` or `BlogPost`.

**Routes:**
- `/` → `HomePage` (all sections on one page, anchor-nav)
- `/blog/:slug` → `BlogPost` (Markdown-rendered detail page)

**Home page sections (in order):**
- `Header` — fixed nav with Home / Projects / Blog / Contact anchors + GitHub/LinkedIn icons
- `Hero` — illustrated headshot (`src/assets/hero.png`), tagline, "View My Research" CTA
- `ProjectsIndex` — `#projects`, reads from `src/data/projects.js`
- `BlogPreview` — `#blog`, reads from `src/data/posts.js`, each entry links to `/blog/:slug`
- `Contact` — `#contact`, Netlify Forms contact form
- `Footer`

## Content model

All editable content lives in `src/data/`:
- `src/data/projects.js` — array of `{ title, summary, tags[] }`
- `src/data/posts.js` — array of `{ date, slug, title, excerpt, body }` (body is Markdown string)

Section headers auto-display counts (e.g. `01 // SELECTED_PROJECTS [4]`).

To add a post: append an entry with a unique `slug` and a Markdown `body`. The route and preview link update automatically.

## Styling system

CSS custom properties in `src/index.css` (`:root`) map to semantic Tailwind tokens in `tailwind.config.js`. Dark theme only. Primary accent emerald `#10b981`.

- `.font-serif` → Playfair Display / Georgia
- `.font-mono` → JetBrains Mono / Geist Mono
- `@tailwindcss/typography` plugin renders blog post Markdown via `prose prose-invert`
- Global: `scroll-behavior: smooth`, `scroll-margin-top` on sections, `:focus-visible` ring

`src/lib/utils.js` exports `cn()` (clsx + tailwind-merge). Used in `contact.jsx`.

## Deployment (Netlify)

- `netlify.toml` configures build + SPA catch-all redirect to `/index.html`
- Contact form uses **Netlify Forms**. A hidden static copy lives in `index.html` inside `<body>` — Netlify's build-time parser needs the plain-HTML form to register it. The React form in `src/components/contact.jsx` POSTs urlencoded to `/` with `form-name=contact`.
- Analytics: **GoatCounter** script in `index.html` `<head>`. `YOURCODE` placeholder must be replaced with the real site code from goatcounter.com signup.
- Images: `vite-plugin-image-optimizer` (sharp) compresses PNG/JPEG/WebP at build time. `hero.png` goes from ~3.1 MB → ~500 KB automatically.

## Pending TODOs (user-supplied values)

- **GitHub / LinkedIn URLs** — `src/components/header.jsx` has `href="#"` placeholders with a TODO comment at the top of the file
- **GoatCounter site code** — `index.html` has `YOURCODE.goatcounter.com` placeholder
- **Netlify contact notification email** — set in the Netlify UI (Forms → contact → Notifications) after first deploy
