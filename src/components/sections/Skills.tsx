"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/ui/SkillCard";
import { skills, type Skill, type SkillCategory } from "@/data/skills";

// Groups skills by category, keeping categories in the order they first appear.
const groups = skills.reduce((map, skill) => {
  map.set(skill.category, [...(map.get(skill.category) ?? []), skill]);
  return map;
}, new Map<SkillCategory, Skill[]>());

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="container-page py-24 md:py-32">
      <SectionHeading section="skills" />

      <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16">
        {[...groups].map(([category, items]) => (
          <div key={category} className="grid gap-4 md:grid-cols-12 md:gap-8">
            <div className="flex items-baseline gap-2 font-mono text-xs text-muted md:col-span-2 md:flex-col md:gap-1 md:pt-4">
              <h3>{category}</h3>
              <span aria-hidden="true">{String(items.length).padStart(2, "0")}</span>
            </div>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-10 lg:grid-cols-4"
            >
              {items.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </section>
  );
}
