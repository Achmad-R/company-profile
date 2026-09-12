"use client";

import Container from "@/components/ui/Container";
import { brand, conceptConfig, footerContent } from "@/content/site-content";
import { focusSectionHeading } from "@/lib/anchor-focus";

export default function SiteFooter() {
  const handleNavigate = (href: string) => {
    requestAnimationFrame(() => {
      focusSectionHeading(href);
    });
  };

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="font-mono text-sm font-semibold tracking-[0.18em] text-primary-text">
              {brand.wordmark}
            </p>
            <p className="mt-3 max-w-copy text-sm leading-relaxed text-secondary-text">
              {brand.footerPositioning}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-1 md:items-end">
              {footerContent.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavigate(link.href)}
                    className="inline-flex min-h-11 items-center text-sm text-secondary-text transition-colors duration-(--duration-micro) ease-signal hover:text-primary-text active:text-primary-text md:px-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 max-w-copy border-t border-border pt-6 text-sm leading-relaxed text-secondary-text">
          {conceptConfig.footerDisclosure}
        </p>
        <p className="mt-3 font-mono text-xs text-secondary-text">
          {brand.copyright}
        </p>
      </Container>
    </footer>
  );
}
