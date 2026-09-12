# Stratalyn Systems — Design and Toolchain Decisions

This log records approved toolchain, architecture, and design decisions without
duplicating the fictional content pack in `docs/PROJECT_PLAN.md`.

## Active source

- Accepted `docs/PROJECT_PLAN.md` as the single active requirement source.
- `Stratalyn_Systems_Company_Profile_and_OpenCode_Plan.md` remains at the
  root only as a short pointer.
- Verified byte-for-byte migration with matching Git blob hashes before the
  root file was replaced.

## Placement

- Application root is `D:\Coding\company-profile`, explicitly selected by
  the project owner.
- Scaffold was generated in an isolated temporary directory, reviewed, then
  imported into the approved root without overwriting the requirement
  document.
- No linked Git worktree: there was no existing repository or commit, and
  the selected root had to remain the working location.
- Git initialized as an unborn `setup/phase-0` branch. No files staged or
  committed.

## Toolchain

- `create-next-app@16.3.4` with TypeScript, Tailwind, ESLint, App Router,
  `src/`, `@/*` alias, npm, `--no-react-compiler`, `--no-agents-md`,
  `--skip-install`, `--disable-git`.
- Generated Next.js `16.3.4`, React `19.2.8`, React DOM `19.2.8`.
- Tailwind CSS v4 template with `@tailwindcss/postcss`.
- ESLint 9 flat config from the generated template.
- npm is the only package manager. Only `package-lock.json` is accepted.
- No dependency upgrades during Phase 0 unless required for a verified
  failure.

## Validation baseline

- `npm run lint` uses the standalone ESLint CLI because Next.js 16 no
  longer runs lint through `next build`.
- `npm run typecheck` runs `next typegen` via `pretypecheck`, then
  `tsc --noEmit`.
- Playwright targets a separately built production server on
  `http://127.0.0.1:3100`.
- Baseline browser coverage is Chromium desktop and Chromium mobile. This is
  a smoke baseline, not cross-browser certification.
- Starter favicon was omitted because binary transfer through the text
  patch workflow could not preserve it. No replacement brand asset was
  created in Phase 0.

## Baseline evidence (Task 0C/0D, Phase 0 exit)

- Playwright `@playwright/test@1.63.0` installed exact; Chromium
  `153.0.8010.12` downloaded. Only `package-lock.json` exists.
- `package.json` carries `lint`, `pretypecheck`/`typecheck`, `test`, and
  `test:smoke` alongside `dev`, `build`, and `start`.
- `tests/homepage.spec.ts` passes on Chromium desktop and mobile against
  the production server.
- `npm ci`, dev-server 200 check, `npm run lint`, `npm run typecheck`,
  `npm run build`, `npm test`, `npm run test:smoke`, and `npm audit`
  all succeeded during Phase 0 verification. Raw terminal output from that
  initial run was not retained in the repository.

## Phase 1 — content model and foundation

- `src/types/content.ts` holds Project, Role, ConceptConfig, NavLink, and
  anchor types. `src/content/site-content.ts` is the single company-fact
  source from Section 2; JSX must not carry company facts.
- Role detail pattern: inline expand with `aria-expanded`, focus stays on
  the trigger (owner-approved). Binds Phase 5; no dialog, no focus trap.
- Client boundary: foundation shell is fully static. Client components are
  reserved for header menu (Phase 2), role details only if the native
  pattern falls short, and clipboard feedback (Phase 5).
- Tokens from Section 8.3 implemented as Tailwind v4 `@theme` values;
  Geist Sans/Mono already loaded by the scaffold. No new dependencies.
- Temporary sr-only H1 with the brand name keeps the one-H1 contract
  until the Phase 2 hero provides the visible H1.
- `robots.ts` allows crawling so `noindex` stays readable; no
  `Disallow: /`, no sitemap advertised. Demo sitemap uses the canonical
  `.example` identity only.
- Minimal primitives (Container, SectionHeading, Tag, Divider,
  ButtonLink) created per the Phase 1 scope; unused ones activate with
  their sections in later phases.

## Phase 1 remediation — 2026-09-09

- Added the remaining Section 2.2 company profile and Section 2.4 target
  problem/delivery-model records to the typed content source. Indonesian
  planning copy is preserved verbatim and remains non-rendered; website copy
  remains English.
- Navigation and CTA values now consume `anchorTargets` directly. The shared
  navigation list is reused by header and footer content to prevent target
  drift before their sections are implemented.
