# nomatic.dev

[![Deploy to GitHub Pages](https://github.com/nelsonni/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/nelsonni/website/actions/workflows/deploy.yml)
[![Link Checker](https://github.com/nelsonni/website/actions/workflows/link-check.yml/badge.svg)](https://github.com/nelsonni/website/actions/workflows/link-check.yml)

Personal and professional website for Nicholas Nelson, hosted at [https://nomatic.dev/](https://nomatic.dev/).

## Tech Stack

- **[React 19](https://react.dev/)** — component-based UI
- **[TypeScript 7](https://www.typescriptlang.org/)** — strict static typing throughout
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling; design tokens live in the `@theme` block in `src/index.css`
- **[Vite 8](https://vite.dev/)** — build tool and dev server (requires Node.js ≥ 22.12)
- **[React Router](https://reactrouter.com/)** (HashRouter) — client-side routing for companion sub-pages
- **[react-icons](https://react-icons.github.io/react-icons/)** — icon sets (Font Awesome 6, Simple Icons, Material Design)

## Project Structure

```
src/
├── data/
│   ├── profile.ts              # All main page content (single source of truth)
│   └── companions/
│       ├── emse19.ts           # EMSE 2019 companion page content
│       ├── icsme17.ts          # ICSME 2017 companion page content
│       └── synectic.ts        # Synectic IDE release data
├── types/index.ts              # TypeScript interfaces for all data shapes
├── lib/utils.ts                # cn() helper (clsx + tailwind-merge)
├── components/
│   ├── layout/                 # Sidebar, SectionHeading, Badge, CompanionLayout
│   └── sections/               # About, Experience, Publications, Teaching, Service
├── pages/                      # CompanionPage, Emse19Page, Icsme17Page, SynecticPage
└── App.tsx                     # Router and homepage layout

public/
├── assets/                     # Avatar images
├── docs/                       # CV, résumé, and publication PDFs
├── presentations/              # Conference slide decks
├── favicon.svg, favicon.ico,   # Site icons
│   apple-touch-icon.png
└── emse19.html, icsme17.html,  # Redirects from legacy URLs (cited in papers)
    synectic.html               #   to the /#/ routes
```

## Pages

| Route | Description |
|---|---|
| `/#/` | Main profile |
| `/#/emse19` | EMSE 2019 companion — *The Life-Cycle of Merge Conflicts* |
| `/#/icsme17` | ICSME 2017 companion — *Software Practitioner Perspectives on Merge Conflicts* |
| `/#/synectic` | Synectic IDE releases |

## Development

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Updating Content

All main page content lives in `src/data/profile.ts`. Adding a publication, course, or service entry is a matter of appending an object to the relevant array — the components render from the typed data automatically.

Companion page content lives in `src/data/companions/`. New Synectic releases are added by hand to `src/data/companions/synectic.ts`.

Anything in `public/` is deployed as-is at the site root, so files linked as `https://nomatic.dev/...` must live there.

## Link Checking

`.github/workflows/link-check.yml` runs [lychee](https://lychee.cli.rs/) on every push, pull request, and weekly. Because the site is a single-page app, it checks the URLs in the source files rather than the rendered page; results appear in the workflow's job summary. To run it locally:

```bash
lychee './src/**/*.ts' './src/**/*.tsx' index.html
```

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the project and deploys `dist/` to GitHub Pages. No manual steps are required.
