# Sasha's Portfolio

Personal portfolio of **Navisa Ersa Sabina**: IT intern, UI/UX and business analysis.

🔗 **Live:** https://navisasabina.github.io/

Built with [Astro](https://astro.build), plain CSS and vanilla JavaScript. Deployed automatically to GitHub Pages with GitHub Actions.

## Run it locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:4321/

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with live reload |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the built site |

## Project structure

```
src/
├── components/
│   ├── home/          Sections of the home page (Hero, About, Work, Certificates, Contact, ...)
│   ├── project/       Pieces shared by project pages (ProjectNav, NextProject)
│   └── ThemeDial.astro
├── data/              Content as data: projects, certificates, logbook, skills, contact info
├── layouts/           BaseLayout (head, theme, scripts) and ProjectLayout
├── pages/             One file per page: index, abita, ab-portal, pharmatrack, forecasting, planet-zeta
├── scripts/           site.js (dark mode + image zoom), home.js (chat bot + certificate filter)
└── styles/            home.css and one stylesheet per project page
public/assets/         Images: profile photo, screenshots, certificates
.github/workflows/     deploy.yml: builds and publishes the site on every push to main
```

## Common edits

- **Contact info, CV link** → `src/data/site.ts`
- **Add a certificate** → add one line to `src/data/certificates.ts` and put the image in `public/assets/`
- **Add or edit a project card** → `src/data/projects.ts`
- **Experience timeline** → `src/data/logbook.ts`
- **Skills and toolbox** → `src/data/skills.ts`
- **Chat bot replies** → `src/scripts/home.js`
- **Project detail pages** → `src/pages/<project>.astro`