- Metadata robots values derive from `conceptConfig.allowIndexing`. The active
  concept value remains `false`, producing `noindex, nofollow, noarchive`.
- Completed the token foundation with responsive type, container, radius,
  grid, duration (including four-second ambient motion), and easing values. The
  4/8/12-column `.site-grid` utility is available for later sections.
- Kept the baseline 12% border for decorative dividers and introduced a
  stronger `control-border` token for identifiable control boundaries.
- Clean-machine browser setup is documented as
  `npx playwright install chromium`; Playwright remains pinned by the npm
  lockfile.
- Replaced unused scaffold logos with a local App Router SVG icon using the
  approved grid/node signal language. A browser regression test verifies the
  declared icon resolves, preventing the previous fallback favicon 404.

### Remediation verification

- `npm ci` completed from the lockfile with zero reported vulnerabilities;
  npm emitted a deprecation warning for the resolved ESLint 9 release.
- `npx playwright install chromium`, `npm run lint`, `npm run typecheck`, and
  `npm run build` completed successfully on 2026-09-09.
- The production build prerendered `/`, `/icon.svg`, `/robots.txt`, and
  `/sitemap.xml` as static routes.
- `npm test` and `npm run test:smoke` each passed 18/18 checks across the
  1440 x 900 desktop and 375 x 812 mobile Chromium projects.
- Manual production inspection reported no browser console errors. At
  320 x 800, document `scrollWidth` and `clientWidth` were both 320 CSS px,
  and both concept disclosures remained present.

## Phase 2 — header and hero (checkpoint 1 approved)

- Approved hero composition: Split Signal Console, revision 2
  (owner-selected option A with the ordered right-side decision path:
  Workflow context → Assisted signal → Human checkpoint →
  Accountable output). Panel labels are decorative system language inside an
  `aria-hidden` visual, not company facts; hero meaning comes from the
  Section 2.5 copy rendered verbatim.
- Approved mobile navigation: full-screen signal panel (owner-selected).
  Custom modal keeps the client boundary to `SiteHeader`/`MobileNav`;
  `HeroSection` and `EngineeringSignalVisual` stay server-rendered with
  CSS-only entrance, hover-pointer, and one-shot ambient motion.
- Focus contract: initial focus on the dialog close button, Tab containment,
  `inert` on `main`/`footer` plus body scroll lock while open. Dismiss via
  close button or Escape returns focus to the menu opener; link selection
  closes the menu and moves focus to the target heading when that Phase 3-5
  section exists (fallback to the opener until then). Desktop breakpoint
  auto-closes the menu and moves focus to the visible desktop CTA.
- No empty target anchors were added. Scroll and target-heading focus
  integration for About/Capabilities/Work/Careers/Contact is recorded as
  unavailable per Section 14.1, not passing.
- ESLint now ignores generated `playwright-report/**` and `test-results/**`
  so browser-trace bundles never fail the lint gate.

### Phase 2 verification (2026-09-09)

- `npm run lint`: pass, zero warnings.
- `npm run typecheck` (`next typegen` + `tsc --noEmit`): pass.
- `npm run build`: pass, static `/`, `/icon.svg`, `/robots.txt`,
  `/sitemap.xml`; hero copy confirmed present in the prerendered HTML.
- `npm test`: 30/30 pass (15 checks × desktop 1440 x 900 and mobile
  375 x 812 Chromium), covering header/hero contracts, menu open/close,
  Escape, focus trap/return, link-close, breakpoint close, and reduced
  motion readability.
- Manual production inspection: zero console errors; 320 x 800 reflow with
  zero horizontal overflow and both disclosures present; checkpoint
  screenshots captured at 1440 px, 375 px, and 375 px with the menu open.

## Phase 3 — About, Capabilities, and Method

- About uses an asymmetric editorial split: narrative paragraphs beside
  numbered principle rows, not identical feature cards.
- Capabilities use a numbered matrix (index, title, description, outcomes,
  technology tags) that reads fully without hover; `Tag` activates here.
- Method renders the five Discover → Operate steps from typed content with a
  vertical stack on mobile (never a clipped horizontal diagram) and a
  five-column signal-ruled grid on desktop.
- Section ids derive from `anchorTargets` (`about`, `capabilities`); Method
  carries no nav anchor per the Section 6 map. `DesktopNav` shares the same
  target-heading focus handler as the mobile menu.
