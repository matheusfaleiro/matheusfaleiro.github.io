---
name: Terminal Canvas
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8c90a0'
  outline-variant: '#424754'
  surface-tint: '#aec6ff'
  primary: '#aec6ff'
  on-primary: '#002e6b'
  primary-container: '#4f8eff'
  on-primary-container: '#00275e'
  inverse-primary: '#005ac4'
  secondary: '#5cdf81'
  on-secondary: '#003917'
  secondary-container: '#0aa750'
  on-secondary-container: '#003113'
  tertiary: '#ffa9fb'
  on-tertiary: '#5a0060'
  tertiary-container: '#df58e3'
  on-tertiary-container: '#4e0054'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004396'
  secondary-fixed: '#7afc9a'
  secondary-fixed-dim: '#5cdf81'
  on-secondary-fixed: '#00210a'
  on-secondary-fixed-variant: '#005224'
  tertiary-fixed: '#ffd6f8'
  tertiary-fixed-dim: '#ffa9fb'
  on-tertiary-fixed: '#37003b'
  on-tertiary-fixed-variant: '#7f0087'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  surface-polaroid: '#FCFAFA'
  surface-canvas: '#000000'
  tag-cyan: '#1ABCFE'
  tag-emerald: '#0ACF83'
  tag-blue: '#3A7DFF'
  tag-purple: '#A259FF'
  tag-crimson: '#F11E37'
  postit-yellow: '#FBF49A'
  postit-amber: '#FFD19B'
  postit-peach: '#FFD2A9'
  postit-pink: '#FDBEEF'
  postit-cyan: '#9BDBFF'
  postit-lime: '#C4FFA9'
  postit-violet: '#E0A6F4'
  status-error: '#F43F5E'
  accent-surface: '#DDEAFF'
typography:
  display-hero:
    fontFamily: Space Mono
    fontSize: 96px
    fontWeight: '700'
    lineHeight: 104px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 54px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-sm:
    fontFamily: DM Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-block:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: DM Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  label-md:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 5rem
  space-xs: 0.375rem
  space-sm: 0.625rem
  space-md: 1rem
  space-lg: 1.875rem
  space-xl: 5rem
---

## Brand & Style

This design system establishes an identity for an AI Engineer and Systems Architect at the intersection of rigorous technical computing and collaborative physical design. The aesthetic bridges high-performance distributed systems engineering with tactile workshop tools—polaroids, stickers, sticky notes, and collaborative real-time canvases.

### Personality & Tone

- **Technical Rigor & Architect Depth:** Grounded in monospaced terminals, code blocks, structured payloads, and precise metadata.
- **Physical Desk Metaphor:** Warm, analog artifacts—polaroid frames, tactile sticky notes, and collectible stickers—balance sterile machine logic.
- **Collaborative Presence:** High-contrast multi-user indicators and dynamic tag pills evoke active multiplayer design spaces.

### Design Movement

**Digital Workshop Brutalism.** The UI rejects generic polished software SaaS trends in favor of an authentic workbench aesthetic: pure pitch `#000000` dark canvases, high-contrast crisp white paper surfaces (`#FCFAFA`), terminal mono typography, intentional asymmetric offsets, and saturated neon badge accents.

## Colors

The palette operates primarily in an unapologetic deep dark mode where the foundational canvas is pure `#000000`. Against this terminal void, crisp physical artifacts (`#FCFAFA` cards, high-saturation post-it swatches, and vibrant multiplayer presence tags) emerge with striking contrast.

### Palette Hierarchy

- **Canvas & Base Surface (`#000000`):** The primary operating canvas. All portfolio workflows, terminal sessions, and architecture graphs live on this ground.
- **Primary Interactive (`#2E7CF6` / `#3A7DFF`):** Direct action triggers, links, highlighted nodes, and terminal links.
- **Secondary / Operational State (`#62E586` / `#0ACF83`):** Active runtime states, live agent heartbeats, toggled features, and validated outputs.
- **Paper & Card Ground (`#FCFAFA`):** Polaroid backdrops and artifact cards. Always paired with dark `#000000` ink text for analog clarity.
- **Collaboration & Taxonomy Badges:** Dedicated vibrant accents (`#1ABCFE`, `#FC72FF`, `#A259FF`, `#F11E37`) demarcate AI models, infrastructure layers, prompt workflows, and user presence tags.
- **Sticky Note Hues:** A spectrum of soft-tinted pastels (`#FBF49A`, `#FFD19B`, `#FDBEEF`, `#9BDBFF`, `#C4FFA9`, `#E0A6F4`) reserved exclusively for architectural annotations, sticky cards, and thought logs.

## Typography

The typography architecture uses a stark dual pairing: **Space Mono** provides mechanical, terminal-grade precision for technical displays, numbers, architecture node headers, and metadata, while **DM Sans** delivers clear, modern readability for technical narratives, case study prose, and body content.

### Hierarchy & Usage

- **Space Mono (Display & Headlines):** Delivers an uncompromising hacker aesthetic. Used for section markers, terminal prompts, system metrics, and architectural module headers.
- **DM Sans (Body & UI Interface):** High-legibility grotesque type engineered for dense case studies, technical breakdowns, documentation summaries, and interactive controls.
- **Handwritten Accents (Supplementary System Rule):** Where polaroid captions, sticky-note marginalia, or personal architectural side-notes appear, pair text blocks with casual script styling (`Nanum Pen` at `24px`–`40px`), applied with a slight organic tilt (`-1.5deg` to `2deg`) to simulate a rapid felt-tip pen sketch.

