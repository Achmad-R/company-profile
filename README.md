# Stratalyn Systems — Fictional Company Website

> **Portfolio concept · Stratalyn Systems is a fictional company.**
> A fictional company website created as a portfolio demonstration. No
> services, roles, or contact channels shown here are real.

A one-page company introduction and recruitment website for a fictional
remote-first applied-AI and software-engineering studio. Primary audience is
experienced technical talent; secondary audience is technical
decision-makers. Built with Next.js App Router, React, TypeScript strict,
and Tailwind CSS v4.

![Desktop full page](docs/screenshots/homepage-desktop.png)
![Mobile full page](docs/screenshots/homepage-mobile.png)

## Portfolio case study

- **Problem:** technology-company sites often rely on generic gradients,
  service cards, and unsupported claims, which neither demonstrate
  engineering quality nor speak clearly to experienced technical talent.
- **Approach:** structure one continuous story from positioning and
  capabilities through fictional work, engineering culture, concept roles,
  and honest demo contact actions.
- **Design decisions:** use the bespoke Engineering Signal language, keep
  every company fact in typed content, expose human checkpoints in the
  visual narrative, and use inline role details instead of a fake apply flow.
- **Implementation:** statically render the Next.js page by default, isolate
  client JavaScript to behavior that needs it, and draw all visual assets
  locally with CSS, SVG, or `ImageResponse`.
- **Validation:** exercise critical behavior in production with Playwright,
  inspect responsive and accessible states, verify a separate clean-room copy,
  and report repeated Lighthouse measurements without relabeling lab results
  as field data. The owner accepted the Phase 7 mobile Performance median of
  88 deviation on 2026-09-09 and the final retained Phase 9 mobile LCP median
  of 2585 ms deviation on 2026-09-11.
- **Learning:** transparent constraints can strengthen a portfolio story;
  medians and ranges are more honest than a best run, and disciplined static
  rendering leaves room for distinctive visuals without a heavy runtime.

## Constraints that shaped the build

- **Fictional integrity:** every company fact lives in the typed content
  source (`src/content/site-content.ts`); nothing is invented beyond
  `docs/PROJECT_PLAN.md` Section 2. Concept bar and footer disclosure are
  always visible, projects/roles carry concept badges, `.example`
  addresses are demo text (no `mailto:`, no forms), and indexing stays
  disabled (`noindex, nofollow, noarchive`).
- **Engineering Signal design language:** grid, nodes, signal flow,
  section numbers, modular panels — no SaaS cards, stock photos, robot
  imagery, or heavy parallax.
- **Motion budget:** staged entrances, one 4-second ambient pulse per load
  (static on touch devices), IntersectionObserver reveals, and full
  `prefers-reduced-motion` support with content readable without
  JavaScript.

## Architecture

- `src/app/`: routes, root layout, global styles, `robots.ts`,
  `sitemap.ts`, local SVG icon, and generated Open Graph image.
- `src/components/layout/`: concept bar, accessible sticky header with a
  full-screen mobile dialog outside the blurred header, footer, skip link.
- `src/components/sections/`: hero, About, Capabilities, Method, Selected
  Work, Why Stratalyn, Talent, Careers (inline-expand concept roles),
  Contact (real clipboard copy with honest feedback).
- `src/components/visuals/`: bespoke SVG diagrams (hero decision path and
  one per project brief, all decorative and `aria-hidden`).
- `src/components/ui/`: container, headings, links, tags, and reveal
  primitive.
- `src/content/site-content.ts` + `src/types/content.ts`: the single
  fictional source of truth and its contracts; `src/lib/anchor-focus.ts`:
  shared heading-focus helper.
- `tests/homepage.spec.ts`: 39 Playwright checks × desktop/mobile
  Chromium (menu, anchors/focus, roles, clipboard, disclosures, robots,
  Open Graph image, reflow, motion, active nav).
