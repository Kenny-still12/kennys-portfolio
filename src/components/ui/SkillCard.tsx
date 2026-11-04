"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties } from "react";
import type { Skill } from "@/data/skills";
import { hoverTransition, revealTransition } from "@/lib/motion";

// "hidden" / "visible" are triggered by the parent list, which staggers the cards.
const skillCardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;
  const style = { "--skill-color": skill.color ?? "var(--accent)" } as CSSProperties;

  return (
    <motion.li
      variants={skillCardVariants}
      whileHover={{ y: -4 }}
      transition={hoverTransition}
      style={style}
      className="group flex items-center gap-3 rounded-card border border-border px-4 py-4 transition-colors duration-200 hover:border-muted"
    >
      <Icon
        size={22}
        aria-hidden="true"
        className="shrink-0 text-muted transition-colors duration-200 group-hover:text-(--skill-color)"
      />
      <span className="text-sm font-medium">{skill.name}</span>
    </motion.li>
  );
}
