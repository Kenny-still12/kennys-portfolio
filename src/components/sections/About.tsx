import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="container-page py-24 md:py-32">
      <SectionHeading section="about" />
      <div className="min-h-[50vh]" />
    </section>
  );
}
