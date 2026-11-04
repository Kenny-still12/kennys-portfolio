import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Design";

export type Skill = {
  name: string;
  icon: IconType;
  category: SkillCategory;
  color?: string; // brand hex used on hover; falls back to the theme accent
};

// Categories appear on the page in the order they first show up in this list.
// Placeholder selection: replace with the skills you actually use.
export const skills: Skill[] = [
  { name: "HTML", icon: SiHtml5, category: "Frontend", color: "#E34F26" },
  { name: "CSS", icon: SiCss, category: "Frontend", color: "#663399" },
  { name: "JavaScript", icon: SiJavascript, category: "Frontend", color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend", color: "#3178C6" },
  { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", color: "#5FA04E" },
  { name: "Express", icon: SiExpress, category: "Backend" },
  { name: "Git", icon: SiGit, category: "Tools", color: "#F05032" },
  { name: "GitHub", icon: SiGithub, category: "Tools" },
  { name: "Figma", icon: SiFigma, category: "Design", color: "#F24E1E" },
];
