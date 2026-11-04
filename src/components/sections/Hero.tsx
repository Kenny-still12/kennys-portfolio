"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero, PROFILE_IMAGE, PROFILE_IMAGE_ALT, site } from "@/data/site";
import { EASE_OUT } from "@/lib/motion";

const nameLines = site.name.split(" ");
const LINE_STAGGER = 0.12;
// Supporting content fades in once the last line of the name has mostly landed.
const AFTER_NAME = 0.3 + nameLines.length * LINE_STAGGER;

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay, ease: EASE_OUT },
});

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="container-page pb-24 pt-16 md:pb-32 md:pt-24"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8">
          <motion.p {...fadeIn(0)} className="font-mono text-sm text-muted">
            {site.role}
          </motion.p>

          <h1 id="hero-heading" className="mt-6 text-display">
            {nameLines.map((line, index) => (
              // The mask: overflow-hidden clips each line while it rises into place.
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + index * LINE_STAGGER, ease: EASE_OUT }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div {...fadeIn(AFTER_NAME)} className="mt-10 max-w-xl">
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
          </motion.div>
        </div>

        <motion.div
          {...fadeIn(AFTER_NAME + 0.1)}
          className="ml-auto w-2/3 sm:w-1/2 md:col-span-4 md:mt-40 md:w-full"
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
        </motion.div>
      </div>
    </section>
  );
}
