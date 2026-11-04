import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { site } from "@/data/site";

// Temporary Phase 1 test page; replaced by the real sections in Phase 2.
const swatches = [
  { token: "--bg", className: "bg-bg" },
  { token: "--surface", className: "bg-surface" },
  { token: "--text", className: "bg-text" },
  { token: "--muted", className: "bg-muted" },
  { token: "--border", className: "bg-border" },
  { token: "--accent", className: "bg-accent" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 md:px-10">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          01 / Theme test
        </p>
        <ThemeToggle />
      </div>

      <h1 className="mt-20 text-display">{site.name}</h1>
      <p className="mt-6 max-w-2xl text-lead text-muted">{site.role}</p>

      <h2 className="mt-24 text-heading">Section heading</h2>
      <p className="mt-6 max-w-prose leading-relaxed">
        Body text in Archivo at regular weight. This is how paragraphs in the
        About section and project descriptions will read. A link looks{" "}
        <a href="#" className="text-accent underline underline-offset-4">
          like this
        </a>
        , and muted text <span className="text-muted">looks like this</span>.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
        >
          Primary button
        </a>
        <a
          href="#"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Secondary button
        </a>
        <span className="rounded-card border border-border px-3 py-1 font-mono text-xs text-muted">
          tag / IBM Plex Mono
        </span>
      </div>

      <ul className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {swatches.map((swatch) => (
          <li key={swatch.token} className="rounded-card border border-border bg-surface p-3">
            <div className={`h-16 rounded-card border border-border ${swatch.className}`} />
            <p className="mt-3 font-mono text-xs text-muted">{swatch.token}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
