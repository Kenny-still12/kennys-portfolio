import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DecryptedText } from "@/components/ui/DecryptedText";
import { Magnet } from "@/components/ui/Magnet";
import { VariableProximity } from "@/components/ui/VariableProximity";
import { hero, PROFILE_IMAGE, PROFILE_IMAGE_ALT, site } from "@/data/site";

const nameLines = site.name.split(" ");
const LINE_STAGGER_MS = 120;
// Supporting content fades in once the last line of the name has mostly landed.
const AFTER_NAME_MS = 300 + nameLines.length * LINE_STAGGER_MS;
const GRID_COLUMNS = 12;

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

// Faint lines on the same 12-column grid the content sits on, fading out toward the bottom.
function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent)] md:block"
    >
      <div className="container-page grid h-full grid-cols-12 gap-8">
        {Array.from({ length: GRID_COLUMNS }, (_, index) => (
          <div key={index} className="relative">
            <span
              className="absolute inset-y-0 left-0 w-px origin-top animate-draw-down bg-border motion-reduce:animate-none"
              style={delay(index * 40)}
            />
            {index === GRID_COLUMNS - 1 && (
              <span
                className="absolute inset-y-0 right-0 w-px origin-top animate-draw-down bg-border motion-reduce:animate-none"
                style={delay(GRID_COLUMNS * 40)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Outlines behind the photo: a large circle cropped by the screen edge, an offset frame, and one accent mark.
function PhotoShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <svg
        viewBox="0 0 100 100"
        className="absolute -right-[60%] -top-[20%] w-[150%] overflow-visible text-muted/40"
      >
        <circle
          cx="50"
          cy="50"
          r="49.9"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          pathLength="1"
          strokeDasharray="1"
          className="animate-trace motion-reduce:animate-none"
          style={delay(200)}
        />
      </svg>
      <div
        className="absolute inset-0 translate-x-4 translate-y-4 animate-wipe rounded-card border border-muted/50 motion-reduce:animate-none md:translate-x-6 md:translate-y-6"
        style={delay(450)}
      />
      <div
        className="absolute -bottom-3 -left-3 size-6 animate-pop bg-accent motion-reduce:animate-none md:-bottom-4 md:-left-4 md:size-8"
        style={delay(900)}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      <GridLines />

      <div className="container-page flex flex-col justify-center py-16 md:min-h-[calc(100svh-4rem)] md:py-20">
        <p className="mb-6 animate-fade font-mono text-sm text-muted">
          <DecryptedText text={site.role} />
        </p>

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
                    <VariableProximity label={line} />
                  </span>
                </span>
              ))}
            </h1>

            <div className="mt-10 max-w-xl animate-fade" style={delay(AFTER_NAME_MS)}>
              <p className="text-lead">{site.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Magnet>
                  <Button href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                    <ArrowDown size={16} aria-hidden="true" />
                  </Button>
                </Magnet>
                <Magnet>
                  <Button href={hero.secondaryCta.href} variant="secondary">
                    {hero.secondaryCta.label}
                  </Button>
                </Magnet>
              </div>
            </div>
          </div>

          <div className="relative isolate ml-auto w-2/3 self-start sm:w-1/2 md:col-span-4 md:w-full">
            <PhotoShapes />
            <Image
              src={PROFILE_IMAGE}
              alt={PROFILE_IMAGE_ALT}
              width={400}
              height={500}
              preload
              quality={90}
              sizes="(min-width: 768px) 30vw, 66vw"
              className="aspect-[4/5] w-full animate-fade rounded-card border border-border object-cover object-[80%_center]"
              style={delay(AFTER_NAME_MS + 100)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
