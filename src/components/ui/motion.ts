import type { Transition } from "framer-motion";

// Keep in sync with --ease-reveal in globals.css, used by the CSS-only hero intro.
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const hoverTransition: Transition = { duration: 0.25, ease: EASE_OUT };

export const revealTransition: Transition = { duration: 0.6, ease: EASE_OUT };
