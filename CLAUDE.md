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
- Client: `Nav` (active link state), `WorkGrid` (tag filter), `TestimonialCarousel` (carousel state), `Footer` (live clock), `TableOfContents` (active section tracking)

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

**Typography scaling:** Large headings step down one notch on mobile:
- `text-display` → `text-h1 md:text-display`
- `text-h1` → `text-h2 md:text-h1`
- `text-h2` → `text-h3 md:text-h2` (in TwoColumnSection)
- `text-body-biggest` → `text-body-big md:text-body-biggest` (overview prose)
- `text-body-big` and below stay fixed — already comfortable at mobile widths

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
- **Spacing** (28 vars) — `spacing/0` through `spacing/384`, scoped to GAP and WIDTH_HEIGHT
- **Border Radius** (10 vars) — `radius/none` through `radius/full`, scoped to CORNER_RADIUS

**Figma text styles** (9) mirror the role-based type scale: display, h1, h2, h3, body-biggest, body-big, body-small, small, label — all using Inter.

**Figma effect styles** (7) mirror `boxShadow` tokens: shadow/xs through shadow/2xl + shadow/inner.

**Figma components** (9) mirror React components: Button, IconButton, Filter Pill, Nav Link, TOC Item, Inline Link, Spacer, Numbered Callout, Section Divider — each with matching variants and states.

**Color roles to know:**
- `text-text-primary` / `text-text-secondary` / `text-text-tertiary` — main text hierarchy
- `bg-bg` / `bg-bg-secondary` / `bg-bg-tertiary` — surface hierarchy
- `border-border-subtle` / `border-border` / `border-border-strong` — border hierarchy

**Image & video treatment:** All images and videos on the site must have `border border-border-subtle shadow-sm rounded-sm`. This applies to every `ImageBlock` variant (image, video, vimeo, placeholder), case study cover images, and any other inline images. The `CaseStudyCard` thumbnail is the one exception — it uses `shadow-xs` with `rounded-2xl` to match card styling. The card itself lifts on hover (`hover:-translate-y-1.5`) instead of changing shadow. Pass `bare` to `ImageBlock` to opt out of border/shadow for images that should bleed into the background.

**Image & video sizing:** All images and videos must fill the full width of their container and maintain their original aspect ratio — never crop. Use `w-full` with no fixed aspect ratio. Never use `object-cover`, `object-fit`, `fill`, or `aspect-video` on image or video elements. Vimeo iframes are the only exception (they need `aspect-video` for the embed container).

**Video play/pause:** All videos display a round play/pause `IconButton` overlay in the bottom-right corner (`absolute bottom-3 right-3`). Videos autoplay muted and loop. The button toggles between `Play` and `Pause` lucide icons. This is handled by the `VideoBlock` client component (`components/VideoBlock.tsx`), which `ImageBlock` delegates to for `type="video"`.

**Image captions:** Every image and video should have a caption by default. Captions use `text-small text-text-tertiary mt-2 text-center` and are centered below the image. Always provide a `caption` prop when using `ImageBlock` — omitting it should be a deliberate exception, not the default.

**Gradient system** (`gradient.*` tokens in `tailwind.config.ts`):

Two named gradients used site-wide — always applied as `bg-clip-text text-transparent bg-gradient-to-r`:

| Name | Classes | Tokens | Use |
|---|---|---|---|
| Red-pink | `from-gradient-red to-gradient-pink` | `#f02065 → #d5189b` | Inline text highlights (hero, testimonials) |
| Pink-orange | `from-gradient-red from-[22%] to-gradient-orange` | `#f02065 → #ff7700` | Large text highlights (h2 and larger) and decorative items |

Never use raw hex values for these — always use the `gradient-*` token classes.

**Layout:** `flex justify-center px-10` + inner `max-w-page w-full` is the standard section container (1560px max, 40px horizontal padding). `max-w-page` is defined in `tailwind.config.ts`. The nav uses `max-w-page mx-auto` with no horizontal padding — logo and links sit flush with the container edges.

**Typography system:**

All text sizing uses the named type scale defined in `tailwind.config.ts` — do not use raw Tailwind sizes (`text-xs`, `text-sm`, `text-lg`, etc.) or arbitrary pixel values for readable text. Use the role names below.

