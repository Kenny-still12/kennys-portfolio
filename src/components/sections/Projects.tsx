import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="container-page py-16 md:py-24">
      <SectionHeading section="projects" />

      <div className="mt-12 flex flex-col gap-4 md:mt-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
