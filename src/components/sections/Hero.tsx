import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero, PROFILE_IMAGE, PROFILE_IMAGE_ALT, site } from "@/data/site";

const nameLines = site.name.split(" ");
const LINE_STAGGER_MS = 120;
// Supporting content fades in once the last line of the name has mostly landed.
const AFTER_NAME_MS = 300 + nameLines.length * LINE_STAGGER_MS;

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="container-page flex flex-col justify-center py-16 md:min-h-[calc(100svh-4rem)] md:py-20"
    >
      <p className="mb-6 animate-fade font-mono text-sm text-muted">{site.role}</p>

      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8">
          <h1 id="hero-heading" className="text-display">
            {nameLines.map((line, index) => (
              // The mask: overflow-hidden clips each line while it rises into place.
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <span
                  className="block animate-rise motion-reduce:animate-none"
                  style={delay(100 + index * LINE_STAGGER_MS)}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className="mt-10 max-w-xl animate-fade" style={delay(AFTER_NAME_MS)}>
            <p className="text-lead">{site.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowDown size={16} aria-hidden="true" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>

        <div
          className="ml-auto w-2/3 animate-fade sm:w-1/2 md:col-span-4 md:w-full"
          style={delay(AFTER_NAME_MS + 100)}
        >
          <Image
            src={PROFILE_IMAGE}
            alt={PROFILE_IMAGE_ALT}
            width={400}
            height={500}
            preload
            sizes="(min-width: 768px) 30vw, 66vw"
            className="aspect-[4/5] w-full rounded-card border border-border object-cover"
          />
        </div>
      </div>
    </section>
  );
}
