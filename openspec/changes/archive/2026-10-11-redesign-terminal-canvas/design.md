# Design

## Context

See `proposal.md` for background and user goals.

The current codebase is a Vite + React 19 + Tailwind CSS 4 single-page portfolio styled with default Tailwind slate/indigo utilities. The Stitch design project "Matheus Faleiro Portfolio Website" provides a high-contrast "Terminal Canvas" design aesthetic: monospaced terminal headers, off-white polaroid artifacts, colorful multi-user cursors, and pastel sticky notes over a deep pitch-black (`#000000`) background.

To implement this with senior frontend engineering rigor, we must avoid fragile ad-hoc styling or monolithic components. We need clean architecture: a structured design token foundation in Tailwind 4, a domain-driven content layer, modular UI primitives, robust testing with Vitest/RTL/jest-axe, and hardened CI pipelines.

## Goals / Non-Goals

**Goals:**

- Faithfully replicate the Terminal Canvas look and feel from Stitch screen `23e8d6a6557d4efb9b623b4f9527e8f7`.
- Implement a clean frontend component architecture:
  - `src/types/`: Strict TypeScript data models for all domain entities (Experience, Principles, Skills, Education, Profile).
  - `src/data/`: Single source of truth containing verbatim Stitch content.
  - `src/components/ui/`: Reusable UI primitives (StickyNote, PolaroidCard, CursorBadge, StatusBadge, CodeSnippet, SectionHeader).
  - `src/components/sections/`: High-level page sections (Hero, Principles, Experience, Skills, Education, Contact).
  - `src/components/layout/`: Shell elements (Header, MobileNav, Footer).
- Self-host fonts (Space Mono & DM Sans) and download remote assets into `public/assets/` to eliminate runtime third-party CDNs.
- Integrate Vitest, React Testing Library, and jest-axe with unit tests covering UI primitives, navigation, clipboard logic, and accessibility compliance.
- Update GitHub Actions workflow to run lint, type-check, and tests prior to deployment.

**Non-Goals:**

- Preserving the legacy Projects section (per user confirmation, dropped in favor of the Stitch structure).
- Introducing a runtime backend or dynamic CMS (static data module is sufficient and optimal for GitHub Pages).
- End-to-end browser automation (Playwright/Cypress) or visual regression tooling (per user decision, keeping test scope focused on unit + RTL + axe).

## Decisions

### 1. Tailwind CSS 4 Token Integration via `@theme`

- **Choice**: Configure Terminal Canvas tokens in `src/index.css` using Tailwind 4's native `@theme` directive.
- **Rationale**: Tailwind 4 replaces `tailwind.config.js` with CSS-first configuration. Defining `--color-surface-canvas`, `--color-tag-cyan`, `--font-headline-lg`, etc., gives full compile-time Tailwind class generation (`bg-surface-canvas`, `text-tag-cyan`, `font-headline-lg`) without external plugins.
- **Alternatives considered**: CSS Modules or raw inline styles. Rejected because Tailwind 4 is already integrated into the build pipeline and provides concise utility styling across responsive breakpoints.

### 2. WCAG AA Contrast Adjustments on Specific Badges

- **Choice**: Slightly darken saturated backgrounds where paired with white `#FCFAFA` text (e.g., `#2563EB` for blue buttons, `#7C3AED` for purple cursor badges).
- **Rationale**: Per user direction, guarantees compliance with WCAG AA 4.5:1 text contrast while preserving visual fidelity.
- **Alternatives considered**: Using black text on light tags; rejected in favor of preserving white text on blue/purple as shown in Stitch.

### 3. Self-Hosted Fonts via Fontsource

- **Choice**: Install `@fontsource/space-mono` and `@fontsource-variable/dm-sans` as npm dependencies and import them into `src/index.css`.
- **Rationale**: Eliminates Google Fonts render-blocking requests, ensures offline development reliability, avoids privacy concerns with third-party font CDNs, and guarantees identical rendering in CI.
- **Alternatives considered**: Google Fonts `<link>` tags in `index.html`. Rejected because third-party network fetches can fail or degrade performance and violate self-contained deployment best practices.