- Work, Careers, and Contact link integration stays unavailable per
  Section 14.1 until Phase 4-5; no empty anchors added.

### Phase 3 verification (2026-09-09)

- `npm run lint`: pass, zero warnings. `npm run typecheck`: pass.
- `npm run build`: pass, all routes static.
- `npm test`: 38/38 pass (19 checks × desktop and mobile Chromium),
  including About/Capabilities anchor integration (link click, menu
  closure, scroll offset below the sticky header, heading focus).
- Manual production inspection: zero console errors; single H1 preserved;
  320 x 800 reflow with zero overflow; screenshots reviewed at 1440 px
  (About, Capabilities, Method) and 375 px (Capabilities stacked).

## Phase 4 — Selected Work

- Editorial alternating rows (visual/text swap per project), not a
  three-card grid. Each article renders domain, summary, challenge,
  contribution, concept outcome, and technology tags from typed content,
  with the per-record `statusLabel` badge.
- One bespoke static SVG visual per visual brief, all `aria-hidden`: an
  evidence timeline with an explicit human approval gate (SignalOps), a
  layered source → transform → exception → state route map (RelayGrid),
  and a split run comparison feeding a decision record (VantageSim).
  Inline SVG with `aspect-video` reserves space, so no network cost and no
  CLS; visual briefs are never rendered as website copy.
- No client names, metrics, testimonials, or detail links: the section
  renders zero anchors until real detail routes exist.
- Work anchor id derives from `anchorTargets`; header, hero CTA, and mobile
  menu integration for `#work` is tested. Careers and Contact integration
  stays unavailable per Section 14.1 until Phase 5.

### Phase 4 verification (2026-09-09)

- `npm run lint`: pass, zero warnings. `npm run typecheck`: pass.
- `npm run build`: pass, all routes static.
- `npm test`: 48/48 pass (24 checks × desktop and mobile Chromium),
  including three badges, full per-project content, zero-link condition,
  16/9 visual aspect, and `#work` navigation from header, hero CTA, and
  mobile menu with offset and heading focus.
- Manual production inspection: zero console errors; single H1; 320 x 800
  reflow with zero overflow; screenshots reviewed at 1440 px (SignalOps,
  RelayGrid) and 375 px (stacked, no truncation).

## Phase 5 — Why, Talent, Careers, Contact, Footer (checkpoint 2 approved)

- Why pillars render as a numbered 2×2 editorial grid; Talent keeps the
  narrative plus the `View concept roles` CTA to `#careers`.
- Careers list heading is `Concept roles`: the content pack defines no
  website heading for the role list, so the structural label pluralizes the
  mandated badge label instead of inventing section copy. The owner approved
  this treatment with visual checkpoint 2.
- Role details use the approved inline-expand pattern (`aria-expanded` +
  `aria-controls`, focus stays on the trigger). Panels restate the existing
  role fields and always end with the fictional-role disclosure; no apply,
  mailto, or submission exists anywhere.
- Contact shows both `.example` addresses as selectable demo text with the
  exact demo note. Each `Copy demo address` button carries an `aria-label`
  distinguishing its target; success is reported only after the clipboard
  write resolves, announced via `role="status"`, and denial/unavailability
  shows the manual fallback. No mailto, form, or external link.
- Footer carries wordmark, positioning, five working nav links (with the
  same target-heading focus behavior as the header), copyright, and the
  exact disclosure. `MinimalFooter` was removed; a shared
  `src/lib/anchor-focus.ts` helper serves header and footer.
- All Phase 2 navigation dependencies are now closed: every header, footer,
  hero, and talent link resolves to a real section.

### Phase 5 verification (2026-09-09)

- `npm run lint`: pass, zero warnings. `npm run typecheck`: pass.
- `npm run build`: pass, all routes static.
- `npm test`: 66/66 pass (33 checks × desktop and mobile Chromium),
  including all three role details (pointer + keyboard), real clipboard
  success per address, clipboard-denial fallback, zero mailto/form/link
  conditions, footer content, and end-to-end navigation of all five
  destinations.
- Manual production inspection: zero console errors; single H1; zero
  mailto/forms page-wide; 320 x 800 reflow with zero overflow;
  screenshots reviewed at 1440 px (Careers, open role detail, Contact,
  Footer) and 375 px (Contact stacked, addresses wrap).
- Visual checkpoint 2 was explicitly approved by the owner on 2026-09-09.

