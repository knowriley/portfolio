# Riley Knowles — Portfolio

Source for Riley Knowles's personal site — a UX strategist / product designer / design engineer based in Brooklyn. Case studies, an about page, and a public design-system reference at `/design-system`.

## Stack

- **Next.js 16** with the App Router
- **React 18** — components are Server Components by default; `'use client'` is only added for interactive state
- **TypeScript 5** (strict)
- **Tailwind CSS 3.4** — design tokens defined in `tailwind.config.ts`
- **Lucide React** icons
- **Inter / Lora / JetBrains Mono** loaded via `next/font/google`

## Getting started

```bash
npm install
cp .env.example .env.local   # set CASE_STUDY_PASSWORD
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm run start     # serve the build
npm run lint      # ESLint (next/core-web-vitals)
```

No test suite — the type checker plus visual review on `localhost:3000` are the verification path.

## Project structure

```
app/                       Next.js App Router
  page.tsx                   Home (Hero + WorkGrid + TestimonialCarousel)
  about/                     /about
  work/[slug]/               Case study pages
  design-system/             /design-system — token + component reference
  actions/unlock-case-study.ts   Server action: validates the case study password
  layout.tsx                 Fonts + root metadata
components/                Server + client components
data/case-studies.ts       Single source for case study metadata
lib/case-study-lock.ts     Cookie + hash helpers for the password gate
public/                    Optimized media — WebP images, MP4 H.264 video
.figma/components.md       Manual Figma ↔ React component mapping
tailwind.config.ts         Design tokens (colors, type scale, spacing, radius, shadow)
CLAUDE.md                  Architecture + conventions (the canonical reference)
```

## Adding a case study

1. Add an entry to [`data/case-studies.ts`](./data/case-studies.ts). Set `hidden: true` while drafting — `WorkGrid` filters hidden entries and the page route should `notFound()` on direct visit until you flip the flag.
2. Create the page at `app/work/<slug>/page.tsx`. Use an existing case study as a template — they share a 3-column layout (`TableOfContents` + content + reserved notes column) and reuse the layout primitives in [`components/case-study.tsx`](./components/case-study.tsx) (`Label`, `SectionDivider`, `ImageBlock`).
3. Drop optimized media in `public/`. WebP for images, MP4 H.264 (`-an`, `-crf 28`, `+faststart`) for video — full encoding parameters in `CLAUDE.md` under "Web asset defaults".
4. The "Next" section at the bottom of each visible case study cross-links the other visible study — a single `CaseStudyCard`, sourced from `caseStudies` at module scope.

## Password-gated case studies

Some case studies sit behind an NDA-style password set via the `CASE_STUDY_PASSWORD` env var:

- `app/actions/unlock-case-study.ts` validates the submitted password, hashes it (SHA-256), and writes the `portfolio_unlock` cookie
- [`lib/case-study-lock.ts`](./lib/case-study-lock.ts) reads the cookie and compares with `timingSafeEqual`
- A locked page renders the Overview teaser + `CaseStudyPaywall`; an unlocked page renders the full content with the standard `TableOfContents`

Without `CASE_STUDY_PASSWORD` set, gated pages stay locked permanently.

## Asset standards

Every image and video committed to `public/` must be web-optimized — never raw exports from Figma / ScreenFlow / QuickTime:

- **Images**: WebP only (`sharp` quality 82, effort 6). Resize so the longest edge is at most 2× the largest rendered width.
- **Videos**: MP4 H.264 only. `ffmpeg -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart -an`, capped at 1600px wide.
- Aim to keep total `public/` under ~5 MB unless a long-form video genuinely needs the bytes.

`CLAUDE.md` has the full encoding workflow including the temporary `sharp` / `ffmpeg-static` install pattern.

## Documentation

- [`CLAUDE.md`](./CLAUDE.md) — architecture, conventions, motion system, sync rules, and the design tokens / component contracts the rest of the site is built on
- [`.figma/components.md`](./.figma/components.md) — Figma ↔ React component mapping table
- [`/design-system`](./app/design-system/page.tsx) — visual reference page for the tokens and components, rendered as a route in the site itself
