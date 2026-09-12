# Stratalyn Systems — Final QA Report (Phase 9)

Date: 2026-09-11. This report covers the Phase 0–9 implementation, audit,
regression, and portfolio-packaging evidence against `docs/PROJECT_PLAN.md`.
No commit, push, deployment, or publication was performed.

## Environment

- Windows 11 Pro 64-bit, Node.js `24.13.0`, npm `11.6.2`.
- Next.js `16.3.4` (App Router, statically rendered `/`), React `19.2.8`,
  Tailwind CSS v4, TypeScript strict, ESLint 9.
- Playwright `@playwright/test@1.63.0`, Chrome for Testing `153.0.8010.12`
  (build 1243); desktop `1440 × 900` and mobile `375 × 812` projects,
  production server
  `http://127.0.0.1:3100`.
- Lighthouse `13.4.1` via npx (no repo dependency added), same Chromium
  binary, `noindex` kept active on every run.

## Commands and results

| Command | Result |
|---|---|
| `npm ci` | Pass; 367 packages installed, 368 audited, zero vulnerabilities; non-fatal ESLint 9.39.5 deprecation warning |
| `npx playwright install chromium` | Pass with no output; dry run confirmed Chrome for Testing 153.0.8010.12 (build 1243) |
| `npm run lint` | Pass, zero warnings/errors (`eslint . --max-warnings=0`) |
| `npm run typecheck` (`next typegen` + `tsc --noEmit`) | Pass |
| `npm run build` | Pass; 7/7 static generation with the documented parent-lock and local metadata-origin warnings |
| `npm test` | **78/78 pass** (39 checks × desktop + mobile Chromium), 46.3 seconds |
| `npm audit --audit-level=high` | Pass, zero vulnerabilities |
| `npm ls --package-lock-only --depth=0 --ignore-scripts` | Pass |

The suite lives in the single `tests/homepage.spec.ts` file maintained since
Phase 0 — consolidation complete, no separate runner or pending test setup
remains. Coverage per Section 14.2: homepage load; header/hero/footer/CTA
href contracts; all five destinations resolving to real sections with scroll
offset and heading focus; mobile menu open/close/Escape/focus trap/focus
return/breakpoint close/link close; project badges, content, visuals, and
zero-link condition; all three role details via pointer and keyboard with
disclosure and no apply action; clipboard success per address, denial
fallback, and no-mailto/no-form conditions; disclosures on all viewports;
robots metadata with zero JSON-LD; icon, robots.txt, and sitemap routes; one
loadable PNG Open Graph declaration with 1200 × 630 dimensions and the alt text
`STRATALYN / SYSTEMS — Fictional portfolio concept`;
320 px reflow; reveal-on-scroll; reduced-motion readability; active-nav
tracking; exactly one H1.

The final review additions explicitly cover all four direct CTA paths focusing
their destination H2, keyboard operation for each of the three role controls,
the scrolled full-viewport mobile dialog, and the completed active-navigation
group mappings.

## Viewports and manual checks

| Viewport | Overflow | Notes |
|---|---|---|
| 320 × 800 | 0 | Disclosures present; single H1; no mailto/forms |
| 375 × 812 | 0 | Playwright project + manual menu/role/clipboard passes |
| 390 × 844 | 0 | Disclosures present |
| 720 × 450 (≈200 % zoom reflow equivalent) | 0 | Disclosures present |
| 768 × 1024 | 0 | Tablet split hero and stacked grids verified visually |
| 1024 × 768 | 0 | — |
| 1440 × 900 | 0 | Playwright project + full-section screenshot review |
| 1920 × 1080 | 0 | Max-width containment holds; CTAs above the fold |

Keyboard-only traversal verified manually (Tab 1 → skip link, Tab 2 →
brand, Tab 3 → About) with a clearly visible cyan focus ring, screenshotted
during the audit. Zoom was verified through reflow-equivalent CSS viewports
(720 px ≈ 200 % on a 1440 px screen; 320 px ≈ 400 % on a 1280 px screen),
not OS-level zoom. No-JS readability holds: all eight H2s, all role titles,
both demo addresses, the demo note, and both disclosures are present in the
prerendered HTML (16/16 strings found).

## Accessibility findings

