"use client";

import { headerContent } from "@/content/site-content";

type DesktopNavProps = {
  className?: string;
  onNavigate: (href: string) => void;
  activeHref?: string | null;
};

export default function DesktopNav({
  className = "",
  onNavigate,
  activeHref = null,
}: DesktopNavProps) {
  return (
    <nav aria-label="Primary" className={className}>
      <ul className="flex items-center gap-1">
        {headerContent.nav.map((link) => {
          const active = activeHref === link.href;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => onNavigate(link.href)}
                aria-current={active ? "true" : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm transition-colors duration-(--duration-micro) ease-signal hover:text-primary-text active:text-primary-text ${
                  active ? "text-primary-text" : "text-secondary-text"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