| Class | Size | Line height | Use for |
|---|---|---|---|
| `text-display` | 3.5rem / 56px | 1.3 | Hero headlines only |
| `text-h1` | 2.488rem / 39.81px | 1.3 | Page-level headings |
| `text-h2` | 2.074rem / 33.18px | 1.3 | Section headings, pull quotes, metric values |
| `text-h3` | 1.728rem / 27.65px | 1.3 | Sub-section headings within a section |
| `text-body-biggest` | 1.44rem / 23.04px | 1.5 | Card titles, sub-headings |
| `text-body-big` | 1.2rem / 19.2px | 1.5 | Primary prose, bio copy |
| `text-body-small` | 1rem / 16px | 1.5 | Secondary prose, links, nav, badges |
| `text-small` | 0.833rem / 13.33px | 1 | Captions only (image placeholders, figure labels) |
| `label` (style) | 0.833rem / 13.33px | 1 | Micro-labels: `text-small font-medium uppercase tracking-widest` |

**Additional type conventions:**
- All headings use `font-medium` (never `font-bold`)
- **Section/content labels** (e.g. "Overview", "Problem", "Next") use `text-body-small text-text-tertiary font-normal` — no uppercase, no letter-spacing
- **Micro-labels** (footer column headers, TOC "Contents" header, metadata grid field labels e.g. "Role", "Team") use one unified style: `text-small font-medium uppercase tracking-widest text-text-tertiary`
- Step/index numbers use `font-mono text-small text-text-tertiary`
- The footer wordmark uses `text-[56px] md:text-[80px] lg:text-[120px]` — decorative, intentionally outside the scale

These classes mirror the Figma text styles (`display`, `h1`, `h2`, `body-biggest`, `body-big`, `body-small`, `small`) exactly.

**Case study page layout:**

Pages follow a 3-column flex layout inside the standard `flex justify-center px-10 → max-w-page w-full` shell:

```
[180px TOC] [flex-1 content] [200px notes (empty)]
gap-8, py-20
```

- **Hero** (`pt-16 pb-12`): tags row → `h-8` spacer → `text-display font-normal` title, full `max-w-page` width. No metadata in the hero.
- **Cover image** (`pb-16`): full-width `aspect-video bg-bg-secondary rounded-sm`.
- **TOC** (left column, `sticky top-32`): plain `text-body-small text-text-secondary` links, no step numbers. `top-32` (128px) clears the 64px sticky nav with generous breathing room.
- **Notes** (right column): empty `w-[200px]` spacer — reserved for future annotations.

**Section pattern inside the content column:**
- Label: `text-body-small text-text-tertiary mb-4`
- Section heading: `text-h2 font-medium text-text-primary leading-[1.3]`
- Body prose: `text-body-big text-text-secondary`
- Overview prose (first section): `text-body-biggest text-text-primary`
- **Between major sections:** `<div className="h-24" />` + `<div className="border-t border-border-subtle" />` + `<div className="h-24" />`
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
- Numbered: `flex gap-4 items-center` | number `text-body-biggest` | body `text-body-big text-text-primary`
- Stat: large value `text-display font-normal text-text-primary` + caption `text-body-big text-text-primary`

**Metadata grid** (Overview section): `flex flex-wrap gap-8`, each item `flex flex-col gap-1.5 min-w-[250px]`, label `text-small font-medium uppercase tracking-widest text-text-tertiary pb-2`, value `text-body-small text-text-secondary`.

**Figma file:** `https://www.figma.com/design/QXoQt5JPBJapI2H4z1bP7T/portfolio` — contains all variables, text styles, effect styles, and components. This is the single Figma source that must stay synced with `tailwind.config.ts`.

## Interactive Elements

> Rule: all interactive elements must pass WCAG AA (≥ 4.5:1 text, ≥ 3:1 UI) and differentiate hover by more than color alone.

**Icon Button** — `components/IconButton.tsx` ('use client'):

```tsx
<IconButton icon={<ArrowLeft size={20} strokeWidth={2} />} onClick={prev} aria-label="Previous" />
```

| State | Key classes |
|---|---|
| Default | `size-11 rounded-full bg-bg-secondary border border-border text-text-primary` |
| Hover | `hover:bg-bg-tertiary hover:border-border-strong` |

Matches the outline button variant states. White fill at rest; gray fill on hover. Always provide `aria-label`.

**Button** — `components/Button.tsx` ('use client'):

Two variants: `primary` (default) and `outline`.

```tsx
<Button href="/work">View Case Study</Button>              // primary, internal link
<Button href="https://x.com" external>External</Button>    // primary, external link
<Button variant="outline" onClick={fn}>Secondary</Button>  // outline
```