## Phase 6 — motion, interaction, and visual polish

- Audit result: existing motion (hero entrance, one-shot signal ping,
  280 ms menu transition) already fits the budget; nothing perpetual or
  noisy existed to remove.
- New `Reveal` primitive for section content: transform/opacity only,
  fires once via IntersectionObserver, never re-triggers. Content stays
  fully visible without JavaScript and under reduced motion; anchor-focus
  headings sit outside reveals so they are never hidden.
- Scroll-spy active navigation (`aria-current`) on desktop and mobile nav
  via one IntersectionObserver with a center band; no scroll listeners, so
  no scroll jank. Footer links intentionally stay unmarked.
- Pressed feedback (`active:scale`) on all buttons; text links keep
  hover/focus with an added active color. No disabled controls exist, so no
  disabled state was added. Global visible focus and 180/280/600 ms token
  durations unchanged.

### Phase 6 verification (2026-09-09)

- `npm run lint`: pass, zero warnings. `npm run typecheck`: pass.
- `npm run build`: pass, all routes static.
- `npm test`: 72/72 pass (36 checks × desktop and mobile Chromium),
  including reveal-on-scroll, reduced-motion visibility, and active-nav
  tracking, plus full regression of menu, anchors, roles, and clipboard.
- Manual production inspection: spy marks the visible section, reveals
  settle at opacity 1, zero console errors.

## Phase 7 — SEO, accessibility, and performance hardening (audit only)

No source changes; this phase audited and measured the Phase 6 tree.
Environment: Windows 11, Node 24.13.0, production `next start` on
127.0.0.1:3100, Chromium 153.0.8010.12, Lighthouse 13.4.1, `noindex` kept
active. Raw Lighthouse JSON and scripts kept outside the repo during the
audit; medians and ranges below are the record.

- Semantics: 1 header, 2 navs (Primary, Footer), 1 main, 9 sections, 1
  footer; 1 H1, 8 H2, 25 H3 with zero hierarchy skips; skip link targets
  `#main-content`; decorative visuals `aria-hidden`; icon-only buttons
  labelled; `aria-current` appears only as a client enhancement.
- Contrast: 9/9 pairs pass (text 8.8–18.5:1, cyan/success 10.8–12.2:1,
  control boundary 5.3:1 against the 3:1 non-text bar).
- Keyboard/focus/motion: covered by the suite (skip link, menu trap,
  roles, copy) plus the global focus ring and reduced-motion stylesheet;
  no-JS readability holds via server-rendered HTML and CSS-only motion.
- Metadata/crawling: title, description, canonical
  `https://stratalyn.example`, OG/Twitter, and
  `noindex, nofollow, noarchive` verified in `<head>`; `robots.txt` is
  `Allow: /` with no disallow and no sitemap advertisement; demo sitemap
  serves the canonical URL; zero Organization JSON-LD, images, mailto, or
  external anchors.
- Cost: ~571 KB total JS (largest chunk 224 KB React framework), zero
  `<img>`, self-hosted Geist latin subset; client islands limited to
  header/nav/menu, reveals, role details, copy feedback, and footer link
  focus.
- Lighthouse mobile (3 runs): Performance 88/97/82 → median 88
  (range 82–97); LCP 2705/2374/2019 → median 2374 ms; CLS 0.000;
  Accessibility 100; Best Practices 100; SEO 66 with the sole failure
  `is-crawlable`, which is the expected `noindex` outcome.
- Lighthouse desktop (3 runs): Performance 100 ×3; LCP median 619 ms;
  CLS 0.000; TBT ≤55 ms; Accessibility/Best Practices 100; SEO 66 with
  the same single expected failure.
- Interaction lab (Playwright-driven durations, not INP/field data; 3 reps
  each, ≤200 ms target): menu-open max 122, menu-escape max 43,
  anchor-select max 114, role-toggle max 62, copy-success max 89 — all pass.
- OWNER-ACCEPTED DEVIATION (2026-09-09): mobile Performance median 88 is
  2 points under the ≥90 gate. Evidence points at host noise
  (82–97 swing and TBT 148–691 ms on an identical build) plus the
  framework baseline (300 ms unused-JS, one ~488 ms scripting chunk), not
  at content or assets — so no code change was made for the score, and
  none is proposed without a measured lever. LCP, CLS, Accessibility, and
  Best Practices pass on both profiles.
