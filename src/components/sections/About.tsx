import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about, ABOUT_IMAGE, ABOUT_IMAGE_ALT } from "@/data/site";

export function About() {
  const [intro, ...paragraphs] = about.bio;

  return (
    <section id="about" aria-labelledby="about-heading" className="container-page py-16 md:py-24">
      <SectionHeading section="about" />

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6 md:col-start-3">
          <p className="text-lead">{intro}</p>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9 lg:col-span-3 lg:col-start-10">
          <Image
            src={ABOUT_IMAGE}
            alt={ABOUT_IMAGE_ALT}
            width={400}
            height={500}
            sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 50vw"
            className="aspect-[4/5] w-1/2 rounded-card border border-border object-cover md:w-full"
          />
          <dl className="mt-8 divide-y divide-border border-y border-border">
            {about.facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-3">
                <dt className="font-mono text-xs text-muted">{fact.label}</dt>
                <dd className="text-sm leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