- Docs: `docs/PROJECT_PLAN.md` (active requirements),
  `docs/DESIGN_DECISIONS.md` (toolchain and approved decisions),
  `docs/QA_REPORT.md` (final Phase 0–9 evidence), and the
  [raw Lighthouse artifact index](docs/qa/lighthouse/README.md).

Static rendering by default; client JavaScript is limited to the header
menu, scroll-spy, reveals, role details, and clipboard feedback.

## Accessibility and performance

- Semantic landmarks, one H1 with no hierarchy skips, skip link, visible
  focus, full keyboard support, 44 px touch targets, 320 px reflow without
  horizontal scrolling.
- Final retained Lighthouse evidence (clean verification build, production,
  3 runs/profile): desktop Performance/Accessibility/Best Practices 100 with
  563 ms median LCP; mobile Performance 96, Accessibility/Best Practices 100,
  2585 ms median LCP (2549–2606 ms), and 0 CLS. Raw SEO is 66 and fails only
  the intentional `is-crawlable` noindex audit. The owner accepted the 85 ms
  mobile LCP deviation from the 2500 ms gate on 2026-09-11; the prior Phase 7
  passing LCP median of 2374 ms and accepted Performance median-88 deviation
  remain recorded in `docs/QA_REPORT.md`.
- Lab interaction measurements for menu, anchors, roles, and copy all come
  in ≤122 ms against the 200 ms target; the final clipboard rejection/fallback
  trace tops out at 68 ms. No field Core Web Vitals are claimed without
  real-user data.
- Final clean-room verification passed 78/78 browser checks (39 per desktop
  and mobile profile). The 43-file application/config/test/lock subset still
  matches source exactly at SHA-256
  `c0faabf37c69579339a5d2743d37bedd7405996a519da9b3ef8d840656421ca0`.

## Getting started

Verified toolchain: Node.js `24.13.0` and npm `11.6.2`.

```powershell
npm ci
npm run dev
```

Open `http://localhost:3000`.

Install the pinned Chromium build once before running browser tests:

```powershell
npx playwright install chromium
```

## Verification

```powershell
npm run lint
npm run typecheck
npm run build
npm test
npm run test:smoke
```

Playwright targets the production server, so build before testing:

```powershell
npm run build
npm test
```

`next build` does not run lint — run it separately. Typecheck generates
route types through `next typegen` before `tsc --noEmit`. Final Phase 0–9
evidence lives in `docs/QA_REPORT.md`; retained raw Lighthouse reports and
their checksums are indexed in
[`docs/qa/lighthouse/README.md`](docs/qa/lighthouse/README.md).

## Replacing the fictional content

To turn this into a real company profile, replace the Section 2 pack in
`src/content/site-content.ts`, then review indexing (`ConceptConfig`),
structured data, contact channels, and every disclosure — the `isConcept`
flag exists to force that review. Never present the current dummy data as
a real company.

## Deployment

The zero-config target is a Vercel Preview deployment with the default
`next.config.ts`. Vercel System Environment Variables must be enabled so
Next.js can resolve the social-image URL against the real deployment origin.
No application-defined environment variables are required, so no
`.env.example` exists. Do not use the fictional
`https://stratalyn.example` canonical as an asset origin. Other hosts are
outside this project's supported zero-config deployment claim. Keep
`noindex` until real content replaces the concept, do not register the
demonstration sitemap with search engines, and deploy only on explicit
request.

## License and attribution

No project license is included; treat the code and original visuals as
all-rights-reserved unless the owner adds one. Every visual is original
SVG/CSS or generated locally for this project. Geist Sans/Mono are served
through `next/font`; their copyright notice and SIL Open Font License 1.1
are reproduced in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). No stock
imagery, client logos, or other third-party visual assets are used. The final
Phase 9 intended-source scan had zero credential-pattern matches and found no
environment, key, log, temporary, or backup files. Ignored local
`.superpowers` tool state was excluded from the clean-room copy and scan and
remains excluded from portfolio packaging.