- Harness note: Lighthouse's Chrome temp-profile cleanup threw EPERM on
  this machine after several runs; reports were already written with fresh
  fetch timestamps and are unaffected.

## Phase 9 — portfolio packaging and final verification

- Vercel Preview is the only supported zero-config deployment target, using
  the unchanged `next.config.ts`. Vercel System Environment Variables must be
  enabled so social-image URLs resolve against the real deployment origin;
  the fictional `https://stratalyn.example` canonical must never be used as
  an asset origin. Other hosts are outside the supported zero-config claim.
  No commit, push, deployment, or publication occurred.
- No application-defined environment variables are required, so an
  `.env.example` would be empty and is intentionally omitted.
- Final full-page portfolio screenshots are assigned the stable paths
  `docs/screenshots/homepage-desktop.png` and
  `docs/screenshots/homepage-mobile.png`. Final production captures completed
  with reduced motion and zero console errors: desktop 1440 × 9404 at 994090
  bytes (SHA-256
  `4af3793cdaa17fe783d3b418505d23f218b492e88670a6637beaf3a377b003a2`),
  mobile 375 × 13544 at 856551 bytes (SHA-256
  `341416842430dcd96fcb7f902af5cea532590b26ecfa9063fda0e7702b72297c`).
- `src/app/opengraph-image.tsx` generates the 1200 × 630 PNG through
  `ImageResponse`. It reuses the typed wordmark and tagline and presents the
  exact `Fictional portfolio concept` label in the existing dark-grid,
  cyan/violet Engineering Signal language.
- `THIRD_PARTY_NOTICES.md` reproduces the official Vercel Geist copyright
  notice and SIL Open Font License 1.1. It is a third-party notice, not a
  project license; no project license was added.
- Clean-room verification completed in the separate approved temporary
  directory. The 61-file copy-time snapshot SHA-256 is
  `2e2188f7e9ddf2d5d8ffa018e6c684d36dc3bdc91debc85e6ff972a0271750e3`;
  documentation, screenshots, and raw QA artifacts were refreshed afterward,
  so it is not a final-document hash. The final 43 application/config/test/lock
  files still match the verification copy exactly,
  with manifest SHA-256
  `c0faabf37c69579339a5d2743d37bedd7405996a519da9b3ef8d840656421ca0`.
  No application/config/test/lock file changed after verification. `npm ci`,
  browser install, lint, typecheck, build, 78/78 Playwright tests (39 per
  desktop/mobile profile, 46.3 seconds),
  high-level dependency audit, and lockfile-only dependency-tree validation
  passed. The lockfile remained unchanged at SHA-256
  `8f0db2f2bfdbda940e225358c12741b48bf334e2439e2e3976f634efc09c46c9`.
  The build retained the documented parent-lock and local metadata-origin
  warnings.
- The final intended-source credential-pattern scan returned zero matches and
  found no environment, key, log, temporary, or backup files. Ignored local
  `.superpowers` tool state was excluded from the clean copy and scan and
  remains excluded from portfolio packaging.
- Retain all six Phase 9 Lighthouse 13.4.1 JSON reports and their checksums;
  `docs/qa/lighthouse/README.md` is their artifact index. The clean build
  measured mobile Performance 96, LCP 2585 ms, CLS 0, and TBT 107 ms medians;
  desktop Performance 100, LCP 563 ms, CLS 0, and TBT 0 ms medians. Raw SEO
  remains 66 solely because the mandatory `noindex` fails `is-crawlable`.
- OWNER-ACCEPTED DEVIATION (2026-09-11): the final retained mobile LCP median
  of 2585 ms is 85 ms above the 2500 ms gate (range 2549–2606 ms). The prior
  Phase 7 median passed at 2374 ms, and the LCP element was the mandatory
  fictional-company concept disclosure. The safeguard remains unchanged.

## Final review remediation — 2026-09-11

- The mobile dialog was moved outside the blurred header as its sibling. The
  header, main, and footer become inert while it is open; the final suite covers
  full-viewport behavior after scrolling.
- All four direct CTA paths now focus their destination H2.
- Active navigation groups Method with Capabilities and groups Why Stratalyn
  and Talent with Careers.
- Keyboard coverage now exercises each of the three role controls.
- Component brand strings now read from typed content, and Twitter metadata
  uses `summary_large_image`.
- The unused Divider primitive and inert signal-pulse markup were removed.
- The final browser regression is 78/78, and no review remediation remains
  pending.
