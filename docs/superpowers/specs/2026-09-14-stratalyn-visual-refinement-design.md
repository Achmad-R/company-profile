# Stratalyn Visual Refinement Design

**Date:** 2026-09-14
**Status:** Approved in chat for staged implementation
**Mode:** Redesign - Preserve

## Design Read

One-page company and recruitment portfolio for experienced technical talent,
with a serious dark-engineering language built from Tailwind CSS v4, Geist,
bespoke Engineering Signal visuals, and restrained purposeful motion.

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 5`
- `VISUAL_DENSITY: 4`

## Problem

The hero and project diagrams are specific to Stratalyn, but the middle and
lower page repeatedly use the same section-heading and ruled-row grammar. Hero
CTAs also fall below the initial viewport at common desktop sizes. Careers does
not yet carry visual weight equal to Selected Work even though experienced
technical talent is the primary audience.

## Approved Direction

Use targeted evolution rather than a full visual replacement:

1. Treat Selected Work and Careers as equal emotional peaks.
2. Connect the page with one restrained Engineering Signal rail.
3. Make collapsed role rows concise and reserve approved fields for details.
4. Address every audit finding in separate, reviewable passes.
5. Keep the current stack and add no animation or component dependency.

> **Supersession (2026-09-21):** Item 3 and its matching success criterion
> are replaced by the owner-approved Phase 5 inline-detail contract. The
> collapsed overview remains scannable, while expansion restates every existing
> typed field with explicit labels and adds the mandatory fictional-role
> disclosure. No new role content or apply action is introduced.

## Passes

### Pass A - Hero Compliance

Rebalance the display scale and split proportions so both hero CTAs fit inside
the initial viewport at 1024 x 768, 1440 x 900, and 1920 x 1080. Keep exact
copy. Move the trust cue into a full-width signal handoff after the two-column
hero composition and give the Engineering Signal panel greater visual weight.

### Pass B - Page Rhythm

Introduce a restrained signal rail and vary the composition of About,
Capabilities, Method, and Why without turning them into generic cards.

### Pass C - Careers Twin Peak

Give Talent and Careers an asymmetric human-system composition using existing
role and ownership content. Use violet for human judgment and careers while
keeping cyan for machine signal and action.

### Pass D - Mobile Density

Reduce repeated spacing and improve grouping at narrow widths without deleting
or rewriting required content.

### Pass E - Interaction Cleanup

Replace the header scroll-state listener with an observer sentinel. Preserve
active navigation, one-shot reveals, static touch behavior, and reduced motion.

### Pass F - Verification

Run behavior, responsive, visual, accessibility, production-build, and repeated
Lighthouse checks. Update decision and QA evidence only after measured results.

## Non-Negotiable Constraints

- `docs/PROJECT_PLAN.md` Section 2 remains the complete content source.
- Preserve all numbered labels, exact punctuation, disclosures, badges,
  `.example` addresses, canonical identity, and indexing controls.
- Preserve the dark theme, Geist pair, cyan/violet tokens, and success green.
- Preserve bespoke CSS/SVG visuals; do not add stock imagery or fake product UI.
- Do not add facts, metrics, clients, testimonials, benefits, application flows,
  social accounts, contact submission, or Organization JSON-LD.
- Preserve anchor IDs, navigation labels, CTA labels, and keyboard/focus behavior.
- Keep static rendering and minimal client JavaScript.
- Do not commit, push, or deploy without a separate explicit request.

## Success Criteria

- Hero CTAs fit inside every required initial desktop viewport.
- The exact H1, supporting copy, CTA labels, and trust cue remain present.
- Work and Careers become equal visual peaks after all passes.
- Role expansion follows the superseding Phase 5 restatement contract above.
- No horizontal overflow at 320 px and no accessibility regression.
- Reduced-motion and no-JavaScript content remain usable.
- Lint, typecheck, browser tests, and production build pass after each pass.