| Variant | State | Key classes |
|---|---|---|
| Primary | Default | `bg-bg-inverse text-text-inverse font-semibold rounded-md px-6 py-3` |
| Primary | Hover | `hover:bg-neutral-800`, arrow `group-hover:rotate-45` |
| Outline | Default | `bg-bg-secondary border border-border text-text-primary font-semibold rounded-md px-6 py-3` |
| Outline | Hover | `hover:bg-bg-tertiary hover:border-border-strong` |

Non-color diff: ArrowUpRight icon rotates 45° on hover (↗ → →). This rotation convention applies site-wide to all interactive ArrowUpRight icons (buttons, InlineLink icon variants, footer links).

**Navigation Link** — inline in `Nav.tsx`:

| State | Key classes |
|---|---|
| Default | `text-body-small text-text-secondary px-2.5 py-1.5 rounded-sm` |
| Hover | `hover:text-text-primary hover:font-medium` |
| Active | `text-text-primary font-medium` |

No background fill on hover or active — text color and weight shift only.
Contrast: `#525252` on white ≈ 7.8:1 ✓ AA.

**Inline Link** — `components/InlineLink.tsx` (Server Component):

4 variants controlled by the `variant` prop. Defaults to `subtle` for internal, `emphasis` for external.

```tsx
<InlineLink href="/work">internal link</InlineLink>
<InlineLink href="https://example.com" external>external link</InlineLink>
<InlineLink href="https://example.com" external variant="icon">branded link</InlineLink>
<InlineLink href="https://example.com" external variant="icon-emphasis">nav link</InlineLink>
```

| Variant | Icon | Use case |
|---|---|---|
| `subtle` | no | Inline, internal or branded names, low emphasis |
| `emphasis` | no | Inline, external, high emphasis |
| `icon` | ↗ | Standalone external, low emphasis or branded |
| `icon-emphasis` | ↗ | Navigation external, high emphasis, not branded |

All variants share the same visual treatment: `text-text-secondary underline` default → `text-text-primary no-underline` on hover. No blue, no bold. The only difference between variants is the presence of the arrow icon. WCAG 1.4.1 satisfied by underline presence (not relying on color alone).

**Filter Pill** — inline in `WorkGrid.tsx`:

```tsx
<button
  className={`text-body-small px-4 py-2 rounded-full border transition-colors ${
    isActive
      ? 'bg-bg-inverse text-text-inverse font-medium border-transparent'
      : 'bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary'
  }`}
>
```

| State | Key classes |
|---|---|
| Unselected | `bg-bg-secondary border-border text-text-secondary` |
| Unselected hover | `hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary` |
| Selected | `bg-bg-inverse text-text-inverse font-medium border-transparent` |

No selected-hover state by design. Non-color diff on hover: bg, border, and text all shift simultaneously. Selected adds `font-medium`.

**Table of Contents** — `components/TableOfContents.tsx` ('use client'):

```tsx
<TableOfContents items={[{ label: 'Overview', id: 'overview' }, ...]} />
```

Sticky sidebar TOC with IntersectionObserver-based active section tracking. Used in case study pages and the design system page. Hidden below `lg:` breakpoint.

| State | Key classes |
|---|---|
| Default | `text-body-small text-text-secondary px-2.5 py-1.5 rounded-sm` |
| Hover | `hover:bg-bg-secondary hover:text-text-primary hover:font-medium` |
| Active | `bg-bg-secondary text-text-primary font-medium` |

Each item gets a filled `bg-bg-secondary` background on hover and when active. `rounded-sm` on all items. Positioned `sticky top-32` (128px — clears the 64px nav with breathing room).

## Documentation Workflow

After completing any implementation change, evaluate whether it introduced or changed a pattern that belongs in any of these three places — and update them if so:

1. **`CLAUDE.md`** — add or revise if the change:
   - Establishes a new layout pattern, component convention, or spacing rule
   - Introduces a new shared component (add it to the Components section)
   - Changes a token, type scale entry, or color role
   - Creates a new page type with its own shell or structural rules

2. **`app/design-system/page.tsx`** — add or revise if the change:
   - Adds or modifies a token (color, type, spacing, radius, shadow) in `tailwind.config.ts`
   - Introduces a new semantic usage convention (e.g. a new spacing role, a new type hierarchy rule)
   - Adds a new shared component that belongs in the visual reference (e.g. a new callout pattern)

3. **Figma file** (`QXoQt5JPBJapI2H4z1bP7T`) — add or revise if the change:
   - Adds, removes, or modifies a color, spacing, or radius token in `tailwind.config.ts` → update the corresponding Figma variable
   - Adds or modifies a type scale entry → update the corresponding Figma text style
   - Adds or modifies a shadow token → update the corresponding Figma effect style
   - Adds or modifies a shared component → update or create the corresponding Figma component with matching variants and states
   - Updates the documentation frame to reflect any new or changed tokens/components

