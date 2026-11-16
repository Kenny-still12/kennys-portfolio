# Kenneth Sonoda — Portfolio

Personal developer portfolio for [Kenneth Sonoda](https://github.com/Kenny-still12): a one-page, scroll-based site with light (cream) and dark (navy) themes.

Built for graduate / junior web roles (2026–2027).

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes) — dark / light mode
- [framer-motion](https://www.framer.com/motion/) — motion
- [react-icons](https://react-icons.github.io/react-icons/) + [lucide-react](https://lucide.dev/) — icons
- [react-github-calendar](https://grubersjoe.github.io/react-github-calendar/) — contribution graph

Deploy target: [Vercel](https://vercel.com/).

## Sections

1. **Hero** — name, role, tagline, CTAs  
2. **About** — bio and quick facts  
3. **Skills** — category-grouped skill cards  
4. **Shipping log** — GitHub contribution calendar  
5. **Projects** — selected work with live / source links  
6. **Contact** — email and socials  

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
npm start       # serve the production build
```

## Editing content

Copy, skills, and projects live in data files — edit those instead of the components:

| File | What it controls |
| --- | --- |
| [`src/data/site.ts`](src/data/site.ts) | Name, bio, nav, contact, activity copy |
| [`src/data/skills.ts`](src/data/skills.ts) | Skills (add one object per skill) |
| [`src/data/projects.ts`](src/data/projects.ts) | Project cards |

Profile image: `public/images/` (path set via `PROFILE_IMAGE` in `site.ts`).

## Project layout

```
src/
  app/           # layout, page, fonts, global styles
  components/
    layout/      # Navbar, Footer, ThemeToggle
    sections/    # Hero, About, Skills, Activity, Projects, Contact
    ui/          # shared UI pieces
  data/          # all site content
public/
  images/
```

## License

Personal portfolio — all rights reserved unless noted otherwise.
