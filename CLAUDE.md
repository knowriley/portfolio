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

**Image & video treatment:** All images and videos on the site must have `border border-border-subtle shadow-sm rounded-sm`. This applies to every `ImageBlock` variant (image, video, vimeo, placeholder), case study cover images, and any other inline images. The `CaseStudyCard` thumbnail is the one exception — it uses `shadow-xs` with `rounded-2xl` to match card styling. The card itself lifts on hover (`hover:-translate-y-2.5`) instead of changing shadow. Pass `bare` to `ImageBlock` to opt out of border/shadow for images that should bleed into the background.

**Image & video sizing:** All images and videos must fill the full width of their container and maintain their original aspect ratio — never crop. Use `w-full` with no fixed aspect ratio. Never use `object-cover`, `object-fit`, `fill`, or `aspect-video` on image or video elements. Vimeo iframes are the only exception (they need `aspect-video` for the embed container).

**Video play/pause:** All videos display a round play/pause `IconButton` overlay in the bottom-right corner (`absolute bottom-3 right-3`). Videos autoplay muted and loop. The button toggles between `Play` and `Pause` lucide icons. This is handled by the `VideoBlock` client component (`components/VideoBlock.tsx`), which `ImageBlock` delegates to for `type="video"`.

**Image captions:** Every image and video should have a caption by default. Captions use `text-small text-text-tertiary mt-2 text-center` and are centered below the image. Always provide a `caption` prop when using `ImageBlock` — omitting it should be a deliberate exception, not the default.

**Image & video optimization:** Every image and video committed to `public/` — whether adding a new one or touching an existing one — must be optimized for web. Raw exports from Figma, ScreenFlow, QuickTime, or any other tool are never acceptable as-committed.

- **Images** → WebP only (`.webp`). No `.png`, `.jpg`, `.jpeg` in `public/` (except `.gitkeep`-type markers). Quality 82, `effort: 6` is the default. Resize so the source's longest edge is no more than 2× the largest rendered width the image will ever have (e.g. a book cover rendered at 384px caps at 800px; a full-page-width case study image caps at 1800px).
- **Videos** → MP4 H.264 only (`.mp4`). No `.mov`, `.webm`, or raw screen recordings. Encode with `libx264`, `-preset slow`, `-crf 28`, `-pix_fmt yuv420p`, `-movflags +faststart`, `-an` (strip audio — all site videos are silent autoplay loops). Cap width at 1600px.
- **Tooling:** install `sharp` and `ffmpeg-static` as temporary dev-deps (`npm install --save-dev --no-save sharp ffmpeg-static`), run the conversion, then `npm remove sharp ffmpeg-static`. They should never land in `package.json`. See the commits that introduced the conductor and bricks assets for reference scripts.
- **Code references** must match the file extension on disk — always `.webp` / `.mp4`, never the original format. The `VideoBlock` component emits `type="video/mp4"`, so any source extension other than `.mp4` breaks.
- **Check before committing:** `du -sh public/images/` should stay under ~5MB total for the whole directory unless you're adding a genuinely long-form video. Single images over ~500KB or single videos over ~1MB should be treated as red flags and re-encoded.

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
- All headings (h1–h3, display) use `font-normal` (never `font-medium` or `font-bold`)
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
- Section heading: `text-h2 font-normal text-text-primary leading-[1.3]`
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

**Metadata grid** (Overview section) — responsive CSS grid: `grid grid-cols-2 md:grid-cols-3 gap-8 pt-8`. Six metadata fields (Role, Team, For, Tools, Timeline, Status) reflow from 3 rows × 2 cols on mobile to 2 rows × 3 cols on tablet+. Each cell is `flex flex-col gap-1.5` — label `text-small font-medium uppercase tracking-widest text-text-tertiary pb-2`, value `text-body-small text-text-secondary`. Add new metadata fields in multiples that divide cleanly into both column counts (6 works; 4 or 5 produce a ragged tail on desktop).

**NDA / paywalled case study pages** — two intentional deviations from the standard case study shell:
- **Hero has no `View Live` button.** The flex row wrapping `<h1>` + `<Button>` is omitted; the `<h1>` renders bare. Pages: `app/work/evidence-of-insurability/page.tsx`, `app/work/ai-claims-portal/page.tsx`. When NDA restrictions lift, add the Button back and wrap in `<div className="flex items-end gap-8">` to match Bricks/Conductor.
- **Paywall spacer** before `<CaseStudyPaywall>` uses `<div className="h-16 md:h-24" />` — not `<SectionDivider>`. The paywall fades into the content (via its own `from-transparent to-bg` gradient at `-top-40`), so a hard rule would fight the fade. The `h-16 md:h-24` (64px → 96px) matches the rhythm of major section spacing without introducing a visible divider.

**Figma file:** `https://www.figma.com/design/QXoQt5JPBJapI2H4z1bP7T/portfolio` — contains all variables, text styles, effect styles, and components. This is the single Figma source that must stay synced with `tailwind.config.ts`.

## Interactive Elements

> Rule: all interactive elements must pass WCAG AA (≥ 4.5:1 text, ≥ 3:1 UI) and differentiate hover by more than color alone.

**Icon Button** — `components/IconButton.tsx` ('use client'):

```tsx
<IconButton icon={<ArrowLeft size={20} strokeWidth={2} />} onClick={prev} aria-label="Previous" />
```

| State | Key classes |
|---|---|
| Default | `size-11 rounded-full bg-bg-secondary border border-border text-text-secondary` |
| Hover | `hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary` |

