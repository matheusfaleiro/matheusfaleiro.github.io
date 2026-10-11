# Tasks

## 1. Project Dependencies and Infrastructure Setup

- [x] 1.1 Install dependencies: `@fontsource/space-mono`, `@fontsource-variable/dm-sans`, and dev dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jsdom`, `jest-axe`, `@types/jest-axe`. Verify `npm ls` runs clean.
- [x] 1.2 Configure Vitest in `vite.config.ts`, setup file in `src/test/setup.ts`, and add `test` / `test:watch` scripts in `package.json`. Verify running `npm run test` executes without errors.
- [x] 1.3 Download the portrait image and monogram logo from Stitch assets into `public/assets/` (`portrait.png` and `monogram.png`). Verify files exist and load locally.
- [x] 1.4 Configure Tailwind CSS 4 `@theme` in `src/index.css` importing fontsource packages and mapping all Terminal Canvas colors, font families, radius tokens, and spacing tokens. Verify styles compile without CSS errors.

## 2. Content Modeling and Domain Types

- [x] 2.1 Define strict TypeScript interfaces in `src/types/portfolio.ts` for profile metadata, navigation items, pillars, career milestones, skill matrix items, spoken languages, and academic nodes. Verify `tsc -b` passes.
- [x] 2.2 Create `src/data/portfolioData.ts` with verbatim Stitch content for all sections, adhering to `src/types/portfolio.ts`. Verify type safety and unit test data integrity with a snapshot or structural schema test in `src/data/portfolioData.test.ts`.

## 3. UI Primitives and Design System Components

- [x] 3.1 Implement `Badge` / `Pill` and `CursorTag` components in `src/components/ui/` with unit tests and jest-axe tests in `src/components/ui/Badge.test.tsx`.
- [x] 3.2 Implement `StickyNote` primitive with rotation variants, pastel backgrounds, and dark ink typography in `src/components/ui/StickyNote.tsx`, accompanied by unit tests in `src/components/ui/StickyNote.test.tsx`.
- [x] 3.3 Implement `PolaroidCard` adhering to the 2:1 outer/inner border-radius rule, grayscale hover effect, and monospace caption in `src/components/ui/PolaroidCard.tsx` with test in `src/components/ui/PolaroidCard.test.tsx`.
- [x] 3.4 Implement `CodeBlock` component for architectural syntax rendering in `src/components/ui/CodeBlock.tsx` with unit test in `src/components/ui/CodeBlock.test.tsx`.
- [x] 3.5 Implement `useClipboard` hook and accessible `Toast` notification primitive for copy-email actions with unit tests in `src/hooks/useClipboard.test.ts`.

## 4. Shell and Navigation Components

- [x] 4.1 Implement `useActiveSection` hook to observe viewport intersections for navigation link highlighting with test in `src/hooks/useActiveSection.test.ts`.
- [x] 4.2 Build `Header` component in `src/components/layout/Header.tsx` with branding monogram, availability badge, section links, email copy button, and mobile drawer toggle, with tests in `src/components/layout/Header.test.tsx`.
- [x] 4.3 Build `Footer` component in `src/components/layout/Footer.tsx` with node coordinates, quick dispatch links, network handshakes, and security markers, with tests and axe scan in `src/components/layout/Footer.test.tsx`.
- [x] 4.4 Update `index.html` meta tags (title, description, keywords, Open Graph, Twitter cards) to "Matheus Faleiro — AI Engineer & System Architect". Verify markup in document head.

## 5. Portfolio Section Components

- [x] 5.1 Implement `Hero` section in `src/components/sections/Hero.tsx` with background dot grid, typography anchor, CTA buttons, workbench collage (sticky notes, cursors, polaroid portrait), with unit & axe test in `src/components/sections/Hero.test.tsx`.
- [x] 5.2 Implement `Principles` section in `src/components/sections/Principles.tsx` with the 4 architectural pillar cards, code snippets, and sticky tags, with unit & axe test in `src/components/sections/Principles.test.tsx`.
- [x] 5.3 Implement `Experience` section in `src/components/sections/Experience.tsx` with vertical timeline markers and 8 career milestone cards, with unit & axe test in `src/components/sections/Experience.test.tsx`.
- [x] 5.4 Implement `Skills` section in `src/components/sections/Skills.tsx` with top skill stickers, 3-column technical bento grid, and spoken languages bar, with unit & axe test in `src/components/sections/Skills.test.tsx`.
- [x] 5.5 Implement `Education` section in `src/components/sections/Education.tsx` with the 3 academic nodes, with unit & axe test in `src/components/sections/Education.test.tsx`.
- [x] 5.6 Implement `Contact` section in `src/components/sections/Contact.tsx` with prompt status, email copy card, and LinkedIn card, with unit & axe test in `src/components/sections/Contact.test.tsx`.

## 6. Composition, Verification, and Pipeline Quality Gates

- [x] 6.1 Assemble `src/App.tsx` incorporating `Header`, `Hero`, `Principles`, `Experience`, `Skills`, `Education`, `Contact`, and `Footer`. Clean up deprecated legacy files (`src/App.css`, legacy components). Verify page renders seamlessly in `npm run dev`.
- [x] 6.2 Configure Husky pre-commit hook in `.husky/pre-commit` to execute `npx lint-staged` with oxlint, prettier, and tsc check. Verify hook runs on a dry run.
- [x] 6.3 Update GitHub Actions `.github/workflows/deploy.yml` with parallel `lint`, `typecheck`, and `test` jobs that must pass before `build` and `deploy`.
- [x] 6.4 Execute full local validation: `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build`. Verify 100% pass rate with zero errors and zero accessibility violations.

## Workflow follow-up

- Review rendered website in browser for visual polish and responsiveness across desktop and mobile screens.
- Archive the change after implementation and validation.
