import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";

const variants = {
  primary: "bg-accent text-accent-contrast hover:bg-text hover:text-bg",
  secondary: "border border-border hover:border-accent hover:text-accent",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}
