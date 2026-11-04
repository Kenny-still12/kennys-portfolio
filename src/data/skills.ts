import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
import {
  SiAndroidstudio,
  SiCss,
  SiDotnet,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVscode, TbPalette } from "react-icons/tb";

export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Design";

export type Skill = {
  name: string;
  icon: IconType;
  category: SkillCategory;
  color?: string; // brand hex used on hover; falls back to the theme accent
};

// Categories appear on the page in the order they first show up in this list.
// Java, C#, VS Code and Canva logos aren't in Simple Icons, so they come from the
// Font Awesome and Tabler sets. Canva has no logo in react-icons; it uses a palette icon.
export const skills: Skill[] = [
  { name: "HTML", icon: SiHtml5, category: "Frontend", color: "#E34F26" },
  { name: "CSS", icon: SiCss, category: "Frontend", color: "#663399" },
  { name: "JavaScript", icon: SiJavascript, category: "Frontend", color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend", color: "#3178C6" },
  { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", color: "#06B6D4" },
  { name: "Vite", icon: SiVite, category: "Frontend", color: "#646CFF" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", color: "#5FA04E" },
  { name: "ASP.NET", icon: SiDotnet, category: "Backend", color: "#512BD4" },
  { name: "Java", icon: FaJava, category: "Backend", color: "#ED8B00" },
  { name: "C#", icon: TbBrandCSharp, category: "Backend", color: "#239120" },
  { name: "Git", icon: SiGit, category: "Tools", color: "#F05032" },
  { name: "GitHub", icon: SiGithub, category: "Tools" },
  { name: "VS Code", icon: TbBrandVscode, category: "Tools", color: "#007ACC" },
  { name: "Android Studio", icon: SiAndroidstudio, category: "Tools", color: "#3DDC84" },
  { name: "Figma", icon: SiFigma, category: "Design", color: "#F24E1E" },
  { name: "Canva", icon: TbPalette, category: "Design", color: "#00C4CC" },
];
