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
- Server: `Hero`, `WorkGrid`, `CaseStudyCard` — no hooks, pure markup
- Client: `Nav` (active link state), `TestimonialCarousel` (carousel state), `Footer` (live clock), `TableOfContents` (active section tracking)

**Icons** come from `lucide-react` — import named icons directly, works in both Server and Client Components. Use `size` for dimensions and `strokeWidth` for weight; color is always set via `className` using text token classes (never hardcoded). When an icon sits next to text (e.g. contact links, inline labels), omit the icon's color class so it inherits from the parent — icon and adjacent text must always match color. Conventional sizes:
- `size={20} strokeWidth={2}` — UI icons at body-small scale (buttons, inputs, nav, inline links)
- `size={24} strokeWidth={2}` — inline with body-small text, standalone icons
- `size={32} strokeWidth={1.5}` — decorative / card icon
- `size={48} strokeWidth={1.5}` — large decorative icon (stat cards, hero accents)

**Case study pages** live at `app/work/[slug]/page.tsx`. The only published one is `design-system-documentation`. All case study metadata lives in `data/case-studies.ts` — add new entries there and create the matching page route.

**Fonts** are loaded in `app/layout.tsx` via `next/font/google` (Inter, Lora, JetBrains Mono) and exposed as CSS variables `--font-inter`, `--font-lora`, `--font-jetbrains-mono`.

## Responsive System

The site uses Tailwind's default breakpoints with three active tiers:

| Tier | Breakpoint | Target |
|---|---|---|
| Base (mobile-first) | < 768px | Phones |
| `md:` | ≥ 768px | Tablets, small laptops |
| `lg:` | ≥ 1024px | Desktop |

**Horizontal padding:** Every full-width section shell uses `px-5 md:px-10` (20px mobile → 40px desktop). The nav inner container uses `px-5 md:px-0`.

