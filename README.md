# Patryk Piasecki — Portfolio

Static portfolio site for a Data Scientist / ML Specialist. Built with
[Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com),
deployed to **GitHub Pages** — no backend, fully static.

## Stack

- **Astro 5** — static output, file-based routing, content collections
- **Tailwind CSS v4** — design tokens in `@theme` (`src/styles/global.css`)
- **Fonts** — Piazzolla (display) + Hanken Grotesk (body), via Google Fonts

## Structure

```
src/
  consts.ts              # site metadata, nav, contact links, tech stack
  content.config.ts      # `projects` collection schema
  content/projects/*.md  # case studies → /work/<slug>
  styles/global.css      # Tailwind import + design tokens (@theme) + components
  layouts/BaseLayout.astro
  components/             # Nav, Footer, Hero, StackStrip, ProjectRow, SectionHead
  pages/
    index.astro          # /
    work/index.astro     # /work
    work/[slug].astro    # /work/<slug>  (generated from markdown)
    about.astro          # /about
    contact.astro        # /contact  (mailto + profiles, no backend)
    404.astro
public/                  # static assets served as-is (portrait, favicon)
static/                  # original source photos (not used by the build)
docs/                    # design spec + mockup history
```

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the production build locally
```

## Adding a project

Drop a new markdown file in `src/content/projects/`. It appears automatically
on `/work` and gets its own `/work/<slug>` page. Frontmatter fields are defined
in `src/content.config.ts` (`title`, `order`, `summary`, `tags`, `metric`,
`role`, `year`, optional `liveUrl` / `repoUrl`, `draft`).

## Deploy (GitHub Pages)

A workflow is included at `.github/workflows/deploy.yml`. Push to `main`, then in
the repo settings enable **Settings → Pages → Source: GitHub Actions**.

- **User/org page** (`https://<user>.github.io`) or custom domain → leave
  `base` as `/` (default).
- **Project page** (`https://<user>.github.io/<repo>/`) → set `BASE=/<repo>` in
  the build step env (see the commented block in the workflow) and `astro.config.mjs`.

The contact page is intentionally backend-free (`mailto:` + LinkedIn/GitHub), so
nothing extra is needed for a static host.
