# Stratalyn Page Rhythm Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> superpowers:subagent-driven-development (recommended) or
> superpowers:executing-plans to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give About, Capabilities, Method, and Why distinct compositions
connected by one restrained signal rail, without touching copy or adding
dependencies.

**Architecture:** Add one decorative server-rendered `SignalDivider`
primitive placed in `page.tsx` between the four middle sections, add an
opt-in `signalNode` marker to the shared `SectionHeading` (default off, so
all other sections render byte-identical output), convert About principles
to a vertical signal path, and simplify Why pillars to numberless
statements. Capabilities (ruled matrix) and Process (horizontal node flow)
keep their compositions because they already differ from each other and
from the other two; restyling them would add churn without new variation.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS
v4, Playwright Chromium.

**Spec:**
`docs/superpowers/specs/2026-09-14-stratalyn-visual-refinement-design.md`

## Global Constraints

- Preserve every exact content string from `src/content/site-content.ts`.
- Dividers and node markers are decorative: `aria-hidden`, textless, no new copy.
- Preserve the concept bar, footer disclosure, badges, `.example` addresses,
  canonical URL, and `noindex, nofollow, noarchive`.
- Keep all touched sections server-rendered; add no dependency or client state.
- Animate only opacity and transform; preserve reduced-motion and no-JavaScript
  content visibility.
- Preserve anchor IDs, navigation labels, CTA labels, and keyboard/focus behavior.
- Do not merge to `main` without a separate explicit request. Commit and push
  the pass branch for Vercel preview per the standing owner instruction.

---

### Task 1: Signal rail system (dividers + heading node markers)

**Files:**
- Create: `src/components/ui/SignalDivider.tsx`
- Modify: `src/app/page.tsx:1-37` (add import + 3 placements)
- Modify: `src/components/ui/SectionHeading.tsx:1-35` (opt-in `signalNode` prop)
- Modify: `src/components/sections/AboutSection.tsx:16-20` (pass `signalNode`)
- Modify: `src/components/sections/CapabilitiesSection.tsx:17-22` (pass `signalNode`)
- Modify: `src/components/sections/ProcessSection.tsx:14-19` (pass `signalNode`)
- Modify: `src/components/sections/WhySection.tsx:14-18` (pass `signalNode`)
- Test: append at end of `tests/homepage.spec.ts`

**Interfaces:**
- Consumes: existing `Container`, exact section labels, `page.tsx` section order.
- Produces: `[data-signal-divider]` x3 (aria-hidden, textless) and
  `[data-heading-node]` x4 (aria-hidden, inside the four middle labels only).

- [ ] **Step 1: Write the failing tests**

Append at the end of `tests/homepage.spec.ts`:

```ts
test("middle sections share one restrained signal rail", async ({ page }) => {
  await page.goto("/");

  const dividers = page.locator("[data-signal-divider]");
  await expect(dividers).toHaveCount(3);
  for (let i = 0; i < 3; i += 1) {
    await expect(dividers.nth(i)).toHaveAttribute("aria-hidden", "true");
    expect(((await dividers.nth(i).textContent()) ?? "").trim()).toBe("");
  }

  await expect(page.locator("[data-heading-node]")).toHaveCount(4);
  for (const id of [
    "about-heading",
    "capabilities-heading",
    "method-heading",
    "why-heading",
  ]) {
    const label = page.locator(`div:has(> #${id}) > p`);
    await expect(label.locator("[data-heading-node]")).toHaveCount(1);
  }
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run:

```powershell
npm run build
npx playwright test tests/homepage.spec.ts -g "restrained signal rail" --project=chromium-desktop
```

Expected: FAIL with "expected 3, received 0" for `[data-signal-divider]`
because neither the dividers nor the markers exist yet.

- [ ] **Step 3: Write the minimal implementation**

Create `src/components/ui/SignalDivider.tsx`:

```tsx
import Container from "@/components/ui/Container";

export default function SignalDivider() {
  return (
    <div aria-hidden="true" data-signal-divider>
      <Container>
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-cyan/70" />
          <span className="h-px flex-1 bg-border" />
        </div>
      </Container>
    </div>
  );
}
```

In `src/components/ui/SectionHeading.tsx`, extend the props and render the
opt-in marker (label text itself stays exact):

```tsx
type SectionHeadingProps = {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  tabIndex?: number;
  signalNode?: boolean;
};

export default function SectionHeading({
  id,
  label,
  heading,
  intro,
  tabIndex = -1,
  signalNode = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-copy">
      <p className="font-mono text-label tracking-[0.2em] text-signal-cyan uppercase">
        {signalNode ? (
          <span
            aria-hidden="true"
            data-heading-node
            className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-signal-cyan align-middle"
          />
        ) : null}
        {label}
      </p>
      <h2
        id={id}
        tabIndex={tabIndex}
        className="mt-4 text-section font-semibold tracking-tight text-balance"
      >
        {heading}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-copy text-body text-secondary-text">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
```

