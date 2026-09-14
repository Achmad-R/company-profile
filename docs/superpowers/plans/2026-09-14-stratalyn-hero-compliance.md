# Stratalyn Hero Compliance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> superpowers:subagent-driven-development (recommended) or
> superpowers:executing-plans to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep both hero CTAs inside common initial desktop viewports while
preserving exact content and the Engineering Signal identity.

**Architecture:** Keep `HeroSection` server-rendered and retain the existing
CSS-first animation system. Adjust the centralized display token and hero grid,
then move the trust cue from the copy stack into a full-width handoff row. No
new component, client boundary, or dependency is needed.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS
v4, Playwright Chromium.

**Spec:**
`docs/superpowers/specs/2026-09-14-stratalyn-visual-refinement-design.md`

## Global Constraints

- Preserve every exact Hero string from `src/content/site-content.ts`.
- Preserve the concept bar, footer disclosure, badges, `.example` addresses,
  canonical URL, and `noindex, nofollow, noarchive`.
- Keep Hero and its visual server-rendered; add no dependency or client state.
- Animate only opacity and transform and preserve reduced-motion behavior.
- Do not commit, push, or deploy without a separate explicit request.

---

### Task 1: Add the hero-fold regression

**Files:**
- Modify: `tests/homepage.spec.ts:183-232`

**Interfaces:**
- Consumes: `heroContent.primaryCta` and `heroContent.secondaryCta`.
- Produces: a browser regression covering the two Hero CTA bounding boxes.

- [ ] **Step 1: Add a failing Playwright test**

Add this test after `header and hero expose the navigation and CTA contracts`:

```ts
test("hero CTAs fit inside common initial viewports", async ({ page }) => {
  const viewports = [
    { width: 320, height: 800 },
    { width: 375, height: 812 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const main = page.getByRole("main");
    const ctas = [
      main.getByRole("link", {
        name: heroContent.primaryCta.label,
        exact: true,
      }),
      main.getByRole("link", {
        name: heroContent.secondaryCta.label,
        exact: true,
      }),
    ];

    for (const cta of ctas) {
      const box = await cta.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.y + box!.height).toBeLessThanOrEqual(viewport.height);
    }
  }
});
```

- [ ] **Step 2: Verify the regression fails for desktop**

Run:

```powershell
npm run build
npx playwright test tests/homepage.spec.ts -g "hero CTAs fit" --project=chromium-desktop
```

Expected: failure at 1024 x 768, 1440 x 900, or 1920 x 1080 because at least
one Hero CTA extends below the viewport.

### Task 2: Rebalance the hero composition

**Files:**
- Modify: `src/app/globals.css:24-26`
- Modify: `src/components/sections/HeroSection.tsx:8-58`

**Interfaces:**
- Consumes: the existing `heroContent` object and `EngineeringSignalVisual`.
- Produces: the same semantic Hero section with a shorter copy stack and a
  full-width trust handoff.

- [ ] **Step 1: Reduce the display token**

Change the display token to:

```css
--text-display: clamp(2.75rem, 5.2vw, 5rem);
--text-display--line-height: 1.02;
```

Keep the existing display letter spacing.

- [ ] **Step 2: Recompose the Hero grid**

Use these layout rules in `HeroSection`:

```tsx
<div className="grid items-center gap-10 py-14 md:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-12 lg:py-16 xl:py-20">
```

Move the trust-cue paragraph after `EngineeringSignalVisual` and make it span
both desktop columns:

```tsx
<p
  className="hero-enter border-t border-border pt-4 font-mono text-label text-secondary-text lg:col-span-2"
  style={{ animationDelay: "360ms" }}
>
  <span
    aria-hidden="true"
    className="mr-2 inline-block h-px w-8 bg-signal-violet align-middle"
  />
  {heroContent.trustCue}
</p>
```

Remove the old trust-cue paragraph from the left copy stack. Preserve the
eyebrow, H1, supporting copy, both CTA components, and the visual unchanged.

- [ ] **Step 3: Verify the targeted regression passes**

Run:

```powershell
npm run build
npx playwright test tests/homepage.spec.ts -g "hero CTAs fit" --project=chromium-desktop
```

Expected: pass for all five viewport values.

### Task 3: Run the Pass A gate

**Files:**
- Modify only if measured evidence requires a minimal correction:
  `src/app/globals.css`, `src/components/sections/HeroSection.tsx`, or
  `tests/homepage.spec.ts`.

**Interfaces:**
- Consumes: the completed Hero and browser regression.
- Produces: verified Pass A evidence and visual checkpoint captures.

- [ ] **Step 1: Run static validation**

```powershell
npm run lint
npm run typecheck
npm run build
```

Expected: all commands exit zero; the known local metadata-origin warning may
remain during build.

- [ ] **Step 2: Run browser regression**

```powershell
npm test
```

Expected: all existing checks plus the new test pass on desktop and mobile
projects.

- [ ] **Step 3: Inspect visual checkpoints**

Inspect 320 x 800, 375 x 812, 1024 x 768, and 1440 x 900 with reduced motion
both enabled and disabled. Confirm:

- both Hero CTAs are inside the initial viewport;
- H1, visual, and trust handoff have a clear hierarchy;
- the concept bar remains fully visible;
- no horizontal overflow or text clipping appears;
- keyboard focus and reduced-motion behavior are unchanged.

- [ ] **Step 4: Stop for owner review**

Report changed files, red/green test evidence, full validation results, and
visual checkpoint evidence. Do not start Pass B until the owner approves Pass A.
