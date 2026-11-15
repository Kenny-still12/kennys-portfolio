import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export const site = {
  name: "Kenneth Sonoda",
  role: "Aspiring Software Engineer & Web Developer",
  tagline: "I build web apps that solve real problems for international students in Australia",
  description: "IT student in Sydney building web apps with React and Tailwind CSS. Open to graduate / junior web roles from 2026 - 2027.",
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
  dark: { bg: "#090e1a", surface: "#111a2e", accent: "#5b8ed9" },
};

// Hex scales for the contribution calendar (SVG fills can't use CSS variables).
// Each array is [empty day, peak intensity]; the library interpolates the middle levels.
export const activityCalendarTheme = {
  light: [themeColors.light.border, themeColors.light.accent],
  dark: [themeColors.dark.surface, themeColors.dark.accent],
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
    "I am an IT student at King's Own Institute in Sydney, studying BS in Information Technology with a focus on web development and software engineering.",
    "I built HourMate AU and Gaku Registre to help international students in Australia manage their time and schedule their studies effectively.",
    "I'm open to graduate / junior web roles from 2026 - 2027",
  ],
  facts: [
    { label: "Based in", value: "Sydney, Australia" },
    { label: "Studying", value: "BS in Information Technology, King's Own Institute" },
    { label: "Focus", value: "Web development and software engineering" },
    { label: "Currently", value: "Building tools for international students in Australia" },
  ],
};

// Order here is the order on the page. `label` is the navbar text, `title` the section heading.
export const sections = [
  { id: "about", label: "About", title: "About" },
  { id: "skills", label: "Skills", title: "Skills" },
  { id: "activity", label: "Shipping log", title: "Shipping log" },
  { id: "projects", label: "Projects", title: "Projects" },
  { id: "contact", label: "Contact", title: "Get in touch" },
] as const;

export const activity = {
  username: "Kenny-still12",
  intro: "A year of public commits, mapped the way GitHub does — some weeks dense, some quiet. Hover a day to peek.",
  totalCaption: "contributions in the last year",
  // Placeholders: {{count}} and {{date}} (YYYY-MM-DD).
  tooltipLabel: "{{count}} on {{date}}",
  errorMessage: "Couldn't load GitHub activity right now.",
  profileLabel: "View on GitHub",
  profileHref: "https://github.com/Kenny-still12",
};

export type SectionId = (typeof sections)[number]["id"];

export const footer = {
  backToTop: "Back to top",
};

export const projectLinks = {
  live: "Live site",
  repo: "Source",
};

export const contact = {
  intro: "I'm looking for graduate / junior web roles from 2026 - 2027, feel free to contact me if you have any questions or opportunities.",
  emailLabel: "Email",
  elsewhereLabel: "Elsewhere",
};