In `src/app/page.tsx`, import the divider and place one instance before each
middle section except the first: before Capabilities, before Process, and
before Why. About follows the Hero trust handoff, so it needs no divider.
`WorkSection` sits between Process and Why and stays exactly where it is;
the third divider therefore lands between Work and Why. Do not add dividers
anywhere else:

```tsx
import SignalDivider from "@/components/ui/SignalDivider";
```

```tsx
<HeroSection />
<AboutSection />
<SignalDivider />
<CapabilitiesSection />
<SignalDivider />
<ProcessSection />
<WorkSection />
<SignalDivider />
<WhySection />
<TalentSection />
```

Pass `signalNode` in the four middle sections only, e.g. in
`AboutSection.tsx`:

```tsx
<SectionHeading
  id="about-heading"
  label={aboutContent.label}
  heading={aboutContent.heading}
  signalNode
/>
```

Apply the same one-line `signalNode` addition to the existing
`SectionHeading` usages in `CapabilitiesSection.tsx`, `ProcessSection.tsx`,
and `WhySection.tsx`. Do not touch any other `SectionHeading` usage.

- [ ] **Step 4: Run the tests to verify they pass**

Run:

```powershell
npm run build
npx playwright test tests/homepage.spec.ts -g "restrained signal rail" --project=chromium-desktop
```

Expected: PASS.

### Task 2: About principles become a vertical signal path

**Files:**
- Modify: `src/components/sections/AboutSection.tsx:21-52`
- Test: append at end of `tests/homepage.spec.ts`

**Interfaces:**
- Consumes: `aboutContent.principles` (titles and copy unchanged) and the
  existing 7/5 editorial grid.
- Produces: one `[data-signal-path]` vertical rail replacing the per-row
  top/bottom borders; principle headings and copy byte-identical.

- [ ] **Step 1: Write the failing test**

Append at the end of `tests/homepage.spec.ts`:

```ts
test("About principles follow a vertical signal path", async ({ page }) => {
  await page.goto("/");

  const about = page.locator("section#about");
  const path = about.locator("[data-signal-path]");
  await expect(path).toHaveCount(1);
  await expect(path).toHaveAttribute("aria-hidden", "false");
  await expect(path.locator(":scope > li")).toHaveCount(
    aboutContent.principles.length,
  );
  for (const principle of aboutContent.principles) {
    await expect(
      path.getByRole("heading", {
        level: 3,
        name: principle.title,
        exact: true,
      }),
    ).toBeVisible();
    await expect(path.getByText(principle.copy)).toBeVisible();
  }
});
```

Note: the rail container keeps content accessible, so it must NOT be
`aria-hidden`; only its decorative dots are hidden. The
`toHaveAttribute("aria-hidden", "false")` assertion documents that intent.
(`aboutContent` is already imported at the top of the spec file.)

- [ ] **Step 2: Run the test to verify it fails**

Run:

```powershell
npm run build
npx playwright test tests/homepage.spec.ts -g "vertical signal path" --project=chromium-desktop
```

Expected: FAIL with "expected 1, received 0" for `[data-signal-path]`.

- [ ] **Step 3: Write the minimal implementation**

In `src/components/sections/AboutSection.tsx`, replace the principles `<ol>`
(opening tag, items, closing tag) with a railed version. Keep the numbers,
`h3` titles, and copy paragraphs exactly as they are:

```tsx
<ol
  data-signal-path
  aria-hidden="false"
  className="relative border-l border-border pl-6 lg:col-span-5"
>
  {aboutContent.principles.map((principle, index) => (
    <li key={principle.title} className="relative py-5">
      <span
        aria-hidden="true"
        className="absolute -left-[29px] top-7 h-2 w-2 rounded-full bg-signal-cyan"
      />
      <span
        aria-hidden="true"
        className="font-mono text-label text-signal-cyan"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-primary-text">
          {principle.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary-text">
          {principle.copy}
        </p>
      </div>
    </li>
  ))}
</ol>
```

Geometry: the `ol` carries `pl-6` (24 px) plus its 1 px left border, so the
rail sits 25 px left of each `li` edge; the 8 px dot at `-left-[29px]`
spans -29 px to -21 px and centers exactly on the rail. `top-7` (28 px)
aligns the dot with the number line (20 px item padding + ~8 px into the
16 px number line-height). Do not add motion, background panels, or extra
copy.

- [ ] **Step 4: Run the tests to verify they pass**

Run:

```powershell
npm run build
npx playwright test tests/homepage.spec.ts -g "vertical signal path" --project=chromium-desktop
```

