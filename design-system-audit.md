# Design System Audit Report

**Date:** 2026-04-12 (updated 2026-04-12)
**Source of truth:** Code (`tailwind.config.ts`)
**Figma file:** `https://www.figma.com/design/QXoQt5JPBJapI2H4z1bP7T/portfolio`
**Status:** Figma design system rebuilt from scratch on 2026-04-12 — all variables, text styles, effect styles, and components now match code exactly. The old file (`Z1w45vZdzISEhxuV6nx8Wz`) is deprecated.
**Scope:** Token comparison between code and Figma, component usage, cleanup recommendations

---

## 1. Token Architecture in `tailwind.config.ts`

Everything lives under `theme.extend`, meaning **all standard Tailwind defaults remain available** alongside custom tokens. This is the root cause of potential inconsistency — nothing prevents using `text-white`, `bg-gray-100`, `text-sm`, etc.

### Color Tokens (42 defined)

| Category | Tokens | Status |
|---|---|---|
| **Neutral scale** (000–950) | 12 values | Reference palette — never used directly in components. Semantic tokens point to these hex values. |
| **Primary** (DEFAULT + 4 variants) | 5 values | `primary` used once (`text-primary` in CaseStudyCard hover). hover/active/light/subtle all unused. |
| **Secondary** (DEFAULT + 3 variants) | 4 values | All unused. |
| **Gradient** (red, pink, orange) | 3 values | All actively used. |
| **Accent** (DEFAULT) | 1 value | Used only in Button hover. |
| **bg** (5 roles) | 5 values | `bg-brand` unused. Rest actively used. |
| **border** (4 roles) | 4 values | `border-focus` unused. Rest actively used. |
| **text** (9 roles) | 9 values | `placeholder`, `disabled`, `link-hover`, `on-brand` all unused. |

**18 color tokens are defined but never used in any component.**

### Typography Tokens (20 defined)

| Category | Tokens | Status |
|---|---|---|
| **Standard sizes** (2xs–6xl) | 12 values | Override Tailwind defaults with custom line-heights. None used in components — project exclusively uses role-based scale. |
| **Role-based scale** (display–small) | 8 values | All actively used across every page and component. |

### Other Tokens

| Category | Count | Status |
|---|---|---|
| **Border radius** (none–full) | 9 values | 7 actively used. `xs` and `4xl` unused. |
| **Shadows** (xs–inner) | 7 values | Only `shadow-xs` and `shadow-md` used (CaseStudyCard). 5 unused. |
| **Max width** (`page`) | 1 value | Actively used everywhere. |
| **Letter spacing** (`wordmark`) | 1 value | Used in Footer. |
| **Font families** (sans, serif, mono) | 3 values | `serif` (Lora) defined but not actively used. |

---

## 2. Where Raw Tailwind Leaks Through

### Colors — CLEAN
No raw color classes (`text-white`, `bg-black`, `text-gray-*`) found anywhere. All colors use semantic tokens.

### Typography — CLEAN
No raw size classes (`text-sm`, `text-lg`, `text-xl`) used for readable text. All text uses the 8-role scale. Footer wordmark `text-[56px]`/`text-[80px]`/`text-[120px]` is intentionally decorative.

### Layout — 1 inconsistency
- **`app/about/page.tsx`** uses `max-w-7xl` and `max-w-2xl` (raw Tailwind) instead of `max-w-page`.

### Arbitrary values in use

| Value | File(s) | Purpose |
|---|---|---|
| `w-[180px]` | moto-design-system, DesignSystemTabs | TOC sidebar width |
| `w-[200px]` | moto-design-system, DesignSystemTabs | Notes column spacer |
| `h-[400px]` | case-study.tsx | ImageBlock placeholder height |
| `h-[227px]` | moto-design-system | Stat callout row height |
| `leading-[1.3]` | moto-design-system | Heading line-height (redundant — already in fontSize config) |
| `from-[22%]` | Nav, Hero, Footer, Testimonials | Gradient stop position |
| `text-[56px/80px/120px]` | Footer | Decorative wordmark (documented) |

---

## 3. Component-by-Component Adherence

### Perfect adherence
- `Hero.tsx`, `Button.tsx`, `IconButton.tsx`, `InlineLink.tsx`, `WorkGrid.tsx`, `TestimonialCarousel.tsx`, `Footer.tsx`, `app/page.tsx`, `app/design-system/page.tsx`

### Minor issues
- **`CaseStudyCard.tsx`** — uses `text-primary` (hue-based) instead of semantic token for hover state
- **`app/about/page.tsx`** — uses `max-w-7xl`/`max-w-2xl` instead of `max-w-page`
- **`moto-design-system/page.tsx`** — redundant `leading-[1.3]` on headings; arbitrary `h-[227px]`
- **`case-study.tsx`** — arbitrary `h-[400px]` for image blocks

