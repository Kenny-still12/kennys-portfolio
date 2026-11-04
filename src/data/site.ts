export const site = {
  name: "Kenneth Sonoda",
  role: "[Your role, e.g. IT student focused on web development and design]",
  tagline: "[Your one-line tagline]",
  description: "[One or two sentences describing who you are and what you build]",
};

export const PROFILE_IMAGE = "/images/profile-placeholder.svg";

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
