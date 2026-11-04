import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="container-page py-24 md:py-32">
      <h1 id="hero-heading" className="text-display">
        {site.name}
      </h1>
      <div className="min-h-[40vh]" />
    </section>
  );
}
