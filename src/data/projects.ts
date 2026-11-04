export type Project = {
  title: string;
  description: string; // 1-2 sentences
  tech: string[];
  year?: string;
  liveUrl?: string; // leave out to hide the link
  repoUrl?: string;
};

// Placeholders: replace with real projects once the GitHub shortlist is approved.
export const projects: Project[] = [
  {
    title: "[Project one]",
    description: "[One or two sentences on what it does and who it's for.]",
    tech: ["[Tech]", "[Tech]", "[Tech]"],
    year: "[Year]",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "[Project two]",
    description: "[One or two sentences on what it does and who it's for.]",
    tech: ["[Tech]", "[Tech]"],
    year: "[Year]",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "[Project three]",
    description: "[One or two sentences on what it does and who it's for.]",
    tech: ["[Tech]", "[Tech]", "[Tech]", "[Tech]"],
    year: "[Year]",
    repoUrl: "#",
  },
];