Matches the outline button variant states. White fill at rest; gray fill on hover. Hover also shifts text from secondary → primary for added emphasis. Always provide `aria-label`.

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
Contrast: `#57534e` on white ≈ 7.8:1 ✓ AA.

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
| Hover | `bg-bg-secondary text-text-primary font-medium` (on `hover:` variant) |
| Active | `bg-bg-secondary text-text-primary font-medium` |

Each item gets a filled `bg-bg-secondary` background on hover and when active (hover and active share the same visual treatment — the background fill is the non-color diff on hover, not just color). `rounded-sm` on all items. Positioned `sticky top-32` (128px — clears the 64px nav with breathing room).

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
| **Any image or video in a case study body** (hero cover, inline section media, in-body demos) | `<ImageBlock>` — with `type="image"` (default), `type="video"`, `type="vimeo"`, or no props for placeholder | Single abstraction. Automatically applies the `border border-border-subtle shadow-sm rounded-sm` chrome, handles optional captions via `<figcaption>`, and delegates video rendering to `VideoBlock` internally (play/pause IconButton in bottom-right). |
| **Work grid card thumbnail** — `components/CaseStudyCard.tsx` | Raw `<Image>` for stills, raw `<video autoPlay loop muted playsInline>` for `.mov` / `.mp4` / `.webm` thumbnails | Card context is different: the thumbnail is a clickable preview (no controls, no caption, `object-cover` + `aspect-video` framing). Wrapping in `ImageBlock` would fight the card's layout. `CaseStudyCard` is the one place where raw `<video>` is acceptable. |
| **Anywhere else** | `<ImageBlock>` | Do **not** import `VideoBlock` directly into a page. It's an internal implementation detail of `ImageBlock`. One entry point keeps chrome, captions, and play/pause behavior consistent. |

**Rule:** if you're adding a video to a case study body, reach for `<ImageBlock type="video" src="..." caption="..." />`. The only sanctioned direct-`<video>` call site is `CaseStudyCard.tsx` for thumbnails.

**File format:** `.mp4` (H.264) only — see the **Image & video optimization** rules above for encoding parameters. `VideoBlock` emits `<source type="video/mp4">`, so any other source extension breaks playback.

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

3. **Figma file** (`https://www.figma.com/design/QXoQt5JPBJapI2H4z1bP7T/portfolio`) — **mandatory** for any design system change. Every time a change is made to the design system — tokens, typography, components, spacing, shadows, or any convention — the corresponding Figma file must be updated in the same session. This includes:
   - Adds, removes, or modifies a color, spacing, or radius token in `tailwind.config.ts` → update the corresponding Figma variable
   - Adds or modifies a type scale entry or font weight convention → update the corresponding Figma text style
   - Adds or modifies a shadow token → update the corresponding Figma effect style
   - Adds or modifies a shared component → update or create the corresponding Figma component with matching variants and states
   - Changes any interactive state styling (hover, active, selected) → update the corresponding Figma component variant
   - Updates the documentation frame to reflect any new or changed tokens/components

The design system page is the live rendered reference, the Figma file is the design reference — both must always reflect the actual state of `tailwind.config.ts` and the component conventions in use. **Code is the source of truth; Figma follows code. Never skip the Figma update.**

## Figma Build Rules

**File:** `QXoQt5JPBJapI2H4z1bP7T` — all design work happens here.

**Never hardcode values when building in Figma.** Every property that has a corresponding variable, style, or component must use it — no exceptions. This means every fill, stroke, text color, padding, gap, radius, shadow, and font must be bound to a design system token. Hardcoded hex colors, bare pixel numbers, and manually set font properties are never acceptable when a matching variable or style exists.

- **Colors** — use `setBoundVariableForPaint` to bind Color collection variables (e.g. `text/primary`, `bg/secondary`, `border/subtle`, `accent/default`) to all fills, strokes, and text colors. When calling `setBoundVariableForPaint`, always pass the actual resolved color as the base paint (not `{r:0, g:0, b:0}`) so the fill renders correctly even before the variable resolves.
- **Spacing** — use `setBoundVariable` to bind Spacing collection variables to all padding (`paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`), gap (`itemSpacing`, `counterAxisSpacing`), and fixed spacer frame heights (`height`). Never use bare pixel numbers.
- **Border radius** — use `setBoundVariable` to bind Border Radius collection variables to all corner radii (`topLeftRadius`, `topRightRadius`, `bottomLeftRadius`, `bottomRightRadius`). Never type radius values manually.
- **Typography** — apply the named text styles (display, h1, h2, etc.) via `setTextStyleIdAsync` instead of setting font properties manually.
- **Shadows** — apply the named effect styles (shadow/xs through shadow/2xl, shadow/inner) via `effectStyleId` instead of creating manual drop shadows.
- **Components** — use instances of the Figma components (Button, IconButton, Filter Pill, Nav Link, TOC Item, Inline Link, Numbered Callout, Section Divider, Spacer) instead of rebuilding them from primitives.
- **Spacer component** — when inserting vertical space between elements, always use an instance of the `Spacer` component set to the correct `size` variant. Never create raw frames named `sp` or `spacer`.

**Sync rule:** Any design system change in code requires an immediate corresponding update to this Figma file in the same session — no exceptions. This includes token changes, component additions/modifications, typography weight changes, interactive state styling, and documentation frame updates. Code is the source of truth — Figma follows.

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