The design system page is the live rendered reference, the Figma file is the design reference — both must always reflect the actual state of `tailwind.config.ts` and the component conventions in use. **Code is the source of truth; Figma follows code.**

## Figma Build Rules

**File:** `QXoQt5JPBJapI2H4z1bP7T` — all design work happens here.

When building or editing anything in Figma, always use variables — never hardcode values:

- **Colors** — use Color collection variables (e.g. `text/primary`, `bg/secondary`, `border/subtle`, `accent/default`) for all fills, strokes, and text colors. Never use raw hex values.
- **Spacing** — use Spacing collection variables for all padding, gap (itemSpacing), and fixed spacer frame heights. Never use bare pixel numbers when a matching variable exists.
- **Border radius** — use Border Radius collection variables. Never type radius values manually.
- **Typography** — apply the named text styles (display, h1, h2, etc.) instead of setting font properties manually.
- **Shadows** — apply the named effect styles (shadow/xs through shadow/2xl, shadow/inner) instead of creating manual drop shadows.
- **Components** — use instances of the Figma components (Button, IconButton, Filter Pill, Nav Link, TOC Item, Inline Link, Numbered Callout, Section Divider, Spacer) instead of rebuilding them from primitives.
- **Spacer component** — when inserting vertical space between elements, always use an instance of the `Spacer` component set to the correct `size` variant. Never create raw frames named `sp` or `spacer`.

**Sync rule:** If you change a token in `tailwind.config.ts`, you must update the corresponding Figma variable/style in the same session. If you add a new React component, create the corresponding Figma component. Code is the source of truth — Figma follows.

### Spacing variable mapping

Figma spacing variables are named by **pixel value**. Tailwind classes use the **scale number** (÷4). Use this table to translate between them:

| Figma variable | px value | Tailwind scale | Example classes |
|---|---|---|---|
| `spacing/0` | 0px | 0 | `p-0` `m-0` `gap-0` |
| `spacing/1` | 1px | px | `p-px` |
| `spacing/4` | 4px | 1 | `p-1` `m-1` `gap-1` |
| `spacing/8` | 8px | 2 | `p-2` `m-2` `gap-2` |
| `spacing/12` | 12px | 3 | `p-3` `m-3` `gap-3` |
| `spacing/16` | 16px | 4 | `p-4` `m-4` `gap-4` |
| `spacing/20` | 20px | 5 | `p-5` `m-5` `gap-5` |
| `spacing/24` | 24px | 6 | `p-6` `m-6` `gap-6` |
| `spacing/28` | 28px | 7 | `p-7` `m-7` `gap-7` |
| `spacing/32` | 32px | 8 | `p-8` `m-8` `gap-8` |
| `spacing/36` | 36px | 9 | `p-9` `m-9` `gap-9` |
| `spacing/40` | 40px | 10 | `p-10` `m-10` `gap-10` |
| `spacing/44` | 44px | 11 | `p-11` `m-11` `gap-11` |
| `spacing/48` | 48px | 12 | `p-12` `m-12` `gap-12` |
| `spacing/56` | 56px | 14 | `p-14` `m-14` `gap-14` |
| `spacing/64` | 64px | 16 | `p-16` `m-16` `gap-16` |
| `spacing/80` | 80px | 20 | `p-20` `m-20` `gap-20` |
| `spacing/96` | 96px | 24 | `p-24` `m-24` `gap-24` |
| `spacing/112` | 112px | 28 | `p-28` `m-28` `gap-28` |
| `spacing/128` | 128px | 32 | `p-32` `m-32` `gap-32` |
| `spacing/144` | 144px | 36 | `p-36` `m-36` `gap-36` |
| `spacing/160` | 160px | 40 | `p-40` `m-40` `gap-40` |
| `spacing/192` | 192px | 48 | `p-48` `m-48` `gap-48` |
| `spacing/224` | 224px | 56 | `p-56` `m-56` `gap-56` |
| `spacing/256` | 256px | 64 | `p-64` `m-64` `gap-64` |
| `spacing/288` | 288px | 72 | `p-72` `m-72` `gap-72` |
| `spacing/320` | 320px | 80 | `p-80` `m-80` `gap-80` |
| `spacing/384` | 384px | 96 | `p-96` `m-96` `gap-96` |

The `Spacer` component `size` variant uses the same pixel label as the variable (e.g. `size=96` → `spacing/96` → `p-24` in Tailwind).
