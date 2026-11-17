"use client";

import { useEffect, useRef } from "react";

// Font axes this effect animates. Only works with a variable font that has both, like Archivo.
type Axes = { wght: number; wdth: number };

type VariableProximityProps = {
  label: string;
  // Axis values far from the cursor; should match the heading's normal look.
  from?: Axes;
  // Axis values when the cursor is right on a letter.
  to?: Axes;
  // Distance in px at which a letter starts reacting.
  radius?: number;
};

const REST: Axes = { wght: 800, wdth: 100 };
const NEAR: Axes = { wght: 300, wdth: 75 };

const toSettings = ({ wght, wdth }: Axes) => `"wght" ${wght}, "wdth" ${wdth}`;

export function VariableProximity({ label, from = REST, to = NEAR, radius = 220 }: VariableProximityProps) {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const letters = lettersRef.current;
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!pointer) return;
      const { x, y } = pointer;
      // Read every position before writing any style, so the browser lays out once per frame.
      const rects = letters.map((letter) => letter?.getBoundingClientRect());
      letters.forEach((letter, index) => {
        const rect = rects[index];
        if (!letter || !rect) return;
        const distance = Math.hypot(x - (rect.left + rect.width / 2), y - (rect.top + rect.height / 2));
        const t = Math.max(0, 1 - distance / radius);
        letter.style.fontVariationSettings = toSettings({
          wght: from.wght + (to.wght - from.wght) * t,
          wdth: from.wdth + (to.wdth - from.wdth) * t,
        });
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", schedule);
      cancelAnimationFrame(frame);
      letters.forEach((letter) => letter?.style.removeProperty("font-variation-settings"));
    };
  }, [from, to, radius]);

  // Plain inline spans (no inline-block) so screen readers still read the label as one word.
  return [...label].map((char, index) => (
    <span
      key={index}
      ref={(element) => {
        lettersRef.current[index] = element;
      }}
      className="transition-[font-variation-settings] duration-300 ease-reveal"
    >
      {char}
    </span>
  ));
}
