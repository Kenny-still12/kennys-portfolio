export const site = {
  name: "Kenneth Sonoda",
  role: "[Your role, e.g. IT student focused on web development and design]",
  tagline: "[Your one-line tagline]",
  description: "[One or two sentences describing who you are and what you build]",
};

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
