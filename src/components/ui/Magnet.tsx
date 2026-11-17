"use client";

import { useEffect, useRef, type ReactNode } from "react";

type MagnetProps = {
  children: ReactNode;
  // How far past the element's edges (in px) the pull starts.
  padding?: number;
  // Fraction of the cursor's distance from the center that the element follows.
  strength?: number;
};

export function Magnet({ children, padding = 40, strength = 0.2 }: MagnetProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Measures the outer box, which never moves, so the pull doesn't feed back on itself.
    const onPointerMove = (event: PointerEvent) => {
      const rect = outer.getBoundingClientRect();
      const inRange =
        event.clientX > rect.left - padding &&
        event.clientX < rect.right + padding &&
        event.clientY > rect.top - padding &&
        event.clientY < rect.bottom + padding;

      if (!inRange) {
        inner.style.transform = "";
        return;
      }
      const x = (event.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (event.clientY - (rect.top + rect.height / 2)) * strength;
      inner.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      inner.style.transform = "";
    };
  }, [padding, strength]);

  return (
    <div ref={outerRef} className="inline-block">
      <div ref={innerRef} className="transition-transform duration-300 ease-reveal">
        {children}
      </div>
    </div>
  );
}
