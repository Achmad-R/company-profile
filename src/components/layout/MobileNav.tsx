"use client";

import { useEffect, useRef } from "react";
import { brand, headerContent } from "@/content/site-content";
import Container from "@/components/ui/Container";

type MobileNavProps = {
  open: boolean;
  onDismiss: () => void;
  onNavigate: (href: string) => void;
  activeHref?: string | null;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileNav({
  open,
  onDismiss,
  onNavigate,
  activeHref = null,
}: MobileNavProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onDismissRef = useRef(onDismiss);

  useEffect(() => {
    onDismissRef.current = onDismiss;
  }, [onDismiss]);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const background = document.querySelectorAll("header, main, footer");
    background.forEach((element) => element.setAttribute("inert", ""));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onDismissRef.current();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const items = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((element) => element.getAttribute("tabindex") !== "-1");
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      background.forEach((element) => element.removeAttribute("inert"));
    };
  }, [open ]);

  if (!open) return null;

  return (
    <div
      ref={dialogRef}
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="signal-menu fixed inset-0 z-50 flex flex-col bg-background md:hidden"
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <span
          aria-hidden="true"
          className="font-mono text-sm font-semibold tracking-[0.18em] text-primary-text"
        >
          {brand.wordmark}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onDismiss}
          aria-label={headerContent.closeLabel}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control border border-control-border text-primary-text transition duration-(--duration-micro) ease-signal hover:border-signal-cyan hover:text-signal-cyan active:scale-[0.98]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M3 3l10 10M13 3L3 13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </Container>
      <Container className="flex flex-1 flex-col justify-center pb-10">
        <ul className="flex flex-col">
          {headerContent.nav.map((link, index) => (
            <li key={link.href} className="border-b border-border last:border-b-0">
              <a
                href={link.href}
                onClick={() => onNavigate(link.href)}
                aria-current={activeHref === link.href ? "true" : undefined}
                className="group flex min-h-14 items-center gap-4 py-2"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-label text-signal-cyan"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-semibold tracking-tight text-primary-text transition-colors duration-(--duration-micro) ease-signal group-hover:text-signal-cyan">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={headerContent.cta.href}
          onClick={() => onNavigate(headerContent.cta.href)}
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-control bg-signal-cyan px-6 py-3 text-control font-semibold text-background transition duration-(--duration-micro) ease-signal hover:bg-primary-text active:scale-[0.98]"
        >
          {headerContent.cta.label}
        </a>
      </Container>
    </div>
  );
}
