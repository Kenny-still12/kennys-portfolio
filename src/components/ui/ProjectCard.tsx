"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { projectLinks } from "@/data/site";
import { revealTransition } from "@/components/ui/motion";

type ProjectCardProps = {
  project: Project;
  index: number;
};

type ProjectLinkProps = {
  href: string;
  label: string;
  projectTitle: string;
};

function ProjectLink({ href, label, projectTitle }: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 py-1 transition-colors duration-200 hover:text-accent"
    >
      {label}
      <span className="sr-only">: {projectTitle}</span>
      <ArrowUpRight
        size={16}
        aria-hidden="true"
        className="transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
      />
    </a>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={revealTransition}
      className="group grid gap-6 rounded-card border border-border p-6 transition-colors duration-200 focus-within:border-accent hover:border-accent md:grid-cols-12 md:gap-8 md:p-8"
    >
      <div className="flex gap-4 font-mono text-xs text-muted md:col-span-2 md:flex-col md:gap-1">
        <span>{String(index + 1).padStart(2, "0")}</span>
        {project.year && <span>{project.year}</span>}
      </div>

      <div className="md:col-span-6">
        <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
      </div>

      <div className="flex flex-col justify-between gap-6 md:col-span-4">
        <ul aria-label="Technologies" className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <li
              key={`${tech}-${techIndex}`}
              className="rounded-card border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-6 text-sm font-medium">
          {project.liveUrl && (
            <ProjectLink href={project.liveUrl} label={projectLinks.live} projectTitle={project.title} />
          )}
          {project.repoUrl && (
            <ProjectLink href={project.repoUrl} label={projectLinks.repo} projectTitle={project.title} />
          )}
        </div>
      </div>
    </motion.article>
  );
}
