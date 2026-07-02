# Ebrima Sompo — Portfolio

A premium, animated, production-ready personal portfolio built with Next.js 15,
TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 15 (App Router, Server Components, static generation)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with a custom design token system (`tailwind.config.ts`)
- **Motion:** Framer Motion (page transitions, scroll reveals, hover states) + Lenis (smooth scroll)
- **Icons:** lucide-react
- **Fonts:** Fraunces (display), Geist (body), JetBrains Mono (data/labels) — loaded via `next/font/google`
- **3D-ready:** Three.js + React Three Fiber included as dependencies for future use (e.g. an interactive hero element)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
app/
  layout.tsx          Root layout: fonts, metadata, providers
  page.tsx             Home page
  about/page.tsx        About page
  projects/page.tsx      Projects listing (filterable)
  projects/[slug]/page.tsx  Dynamic project detail pages (statically generated)
  contact/page.tsx       Contact page with form
  sitemap.ts / robots.ts / manifest.ts  SEO + PWA config
  not-found.tsx / loading.tsx

components/
  layout/        Navbar, Footer
  motion/        SmoothScrollProvider, CustomCursor, PageLoader, Reveal
  sections/      Page sections (Hero, FeaturedProjects, ProjectGrid, etc.)

data/
  content.ts     Single source of truth for all site copy: profile, experience,
                 education, skills, and the full projects list. Edit this file
                 to update content anywhere on the site.

lib/
  utils.ts       cn() class-merging helper
```

## Editing content

Everything text-based — your bio, experience, skills, and the full projects
list — lives in `data/content.ts`. Update it there and it propagates to the
home page, about page, projects grid, and individual project pages
automatically.

To add a new project, add an entry to the `projects` array with a unique
`slug` — a detail page is generated for it automatically at
`/projects/[slug]`.

## Before deploying

1. **Resume**: add your PDF resume at `public/resume.pdf` (referenced by the Contact page).
2. **OG image**: add `public/images/og.png` (1200×630) for social share previews.
3. **Favicon**: add `public/favicon.ico`.
4. **Noise texture**: add `public/images/noise.png` if you want the grain background texture referenced in `tailwind.config.ts` (`bg-grain` utility) — currently unused by default but available.
5. **Socials & email**: update `profile.socials` and `profile.email` in `data/content.ts`.
6. **Contact form**: `components/sections/contact-form.tsx` currently simulates submission client-side. Wire it to a real endpoint (e.g. a Next.js Route Handler + email service, or a form backend like Formspree/Resend) before going live.
7. **Domain**: update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your real domain.

## Build & deploy

```bash
npm run build
npm run start
```

Deploys cleanly to Vercel with zero configuration — connect the repo and ship.

## Design system

- **Palette:** warm ink base (`#0B0D12`), antique gold accent (`#C9A227` / `#E8C468`), warm off-white text (`#F5F3EE`)
- **Type scale:** Fraunces for display/headlines (with italic accents), Geist for body copy, JetBrains Mono for status labels, data, and eyebrows
- **Signature element:** a live "systems console" on the hero that cycles through real deployed/featured projects — reinforcing that this is a portfolio of shipped, institutional-grade software rather than demo landing pages
- **Motion principles:** orchestrated page-load sequence, scroll-triggered reveals (`components/motion/reveal.tsx`), magnetic cursor, animated route transitions on mobile nav — `prefers-reduced-motion` is respected throughout
