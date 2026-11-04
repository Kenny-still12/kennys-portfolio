"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { hoverTransition } from "@/lib/motion";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user" transition={hoverTransition}>
        {children}
      </MotionConfig>
    </ThemeProvider>
  );
}
