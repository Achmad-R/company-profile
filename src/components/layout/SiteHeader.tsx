"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BrandMark from "@/components/layout/BrandMark";
import DesktopNav from "@/components/layout/DesktopNav";
import MobileNav from "@/components/layout/MobileNav";
import Container from "@/components/ui/Container";
import { headerContent } from "@/content/site-content";
import { focusSectionHeading } from "@/lib/anchor-focus";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const menuOpenRef = useRef(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const desktopCtaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const focusMenuButton = useCallback(() => {
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  const handleDismiss = useCallback(() => {
    menuOpenRef.current = false;
    setMenuOpen(false);
    focusMenuButton();
  }, [focusMenuButton]);

  const handleNavigate = useCallback(
    (href: string) => {
      menuOpenRef.current = false;
      setMenuOpen(false);
      // Move focus to the target heading when the section exists;
      // otherwise keep the opener focused so keyboard users stay oriented.
      requestAnimationFrame(() => {
        if (!focusSectionHeading(href)) {
          menuButtonRef.current?.focus();
        }
      });
    },
    [],
  );

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("main section[id], main section[data-nav-target]"),
    );
    if (sections.length === 0) return;
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(
              entry.target.getAttribute("data-nav-target") ?? `#${entry.target.id}`,
            );
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => spy.observe(section));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches && menuOpenRef.current) {
        menuOpenRef.current = false;
        setMenuOpen(false);
        requestAnimationFrame(() => desktopCtaRef.current?.focus());
      }
    };
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  const openMenu = useCallback(() => {
    menuOpenRef.current = true;
    setMenuOpen(true);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-colors duration-(--duration-component) ease-signal ${
          scrolled
            ? "border-border bg-surface/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
            <BrandMark />
            <DesktopNav
              className="hidden md:block"
              onNavigate={handleNavigate}
              activeHref={activeHref}
            />
            <a
              ref={desktopCtaRef}
              href={headerContent.cta.href}
              onClick={() => handleNavigate(headerContent.cta.href)}
              className="hidden min-h-11 items-center justify-center rounded-control bg-signal-cyan px-6 py-3 text-control font-semibold text-background transition duration-(--duration-micro) ease-signal hover:bg-primary-text active:scale-[0.98] md:inline-flex"
            >
              {headerContent.cta.label}
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={headerContent.menuLabel}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control border border-control-border text-primary-text transition duration-(--duration-micro) ease-signal hover:border-signal-cyan hover:text-signal-cyan active:scale-[0.98] md:hidden"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M2.5 5.5h13M2.5 9h13M2.5 12.5h13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>
      <MobileNav
        open={menuOpen}
        onDismiss={handleDismiss}
        onNavigate={handleNavigate}
        activeHref={activeHref}
      />
    </>
  );
}
