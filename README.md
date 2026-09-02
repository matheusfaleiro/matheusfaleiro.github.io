# Matheus Faleiro - Portfolio Website

Personal portfolio and showcase for [matheusfaleiro.dev](https://matheusfaleiro.dev), built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Hosting:** [GitHub Pages](https://pages.github.com/) with custom domain `matheusfaleiro.dev`
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)

## Getting Started

### Prerequisites

- Node.js (v20+)
- npm

### Development

Run the local development server:

```bash
npm run dev
```

### Production Build

Compile TypeScript and build the static assets to `dist/`:

```bash
npm run build
```

### Preview Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Pushes to the `main` branch automatically trigger the GitHub Actions workflow to build and deploy to GitHub Pages.

