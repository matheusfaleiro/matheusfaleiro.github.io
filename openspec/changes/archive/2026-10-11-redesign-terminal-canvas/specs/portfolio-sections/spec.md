# Spec Delta

## Purpose

Specifies the core content sections of the portfolio rendered from typed data structures: Hero workbench stage, Architectural Principles, Experience & Career Milestones timeline, Skills & Tooling matrix, Education background, and Contact block.

## ADDED Requirements

### Requirement: Hero workbench stage

The hero section SHALL render a 12-column responsive layout featuring an ambient dot grid background, system architect status pills, title and summary, action buttons (Get in Touch, LinkedIn Profile, Explore Architecture), and a physical workbench collage containing rotated sticky notes, live multiplayer cursor badges, and an off-white polaroid card with portrait and metadata.

#### Scenario: Hero content rendering

- **WHEN** the hero section renders
- **THEN** it displays "Matheus Faleiro", headline titles, location callout, CTA links, sticky notes ("#MEMO Designing Something Robust.", "Duoc uc - 2006", "TEAM GOT // PROD"), cursor tags ("Matheus (AI Lead)", "Distributed Systems", "Clean Architecture", "Design Systems"), and polaroid photo card with caption `cph_workstation_2026.raw`

### Requirement: Architectural principles and core pillars

The principles section SHALL display the four core pillars in an interactive grid: System Design, Backend Readiness, DevOps Mindset, and AI & LLM Systems, each featuring category accents, description, simulated code snippets, and physical sticky tags.

#### Scenario: Principles grid cards

- **WHEN** the principles section renders
- **THEN** four cards render with tags, icons, descriptions, code blocks, and sticky accent badges ("Strict Boundaries", "Sub-50ms Latency", "Continuous Delivery", "Zero-to-One Tooling")

### Requirement: Career milestones timeline

The experience section SHALL render an interconnected vertical timeline tracking roles in reverse chronological order: GN Group, Novo Nordisk, Framna, CI&T, ArcTouch, Accenture, Prime Systems, and BHS.

#### Scenario: Timeline milestones display

- **WHEN** the experience section renders
- **THEN** each company entry renders with timeline markers, date spans, location, role title, narrative descriptions, and skill/achievement badges exactly matching the Stitch copy

### Requirement: Skills, stack, and tooling matrix

The skills section SHALL display core discipline sticker badges, a 3-column bento grid for technical categorizations (Languages & Core, Cloud & Systems, Certifications & Logic), and a spoken languages pill bar with fluency levels.

#### Scenario: Skills matrix rendering

- **WHEN** the skills section renders
- **THEN** core discipline sticker badges render with rotational tilts, followed by categorized technology chips and spoken languages (Portuguese, English, Spanish, Libras, Danish)

### Requirement: Education and academic background

The education section SHALL display three academic nodes in a responsive grid: Georgia State University, Centro Universitário Newton Paiva, and Polytechnic School of Minas Gerais.

#### Scenario: Academic nodes rendering

- **WHEN** the education section renders
- **THEN** three cards render with corresponding dates, institutions, degrees, descriptions, and locations

### Requirement: Contact action block

The contact section SHALL render an interactive card containing a terminal prompt status indicator, direct email card with one-click copy, and LinkedIn navigation card.

#### Scenario: Contact block interactions

- **WHEN** the contact section renders
- **THEN** it displays terminal status `> status: ready for high-impact AI/Backend initiatives`, direct email `me@matheusfaleiro.dev`, copy action, and outbound link to LinkedIn
