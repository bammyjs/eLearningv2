# eLearning V2

Modern marketing website and product showcase for an academic workflow platform. The application presents eLearning's core value proposition for universities, including result processing, course registration, transcript requests, clearance automation, security, and role-based operations.

## Overview

This project is a React + TypeScript + Vite single-page application styled with Tailwind CSS and animated with Framer Motion. It includes a branded design system, multi-section landing experience, and supporting routes for product, team, legal, security, and contact pages.

## Key Features

- Hero content slider with product-offer messaging
- Branded design system using Deep Navy, Mist Blue, and Royal Blue
- Product showcase sections for academic workflows and operations
- Contact page for demo and sales inquiries
- Security, team, legal, and feature detail pages
- Motion-enhanced interface using Framer Motion
- Custom visual background effect using `ogl`

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React
- OGL

## Project Structure

```text
src/
  assets/                Static images and brand assets
  components/
    sections/            Landing page sections
    ui/                  Shared UI primitives and visual utilities
  pages/                 Route-level pages
  App.tsx                App shell and router setup
  main.tsx               Application entry point
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Run a type check

```bash
npm run check
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` builds the app for production
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint
- `npm run check` runs the TypeScript project check without emitting files

## Branding

- `Deep Navy`: `#151730`
- `Mist Blue`: `#E7EDF5`
- `Royal Blue`: `#005FF0`

Typography:

- Primary body font: `Helvetica`
- Heading/display pairing: `Montserrat`

## Notes

- Tailwind theme tokens are configured in `tailwind.config.js`
- Shared global styles live in `src/index.css`
- Main landing page composition is defined in `src/pages/Home.tsx`
