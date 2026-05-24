# Figma ↔ React component mapping

Canonical mapping between Figma components in `https://www.figma.com/design/QXoQt5JPBJapI2H4z1bP7T/portfolio` and the React components in this repo.

This file replaces the Code Connect workflow. Code Connect requires a Figma Developer seat on an Org/Enterprise plan; this project stays on Pro and uses CLAUDE.md + this mapping table instead. Every Figma component below also carries a `description` and `documentationLinks` set on the canvas — those mirror the table here so designers see the link inside Figma.

| Figma node | Figma name | React file | React component |
|---|---|---|---|
| `8:8` | Button | `components/Button.tsx` | `Button` |
| `9:6` | IconButton | `components/IconButton.tsx` | `IconButton` |
| `309:24` | Filter Pill | `components/FilterPill.tsx` | `FilterPill` |
| `9:20` | Nav Link | `components/NavLink.tsx` | `NavLink` |
| `9:27` | TOC Item | `components/TableOfContents.tsx` | `TableOfContents` (renders TOC items internally) |
| `10:6` | Inline Link | `components/InlineLink.tsx` | `InlineLink` |
| `10:7` | Numbered Callout | `components/case-study.tsx` | `NumberedCallout` |
| `10:10` | Section Divider | `components/case-study.tsx` | `SectionDivider` |
| `10:24` | Spacer | (inline `<div className="h-X">`) | n/a — see `CLAUDE.md` spacing scale |
| `324:24` | Tag | `components/CaseStudyTag.tsx` | `CaseStudyTag` |
| `417:1261` | InlineCode | `components/InlineCode.tsx` | `InlineCode` |
| `448:51` | Segmented Control | `components/SegmentedControl.tsx` | `SegmentedControl` |
| `324:30` | Tab | inline in `components/DesignSystemTabs.tsx` | n/a — extract if reused outside design-system page |
| `324:33` | Carousel Dot | inline in `components/TestimonialCarousel.tsx` | n/a — extract if reused outside testimonial carousel |
| — (no Figma counterpart) | ExpandableImage | `components/ExpandableImage.tsx` | `ExpandableImage` — composes the existing IconButton over an `<img>`, then renders a lightbox via `createPortal`. Used internally by `ImageBlock` for `type="image"` when `expandable !== false`. |

Source URLs (used for `documentationLinks` in Figma) point at `main`, e.g.
`https://github.com/knowriley/portfolio/blob/main/components/Button.tsx`.

## Property ↔ prop conventions

For the components with multiple Figma variants/properties, the React prop names mirror the Figma property names (lowercased) so they translate cleanly in either direction.

| Figma component | Figma property | Maps to React prop |
|---|---|---|
| Button | `Variant` (Primary \| Outline) | `variant` (`'primary'` \| `'outline'`) |
| Button | `State` | (CSS-only — Default → no state, Hover/Disabled handled by browser + `disabled` prop) |
| Button | `Show Icon` (boolean) | `noIcon` (inverted) |
| Filter Pill | `Size` | `size` (`'default'` \| `'small'`) |
| Filter Pill | `State` | `selected` (`true` for `Selected`; Hover is CSS-only) |
| Filter Pill | `Label` (text) | `label` |
| Inline Link | `Variant` | `variant` (`'subtle'` \| `'emphasis'` \| `'icon'` \| `'icon-emphasis'`) |
| Inline Link | `State` | (CSS-only) |
| Numbered Callout | `Number` (text) | `number` |
| Numbered Callout | `Body` (text) | `children` |
| Tag | `Label` (text) | `children` |
| InlineCode | `Label` (text) | `children` |
| Segmented Control | `State` (Default \| Hover \| Active) | (CSS-only — driven by `value === option.value` in React; Hover and Active are visually identical) |
| Segmented Control | `Label` (text) | `option.label` |
| Tab | `State` (Active \| Inactive) | (currently inline; see DesignSystemTabs) |
| Carousel Dot | `State` (Active \| Inactive) | (currently inline; see TestimonialCarousel) |
| Spacer | `size` | (CSS class `h-{N}`) |
| TOC Item | `State` | (driven by IntersectionObserver in `TableOfContents.tsx`) |
| Nav Link | `State` | (driven by `usePathname()` match in `NavLink.tsx`) |
| IconButton | `State` | (CSS-only) |
| Section Divider | (none) | — |

## Workflow when components change

Code is the source of truth. When a React prop is added, removed, or renamed:

1. Update the React component file.
2. Update CLAUDE.md's component catalog (Interactive Elements section) and prop tables.
3. Update the Figma component (variant/property) via `mcp__plugin_figma_figma__use_figma` to keep the structure aligned.
4. Update the Figma component's `description` (and `documentationLinks` if the source path changed) so designers see the new convention inline.
5. Update the matching row in this file.
