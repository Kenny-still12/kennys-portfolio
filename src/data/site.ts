import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export const site = {
  name: "Kenneth Sonoda",
  role: "IT Student, Web Developer, Software Engineer to be",
  tagline: "Providing solutions to problems through technology and perseverance",
  description: "I am an IT student at King's Own Institute, taking a BS in Information Technology, I am currently learning about web development and software engineering, and I am looking for a job opportunity in 2026 - 2027.",
  email: "kensonoda1124@gmail.com",
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kenneth-sonoda-010187365/", icon: FaLinkedin },
];

export const PROFILE_IMAGE = "/images/Profile_Professional.jpg";
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
    "I am an IT student at King's Own Institute, taking a BS in Information Technology, I am currently learning about web development and software engineering, and I am currently working on a project that tailors to the problem of international students.",
    "I am a quick learner and I am always looking for new challenges and opportunities to grow, I am also a team player and I am always looking for ways to help my team succeed.",
    "I am always willing to do a job that nobody else wants to do, and I am always looking for ways to improve myself and my skills.",
  ],
  facts: [
    { label: "Based in", value: "Sydney, Australia" },
    { label: "Studying", value: "BS in Information Technology, King's Own Institute" },
    { label: "Focus", value: "Web development and software engineering" },
    { label: "Currently", value: "Working on a project that tailors to the problem of international students" },
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
  intro: "I am willing to work on any project that is related to web development and software engineering, and I am always looking for new challenges and opportunities to grow, feel free to contact me if you have any questions or opportunities.",
  emailLabel: "Email",
  elsewhereLabel: "Elsewhere",
};