- Landmarks: 1 banner, 2 navs (`Primary`, `Footer`), 1 main, 9 sections,
  1 contentinfo. Heading inventory: 1 H1, 8 H2, 25 H3, zero hierarchy
  skips. Decorative visuals are `aria-hidden`; icon-only buttons carry
  accessible names; the mobile dialog uses focus trap, scroll lock, focus
  return, and `inert` on the sibling header, main, and footer.
- Contrast (computed): body text 18.5:1 / 9.6:1 / 8.8:1, cyan and success
  accents 10.8–12.2:1, control boundary 5.3:1 against the 3:1 non-text bar —
  9/9 pass.
- Reduced motion disables entrance, reveal, ping, pointer-follow, and
  smooth scrolling while keeping all content visible (tested).
- No critical accessibility issues found. Limitation: no live
  screen-reader session was run; findings rest on roles, names, focus
  behavior, and computed contrast.

## Phase 7 Lighthouse baseline (historical, lab only)

Three runs per profile on the production build with consistent cold-cache
navigation. Medians with ranges reported; no best-run picking.

| Profile | Performance | Accessibility | Best Practices | LCP | CLS |
|---|---|---|---|---|---|
| Mobile (runs 88 / 97 / 82) | median **88** (range 82–97) | 100 | 100 | median **2374 ms** (2019–2705) | 0.000 |
| Desktop (runs 100 ×3) | median **100** | 100 | 100 | median **619 ms** (604–670) | 0.000 |

- Mobile TBT ranged 148–691 ms and desktop TBT stayed ≤55 ms. TBT is
  recorded as a diagnostic only — Lighthouse navigation does not measure
  INP, so no INP value is claimed anywhere in this report.
- Raw SEO score is **66 on both profiles**; the single failing audit is
  `is-crawlable` (`Page is blocked from indexing`), which is the expected
  and intentional outcome of the concept's `noindex` control. Every other
  applicable SEO audit passes.
- Only performance opportunity flagged: ~300 ms unused JavaScript from the
  framework baseline; no render-blocking, image, font-display, or
  third-party findings. Total JS ≈ 571 KB (largest chunk ≈ 224 KB React).
- Harness note: Lighthouse's Chrome temp-profile cleanup threw EPERM on
  this machine after several runs; every report was written with a fresh
  fetch timestamp and is unaffected.

These Phase 7 measurements remain historical evidence for the application
before Phase 9 packaging. Raw JSON was not retained for this earlier set.

## Final retained Phase 9 Lighthouse evidence (lab only)

Six raw reports from the final clean verification build are retained under
[`docs/qa/lighthouse/`](qa/lighthouse/README.md). Lighthouse 13.4.1 ran fresh
navigation with storage reset and simulated throttling against the production
URL `http://127.0.0.1:3100/` from 2026-09-11 08:10:33Z–08:13:31Z. `noindex`
remained active.

| Profile | Scores by run (P / A / BP / SEO) | LCP by run | CLS by run | TBT by run |
|---|---|---|---|---|
| Mobile | 95/100/100/66; 97/100/100/66; 96/100/100/66 | 2606 / 2549 / 2585 ms | 0 / 0 / 0 | 144 / 78 / 107 ms |
| Desktop | 100/100/100/66 ×3 | 556 / 563 / 584 ms | 0 / 0 / 0 | 0 / 4 / 0 ms |

| Profile | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Mobile | median **96** (95–97) | 100 | 100 | 66 | median **2585 ms** (2549–2606) | 0 | median 107 ms (78–144) |
| Desktop | median **100** | 100 | 100 | 66 | median **563 ms** (556–584) | 0 | median 0 ms (0–4) |

| Raw report | SHA-256 |
|---|---|
| `desktop-run-1.json` | `10462dde29daffbe649842dd40ad331f05f8802bec8ca10c155f1f0f815e4e4a` |
| `desktop-run-2.json` | `5ad7f00c546992a92b8b4e8edb7e807a0d6ebfb7036d8bb9bce72df6d24e19d9` |
| `desktop-run-3.json` | `715c98c1c66a9058d3b4236a434a042e95a22f0c8e66dde12971442253ccffa4` |
| `mobile-run-1.json` | `f316d2db9901a0b038193ac3e5333762a527fbafcd80316d081f2202c2305c73` |
| `mobile-run-2.json` | `3c8db9f41184435a1abc9546f508014c65749cd04d4e6052ccf9cb6cde981307` |
| `mobile-run-3.json` | `5275b4638e342d8dd1eda0c1ef7ba0c4942b298eec67e0ee51a5e21aa565cb55` |

