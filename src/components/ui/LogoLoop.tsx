"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type LogoLoopItem = {
  key: string;
  node: ReactNode;
};

type LogoLoopProps = {
  items: LogoLoopItem[];
  // Pixels per second.
  speed?: number;
};

// Seconds for the speed to ease to its target when hover starts or ends.
const SMOOTH_TAU = 0.25;

export function LogoLoop({ items, speed = 40 }: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLUListElement>(null);
  const hoveredRef = useRef(false);
  const [sequenceWidth, setSequenceWidth] = useState(0);
  // Enough copies of the row to cover the container, plus one spare for the wrap-around.
  const [copies, setCopies] = useState(2);

  useEffect(() => {
    const container = containerRef.current;
    const sequence = sequenceRef.current;
    if (!container || !sequence) return;

    const observer = new ResizeObserver(() => {
      const width = sequence.getBoundingClientRect().width;
      if (width === 0) return;
      setSequenceWidth(width);
      setCopies(Math.ceil(container.clientWidth / width) + 1);
    });
    observer.observe(container);
    observer.observe(sequence);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || sequenceWidth === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let lastTime: number | null = null;
    let offset = 0;
    let velocity = speed;

    const step = (time: number) => {
      const dt = lastTime === null ? 0 : (time - lastTime) / 1000;
      lastTime = time;

      const target = hoveredRef.current ? 0 : speed;
      velocity += (target - velocity) * (1 - Math.exp(-dt / SMOOTH_TAU));
      offset = (offset + velocity * dt) % sequenceWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [speed, sequenceWidth]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      onMouseEnter={() => (hoveredRef.current = true)}
      onMouseLeave={() => (hoveredRef.current = false)}
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {Array.from({ length: copies }, (_, copyIndex) => (
          <ul
            key={copyIndex}
            ref={copyIndex === 0 ? sequenceRef : undefined}
            className="flex shrink-0 items-center gap-12 pr-12"
          >
            {items.map((item) => (
              <li key={item.key} className="shrink-0">
                {item.node}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
