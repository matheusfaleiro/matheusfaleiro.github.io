# Proposal

## Why

The live site is a generic slate/indigo template with placeholder projects and a "Software Engineer" positioning that no longer reflects Matheus's profile. A finished design — "Terminal Canvas", Stitch project _Matheus Faleiro Portfolio Website_, screen `23e8d6a6557d4efb9b623b4f9527e8f7` — now exists and is mirrored in `DESIGN.md`, but nothing in the codebase consumes it. The current code also lacks the quality guardrails (typed content model, unit tests, CI gates) expected of a senior-maintained frontend.

## What Changes

- **BREAKING (content)**: Replace the entire page with the Stitch screen's structure and copy, verbatim: Hero, Architectural Principles, Experience timeline, Skills/Stack matrix (incl. spoken languages), Education, Contact, Footer.
- **BREAKING (content)**: Remove the existing `Projects` section, `Skills` grid, and placeholder project data. The Stitch design has no projects section.
- Introduce Terminal Canvas design tokens (colors, typography scale, radii, spacing) as a Tailwind 4 `@theme`, so components use semantic classes (`bg-surface-canvas`, `text-tag-cyan`, `font-mono`) instead of raw palette values.
- Self-host Space Mono and DM Sans and replace the Material Symbols icon font with tree-shaken `lucide-react` icons.
- Download the remote Stitch images (portrait, monogram) into the repo, so the site has no runtime dependency on expiring `googleusercontent` URLs.
- Restructure `src/` into a layered architecture: typed content data → domain types → reusable UI primitives → section components → app shell.
- Add interactive behaviour: copy-email-to-clipboard with accessible feedback (replacing Stitch's `alert()`), active-section highlighting in the nav, and a mobile navigation menu (Stitch hides the nav below `md` with no alternative).
- Respect `prefers-reduced-motion` for ping/pulse/rotate/translate animations.
- Add Vitest + React Testing Library + jest-axe unit/accessibility tests, a stricter TypeScript config, and expanded oxlint rules.
- Gate the GitHub Pages deploy on `lint`, `typecheck`, `test`, and `build` jobs. Wire Husky pre-commit (the `prepare` script exists but `.husky/` is missing).
- Update `index.html` metadata (title, description, OG/Twitter) to the new AI Engineer & System Architect positioning.

## Capabilities

### New Capabilities

- `design-tokens`: Terminal Canvas visual foundation — colour, typography, radius, and spacing tokens, font loading, base surface styles, and reduced-motion behaviour.
- `site-shell`: Page chrome and navigation — fixed header with brand, availability badge, section nav (desktop + mobile), active-section state, copy-email action, footer, and SEO metadata.
- `portfolio-sections`: Content sections rendered from a typed content model — hero workbench, principles, experience timeline, skills matrix, education, and contact.
- `delivery-pipeline`: Quality gates — linting, type-checking, unit/a11y tests, pre-commit hooks, and CI that blocks deploy on failure.

### Modified Capabilities

<!-- None: openspec/specs/ is empty; no existing capabilities. -->

## Impact

- **Code**: Rewrites `src/App.tsx`, `src/index.css`, and `src/components/*`. Replaces `src/data/portfolio.ts` and `src/types/index.ts`. Deletes `src/App.css`, `src/assets/react.svg`, `src/assets/vite.svg`, and `src/assets/hero.png` (if unused).
- **Dependencies (dev)**: `vitest`, `@vitest/coverage-v8`, `jsdom`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`, `jest-axe`, `@types/jest-axe`, `@fontsource/space-mono`, `@fontsource-variable/dm-sans`. `lucide-react` stays.
- **Config**: `vite.config.ts` (test block), `tsconfig.app.json` (strict flags), `.oxlintrc.json`, `package.json` scripts, a new `.husky/pre-commit`, and `.github/workflows/deploy.yml`.
- **Docs**: `DESIGN.md` remains the design reference; `README.md` gains a scripts/architecture section.
- **Content risk**: Copying Stitch verbatim (user decision) publishes Stitch-generated decorative facts as-is: PGP fingerprint, "TLS 1.3 Certified", "Duoc uc - 2006", "TEAM GOT // PROD", "© 2024", and `me@matheusfaleiro.dev`. All live in one content module, so they are easy to correct later.
