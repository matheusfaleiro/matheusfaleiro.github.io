# site-shell Specification

## Purpose

Specifies the page shell, global layout chrome, fixed header navigation with status badges and actions, mobile responsive navigation menu, footer, and page-level metadata.

## Requirements

### Requirement: Fixed navigation header

The site SHALL render a fixed top navigation header with blurred background (`backdrop-blur-xl`) spanning the full viewport width. It SHALL contain the brand monogram logo and title, an availability status badge, navigation links to all main sections, a quick "copy_email" button, a "Get in touch" CTA button, and a profile avatar link.

#### Scenario: Header layout and elements

- **WHEN** the user visits the page
- **THEN** the fixed header renders at the top with "Matheus Faleiro" and "AI & System Architect", an availability badge with a pulsing green indicator, navigation links, and action buttons

#### Scenario: Active section highlight

- **WHEN** the user scrolls through the page and crosses into a section boundary
- **THEN** the corresponding navigation link in the header receives an active highlight styling (`text-primary` and container background)

### Requirement: Mobile navigation accessibility

On viewport widths below `md` (768px), the header SHALL provide an accessible mobile menu toggle (hamburger / drawer) so mobile users can navigate directly to any section.

#### Scenario: Mobile viewport navigation

- **WHEN** the site is viewed on a mobile device (<768px)
- **THEN** a mobile menu button is visible, allowing the user to open the navigation drawer and select sections

### Requirement: Copy email interaction

The header and contact sections SHALL provide a copy-email action that copies `me@matheusfaleiro.dev` to the user's clipboard using the Clipboard API, and displays an accessible toast or tooltip confirmation instead of a blocking browser `alert()`.

#### Scenario: Copy email button clicked

- **WHEN** the user clicks any copy-email trigger
- **THEN** `me@matheusfaleiro.dev` is copied to the system clipboard and a non-blocking confirmation message is announced and visible

#### Scenario: Clipboard failure fallback

- **WHEN** the Clipboard API is unavailable or denied
- **THEN** a mailto link or fallback copy prompt is provided without throwing an unhandled exception

### Requirement: Footer metadata and navigation

The site SHALL render a footer containing node status (`cph_node_01 // operational`), location coordinates (`55.6761° N, 12.5683° E`), quick dispatch links, network handshake links (email, LinkedIn, PGP fingerprint), copyright notice, and security posture markers.

#### Scenario: Footer content display

- **WHEN** the user reaches the bottom of the page
- **THEN** the footer renders all metadata, links, coordinates, and copyright notice exactly matching the Stitch design

### Requirement: SEO and Social Metadata

The site's `index.html` SHALL specify comprehensive meta tags reflecting Matheus Faleiro's profile as "AI Engineer & System Architect", including canonical Open Graph and Twitter Card tags.

#### Scenario: Search and social metadata

- **WHEN** social bots or search crawlers inspect the page head
- **THEN** `og:title`, `og:description`, `twitter:card`, and page title reflect "Matheus Faleiro — AI Engineer & System Architect"
