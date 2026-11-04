import { ArrowUp } from "lucide-react";
import { cacheLife } from "next/cache";
import { footer, sections, site, socials } from "@/data/site";

// With Cache Components, `new Date()` is only allowed inside a cached scope.
// The year only needs refreshing once a day.
export async function Footer() {
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();

  return (
    // Continues the inverted Contact block above it.
    <footer className="inverted bg-bg text-text">
      <div className="container-page border-t border-border py-10 text-sm">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex size-10 items-center justify-center rounded-card border border-border transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-accent"
          >
            {footer.backToTop}
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