**Typography scaling:** Every heading and every size above `body-small` steps down one notch on mobile:
- `text-display` → `text-h1 md:text-display`
- `text-h1` → `text-h2 md:text-h1`
- `text-h2` → `text-h3 md:text-h2`
- `text-h3` → `text-h4 md:text-h3`
- `text-body-biggest` → `text-body-small md:text-body-big lg:text-body-biggest` (overview prose — 3-tier, since body-biggest's desktop value sits two notches above body-small)
- `text-body-big` → `text-body-small md:text-body-big` (all primary prose, bio copy, labels)
- `text-body-small` and below stay fixed — already at the comfortable floor for mobile

**The only exception:** `text-body-biggest` used as a *card title or step-number indicator* (`CaseStudyCard` thumbnail title, `NumberedCallout` number, `CaseStudyPaywall` heading, `WorkGrid` "Featured Work") stays at `text-body-biggest` across all breakpoints — these are compact visual anchors, not long-form prose, and stepping them down would make the card/callout hierarchy collapse on mobile.

`text-h4` exists solely as the mobile-side value for `text-h3` — never use it as a standalone role on desktop. Same font-size as `text-body-biggest` (1.44rem / 23.04px) but with heading line-height (1.3 vs 1.5).

**Vertical spacing:** Large spacing scales down on mobile:
- `py-20` → `py-12 md:py-20`
- `pt-16` → `pt-10 md:pt-16`
- `pb-16` → `pb-10 md:pb-16`
- `h-24` (section spacers) → `h-12 md:h-24`

**Layout collapse:** The 3-column layout (TOC + content + notes) collapses to content-only below `lg:`. TOC and notes column use `hidden lg:block`. The footer stacks vertically on mobile with `flex-col md:flex-row`.

## Design Token System

All tokens are defined in `tailwind.config.ts` (code source of truth) and mirrored as Figma variables in `https://www.figma.com/design/QXoQt5JPBJapI2H4z1bP7T/portfolio`. **These must always stay in sync.** When a token is added, changed, or removed in code, the corresponding Figma variable must be updated to match — and vice versa.

**Naming convention:** Figma uses `/` separators that map one-to-one to Tailwind config keys (e.g. Figma `text/primary` → Tailwind `text.primary` → class `text-text-primary`).

**Figma variable collections:**
- **Color** (43 vars) — atomic (neutral, primary, secondary, gradient, accent) + semantic (bg, border, text)
- **Spacing** (29 vars) — `spacing/0` through `spacing/384`, scoped to GAP and WIDTH_HEIGHT (includes `spacing/6` for `py-1.5` use cases)
- **Border Radius** (10 vars) — `radius/none` through `radius/full`, scoped to CORNER_RADIUS

**Figma text styles** (10) mirror the role-based type scale: display, h1, h2, h3, h4, body-biggest, body-big, body-small, small, label — all using Inter. `h4` is mobile-only — exists as the step-down pair for `h3`.

**Figma effect styles** (7) mirror `boxShadow` tokens: shadow/xs through shadow/2xl + shadow/inner.

**Figma components** (12) mirror React components — each with matching variants, states, and (where appropriate) text properties:
- **Button** — `Variant` (Primary | Outline) × `State` (Default | Hover | Disabled), `Show Icon` boolean
- **IconButton** — `State` (Default | Hover)
- **Filter Pill** — `Size` (Default | Small) × `State` (Unselected | Hover | Selected), `Label` text
- **Nav Link** — `State` (Default | Hover | Active)
- **TOC Item** — `State` (Default | Hover | Active)
- **Inline Link** — `Variant` (Subtle | Emphasis | Icon | Icon-emphasis) × `State` (Default | Hover)
- **Numbered Callout** — `Number` text, `Body` text
- **Section Divider** — single component, no variants
- **Spacer** — `size` (4, 8, 12, 16, 20, 24, 32, 48, 64, 96)
- **Tag** — single component, `Label` text (matches `components/CaseStudyTag.tsx`)
- **Tab** — `State` (Active | Inactive), `Label` text (Foundations / Components header in DesignSystemTabs)
- **Carousel Dot** — `State` (Active | Inactive) (TestimonialCarousel)

**Code Connect status:** Not used. The manual mapping lives in `.figma/components.md`. Each Figma component carries a `description` (React file path + usage snippet) and `documentationLinks` (GitHub URL) — set both via `mcp__plugin_figma_figma__use_figma`.

**Color roles to know:**
- `text-text-primary` / `text-text-secondary` / `text-text-tertiary` — main text hierarchy
- `bg-bg` / `bg-bg-secondary` / `bg-bg-tertiary` — surface hierarchy
- `border-border-subtle` / `border-border` / `border-border-strong` — border hierarchy

**Image & video treatment:** All images and videos on the site must have `border border-border shadow-sm rounded-sm`. This applies to every `ImageBlock` variant (image, video, vimeo, placeholder), case study cover images, `CaseStudyCard` thumbnails, and any other inline images. The `CaseStudyCard` thumbnail uses `shadow-xs` instead of `shadow-sm` (the card itself lifts on hover via `hover:-translate-y-2.5`, so the thumbnail's shadow stays subtle). Pass `bare` to `ImageBlock` to opt out of border/shadow for images that should bleed into the background.

**Image & video sizing:** All images and videos must fill the full width of their container and maintain their original aspect ratio — never crop. Use `w-full` with no fixed aspect ratio. Never use `object-cover`, `object-fit`, `fill`, or `aspect-video` on image or video elements. Vimeo iframes are the only exception (they need `aspect-video` for the embed container).

**Video play/pause:** All videos display a round play/pause `IconButton` overlay in the bottom-right corner (`absolute bottom-3 right-3`). Videos autoplay muted and loop. The button toggles between `Play` and `Pause` lucide icons. This is handled by the `VideoBlock` client component (`components/VideoBlock.tsx`), which `ImageBlock` delegates to for `type="video"`.

**Image captions:** Every image and video should have a caption by default. Captions use `text-small text-text-tertiary mt-2 text-center` and are centered below the image. Always provide a `caption` prop when using `ImageBlock` — omitting it should be a deliberate exception, not the default.

**Image & video optimization:** Optimize all `public/` assets per the user-scoped web asset defaults — WebP for images, MP4 H.264 for videos. `VideoBlock` emits `<source type="video/mp4">` so any non-`.mp4` source breaks playback. See `~/.claude/CLAUDE.md` for encoding parameters and the `sharp` / `ffmpeg-static` workflow.

**Inline text highlights** — when a span of prose inside a `text-text-secondary` paragraph needs to be visually emphasized, default to wrapping it in `<span className="text-text-primary [&_a]:text-inherit">`. Primary-color highlight on a secondary-color paragraph is the standard emphasis treatment across the site. Only use the gradient highlights below when the user specifically requests a gradient.

**The highlight always wins over link color.** Any `InlineLink` that sits inside a highlight span must inherit the highlight's color instead of rendering in its own default `text-text-primary`. Use the Tailwind arbitrary variant `[&_a]:text-inherit` on the highlight span to propagate the color down to any child anchor. This is especially important for gradient highlights, where a child link with its own solid color would break the gradient visually.

**Gradient system** (`gradient.*` tokens in `tailwind.config.ts`):

Two named gradients available — always applied via the parent-element pattern below. Use only when explicitly requested:

| Name | Classes | Tokens | Use |
|---|---|---|---|
| Red-pink | `from-gradient-red to-gradient-pink` | `#f02065 → #d5189b` | Inline text highlights (hero, testimonials) — on request |
| Pink-orange | `from-gradient-red from-[22%] to-gradient-orange` | `#f02065 → #ff7700` | Large text highlights (h2 and larger) and decorative items — on request |

Never use raw hex values for these — always use the `gradient-*` token classes.

**Apply the gradient to the parent element, not per highlighted phrase.** When a heading or paragraph has multiple highlighted segments, wrapping each segment in its own `bg-clip-text bg-gradient-to-r ...` span makes each phrase render its own narrow, independent gradient — the result reads as several disconnected color washes rather than one continuous one. Instead, paint the gradient on the parent element and selectively suppress it on non-highlighted text:

```tsx
<h1 className="text-h3 md:text-h2 lg:text-display bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink">
  <span className="text-text-primary">Riley is an </span>
  experience strategist
  <span className="text-text-primary">, </span>
  interaction designer
  <span className="text-text-primary"> and </span>
  designer engineer
  <span className="text-text-primary"> based in Brooklyn, NY.</span>
</h1>
```

How it works: `bg-clip-text` on the parent restricts the gradient image to the area of text glyphs. `text-transparent` makes glyphs see-through so the clipped gradient shows. Child spans with `text-text-primary` paint solid text on top, hiding the gradient under those segments. The result: every highlighted phrase reveals the slice of gradient at its position, so the entire heading reads as one continuous wash. The highlight-wins-over-link-color rule still applies here — apply `[&_a]:text-inherit` on the gradient parent (not each child span) so anchors inherit the transparent fill.

Reference implementations:
- `components/Hero.tsx` — final-state h1 with three highlighted phrases
- `components/TestimonialCarousel.tsx` — testimonial quotes with one or more highlighted segments per testimonial

**Layout:** `flex justify-center px-10` + inner `max-w-page w-full` is the standard section container (1560px max, 40px horizontal padding). `max-w-page` is defined in `tailwind.config.ts`. The nav uses `max-w-page mx-auto` with no horizontal padding — logo and links sit flush with the container edges.

**Typography system:**

All text sizing uses the named type scale defined in `tailwind.config.ts` — do not use raw Tailwind sizes (`text-xs`, `text-sm`, `text-lg`, etc.) or arbitrary pixel values for readable text. Use the role names below.

| Class | Size | Line height | Use for |
|---|---|---|---|
| `text-display` | 3.5rem / 56px | 1.3 | Hero headlines only |
| `text-h1` | 2.488rem / 39.81px | 1.3 | Page-level headings |
| `text-h2` | 2.074rem / 33.18px | 1.3 | Section headings, pull quotes, metric values |
| `text-h3` | 1.728rem / 27.65px | 1.3 | Sub-section headings within a section |
| `text-h4` | 1.44rem / 23.04px | 1.3 | Mobile-only — auto-paired with `text-h3` as `text-h4 md:text-h3` |
| `text-body-biggest` | 1.44rem / 23.04px | 1.5 | Card titles, sub-headings |
| `text-body-big` | 1.2rem / 19.2px | 1.5 | Primary prose, bio copy |
| `text-body-small` | 1rem / 16px | 1.5 | Secondary prose, links, nav, badges |
| `text-small` | 0.833rem / 13.33px | 1 | Captions only (image placeholders, figure labels) |
| `label` (style) | 0.833rem / 13.33px | 1 | Micro-labels: `text-small font-medium uppercase tracking-widest` |

**Additional type conventions:**
- All headings (h1–h3, display) use `font-normal` (never `font-medium` or `font-bold`)
- **Section/content labels** (e.g. "Overview", "Problem", "Next") use `text-body-small text-text-tertiary font-normal` — no uppercase, no letter-spacing
- **Micro-labels** (footer column headers, TOC "Contents" header, metadata grid field labels e.g. "Role", "Team") use one unified style: `text-small font-medium uppercase tracking-widest text-text-tertiary`
- Step/index numbers use `font-mono text-small text-text-tertiary`
- The footer wordmark uses `text-[56px] md:text-[80px] lg:text-[120px]` — decorative, intentionally outside the scale

These classes mirror the Figma text styles (`display`, `h1`, `h2`, `h3`, `h4`, `body-biggest`, `body-big`, `body-small`, `small`) exactly.

**Case study page layout:**

Pages follow a 3-column flex layout inside the standard `flex justify-center px-10 → max-w-page w-full` shell:

```
[220px TOC] [flex-1 content] [200px notes (empty)]
gap-8, py-20
```

- **Hero** (`pt-16 pb-12`): tags row → `h-8` spacer → `text-h1 md:text-display font-normal` title, full `max-w-page` width. No metadata in the hero.
- **Cover image** (`pb-16`): full-width `aspect-video bg-bg-secondary rounded-sm`.
- **TOC** (left column, `sticky top-32`): plain `text-body-small text-text-secondary` links, no step numbers. `top-32` (128px) clears the 64px sticky nav with generous breathing room.
- **Notes** (right column): empty `w-[200px]` spacer — reserved for future annotations.

**Section pattern inside the content column:**
- Label: `text-body-small text-text-tertiary mb-4`
- Section heading: `text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]`
- Body prose: `text-body-small md:text-body-big text-text-secondary`
- Overview prose (first section): `text-body-small md:text-body-big lg:text-body-biggest text-text-primary`
- **Between major sections:** use the `<SectionDivider />` component from `components/case-study.tsx`. Renders `h-12 md:h-24` spacer + a `border-t border-border` rule constrained to the `max-w-page` content shell + matching bottom spacer.
- **Between subsections within a section:** `<div className="h-24" />`
- **Before images within a subsection:** `<div className="h-12" />`

**2-col body layout** (used for most section content):
```tsx
<div className="flex gap-8 items-start">
  <div className="flex-1 min-w-0">{/* left: heading or image */}</div>
  <div className="flex-1 min-w-0">{/* right: prose */}</div>
</div>
```

**Callout card** (numbered list items, solution stats):
```
bg-bg-secondary border border-border rounded-sm px-10 py-7
```
- Numbered: `flex gap-4 items-center` | number `text-body-biggest` (fixed, does not step down) | body `text-body-small md:text-body-big text-text-primary`
- Stat: large value `text-display font-normal text-text-primary` + caption `text-body-big text-text-primary`

**Metadata grid** (Overview section) — responsive CSS grid: `grid grid-cols-2 md:grid-cols-3 gap-8 pt-8`. Six metadata fields (Role, Team, For, Tools, Timeline, Status) reflow from 3 rows × 2 cols on mobile to 2 rows × 3 cols on tablet+. Each cell is `flex flex-col gap-1.5` — label `text-small font-medium uppercase tracking-widest text-text-tertiary pb-2`, value `text-body-small text-text-secondary`. Add new metadata fields in multiples that divide cleanly into both column counts (6 works; 4 or 5 produce a ragged tail on desktop).

**Password-protected case study pages** — three intentional deviations from the standard case study shell:
- **Hero has no `View Live` button.** The flex wrapper around `<h1>` + `<Button>` is omitted; the `<h1>` renders bare. Pages: `app/work/evidence-of-insurability/page.tsx`, `app/work/ai-claims-portal/page.tsx`. When the password gate is lifted, add the Button back and wrap in `<div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-8">` to match Bricks/Conductor — the heading + button stack vertically (button left-aligned) on mobile and sit side-by-side with the button bottom-aligned at md+.
- **TOC is gated behind the unlock state, but its column is preserved.** When `unlocked === false`, swap the `<TableOfContents>` for an empty `<div aria-hidden className="hidden lg:block w-[220px] shrink-0" />` instead of removing it. This hides the sidebar (a locked page only shows the Overview teaser + paywall, so advertising unreachable structure is wrong) while keeping the content column visually centered between the left spacer and the right `w-[200px]` notes column. Removing the TOC entirely shifts content left and breaks the rhythm.
- **Paywall spacer** before `<CaseStudyPaywall>` uses `<div className="h-16 md:h-24" />` — not `<SectionDivider>`. The paywall fades into the content (via its own `from-transparent to-bg` gradient at `-top-40`), so a hard rule would fight the fade. The `h-16 md:h-24` (64px → 96px) matches the rhythm of major section spacing without introducing a visible divider.

**Figma file:** `https://www.figma.com/design/QXoQt5JPBJapI2H4z1bP7T/portfolio` — contains all variables, text styles, effect styles, and components. This is the single Figma source that must stay synced with `tailwind.config.ts`.

## Interactive Elements

> Rule: all interactive elements must pass WCAG AA (≥ 4.5:1 text, ≥ 3:1 UI) and differentiate hover by more than color alone.

**Icon Button** — `components/IconButton.tsx` ('use client'). Usage: `<IconButton icon={<ArrowLeft size={20} strokeWidth={2} />} onClick={fn} aria-label="..." />`. Always provide `aria-label`.

| State | Key classes |
|---|---|
| Default | `size-11 rounded-full bg-bg-secondary border border-border text-text-secondary` |
| Hover | `hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary` |

Matches the outline button variant states. White fill at rest; gray fill on hover. Hover also shifts text from secondary → primary for added emphasis.

**Button** — `components/Button.tsx` ('use client'). Two variants: `primary` (default) and `outline`. Usage: `<Button href="/work">…</Button>` (internal), `<Button href="https://…" external>…</Button>`, `<Button variant="outline" onClick={fn}>…</Button>`.

| Variant | State | Key classes |
|---|---|---|
| Primary | Default | `bg-bg-inverse text-text-inverse font-semibold rounded-md px-6 py-3` |
| Primary | Hover | `hover:bg-neutral-800`, arrow `group-hover:rotate-45` |
| Outline | Default | `bg-bg-secondary border border-border text-text-primary font-semibold rounded-md px-6 py-3` |
| Outline | Hover | `hover:bg-bg-tertiary hover:border-border-strong` |

Non-color diff: ArrowUpRight icon rotates 45° on hover (↗ → →). This rotation convention applies site-wide to all interactive ArrowUpRight icons (buttons, InlineLink icon variants, footer links).

**Form-submit / dense layouts** — Button supports four extra props for non-link uses: `type="submit"` (forms), `disabled` (renders at `opacity-60` + `cursor-not-allowed` on both variants), `fullWidth` (adds `w-full justify-center`), and `noIcon` (suppresses the trailing arrow). All are off by default so existing call sites are unaffected. Used by `CaseStudyPaywall`'s submit button — reach for these props instead of hand-rolling another button-styled element.

**Navigation Link** — `components/NavLink.tsx` ('use client'):

| State | Key classes |
|---|---|
| Default | `text-body-small text-text-secondary px-2.5 py-1.5 rounded-sm` |
| Hover | `hover:text-text-primary hover:font-medium` |
| Active | `text-text-primary font-medium` |

No background fill on hover or active — text color and weight shift only.
Contrast: `#57534e` on white ≈ 7.8:1 ✓ AA.

**Inline Link** — `components/InlineLink.tsx` (Server Component). 4 variants controlled by the `variant` prop. Defaults to `subtle` for internal, `emphasis` for external. Usage: `<InlineLink href="..." external? variant="subtle|emphasis|icon|icon-emphasis">…</InlineLink>`.

| Variant | Icon | Use case |
|---|---|---|
| `subtle` | no | Inline, internal or branded names, low emphasis |
| `emphasis` | no | Inline, external, high emphasis |
| `icon` | ↗ | Standalone external, low emphasis or branded |
| `icon-emphasis` | ↗ | Navigation external, high emphasis, not branded |

All variants share the same visual treatment: `text-text-primary underline` default → `text-text-primary no-underline` on hover. No blue, no bold. The only difference between variants is the presence of the arrow icon. WCAG 1.4.1 satisfied by underline presence (not relying on color alone) — the underline-to-no-underline transition is the hover affordance.

**Filter Pill** — `components/FilterPill.tsx` ('use client'). Usage: `<FilterPill active={…} onClick={…} size="default|small">Label</FilterPill>`.

| State | Key classes |
|---|---|
| Unselected | `bg-bg-secondary border-border text-text-secondary` |
| Unselected hover | `hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary` |
| Selected | `bg-bg-inverse text-text-inverse font-medium border-transparent` |

| Size | Key classes | Use |
|---|---|---|
| `default` | `text-body-small px-4 py-2` | Tablet and up, desktop layouts |
| `small` | `text-body-small px-3 py-1.5` | Mobile, dense layouts |

`AboutHero` passes `size="small"` and adds `className="md:px-4 md:py-2"` to upgrade padding at the `md:` breakpoint — text size stays at `text-body-small` across both sizes (only padding changes). Use small in dense mobile contexts; default elsewhere.

No selected-hover state by design. Non-color diff on hover: bg, border, and text all shift simultaneously. Selected adds `font-medium`.

**Tag** — `components/CaseStudyTag.tsx` (Server Component). Usage: `<CaseStudyTag>Insurance</CaseStudyTag>`. Single visual treatment, no variants: `text-body-small font-medium text-text-primary bg-bg-secondary border border-border-subtle rounded-full px-2.5 py-1.5`. Used for the tag row in case study heroes and inside `CaseStudyCard`. Visually identical to the TOC active state — same `bg-bg-secondary` + `border-border-subtle` treatment, but pill-shaped instead of `rounded-sm`.

**Table of Contents** — `components/TableOfContents.tsx` ('use client'). Usage: `<TableOfContents items={[{ label, id }, ...]} />`. Sticky sidebar TOC with IntersectionObserver-based active section tracking. Used in case study pages and the design system page. Hidden below `lg:` breakpoint.

| State | Key classes |
|---|---|
| Default | `text-body-small text-text-secondary px-2.5 py-1.5 rounded-sm border border-transparent` |
| Hover | `bg-bg-secondary border-border-subtle text-text-primary font-medium` (on `hover:` variant) |
| Active | `bg-bg-secondary border-border-subtle text-text-primary font-medium` |

Each item gets a filled `bg-bg-secondary` background plus a `border-border-subtle` outline on hover and when active — hover and active are intentionally identical so any item the cursor lands on previews exactly how the active state will look. All items carry a placeholder `border border-transparent` in the default state so the bordered states don't shift surrounding items by 1px. `rounded-sm` on all items. Positioned `sticky top-32` (128px — clears the 64px nav with breathing room). The same hover-and-active border treatment is applied to the `AboutBooks` accordion list (`components/AboutBooks.tsx`) — both lists share this convention.

## Motion & Transitions

All motion tokens live in `app/globals.css` (fade-in keyframes) or are applied as Tailwind utilities directly. The site has two distinct kinds of motion — **page-entry animations** (fire once when a page or section appears) and **interaction transitions** (fire on hover/focus/state changes). They use different duration budgets by design.

**Fade-in keyframes** — page-entry animations:

| Utility | Duration | Used on |
|---|---|---|
| `animate-fade-in-up` | `0.55s ease-out` | Home Hero h1; case study hero wrappers; `AnimateOnScroll` (Next sections, below-fold content); About Hero filter pills |
| `animate-fade-in-left` | `0.55s ease-out` | Home Hero only — MapPin location line and bio line |
| `animate-fade-in-right` | `0.7s ease-out` | About Hero cover image only |

`fade-in-right` is intentionally ~27% slower than the other two. It's reserved for About's cover image, which has a longer overall stagger (2.0s delay) — the slower duration keeps the final entrance feeling weighty rather than rushed. Don't normalize the three durations to one value without rechecking the About hero sequence.

**Hero stagger delays are hand-tuned, not formulaic.** The home Hero staggers at `0` / `0.8s` / `1.6s`; About Hero staggers the filter pills at `0.3 + i * 0.18s`. These numbers were picked by eye for each page's vibe, not derived from a scale. Treat them as page-specific design decisions — adjust in place, don't extract a shared rhythm.

**`AnimateOnScroll` contract** — `components/AnimateOnScroll.tsx` (client component):

```tsx
<AnimateOnScroll>{children}</AnimateOnScroll>
```

Wraps children in a div that starts at `opacity-0` and swaps to `animate-fade-in-up` the first time the element is at least 10% visible (`IntersectionObserver` with `threshold: 0.1`). The observer disconnects after the first intersection — this is a one-shot "reveal on scroll," not a continuous effect. Used site-wide for the "Next" section on case study pages and any block that should fade in when scrolled into view.

**Interaction transition durations:**

| Kind | Duration | Where |
|---|---|---|
| Color / background / border | `150ms` (Tailwind default via `transition-colors`) | All hover-color swaps — Nav links, InlineLink, Button fills, Filter pills, TOC items |
| Transform (position, scale, rotate) | `200ms` (`duration-200`) | `CaseStudyCard` hover lift, `AboutBooks` book card lift, any other card that translates on hover |
| Arrow rotation | Tailwind default (150ms) via `transition-transform` | `ArrowUpRight` icons in Button, InlineLink (icon variants), Footer links — all rotate 45° on `group-hover` |

The 150ms / 200ms split is intentional: color changes feel snappiest when they're fast and definite; transform changes feel more intentional with a slightly longer duration that makes the movement legible. When adding a new hover interaction, match this convention — color: leave `transition-colors` default; transform: add `duration-200`.

## Media delivery

Three distinct patterns for rendering images and videos, each chosen by context. Use them consistently:

| Context | Component | Why |
|---|---|---|
| **Any image or video in a case study body** (hero cover, inline section media, in-body demos) | `<ImageBlock>` — with `type="image"` (default), `type="video"`, `type="vimeo"`, or no props for placeholder | Single abstraction. Applies the standard image chrome (see "Image & video treatment" above), handles optional captions via `<figcaption>`, and delegates video rendering to `VideoBlock` internally (play/pause IconButton in bottom-right). |
| **Work grid card thumbnail** — `components/CaseStudyCard.tsx` | Raw `<Image>` for stills, raw `<video autoPlay loop muted playsInline>` for `.mov` / `.mp4` / `.webm` thumbnails | Card context is different: the thumbnail is a clickable preview (no controls, no caption, `object-cover` + `aspect-video` framing). Wrapping in `ImageBlock` would fight the card's layout. `CaseStudyCard` is the one place where raw `<video>` is acceptable. |
| **Anywhere else** | `<ImageBlock>` | Do **not** import `VideoBlock` directly into a page. It's an internal implementation detail of `ImageBlock`. One entry point keeps chrome, captions, and play/pause behavior consistent. |

**Rule:** if you're adding a video to a case study body, reach for `<ImageBlock type="video" src="..." caption="..." />`. The only sanctioned direct-`<video>` call site is `CaseStudyCard.tsx` for thumbnails.

**File format:** `.mp4` (H.264) only — see the **Image & video optimization** rules above for encoding parameters. `VideoBlock` emits `<source type="video/mp4">`, so any other source extension breaks playback.

## Documentation & Figma sync

Code is the source of truth. After any implementation change that touches a token, component, layout pattern, or convention, propagate to the four downstream surfaces below in order: **React → CLAUDE.md → Figma component (variants/properties) → Figma component `description` + `documentationLinks` → `.figma/components.md`**.

| Surface | Update when | What goes there |
|---|---|---|
| `CLAUDE.md` (this file) | New layout pattern / shared component / prop / variant / state / token / type scale entry / color role / page type | Rule statement, state classes, usage. Add new components to both Interactive Elements AND the Figma components catalog. |
| `app/design-system/page.tsx` | New token in `tailwind.config.ts` / new semantic usage convention / new shared component | Live rendered reference of the design system. |
| Figma file (`QXoQt5JPBJapI2H4z1bP7T`) | Any design system change — token, typography, shadow, component, variant, interactive state | Matching variable / text style / effect style / component with variants. **Mandatory same-session update.** |
| `.figma/components.md` | New / renamed / removed Figma component, property, or variant; React file path moves; inline pattern extracted to a component | Node-ID-level Figma↔React mapping table. |

**Component metadata in Figma** — when a component is added, renamed, or its source moves: update the Figma `description` (React file path + usage snippet + variant notes) and `documentationLinks` (GitHub URL) via `mcp__plugin_figma_figma__use_figma`. This is the manual replacement for Code Connect.

## Figma Build Rules

**File:** `QXoQt5JPBJapI2H4z1bP7T` — all design work happens here.

**Never hardcode values when building in Figma.** Every property that has a matching variable, style, or component must use it — no exceptions. Bind via the right API for each token type:

- Colors (fills, strokes, text) → `setBoundVariableForPaint` with Color collection variables
- Spacing (`padding*`, `itemSpacing`, `counterAxisSpacing`, fixed frame `height`) → `setBoundVariable` with Spacing
- Border radius (`topLeftRadius` etc.) → `setBoundVariable` with Border Radius
- Typography → `setTextStyleIdAsync` with named text styles (display, h1, etc.)
- Shadows → `effectStyleId` with named effect styles (shadow/xs through shadow/2xl, shadow/inner)
- Components → instances of the 12 Figma components in the catalog above, not primitives

**Two footguns:**
- When calling `setBoundVariableForPaint`, always pass the actual resolved color as the base paint (not `{r:0, g:0, b:0}`) so the fill renders correctly even before the variable resolves.
- For vertical space between elements, always use an instance of the `Spacer` component set to the correct `size` variant. Never create raw frames named `sp` or `spacer`.

**Sync rule:** Any design system change in code requires an immediate corresponding update to this Figma file in the same session — no exceptions. This includes token changes, component additions/modifications, typography weight changes, interactive state styling, and documentation frame updates. (See "Documentation & Figma sync" above for the full propagation order.)

### Spacing variable mapping

Figma spacing variables are named by **pixel value**; Tailwind classes use the **scale number**. Conversion is `Tailwind scale = px ÷ 4` (the only special case is `spacing/1` → `p-px`). Sample rows:

| Figma variable | px | Tailwind scale | Example |
|---|---|---|---|
| `spacing/4` | 4 | 1 | `p-1` `gap-1` |
| `spacing/16` | 16 | 4 | `p-4` `gap-4` |
| `spacing/40` | 40 | 10 | `p-10` `gap-10` |
| `spacing/96` | 96 | 24 | `p-24` `gap-24` |

The full Figma collection (`spacing/0` through `spacing/384`) mirrors Tailwind's default scale defined in `tailwind.config.ts`. The `Spacer` component `size` variant uses the same pixel label as the variable (e.g. `size=96` → `spacing/96` → `p-24`).