### 4. Lucide Icons over Material Symbols Web Font

- **Choice**: Use `lucide-react` icons (e.g., `Mail`, `Link`, `MapPin`, `Copy`, `Terminal`, `ArrowRight`, `ExternalLink`) styled to match Stitch.
- **Rationale**: `lucide-react` is already a project dependency. It provides tree-shakable inline SVGs, zero extra font network overhead, pixel-perfect alignment, and complete styling flexibility via Tailwind classes.
- **Alternatives considered**: Material Symbols web font. Rejected because loading a 2MB variable icon font for a dozen icons adds unnecessary overhead and layout shift.

### 5. Local Static Asset Bundling

- **Choice**: Store the portrait photo (`portrait.png`) and logo monogram (`monogram.png`) in `public/assets/`.
- **Rationale**: Stitch HTML references temporary Google User Content URLs (`lh3.googleusercontent.com/...`) which expire and cause 404s.
- **Alternatives considered**: Hotlinking Google URLs. Rejected due to imminent link expiration.

### 6. Component & Domain Architecture

```
src/
├── types/
│   └── portfolio.ts         # Strict types: Pillar, Milestone, SkillGroup, EducationNode, etc.
├── data/
│   └── portfolioData.ts     # Verbatim Stitch content typed by portfolio.ts
├── components/
│   ├── ui/                  # Presentational primitives
│   │   ├── Badge.tsx
│   │   ├── StickyNote.tsx
│   │   ├── PolaroidCard.tsx
│   │   ├── CursorTag.tsx
│   │   ├── CodeBlock.tsx
│   │   └── Toast.tsx
│   ├── layout/              # Structural wrappers
│   │   ├── Header.tsx
│   │   ├── MobileNav.tsx
│   │   └── Footer.tsx
│   └── sections/            # Page sections
│       ├── Hero.tsx
│       ├── Principles.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       └── Contact.tsx
├── hooks/
│   ├── useActiveSection.ts  # IntersectionObserver for header navigation highlighting
│   └── useClipboard.ts      # Copy email with toast notification
└── App.tsx                  # Clean compositional root
```

### 7. Testing & Quality Gate Strategy

- **Choice**: Vitest + jsdom + `@testing-library/react` + `jest-axe`.
- **Coverage**:
  - Unit tests for `useClipboard` and interactive UI primitives.
  - Component tests for each section ensuring expected data renders.
  - Automated axe accessibility scans verifying zero WCAG AA rule violations on each section.
  - Type-checking with `tsc --noEmit` and linting with `oxlint`.
  - GitHub Actions update to enforce `lint`, `typecheck`, and `test` in parallel before the `build` & `deploy` steps.

## Risks / Trade-offs

- **[Risk] Saturated post-it colors may contrast poorly with light text**
  → _Mitigation_: All pastel sticky notes (`postit-yellow`, `postit-cyan`, `postit-lime`, etc.) explicitly pair with dark ink text (`#303030` or `#131313`), and dark badge pills pair with white text with adjusted contrast.
- **[Risk] Complex asymmetric rotation and transforms could cause horizontal layout overflow on mobile (<360px)**
  → _Mitigation_: Mobile styles tone down negative translations and rotational angles, wrapping sticky notes in responsive flow with `overflow-hidden` container guards.
- **[Risk] Clipboard API may fail in non-HTTPS / unsupported environments**
  → _Mitigation_: Fallback using a hidden textarea / standard mailto invocation with clear user feedback.

## Migration Plan

1. Install required dependencies (`@fontsource/*`, test utilities).
2. Configure Tailwind 4 `@theme` and typography in `src/index.css`.
3. Save local assets into `public/assets/`.
4. Establish domain types in `src/types/portfolio.ts` and populate `src/data/portfolioData.ts`.
5. Build UI primitives in `src/components/ui/` with unit tests.
6. Build section components in `src/components/sections/` and layout components in `src/components/layout/`.
7. Assemble in `src/App.tsx` and verify styling, responsiveness, and accessibility.
8. Wire CI pipeline in `.github/workflows/deploy.yml` and Husky hooks.
