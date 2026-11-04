import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export const site = {
  name: "Kenneth Sonoda",
  role: "[Your role, e.g. IT student focused on web development and design]",
  tagline: "[Your one-line tagline]",
  description: "[One or two sentences describing who you are and what you build]",
  email: "[your.email@example.com]",
  // Vercel sets this env var on deploy; locally the site runs on localhost.
  url: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000",
  initials: "KS",
};

// For places CSS variables can't reach: the generated favicon and share image, and the
// browser's theme-color. Keep these in sync with the tokens in globals.css.
export const themeColors = {
  light: { bg: "#f5f1ea", text: "#1a1816", muted: "#6b635a", border: "#d9d1c2", accent: "#a44224" },
  dark: { bg: "#090e1a" },
};

export const notFound = {
  code: "404",
  title: "Page not found",
  message: "This page doesn't exist, or it has moved.",
  homeLabel: "Back to the homepage",
};

export type Social = {
  label: string;
  href: string;
  icon: IconType;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Kenny-still12", icon: SiGithub },
  // LinkedIn's logo isn't in Simple Icons, so it comes from the Font Awesome set.
  { label: "LinkedIn", href: "[Your LinkedIn URL]", icon: FaLinkedin },
];

export const PROFILE_IMAGE = "/images/profile-placeholder.svg";
export const PROFILE_IMAGE_ALT = "Portrait of Kenneth Sonoda";

// Uses the profile photo until you add a second one, e.g. "/images/about.jpg".
export const ABOUT_IMAGE = PROFILE_IMAGE;
export const ABOUT_IMAGE_ALT = PROFILE_IMAGE_ALT;

export const hero = {
  primaryCta: { label: "View projects", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

export const about = {
  // The first paragraph is shown larger as an intro; the rest render as body text.
  bio: [
    "[Intro: one or two sentences on who you are and what you're working towards.]",
    "[A paragraph about what you study or build, and the kind of work you enjoy.]",
    "[Optional: something outside of code that says something about you.]",
  ],
  facts: [
    { label: "Based in", value: "[City, Country]" },
    { label: "Studying", value: "[Degree, University]" },
    { label: "Focus", value: "[e.g. Web development and design]" },
    { label: "Currently", value: "[What you're learning or working on]" },
  ],
};

// Order here is the order on the page. `label` is the navbar text, `title` the section heading.
export const sections = [
  { id: "about", label: "About", title: "About" },
  { id: "skills", label: "Skills", title: "Skills" },
  { id: "projects", label: "Projects", title: "Projects" },
  { id: "contact", label: "Contact", title: "Get in touch" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const footer = {
  backToTop: "Back to top",
};

export const projectLinks = {
  live: "Live site",
  repo: "Source",
};

export const contact = {
  intro: "[A sentence or two on what you'd like to hear about, e.g. internships, collaborations, or just a hello.]",
  emailLabel: "Email",
  elsewhereLabel: "Elsewhere",
};
