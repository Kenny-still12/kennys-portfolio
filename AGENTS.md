# AGENTS.md: Personal Portfolio

This file is the standing contract for any AI agent working in this repo. Read it fully before making changes. If a request conflicts with it, say so and ask.

## Project
A personal developer portfolio. One page, scroll-based, with a dark and a light theme. It must look designed by a person, not generated from a template.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- `next-themes` for dark/light mode
- `framer-motion` for animation
- `react-icons` (the `si` set, Simple Icons) for skill and tech logos; `lucide-react` for UI icons
- `next/font` for fonts (no `<link>` tags to Google Fonts)
- Deploy target: Vercel

Do not add any other dependency without asking first and explaining why.

## Commands
- `npm run dev`: dev server
- `npm run build`: must pass before any task is called done
- `npm run lint`: must pass

## Folder structure
~~~
src/
  app/
    layout.tsx        # fonts, ThemeProvider, metadata
    page.tsx          # composes the sections in order
    globals.css       # theme tokens (CSS variables) live here
    fonts.ts          # the ONLY place fonts are defined
  components/
    layout/           # Navbar, Footer, ThemeToggle
    sections/         # Hero, About, Skills, Projects, Contact
    ui/               # SkillCard, ProjectCard, SectionHeading, Button
  data/
    site.ts           # name, role, tagline, bio, email, socials, nav links, PROFILE_IMAGE
    skills.ts         # all skills (see "Skills system")
    projects.ts       # all projects
public/
  images/
    profile-placeholder.svg   # swap for my real photo later
~~~

## Content lives in data files, never in JSX
Every piece of text, link, skill, and project is read from `src/data/`. Components only render. If I want to change my bio, add a skill, or add a project, I should only ever edit a data file.

## Sections (in order)
1. **Hero**: name, role, one-line tagline, profile image, primary buttons (View projects, Get in touch)
2. **About**: short bio, a few quick facts, profile image
3. **Skills**: animated skill cards grouped by category (see below)
4. **Projects**: cards with title, 1-2 sentence description, tech tags, live and repo links
5. **Contact / Get in touch**: email, social links, optional simple form later. The navbar has a "Contact" link that scrolls to this section.
6. Optional later: Experience/Education, Testimonials. Only add if I ask.

Navbar is sticky, shows section links, the theme toggle, and highlights the active section. Mobile gets a proper menu.

## Skills system (must be scalable)
Adding a skill must mean adding one object to `src/data/skills.ts`. Nothing else.

~~~ts
import type { IconType } from "react-icons";
import { SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Design";

export type Skill = {
  name: string;
  icon: IconType;
  category: SkillCategory;
  color?: string; // brand hex used on hover; fall back to theme accent
};

export const skills: Skill[] = [
  { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", color: "#06B6D4" },
];
~~~

Rules for the Skills section:
- Group by `category`, derived from the data. Adding a new category should need only a type change and new entries.
- Each skill renders as a `SkillCard`: logo + name, nothing else.
- Animation: cards fade and rise in with a staggered `whileInView` (once only), plus a subtle hover lift with the logo taking its brand color. Optional: a slow marquee row.
- Respect `prefers-reduced-motion`: disable movement, keep opacity fades only.

## Theming
Two themes, toggled with `next-themes` (`attribute="class"`, default to system, no flash of wrong theme, `suppressHydrationWarning` on `<html>`).

All colors are CSS variables in `globals.css`, mapped into Tailwind. Never hardcode hex values in components.

- **Light mode: cream.** Warm off-white background, near-black warm text, one accent. Inspired by aanandmadhav.com.
- **Dark mode: dark blue.** Deep navy background (not pure black), soft off-white text, one accent. Inspired by aayushsood.com.

Starting tokens (placeholders; replace with colors sampled from the reference sites):

~~~css
:root {
  --bg: #F5F1E8;
  --surface: #EDE7D9;
  --text: #1C1A17;
  --muted: #6B665C;
  --border: #D9D2C1;
  --accent: #D9531E;
}
.dark {
  --bg: #0B1426;
  --surface: #111C33;
  --text: #E6EAF2;
  --muted: #8A94A8;
  --border: #1E2A45;
  --accent: #6EA8FF;
}
~~~

## Owner
- Name: Kenneth Sonoda
- Role: [e.g. IT student focused on web development and design]
- GitHub username: Kenny-still12

## Pulling projects from GitHub
- To list my public repos, run: `curl https://api.github.com/users/[username]/repos?per_page=100`
- For each repo, read its README to understand it. Don't guess what a project does.
- Do NOT add every repo. Propose a shortlist of the best 3-6 and wait for me to approve it.
- Only write descriptions based on the README or repo description. If information is missing (live URL, screenshot, tech used), leave a `[TODO]` placeholder and tell me.
- Never invent features, metrics, or results.
- Add approved projects to `src/data/projects.ts`.

## Typography
- Font style should match Yassine's portfolio (ybz.vercel.app).
- Define fonts only in `src/app/fonts.ts` using `next/font`, exposed as CSS variables, so the font can be swapped in one place.
- Use a clear scale: very large display headings, small readable body, strong size contrast. Tight tracking on big headings.

## Design rules (avoid the generic "AI look")
- No purple/indigo gradients, no gradient text, no glassmorphism, no emoji as icons
- Prefer borders over shadows; one card style only; consistent radius
- Do not default to centered hero + three-column feature grid; use at least one asymmetric or unexpected layout choice per page
- Generous whitespace, deliberate spacing, restraint with animation (a few purposeful motions, not everything moving)
- Real, specific copy. Do not invent marketing language ("building the future", "passionate about innovation"). Use placeholder text in brackets like `[Your tagline]` that I will replace.
- Hover and focus states on every interactive element

## Placeholder content (for now)
- Profile photo: `public/images/profile-placeholder.svg`, referenced only through `PROFILE_IMAGE` in `src/data/site.ts`. I will replace it with my own photo.
- Name, bio, projects, links: bracketed placeholders in the data files.

## Quality bar
- Responsive: mobile-first, test at 360px, 768px, 1280px
- Accessible: semantic landmarks, visible focus rings, alt text, WCAG AA contrast in BOTH themes, keyboard-usable navbar and theme toggle
- SEO: title, description, Open Graph tags via Next.js `metadata`
- Performance: use `next/image`, no unused code, no layout shift
- No `console.log`, no unused imports, no `any`

## How to work with me
- I am learning and prefer to understand and write code myself. After each change, briefly explain what you did and why, and point to the file so I can read it.
- Work in small steps. Finish one phase, stop, and let me review before moving on.
- Do not rewrite files I didn't mention.
- If something is ambiguous, ask one short question rather than guessing.
- If you find a bug, explain the cause before fixing it.

## Definition of done (every task)
1. `npm run build` and `npm run lint` pass
2. Works in both themes
3. Works on mobile
4. Content comes from `src/data/`
5. You've told me what changed and why
