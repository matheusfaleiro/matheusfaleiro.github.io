# Spec Delta

## Purpose

Defines the Terminal Canvas visual foundation: the colours, type, shape, spacing and motion rules every rendered surface of the portfolio must follow, so the site stays faithful to the Stitch design and `DESIGN.md`.

## ADDED Requirements

### Requirement: Canvas colour foundation

The page SHALL render on a pure black `#000000` canvas with primary text in `#e2e2e2`. Alternating sections SHALL use the `#0e0e0e` lowest-container surface. Cards SHALL use the `#1f1f1f` container surface.

#### Scenario: Page background

- **WHEN** the site is loaded at any viewport width
- **THEN** the document body background computes to `rgb(0, 0, 0)` and default body text to `rgb(226, 226, 226)`

#### Scenario: Alternating section surfaces

- **WHEN** the Principles, Skills and Contact sections render
- **THEN** each section background is `#0e0e0e`, while Hero, Experience and Education sit on the `#000000` canvas

### Requirement: Accent palette usage

Interactive primary actions SHALL use a high-contrast accessible blue (e.g., `#2563EB`) with `#FCFAFA` text to meet WCAG AA contrast, while other accents use defined tag colours: cyan `#1ABCFE`, emerald `#0ACF83`, purple with accessible dark variant `#7C3AED` when paired with white text, and crimson `#F11E37`. Sticky-note surfaces SHALL use only the defined post-it hues.

#### Scenario: Primary CTA colour

- **WHEN** the hero "Get in Touch" action renders in its resting state
- **THEN** its background provides at least 4.5:1 contrast against `#FCFAFA` white text (using `#2563EB`)

#### Scenario: No off-palette colours

- **WHEN** any component renders a colour
- **THEN** that colour comes from the Terminal Canvas token set defined in `DESIGN.md`

### Requirement: Typography pairing

Display text, headings (except small headings), labels, code snippets and metadata SHALL use Space Mono. Body copy and small headings SHALL use DM Sans. Both font families SHALL be served from the site's own origin.

#### Scenario: Hero title typeface

- **WHEN** the hero `h1` renders
- **THEN** its computed font family starts with "Space Mono", its weight is 700, and its size is 96px at ≥1024px viewport width and 40px below that

#### Scenario: Body typeface

- **WHEN** a paragraph of descriptive copy renders
- **THEN** its computed font family starts with "DM Sans"

#### Scenario: No third-party font requests

- **WHEN** the page loads
- **THEN** no network request is made to `fonts.googleapis.com` or `fonts.gstatic.com`

### Requirement: Type scale

Text SHALL use only the named type scale from `DESIGN.md`: display-hero, headline-lg/md/sm, body-lg/md/sm, code-block and label-lg/md/sm, each with its defined size, line height, weight and letter spacing.

#### Scenario: Section heading scale

- **WHEN** a section `h2` renders
- **THEN** it uses headline-lg: 40px size, 48px line height, weight 700, letter spacing -0.02em

### Requirement: Shape and radius rules

Cards SHALL use a 0.75rem radius. Pills and status dots SHALL be fully rounded. Sticky notes SHALL use a radius of 4px or less. A polaroid's inner media radius SHALL be half its outer radius.

#### Scenario: Polaroid nesting

- **WHEN** the hero polaroid renders
- **THEN** the inner image container's border radius equals half of the outer card's border radius

### Requirement: Spacing rhythm

Section horizontal padding SHALL be 1.25rem below 1024px and 5rem at 1024px and above. Grid gutters SHALL be 1.25rem for card grids and 2.5rem for the hero and footer column layouts.

#### Scenario: Desktop margins

- **WHEN** the viewport is 1280px wide
- **THEN** every top-level section has 80px left and right padding

#### Scenario: Mobile margins

- **WHEN** the viewport is 375px wide
- **THEN** every top-level section has 20px left and right padding and no horizontal scrollbar appears

### Requirement: Reduced motion

When the user prefers reduced motion, the site SHALL disable ping, pulse, hover-translate, hover-rotate and grayscale-transition animations. The resulting static visual state SHALL remain readable.

#### Scenario: Reduced motion preference

- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** no element has a running CSS animation and hover transitions have zero duration

### Requirement: Colour contrast

All text SHALL meet WCAG 2.2 AA contrast against its rendered background: 4.5:1 for body text, 3:1 for large text of 24px+ or 18.66px+ bold.

#### Scenario: Automated contrast check

- **WHEN** the automated accessibility check runs against each rendered section
- **THEN** no colour-contrast violations are reported
