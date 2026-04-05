# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

No test suite exists yet.

## Stack

- **Next.js 16** with App Router — pages live in `app/`, layouts in `app/layout.tsx`
- **React 18** — components are Server Components by default; add `'use client'` only for interactivity (useState, usePathname, useEffect)
- **TypeScript**
- **Tailwind CSS** — all design tokens are defined as custom values in `tailwind.config.ts` (do not use raw hex values in className)

## Architecture

**Pages** follow a consistent shell pattern: `<Nav /> + <main> + <Footer />`. Each page imports these from `components/`.

**Components** split by interactivity:
- Server: `Hero`, `CaseStudyCard` — no hooks, pure markup
- Client: `Nav` (active link state), `WorkGrid` (tag filter), `TestimonialCarousel` (carousel state), `Footer` (live clock)

**Case study pages** live at `app/work/[slug]/page.tsx`. The only published one is `moto-design-system`. Coming-soon entries are stubbed in `WorkGrid.tsx`'s `caseStudies` array — add new ones there and create the matching page route.

**Fonts** are loaded in `app/layout.tsx` via `next/font/google` (Inter, Lora, JetBrains Mono) and exposed as CSS variables `--font-inter`, `--font-lora`, `--font-jetbrains-mono`.

## Design Token System

All tokens are in `tailwind.config.ts`. Figma variables mirror these exactly — naming uses `/` separators that map one-to-one to Tailwind config keys (e.g. Figma `text/primary` → Tailwind `text.primary` → class `text-text-primary`).

**Color roles to know:**
- `text-text-primary` / `text-text-secondary` / `text-text-tertiary` — main text hierarchy
- `bg-bg` / `bg-bg-secondary` / `bg-bg-tertiary` — surface hierarchy
- `border-border-subtle` / `border-border` / `border-border-strong` — border hierarchy
- `text-accent` (#6941C6 purple) — used for hero headline highlights, footer wordmark, and testimonial highlights

**Layout:** `flex justify-center px-10` + inner `max-w-page w-full` is the standard section container (1560px max, 40px horizontal padding). `max-w-page` is defined in `tailwind.config.ts`.

> ⚠️ `app/about/page.tsx` and `app/work/moto-design-system/page.tsx` still use the old `max-w-7xl mx-auto px-8` container — update these when those pages are designed.

**Typography conventions:**
- Page h1s use `font-medium` (not `font-bold`) — per the homepage Figma design
- Body/prose text: `text-lg text-text-secondary` (20px) for primary content; `text-sm` for metadata (year, role, etc.)
- Section/field labels: `text-xs uppercase tracking-widest text-text-tertiary` — used consistently for "Overview", "Role", "Local Time", etc.
- Step/index numbers (process sections): `font-mono text-xs text-text-tertiary`

**Case study page layout:**
- Hero section: full `max-w-page` wide
- Body prose: narrow `max-w-2xl mx-auto` reading column for legibility
- Section dividers: `border-t border-border-subtle` as a standalone `<div>` between major sections

> ⚠️ `app/about/page.tsx` and `app/work/moto-design-system/page.tsx` use `font-bold` on h1 and `text-md` for body text — these should be updated to `font-medium` and `text-lg` when those pages are designed.

**Figma file:** `https://www.figma.com/design/Z1w45vZdzISEhxuV6nx8Wz/claude-portfolio`