- Mobile emulation: 412 × 823, DPR 1.75, 150 ms RTT, 1638.4 Kbps,
  4× CPU slowdown. Desktop: 1350 × 940, DPR 1, 40 ms RTT, 10240 Kbps,
  1× CPU.
- All six reports parsed with zero run warnings and zero runtime errors. The
  sole failing SEO audit remains the expected `is-crawlable` result caused by
  the mandatory concept `noindex`; every other applicable SEO audit passes.
- Four CLI invocations returned a post-report Windows EPERM while deleting a
  temporary Chrome profile. Each report had already been written, parsed
  successfully, and remains valid evidence.
- TBT is a Lighthouse diagnostic, not INP. These lab results are not field
  Core Web Vitals evidence.
- The owner explicitly accepted the final mobile LCP median 2585 ms deviation
  on 2026-09-11. It is 85 ms above the 2500 ms gate, with a 2549–2606 ms
  range; the earlier Phase 7 median was a passing 2374 ms. The LCP element in
  every retained run was the mandatory fictional-company concept disclosure,
  which remains unchanged.

## Interaction measurements (lab only)

Playwright-driven handler durations on production (3 reps each, ≤200 ms
target; automation overhead included, so these bound rather than equal
app cost — they are **not** INP and not field data). The clipboard
rejection/fallback row was captured on the final mobile production build with
a fresh browser context for every repetition:

| Scenario | Durations | Max | Verdict |
|---|---|---|---|
| Menu open (375 px) | 122, 65, 55 ms | 122 ms | Pass |
| Menu Escape close + focus return | 43, 17, 17 ms | 43 ms | Pass |
| Anchor select → heading focus | 114, 43, 47 ms | 114 ms | Pass |
| Role detail toggle | 50, 62, 56 ms | 62 ms | Pass |
| Clipboard copy success | 67, 64, 89 ms | 89 ms | Pass |
| Clipboard rejection/fallback (final mobile build) | 68, 59, 47 ms | 68 ms | Pass |

Field Core Web Vitals (p75 LCP/CLS/INP from real visits) require production
RUM data, which the concept build intentionally does not collect — no field
pass is claimed.

## Content integrity

- All section copy matches the Section 2 content pack; a 16-string
  prerender check (headings, roles, addresses, notes, disclosures) passes.
- Three `Concept project` badges and three `Concept role` badges rendered;
  concept bar and footer disclosure present on every checked viewport.
- Zero `mailto:`, forms, external anchors, social links, testimonials,
  metrics, client names, or detail URLs. Visual briefs guided artwork only
  and never render as copy.
- Owner-approved structural derivation: the role-list H2
  `Concept roles` pluralizes the mandated badge label because the pack
  defines no website heading for that list.

## Known limitations

- Chromium-only browser coverage (Phase 0 baseline scope).
- No live screen-reader or OS-level zoom session; see method notes above.
- No RUM/analytics by design, so field vitals are unmeasured.
- The retained mobile Lighthouse LCP median is 2585 ms against the 2500 ms
  lab gate; the owner accepted this measured deviation on 2026-09-11.
- Local non-Vercel builds use `http://localhost:3000` as the metadata origin.
  Deployment-origin social URLs require Vercel System Environment Variables;
  the fictional canonical `stratalyn.example` must never be used as an asset
  origin.

## Accepted deviations and decisions

1. **Owner accepted on 2026-09-09 — mobile Performance median 88 vs the
   ≥90 gate.** Evidence points at host noise (82–97 swing, unstable TBT on
   an identical build) plus the framework baseline, not at content or
   assets. No code was changed for the score; the owner explicitly accepted
   this deviation while retaining the measured evidence above.
2. **Owner accepted on 2026-09-11 — final retained mobile LCP median 2585 ms
   vs the 2500 ms gate.** The retained range is 2549–2606 ms, the prior Phase 7
   build passed at a 2374 ms median, and the LCP element was the mandatory
   concept disclosure. The safeguard remains intact.