## Layout & Spacing

Layouts follow a structured canvas system. The overall frame operates as an infinite workbench, while individual modules lock to an intentional asymmetric offset rhythm reflecting physical collages and mechanical blueprints.

### Layout Philosophy

- **Responsive Staging Canvas:** Desktop layouts feature an `80px` (`5rem`) outer margin (`margin-desktop`) creating an open stage framing inner content. Mobile viewports compress outer margins to `20px` (`1.25rem`).
- **12-Column Modular Flow:** Columns adapt fluidly, allowing polaroid snapshots and code panes to bridge spans (e.g., 4 columns for sticky notes, 8 columns for terminal logs, 6/6 for side-by-side architecture benchmarks).
- **Asymmetric Micro-Offsets:** Elements such as tags, sticky blocks, and presence cursors use asymmetrical padding configurations (`0px 10px 10px 0px` or `0px 30px 15px 0px`) to evoke natural sticker cuts and post-it peel dynamics rather than rigid mechanical centering.

## Elevation & Depth

This system avoids blurred Gaussian drop-shadows and soft ambient blurs. Depth is achieved entirely through physical layering, optical contrast, and crisp hard offsets.

### Depth Modalities

- **Flat Spatial Overlaps:** Higher elevation is communicated by stacking opaque solids over one another. A `#FCFAFA` polaroid or a `#FBF49A` sticky note sits directly atop the `#000000` canvas with clean, sharp perimeter edges.
- **Zero-Blur Hard Dropped Offsets:** When floating items require active elevation (e.g., hovering cards, active draggable agents, toolbars), use a hard 1-step physical displacement: `transform: translate(-3px, -3px)` accompanied by an opaque solid drop fill (`3px 3px 0px #000000` or `#1ABCFE` for tagged nodes).
- **Surface Contrast Hierarchy:**
  1. Base Tier: Pitch canvas `#000000`.
  2. Workspace Surface: Neutral containers `#0D0E11` or `#16181D`.
  3. Physical Tier: Pure light paper `#FCFAFA` and vibrant sticky surfaces (`#9BDBFF`, `#FFD19B`, `#FDBEEF`).

## Shapes

The shape system pairs pill-shaped tags with mathematically proportional polaroid cards and sticker silhouettes.

### Radius Proportions

- **The 2:1 Proportional Nested Rule:** Polaroid cards follow a strict nested geometry rule where the outer container border radius is exactly double that of the inner media image mask. An outer card radius of `20px` (`rounded-lg` tier) contains an inner photo/visual mask of `10px` (`rounded-sm` tier). Similarly, `16px` outer frames house `8px` inner media.
- **Pill Badges (`9999px` / `rounded-full`):** Category badges, collaborative user presence pills, and status tags are completely rounded capsules.
- **Sticky Notes (`0px` to `4px`):** Sticky notes remain intentionally squarish and physical, utilizing minimal `2px`–`4px` soft corners with subtle rotational tilts (`-2deg` to `+2.5deg`).

## Components

### Buttons

- **Primary CTA:** Deep blue fill `#2E7CF6` with white `#FFFFFF` text, `16px` border-radius (`rounded-lg`), bold medium weight typography (`DM Sans` or `Roboto` medium). Padding follows `14px 28px`. Hover states apply subtle translation up-left by `2px`.
- **Ghost / Terminal Action:** Black fill with a crisp `1px` border in `#3A7DFF` or `#62E586`, styled in `Space Mono` uppercase with prepended shell prompts (`> execute_run`).

### Badges, Tags & Cursors

- **Collaborative Presence Cursors:** High-saturation pill chips (`#1ABCFE`, `#0ACF83`, `#3A7DFF`, `#FC72FF`, `#A259FF`) featuring white text, small monospaced label typography, accompanied by a small vector pointer.
- **Tech Stack Badges:** High-contrast capsule pills (`#000000` text on pastel or neon backdrops) measuring `30px` to `36px` in height with asymmetric horizontal padding (`0 16px`).

### Polaroid & Artifact Cards

- **Construction:** `#FCFAFA` solid surface cards hosting an inner media aperture.
- **Geometry:** `20px` outer corner radius containing nested media bounded by `10px` corner radius.
- **Caption Zone:** Ample white bottom margin reserving space for handwritten annotations or monospaced metadata timestamps (`Space Mono`, `12px`, `#000000`).

### Sticky Notes & Memo Modules

- **Dimensions:** Square proportion (e.g., `87px × 87px` thumbnail variants, scaling to `240px × 240px` content blocks).
- **Backgrounds:** Direct selection from the sticky note palette (`#FBF49A`, `#FFD19B`, `#FDBEEF`, `#9BDBFF`, `#C4FFA9`).
- **Typography:** Handwritten script or tight monospaced notation. Zero box-shadows; angled positioning brings organic texture.

### Inputs & Terminal Shell

- **Input Fields:** Dark container `#0F1115` with crisp `1px` border in `#2E7CF6`. Text set in `Space Mono` `14px` with a blinking monospace block cursor.
- **Toggles:** Track rendered in vivid `#62E586` (active) or `#22242A` (inactive), capsule shaped (`70px` radius), housing a solid white `#FFFFFF` circle knob.

### Architecture Nodes & Agent Cards

- Deep black or charcoal slate cards with a colored accent indicator header (e.g., a `4px` top border in `#1ABCFE` for LLM nodes, `#0ACF83` for Vector Indexes, `#FC72FF` for Multi-Agent dispatchers).
