import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, site, socials } from "@/data/site";

export function Contact() {
  return (
    // `inverted` swaps to the opposite theme's palette, so the page ends on a contrasting block.
    <section id="contact" aria-labelledby="contact-heading" className="inverted bg-bg text-text">
      <div className="container-page py-16 md:py-24">
        <SectionHeading section="contact" />

        <div className="mt-12 md:mt-16 md:grid md:grid-cols-12 md:gap-8">
          <div className="md:col-span-10 md:col-start-3">
            <p className="max-w-2xl text-lead text-muted">{contact.intro}</p>

            <p className="mt-12 font-mono text-xs text-muted">{contact.emailLabel}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-title underline decoration-border decoration-2 underline-offset-8 transition-colors duration-200 [overflow-wrap:anywhere] hover:text-accent hover:decoration-accent"
            >
              {site.email}
            </a>

            <p className="mt-12 font-mono text-xs text-muted">{contact.elsewhereLabel}</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-card border border-border px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      <Icon size={16} aria-hidden="true" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
