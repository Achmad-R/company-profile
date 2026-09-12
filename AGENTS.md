# Stratalyn Systems — Agent Instructions

Fictional portfolio concept. Stratalyn Systems is not a real company.
Keep every fictional-concept badge, disclosure, `.example` address, and
`noindex` control intact.

## Goal

One-page company introduction and recruitment website. Primary audience is
experienced technical talent; secondary audience is technical
decision-makers.

## Active source

- `docs/PROJECT_PLAN.md` is the single active requirement source.
- `Stratalyn_Systems_Company_Profile_and_OpenCode_Plan.md` at the root is
  only a pointer to that file.
- Section 2 of `docs/PROJECT_PLAN.md` is the complete fictional content
  source of truth. Never add facts, projects, metrics, jobs, contacts,
  testimonials, or social accounts beyond it.

## Stack actually installed

- Next.js `16.3.4`, App Router, `src/` directory, `@/*` import alias.
- React `19.2.8`, React DOM `19.2.8`.
- TypeScript strict (`typescript@^5`).
- Tailwind CSS v4 (`tailwindcss@^4`, `@tailwindcss/postcss@^4`).
- ESLint `^9` with `eslint-config-next@16.3.4`.
- React Compiler disabled.
- Package manager: npm with one `package-lock.json`.
- Browser tests: Playwright `@playwright/test@1.63.0`, Chromium only for the
  Phase 0 baseline.
- Runtime verified during Phase 0: Node.js `24.13.0`, npm `11.6.2`,
  Windows 11 Pro 64-bit.

## Repository layout

- `src/app/`: App Router entry, layout, global styles.
- `src/components/`: layout, sections, UI primitives, visuals when added.
- `src/content/site-content.ts`: typed fictional content when added in
  Phase 1.
- `src/lib/`, `src/types/`: helpers and content types when needed.
- `tests/`: Playwright browser tests, starting with `homepage.spec.ts`.
- `docs/PROJECT_PLAN.md`: active requirements.
- `docs/DESIGN_DECISIONS.md`: toolchain and approved decisions.
- `public/`: only assets actually referenced by source.

## Commands

- Install: `npm ci`
- Install browser: `npx playwright install chromium`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Browser tests: `npm test`
- Smoke test: `npm run test:smoke`
- Production build: `npm run build`
- Production server: `npm run start`

`next build` does not run lint. `npm run typecheck` runs
`next typegen` first through `pretypecheck`, then `tsc --noEmit`.
Run `npm run build` before browser tests because Playwright targets the
production server.

## Content and concept rules

- Preserve `Portfolio concept · Stratalyn Systems is a fictional company.`
  and the footer disclosure.
- Keep `Concept project` and `Concept role` badges with their content.
- Display `hello@stratalyn.example` and `careers@stratalyn.example` only as
  demo text. No `mailto:`, no submission simulation, no real contact flow.
- Keep canonical `https://stratalyn.example` for concept identity only.
- Keep HTML robots `noindex, nofollow, noarchive`.
- Do not render Organization JSON-LD while `isConcept: true`.
- Put company facts only in typed site content, not scattered through JSX.

## Design and accessibility constraints

- Engineering Signal is the visual direction: grid, nodes, signal flow,
  section numbers, modular panels. No generic SaaS cards, robot/ glowing
  brain imagery, stock photos, fake logos, or heavy parallax.
- Static rendering by default. Keep client JavaScript limited to header
  menu, reveal/pointer behavior, role details, and clipboard feedback.
- Semantic landmarks, one H1, visible focus, keyboard access, 320 px reflow
  without horizontal scrolling, and `prefers-reduced-motion` support.
- Ambient motion runs once per page load, stops within five seconds, is
  static on mobile, and is disabled under reduced motion.

## Execution rules

- Phase 0 only unless the user explicitly approves another phase.
- One phase per Build. Do not expand scope on convenience grounds.
- Verify every change before claiming completion: report actual lint,
  typecheck, test, and build results with evidence.
- No commits, pushes, publication, or deployment unless explicitly
  requested.
- Record new technical decisions in `docs/DESIGN_DECISIONS.md`.
- Restart OpenCode after changing `opencode.json` so the new instructions
  take effect.