Expected: PASS.

### Task 3: Why pillars read as statements without index markers

**Files:**
- Modify: `src/components/sections/WhySection.tsx:19-37`
- Test: append at end of `tests/homepage.spec.ts`

**Interfaces:**
- Consumes: `whyContent.pillars` (titles and copy unchanged) and the
  existing 2-column ruled grid.
- Produces: the same four pillar statements with no decorative index spans.

- [ ] **Step 1: Write the failing test**

Append at the end of `tests/homepage.spec.ts`:

```ts
test("Why pillars read as statements without index markers", async ({
  page,
}) => {
  await page.goto("/");

  const why = page.locator("section:has(#why-heading)");
  const items = why.locator("ol > li");
  await expect(items).toHaveCount(whyContent.pillars.length);
  for (let i = 0; i < whyContent.pillars.length; i += 1) {
    const item = items.nth(i);
    await expect(
      item.getByRole("heading", {
        level: 3,
        name: whyContent.pillars[i].title,
        exact: true,
      }),
    ).toBeVisible();
    await expect(item.getByText(whyContent.pillars[i].copy)).toBeVisible();
    await expect(item.locator("span")).toHaveCount(0);
  }
});
```

(`whyContent` is already imported at the top of the spec file. The section
has no `id`, so it is scoped through its `#why-heading` heading.)

- [ ] **Step 2: Run the test to verify it fails**

Run:

```powershell
npm run build
npx playwright test tests/homepage.spec.ts -g "without index markers" --project=chromium-desktop
```

Expected: FAIL because each pillar `li` still contains its mono index
`<span>` (count 1, expected 0).

- [ ] **Step 3: Write the minimal implementation**

In `src/components/sections/WhySection.tsx`, delete the index `<span>` from
each pillar item and keep everything else (ruled top border, `h3`, copy):

```tsx
<ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
  {whyContent.pillars.map((pillar) => (
    <li key={pillar.title} className="border-t border-border pt-6">
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-primary-text">
        {pillar.title}
      </h3>
      <p className="mt-2 max-w-copy text-sm leading-relaxed text-secondary-text">
        {pillar.copy}
      </p>
    </li>
  ))}
</ol>
```

The `index` variable is no longer used, so remove it from the `map`
parameters as well. Do not add replacement decoration; the rail system from
Task 1 already connects this section.

- [ ] **Step 4: Run the tests to verify they pass**

Run:

```powershell
npm run build
npx playwright test tests/homepage.spec.ts -g "without index markers" --project=chromium-desktop
```

Expected: PASS.

### Task 4: Run the Pass B gate

**Files:**
- Modify only if measured evidence requires a minimal correction:
  `src/components/ui/SignalDivider.tsx`,
  `src/components/ui/SectionHeading.tsx`,
  `src/components/sections/AboutSection.tsx`,
  `src/components/sections/WhySection.tsx`,
  `src/app/page.tsx`, or `tests/homepage.spec.ts`.

**Interfaces:**
- Consumes: the completed rail system and recomposed sections.
- Produces: verified Pass B evidence, visual checkpoint captures, one commit
  and one branch push for Vercel preview.

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

Expected: all existing checks (now 80 across both projects) plus the three
new tests pass on desktop and mobile projects.

- [ ] **Step 3: Inspect visual checkpoints**

Capture viewport screenshots (via a temporary spec, deleted afterwards) of
each middle section scrolled into view at 1440 px and 375 px widths with
reduced motion, plus one motion-enabled pass at 1440 px. Confirm:

- the rail reads as one quiet system: heading nodes, About path, Process
  flow dots, and three dividers share the same dot language;
- About/Why no longer mirror each other; Capabilities matrix and Process
  flow remain clearly distinct;
- the concept bar stays fully visible and no horizontal overflow appears at
  320 px;
- pillar/principle text never clips against rails or dots;
- keyboard focus, anchor scroll offsets, and reduced-motion behavior are
  unchanged.

- [ ] **Step 4: Commit, push, and stop for owner review**

```powershell
git add -- src/components/ui/SignalDivider.tsx src/components/ui/SectionHeading.tsx src/components/sections/AboutSection.tsx src/components/sections/WhySection.tsx src/components/sections/CapabilitiesSection.tsx src/components/sections/ProcessSection.tsx src/app/page.tsx tests/homepage.spec.ts docs/superpowers/plans/2026-09-14-stratalyn-page-rhythm-pass-b.md
git commit -m "Pass B: page rhythm with signal rail and varied middle sections"
git push -u origin pass-b-page-rhythm
```

Report changed files, red/green test evidence, full validation results, the
Vercel preview URL, and visual checkpoint evidence. Do not merge to `main`
and do not start Pass C until the owner approves Pass B.
