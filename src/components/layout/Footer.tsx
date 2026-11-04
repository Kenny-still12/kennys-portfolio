import { ArrowUp } from "lucide-react";
import { cacheLife } from "next/cache";
import { footer, site } from "@/data/site";

// With Cache Components, `new Date()` is only allowed inside a cached scope.
// The year only needs refreshing once a day.
export async function Footer() {
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
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
    </footer>
  );
}