3. **Approved — visual checkpoint 2.** The owner explicitly approved the
   complete mobile and desktop page treatment, including the structural
   `Concept roles` heading, on 2026-09-09.
4. No deferred navigation dependencies remain: all five destinations
   resolve to real sections with offset and focus since Phase 5.

## Final review remediation

- The mobile dialog is now a sibling of the blurred header. Opening it makes
  the header, main, and footer inert; scrolled-state full-viewport behavior is
  covered by the final browser suite.
- All four direct CTA paths move focus to the destination H2.
- Active navigation maps Method to Capabilities and maps Why Stratalyn and
  Talent to Careers.
- Each of the three role controls has explicit keyboard coverage.
- Component brand strings now come from typed content, and the Twitter card is
  `summary_large_image`.
- The unused Divider and inert signal-pulse markup were removed.

All review findings are resolved; no remediation or navigation dependency
remains pending.

## Phase 9 clean-room verification

Verification ran in
`C:\Users\BSSN-7~1\AppData\Local\Temp\opencode\stratalyn-phase9-verify`.
The source copy excluded `.git`, dependencies/build/test output,
`.playwright-mcp`, `.superpowers`, and generated TypeScript files. At copy
time, 61 intended files matched byte-for-byte; snapshot SHA-256:
`2e2188f7e9ddf2d5d8ffa018e6c684d36dc3bdc91debc85e6ff972a0271750e3`.
Documentation, screenshots, and raw QA artifacts were refreshed afterward,
so this value records copy-time identity rather than a hash of the final docs.
The final 43-file application/config/test/lock subset still matches the
verification copy exactly; manifest SHA-256:
`c0faabf37c69579339a5d2743d37bedd7405996a519da9b3ef8d840656421ca0`.
No application/config/test/lock file changed after verification.
The unchanged post-build `package-lock.json` SHA-256 is
`8f0db2f2bfdbda940e225358c12741b48bf334e2439e2e3976f634efc09c46c9`.

| Check | Result |
|---|---|
| `npm ci` from `package-lock.json` | Pass; 367 installed, 368 audited, zero vulnerabilities |
| `npx playwright install chromium` | Pass/no output; pinned browser confirmed by dry run |
| `npm run lint` | Pass, zero warnings/errors |
| `npm run typecheck` | Pass (`next typegen` and `tsc --noEmit`) |
| `npm run build` | Pass; 7/7 static pages |
| `npm test` against the production server | Pass, 78/78 (39 × desktop/mobile) in 46.3 seconds |
| `npm audit --audit-level=high` | Pass, zero vulnerabilities |
| Lockfile-only `npm ls` | Pass |
| Full-page screenshots | Pass; desktop 1440 × 9404, 994090 bytes; mobile 375 × 13544, 856551 bytes |

The production screenshots at
[`homepage-desktop.png`](screenshots/homepage-desktop.png) and
[`homepage-mobile.png`](screenshots/homepage-mobile.png) were captured with
reduced motion for deterministic visibility and zero console errors.

- Desktop SHA-256:
  `4af3793cdaa17fe783d3b418505d23f218b492e88670a6637beaf3a377b003a2`.
- Mobile SHA-256:
  `341416842430dcd96fcb7f902af5cea532590b26ecfa9063fda0e7702b72297c`.

The final intended-source credential-pattern scan returned zero matches. No `.env*`,
`.pem`, `.key`, `.p12`, or `.pfx` files and no `*.log`, `*.tmp`, `*.temp`,
`*.bak`, `*.orig`, or `*.rej` source files were present. Ignored
`.superpowers` tool state was excluded from both the clean copy and scan and
must not be packaged.

The clean-room build emitted the same two documented non-source warnings: Next ignored a parent
`package-lock.json` because the temporary directory sits under the Windows user
home, and local non-Vercel builds use `http://localhost:3000` as metadata
origin. A separate post-build filesystem `npm ls --depth=0` reported six
generated image/WASM helpers as extraneous in temporary `node_modules`; the
lockfile remained unchanged, so this is temporary build state rather than a
source dependency change.

No commit, push, deployment, or publication occurred during Phase 9 or the
final evidence refresh.
