// Moves keyboard focus to the first heading inside an in-page anchor target
// without scrolling. Returns true when a focusable heading was found.
export function focusSectionHeading(href: string): boolean {
  if (typeof document === "undefined") return false;
  const target = document.querySelector(href);
  const heading =
    target?.querySelector("h1, h2, h3") ??
    (target instanceof HTMLElement ? target : null);
  if (heading instanceof HTMLElement) {
    heading.focus({ preventScroll: true });
    return true;
  }
  return false;
}
