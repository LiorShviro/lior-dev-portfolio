# GEMINI.md - Project Context

## Project Overview
**lior-dev-portfolio** is a React-based developer portfolio for Lior Shviro — Data Scientist and LLM Workflows Analyst. Migrated from a V0 Next.js design into a Vite/React 19 SPA and deployed on Netlify.

### Main Technologies
- **Framework:** React 19
- **Build Tool:** Vite 8 (with `vite-plugin-image-optimizer` + `sharp`)
- **Styling:** Tailwind CSS + `@tailwindcss/typography` for Markdown posts; dark theme, emerald `#10b981` accent
- **Icons:** Lucide React
- **Routing:** React Router DOM v7 — `/` and `/blog/:slug`
- **Markdown:** `react-markdown` for blog post bodies
- **Utilities:** `clsx` + `tailwind-merge` via `src/lib/utils.js` `cn()`

### Architecture

**Entry:** `main.jsx` → `App.jsx` (BrowserRouter + Routes) → `HomePage.jsx` or `BlogPost.jsx`

**Home sections (top-to-bottom):** Header → Hero → ProjectsIndex → BlogPreview → Contact → Footer

**Routes:**
| Path | Component |
| :--- | :--- |
| `/` | `HomePage` |
| `/blog/:slug` | `BlogPost` (renders `post.body` as Markdown) |

**Content model:** All content arrays live in `src/data/`:
- `src/data/projects.js` — `{ title, summary, tags[] }[]`
- `src/data/posts.js` — `{ date, slug, title, excerpt, body }[]` (body is Markdown)

Section headers auto-display counts.

### Building and Running

| Command | Description |
| :--- | :--- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build → `dist/` (runs image optimizer) |
| `npm run preview` | Preview the built site |
| `npm run lint` | ESLint |

### Deployment
Hosted on **Netlify**. Configured via `netlify.toml`:
- Build: `npm run build`, publish `dist/`
- SPA catch-all redirect (`/* → /index.html 200`) so direct links to `/blog/...` work

**Netlify Forms** handles the contact form. A static hidden form in `index.html` registers the form at build time; the React component in `src/components/contact.jsx` POSTs urlencoded data to `/`.

**GoatCounter** is loaded via a `<script>` tag in `index.html`. Replace `YOURCODE.goatcounter.com` with the real site code once signed up.

### Pending TODOs (require user input)
- Replace `href="#"` GitHub and LinkedIn URLs in `src/components/header.jsx` with real profile links
- Replace `YOURCODE` in the GoatCounter script tag in `index.html` with the real site code
- Configure email notifications for the Netlify contact form in the Netlify dashboard after deploy

### Notes
- `src/lib/utils.js` exports `cn()` — used in `contact.jsx`
- Blog post Markdown is styled with `prose prose-invert` (Tailwind Typography)
- Image optimization is automatic on build; no manual compression step needed