---

## 4. Figma vs Code Comparison

### CRITICAL: Color Role Swap

The biggest issue — **"primary" and "accent" are swapped between Figma and code**, and the values are completely different:

| Role | Code | Figma | Issue |
|---|---|---|---|
| **primary** | `#6941C6` (purple) | `#2B6B6B` (teal) | Different hue AND different role |
| **accent** | `#e40089` (brand pink) | `#6941C6` (purple) | Figma accent = Code primary |

In Figma, **teal is the primary brand color** and **purple is the accent**. In code, **purple is primary** and **brand pink is accent**. These need to be reconciled.

Additionally, Figma primary has a `primaryLighter` (#a8d4d4) variant that doesn't exist in code.

### Color Discrepancies (hex mismatches)

| Token | Code | Figma | Action needed in Figma |
|---|---|---|---|
| `primary.DEFAULT` | `#6941C6` | `#2B6B6B` | Update to `#6941C6` |
| `primary.hover` | `#53389E` | `#1E5252` | Update to `#53389E` |
| `primary.active` | `#42307D` | `#164040` | Update to `#42307D` |
| `primary.light` | `#9B8AFB` | `#4A9090` | Update to `#9B8AFB` |
| `primary.subtle` | `#F4F3FF` | `#EAF4F4` | Update to `#F4F3FF` |
| `accent.DEFAULT` | `#e40089` | `#6941C6` | Update to `#e40089` |
| `text.link` | `#0a7acc` (blue) | `#2B6B6B` (teal) | Update to `#0a7acc` |
| `text.link-hover` | `#085fa0` | `#1E5252` | Update to `#085fa0` |

### Tokens in Figma but NOT in code (add to Figma or remove from Figma)

Since code is source of truth, these should be **removed from Figma**:

| Figma token | Value | Recommendation |
|---|---|---|
| `primaryLighter` | `#a8d4d4` | Remove — no code equivalent |
| `interactiveDefault` | `#2b6b6b` | Remove — not in code token system |
| `interactiveHover` | `#1e5252` | Remove |
| `interactiveActive` | `#164040` | Remove |
| `feedbackSuccessDefault` | `#2d7d46` | Remove — no feedback system in code |
| `feedbackSuccessLight` | `#d4edda` | Remove |
| `feedbackSuccessSubtle` | `#f0faf3` | Remove |
| `feedbackSuccessText` | `#1a4d2b` | Remove |
| `feedbackWarningDefault` | `#e8b84b` | Remove |
| `feedbackWarningLight` | `#fdf3ce` | Remove |
| `feedbackWarningSubtle` | `#fffbec` | Remove |
| `feedbackWarningText` | `#7a5c00` | Remove |
| `feedbackErrorDefault` | `#c0392b` | Remove |
| `feedbackErrorLight` | `#fad9d5` | Remove |
| `feedbackErrorSubtle` | `#fef2f0` | Remove |
| `feedbackErrorText` | `#6b1515` | Remove |
| `feedbackInfoDefault` | `#2a6b9b` | Remove |
| `feedbackInfoLight` | `#d1ecf1` | Remove |
| `feedbackInfoSubtle` | `#eef6fb` | Remove |
| `feedbackInfoText` | `#154b6e` | Remove |
| `accentActive` | `#42307d` | Remove (or repurpose if accent gets variants) |
| `accentHover` | `#53389e` | Remove (same) |
| `accentLight` | `#9b8afb` | Remove (same) |
| `accentSubtle` | `#f4f3ff` | Remove (same) |
| `testColor` | `#f02065` | Remove — test artifact |

**25 Figma-only tokens to remove.**

### Tokens in code but NOT in Figma (add to Figma)

| Code token | Value | Action in Figma |
|---|---|---|
| `gradient.red` | `#f02065` | Add as `gradient/red` |
| `gradient.pink` | `#d5189b` | Add as `gradient/pink` |
| `gradient.orange` | `#ff7700` | Add as `gradient/orange` |

**3 code tokens missing from Figma.** The gradient system is actively used (hero, footer wordmark, testimonials) and must exist in Figma.

### Tokens that match perfectly

| Category | Status |
|---|---|
| **Neutral scale** (all 12) | All hex values match |
| **Secondary** (all 4) | All hex values match |
| **bg** (all 5) | All hex values match |
| **border** (all 4) | All hex values match |
| **text** (7 of 9) | All match except `link` and `link-hover` |
| **Border radius** (all 10) | All values match |
| **Shadows** (all 7) | All values match |
| **Spacing** (all 27) | All values match |
| **Standard font sizes** (all 12) | All values match |
| **Font families** (all 3) | All match |

---

### TYPE ROLES: Major Discrepancies

The code uses a **1.2x modular scale** from a 16px base. Figma uses **round numbers** and is missing `h3`.

| Role | Code size | Figma size | Code leading | Figma leading | Issues |
|---|---|---|---|---|---|
| `display` | 56px (3.5rem) | 60px | 1.3 | 1.0 | Size AND leading differ |
| `h1` | 39.81px (2.488rem) | 36px | 1.3 | 1.0 | Size AND leading differ |
| `h2` | 33.18px (2.074rem) | 36px | 1.3 | 1.0 | Figma h2 = h1 (both 36px!) + leading differs |
| `h3` | 27.65px (1.728rem) | — | 1.3 | — | Missing from Figma entirely |
| `body-biggest` | 23.04px (1.44rem) | 24px | 1.5 | 1.5 | Size differs, leading matches |
| `body-big` | 19.2px (1.2rem) | 20px | 1.5 | 1.5 | Size differs, leading matches |
| `body-small` | 16px (1rem) | 16px | 1.5 | 1.5 | Match |
| `small` | 13.33px (0.833rem) | 14px | 1.0 | 1.0 | Size differs, leading matches |

**Figma type roles need to be updated to match the code's modular scale values and leading.**

### Typography tokens in Figma but not in code

Figma defines font weight, leading, and tracking as standalone variables. Code relies on Tailwind's built-in utilities for these. This is fine — no action needed, but be aware they exist for Figma's internal use.

---

### "tailwindCSS" Collection: DELETE ENTIRELY

Figma contains a `tailwindCSS` collection that appears to be **leftover shadcn/ui defaults**. These conflict with the custom system:

| Figma token | Value | Conflict |
|---|---|---|
| `themeMutedForeground` | `#79716b` | Not in design system (stone-500 from shadcn) |
| `themePopoverForeground` | `#0c0a09` | Not in design system (stone-950) |
| `themeBorder` | `#e7e5e4` | Conflicts with `border.DEFAULT` (#ddd9d5) |
| `themePopover` | `#ffffff` | Redundant with `bg.DEFAULT` |
| `radiusMd` | `6` | Conflicts with code's `radius.md` (8) |
| `spacing64` | `256` | Wrong value (should be 64 if naming matches pattern) |
| `spacing4` | `16` | Wrong value (should be 4) |
| `spacing1` | `4` | Wrong value (should be 1) |

**This entire collection should be deleted.** It's polluting the variable system with values from a different design framework.

---

## 5. Summary of Figma Cleanup Actions

### Priority 1: Fix incorrect values
1. Update `primaryDefault` → `#6941C6` (and all primary variants to match code)
2. Update `accentDefault` → `#e40089`
3. Update `textLink` → `#0a7acc`
4. Update `textLinkHover` → `#085fa0`
5. Update all 8 type role sizes to match code's modular scale
6. Update display/h1/h2 leading from 1.0 → 1.3
7. Add `h3` type role (27.65px, weight 400, leading 1.3)

### Priority 2: Add missing tokens
1. Add `gradient/red` → `#f02065`
2. Add `gradient/pink` → `#d5189b`
3. Add `gradient/orange` → `#ff7700`

### Priority 3: Remove tokens not in code
1. Remove `primaryLighter`
2. Remove all `interactive*` tokens (3)
3. Remove all `feedback*` tokens (16)
4. Remove `accentHover`, `accentActive`, `accentLight`, `accentSubtle`
5. Remove `testColor`

### Priority 4: Delete polluted collection
1. Delete entire `tailwindCSS` collection (shadcn leftovers)

### Total changes
- **8 values to fix** (color hex + type sizes/leading)
- **3 tokens to add** (gradients)
- **25 tokens to remove**
- **1 entire collection to delete**

---

## 6. Code-Side Recommendations

These are minor — the codebase is well-disciplined (92/100 adherence).

1. Remove redundant `leading-[1.3]` from headings in `moto-design-system/page.tsx`
2. Resolve `about/page.tsx` container width (`max-w-7xl` → `max-w-page` or document as intentional)
3. Consider tokenizing repeated arbitrary values (`w-[180px]` → `w-toc`, `w-[200px]` → `w-notes`)
4. Review `CaseStudyCard.tsx` hover using `text-primary` (hue-based) vs semantic alternative
5. Update `CLAUDE.md` to note which tokens are reserved/unused vs active
6. Update `app/design-system/page.tsx` to visually distinguish active vs reserved tokens
