"use client";

import { motion } from "framer-motion";
import { sections, type SectionId } from "@/data/site";
import { revealTransition } from "@/lib/motion";

type SectionHeadingProps = {
  section: SectionId;
};

export function SectionHeading({ section }: SectionHeadingProps) {
  const index = sections.findIndex((item) => item.id === section);
  const { title } = sections[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={revealTransition}
      className="grid gap-4 border-t border-border pt-6 md:grid-cols-12 md:gap-8"
    >
      <p className="font-mono text-xs text-muted md:col-span-2 md:pt-3">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h2 id={`${section}-heading`} className="text-heading md:col-span-10">
        {title}
      </h2>
    </motion.div>
  );
}
