'use client'

import { useState } from 'react'
import Button from './Button'
import InlineLink from './InlineLink'
import TableOfContents from './TableOfContents'
import { SectionDivider } from './case-study'
import {
  ArrowUpRight, ExternalLink, ArrowRight, ArrowLeft,
  X, Check, ChevronDown, ChevronRight, Search, Plus,
} from 'lucide-react'

// ── Local helpers ─────────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-h2 font-medium text-text-primary mb-6">{children}</h2>
  )
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-body-small text-text-tertiary mb-6 mt-16 first:mt-0">{children}</h3>
  )
}

function RowDivider() {
  return <div className="border-b border-border-subtle" />
}

// ── TOC data ──────────────────────────────────────────────────────────────────

type Tab = 'Foundations' | 'Components'

const foundationsToc = [
  { label: 'Typography', id: 'typography' },
  { label: 'Icons',      id: 'icons' },
  { label: 'Color',      id: 'color' },
  { label: 'Spacing',    id: 'spacing' },
  { label: 'Radius',     id: 'radius' },
  { label: 'Shadow',     id: 'shadow' },
]

const componentsToc = [
  { label: 'Icon Button',        id: 'icon-button' },
  { label: 'Primary Button',     id: 'primary-button' },
  { label: 'Navigation Link',    id: 'nav-link' },
  { label: 'Inline Link',        id: 'inline-link' },
  { label: 'Filter Pill',        id: 'filter-pill' },
  { label: 'Table of Contents',  id: 'table-of-contents' },
]

// ── Foundations content ───────────────────────────────────────────────────────

function FoundationsContent() {
  return (
    <>
      {/* ──────────────────────────── TYPOGRAPHY ──────────────────────── */}
      <section id="typography">
        <SectionHeading>Typography</SectionHeading>

        <SubLabel>Type Scale</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          All readable text uses one of these seven roles. Raw Tailwind sizes (
          <span className="font-mono">text-sm</span>,{' '}
          <span className="font-mono">text-lg</span>, etc.) and arbitrary pixel values
          are not used for body or UI text.
        </p>

        <div>
          <RowDivider />

          <div className="py-6 flex items-baseline gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">text-display</p>
              <p className="text-body-small text-text-tertiary">56px · lh 1.3</p>
              <p className="text-body-small text-text-tertiary">font-normal</p>
              <p className="text-body-small text-text-tertiary mt-1">Hero headlines only</p>
            </div>
            <p className="text-display font-normal text-text-primary leading-[1.3] flex-1 min-w-0">
              Content dictates form
            </p>
          </div>

          <div className="py-6 flex items-baseline gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">text-h1</p>
              <p className="text-body-small text-text-tertiary">39.81px · lh 1.3</p>
              <p className="text-body-small text-text-tertiary">font-medium</p>
              <p className="text-body-small text-text-tertiary mt-1">Page-level headings</p>
            </div>
            <p className="text-h1 font-medium text-text-primary leading-[1.3] flex-1 min-w-0">
              Content dictates form
            </p>
          </div>

          <div className="py-6 flex items-baseline gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">text-h2</p>
              <p className="text-body-small text-text-tertiary">33.18px · lh 1.3</p>
              <p className="text-body-small text-text-tertiary">font-medium</p>
              <p className="text-body-small text-text-tertiary mt-1">Section headings, pull quotes, stats</p>
            </div>
            <p className="text-h2 font-medium text-text-primary leading-[1.3] flex-1 min-w-0">
              Content dictates form
            </p>
          </div>

          <div className="py-6 flex items-baseline gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">text-h3</p>
              <p className="text-body-small text-text-tertiary">27.65px · lh 1.3</p>
              <p className="text-body-small text-text-tertiary">font-medium</p>
              <p className="text-body-small text-text-tertiary mt-1">Sub-section headings within a section</p>
            </div>
            <p className="text-h3 font-medium text-text-primary leading-[1.3] flex-1 min-w-0">
              Content dictates form
            </p>
          </div>

          <div className="py-6 flex items-baseline gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">text-body-biggest</p>
              <p className="text-body-small text-text-tertiary">23.04px · lh 1.5</p>
              <p className="text-body-small text-text-tertiary">font-normal</p>
              <p className="text-body-small text-text-tertiary mt-1">Card titles, sub-headings, overview prose</p>
            </div>
            <p className="text-body-biggest text-text-primary flex-1 min-w-0">
              Content dictates form
            </p>
          </div>

          <div className="py-6 flex items-baseline gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">text-body-big</p>
              <p className="text-body-small text-text-tertiary">19.2px · lh 1.5</p>
              <p className="text-body-small text-text-tertiary">font-normal</p>
              <p className="text-body-small text-text-tertiary mt-1">Primary prose, bio copy</p>
            </div>
            <p className="text-body-big text-text-secondary flex-1 min-w-0">
              In order to create the universal, you must pay very great attention to the specific.
            </p>
          </div>

          <div className="py-6 flex items-baseline gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">text-body-small</p>
              <p className="text-body-small text-text-tertiary">16px · lh 1.5</p>
              <p className="text-body-small text-text-tertiary">font-normal</p>
              <p className="text-body-small text-text-tertiary mt-1">Secondary prose, links, nav, badges</p>
            </div>
            <p className="text-body-small text-text-secondary flex-1 min-w-0">
              In order to create the universal, you must pay very great attention to the specific.
            </p>
          </div>

          <div className="py-6 flex items-baseline gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">text-small</p>
              <p className="text-body-small text-text-tertiary">13.33px · lh 1</p>
              <p className="text-body-small text-text-tertiary">font-normal</p>
              <p className="text-body-small text-text-tertiary mt-1">Captions only</p>
            </div>
            <p className="text-small text-text-tertiary flex-1 min-w-0">
              Design Systems · 2024 · Lead Designer
            </p>
          </div>

          <div className="py-6 flex items-baseline gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">label</p>
              <p className="text-body-small text-text-tertiary">13.33px · lh 1</p>
              <p className="text-body-small text-text-tertiary">font-medium · uppercase · widest</p>
              <p className="text-body-small text-text-tertiary mt-1">Footer headers, TOC title, metadata field labels</p>
            </div>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1 min-w-0">
              Role · Team · Local Time
            </p>
          </div>
        </div>

        <SubLabel>Font Families</SubLabel>
        <div>
          <RowDivider />

          <div className="py-6 flex items-center gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">font-sans</p>
              <p className="text-body-small text-text-tertiary">Inter</p>
              <p className="text-body-small text-text-tertiary mt-1">All UI text</p>
            </div>
            <p className="font-sans text-body-big text-text-primary flex-1 min-w-0">
              I want to reach a little closer to the world
            </p>
          </div>

          <div className="py-6 flex items-center gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">font-serif</p>
              <p className="text-body-small text-text-tertiary">Lora</p>
              <p className="text-body-small text-text-tertiary mt-1">Available; not in active use</p>
            </div>
            <p className="font-serif text-body-big text-text-primary flex-1 min-w-0">
              I want to reach a little closer to the world
            </p>
          </div>

          <div className="py-6 flex items-center gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1">
              <p className="font-mono text-body-small text-text-primary">font-mono</p>
              <p className="text-body-small text-text-tertiary">JetBrains Mono</p>
              <p className="text-body-small text-text-tertiary mt-1">Step numbers, code, token names</p>
            </div>
            <p className="font-mono text-body-big text-text-primary flex-1 min-w-0">
              I want to reach a little closer to the world
            </p>
          </div>
        </div>

        <SubLabel>Micro-labels</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          One unified style for all structural UI labels — footer column headers, TOC title, and metadata field labels.
        </p>
        <div>
          <RowDivider />
          <div className="py-5 flex items-center gap-8 border-b border-border-subtle">
            <div className="w-40 shrink-0">
              <p className="text-small font-medium uppercase tracking-widest text-text-tertiary">Role</p>
            </div>
            <p className="font-mono text-body-small text-text-tertiary w-72 shrink-0">text-small font-medium uppercase tracking-widest</p>
            <p className="text-body-small text-text-secondary flex-1 min-w-0">Footer headers, TOC title, MetadataGrid field labels</p>
          </div>
        </div>

        <SubLabel>Conventions</SubLabel>
        <div className="flex flex-col gap-4">
          {[
            {
              rule: 'Headings always use font-medium — never font-bold or font-normal.',
              applies: 'h1, h2 elements',
            },
            {
              rule: 'Section and content labels (e.g. "Overview", "Problem", "Next") use text-body-small text-text-tertiary with no uppercase or letter-spacing.',
              applies: 'Label component',
            },
            {
              rule: 'Micro-labels (footer column headers, TOC title, metadata grid field labels) use a single unified style: text-small font-medium uppercase tracking-widest text-text-tertiary.',
              applies: 'Footer, TOC, MetadataGrid',
            },
            {
              rule: 'Step or index numbers use font-mono text-body-small text-text-tertiary.',
              applies: 'Numbered callouts',
            },
            {
              rule: 'The footer wordmark uses text-[56px] md:text-[80px] lg:text-[120px] — decorative, intentionally outside the scale.',
              applies: 'Footer wordmark',
            },
          ].map(({ rule, applies }) => (
            <div key={applies} className="flex gap-8 py-4 border-b border-border-subtle">
              <p className="text-body-small text-text-primary flex-1 min-w-0">{rule}</p>
              <p className="text-body-small text-text-tertiary w-40 shrink-0 pt-0.5">{applies}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ───────────────────────────── ICONS ──────────────────────── */}
      <section id="icons">
        <SectionHeading>Icons</SectionHeading>
        <p className="text-body-small text-text-secondary mb-8">
          Icons come from{' '}
          <InlineLink href="https://lucide.dev" external variant="emphasis">Lucide React</InlineLink>
          . Import named icons directly — works in Server and Client Components.
          Color is always set via <span className="font-mono">className</span> using
          text token classes. Never hardcode stroke or fill colors.
        </p>

        <SubLabel>Sizes</SubLabel>
        <div>
          <RowDivider />
          {[
            { size: 20, strokeWidth: 2,   label: 'size={20} strokeWidth={2}',   use: 'UI icons at body-small scale — buttons, inputs, nav, inline links' },
            { size: 24, strokeWidth: 2,   label: 'size={24} strokeWidth={2}',   use: 'Inline with body-small text, standalone icons' },
            { size: 32, strokeWidth: 1.5, label: 'size={32} strokeWidth={1.5}', use: 'Decorative / card icon' },
          ].map(({ size, strokeWidth, label, use }) => (
            <div key={size} className="flex items-center gap-8 py-5 border-b border-border-subtle">
              <div className="w-12 flex items-center justify-center shrink-0">
                <ArrowUpRight size={size} strokeWidth={strokeWidth} className="text-text-primary" />
              </div>
              <p className="font-mono text-body-small text-text-primary w-56 shrink-0">{label}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>

        <SubLabel>Color</SubLabel>
        <div>
          <RowDivider />
          {[
            { cls: 'text-text-primary',   icon: <ArrowUpRight size={20} strokeWidth={2} />, label: 'text-text-primary',   use: 'Default — primary actions, emphasis' },
            { cls: 'text-text-secondary', icon: <ArrowUpRight size={20} strokeWidth={2} />, label: 'text-text-secondary', use: 'Supporting icons alongside body text' },
            { cls: 'text-text-tertiary',  icon: <ArrowUpRight size={20} strokeWidth={2} />, label: 'text-text-tertiary',  use: 'Decorative, indicators, external link arrows' },
          ].map(({ cls, icon, label, use }) => (
            <div key={label} className={`flex items-center gap-8 py-5 border-b border-border-subtle ${cls}`}>
              <div className="w-12 flex items-center justify-center shrink-0">{icon}</div>
              <p className="font-mono text-body-small text-text-primary w-56 shrink-0">{label}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>

        <SubLabel>Common icons in use</SubLabel>
        <div className="flex flex-wrap gap-6">
          {[
            { icon: <ArrowUpRight size={20} strokeWidth={2} />, name: 'ArrowUpRight' },
            { icon: <ExternalLink  size={20} strokeWidth={2} />, name: 'ExternalLink' },
            { icon: <ArrowRight    size={20} strokeWidth={2} />, name: 'ArrowRight' },
            { icon: <ArrowLeft     size={20} strokeWidth={2} />, name: 'ArrowLeft' },
            { icon: <ChevronRight  size={20} strokeWidth={2} />, name: 'ChevronRight' },
            { icon: <ChevronDown   size={20} strokeWidth={2} />, name: 'ChevronDown' },
            { icon: <Check         size={20} strokeWidth={2} />, name: 'Check' },
            { icon: <X             size={20} strokeWidth={2} />, name: 'X' },
            { icon: <Search        size={20} strokeWidth={2} />, name: 'Search' },
            { icon: <Plus          size={20} strokeWidth={2} />, name: 'Plus' },
          ].map(({ icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-2 w-20">
              <div className="size-12 bg-bg-secondary rounded-sm flex items-center justify-center text-text-secondary border border-border-subtle">
                {icon}
              </div>
              <p className="font-mono text-body-small text-text-tertiary text-center leading-tight">{name}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            Lucide has 1,500+ icons —{' '}
            <InlineLink href="https://lucide.dev/icons" external variant="emphasis">browse the full library</InlineLink>
            . Import only what you use; each icon is tree-shaken individually.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ──────────────────────────── COLOR ───────────────────────── */}
      <section id="color">
        <SectionHeading>Color</SectionHeading>
        <p className="text-body-small text-text-secondary mb-4">
          The color system is organized in two layers.
        </p>
        <p className="text-body-small text-text-secondary mb-2">
          <span className="font-medium text-text-primary">Atomic tokens</span> define the raw palette — neutral scale, primary, and secondary hues. These are the building blocks but are never used directly in component markup.
        </p>
        <p className="text-body-small text-text-secondary mb-8">
          <span className="font-medium text-text-primary">Semantic tokens</span> assign meaning to those values — text, background, border, accent, and gradient roles. Components always reference semantic tokens, which makes it possible to retheme without touching markup.
        </p>

        {/* ── Atomic: Neutral ── */}
        <SubLabel>Neutral Scale · Atomic</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          The warm neutral ramp underpins every semantic token. Referenced by semantic roles, never used directly in components.
        </p>
        <div>
          <RowDivider />
          {[
            { label: 'neutral-000', hex: '#FFFFFF', mapped: 'bg, text-inverse' },
            { label: 'neutral-050', hex: '#F7F6F4', mapped: 'bg-secondary' },
            { label: 'neutral-100', hex: '#EEECEA', mapped: 'bg-tertiary, border-subtle' },
            { label: 'neutral-200', hex: '#DDD9D5', mapped: 'border' },
            { label: 'neutral-300', hex: '#C4BFB9', mapped: 'border-strong, text-placeholder' },
            { label: 'neutral-400', hex: '#9E9890', mapped: 'text-tertiary' },
            { label: 'neutral-500', hex: '#78726A', mapped: '—' },
            { label: 'neutral-600', hex: '#5C5650', mapped: 'text-secondary' },
            { label: 'neutral-700', hex: '#403B36', mapped: '—' },
            { label: 'neutral-800', hex: '#2A2520', mapped: '—' },
            { label: 'neutral-900', hex: '#1A1612', mapped: 'bg-inverse, text-primary' },
            { label: 'neutral-950', hex: '#100D0A', mapped: '—' },
          ].map(({ label, hex, mapped }) => (
            <div key={label} className="flex items-center gap-5 py-3 border-b border-border-subtle">
              <div
                className={`size-8 rounded-sm shrink-0 ${hex === '#FFFFFF' ? 'border border-border' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <p className="font-mono text-body-small text-text-primary w-32 shrink-0">{label}</p>
              <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">{hex}</p>
              <p className="text-body-small text-text-tertiary flex-1 min-w-0">→ {mapped}</p>
            </div>
          ))}
        </div>

        {/* ── Atomic: Primary ── */}
        <SubLabel>Primary · Atomic</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Pink hue derived from the gradient-red token (#f02065). Reserved for future branded accents and interactive focus states. Not actively used in any component — available as design vocabulary.
        </p>
        <div>
          <RowDivider />
          {[
            { label: 'primary',        hex: '#f02065', note: 'Base — reserved' },
            { label: 'primary-hover',   hex: '#c91a54', note: 'Hover variant — reserved' },
            { label: 'primary-active',  hex: '#a11443', note: 'Active variant — reserved' },
            { label: 'primary-light',   hex: '#f4729a', note: 'Light variant — reserved' },
            { label: 'primary-subtle',  hex: '#fef0f4', note: 'Subtle background — reserved' },
          ].map(({ label, hex, note }) => (
            <div key={label} className="flex items-center gap-5 py-3 border-b border-border-subtle">
              <div className="size-8 rounded-sm shrink-0" style={{ backgroundColor: hex }} />
              <p className="font-mono text-body-small text-text-primary w-32 shrink-0">{label}</p>
              <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">{hex}</p>
              <p className="text-body-small text-text-tertiary flex-1 min-w-0">{note}</p>
            </div>
          ))}
        </div>

        {/* ── Atomic: Secondary ── */}
        <SubLabel>Secondary · Atomic</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Gold hue reserved for future use (badges, highlights, status). Not actively used in any component.
        </p>
        <div>
          <RowDivider />
          {[
            { label: 'secondary',        hex: '#E8B84B', note: 'Base — reserved' },
            { label: 'secondary-hover',   hex: '#CF9E32', note: 'Hover variant — reserved' },
            { label: 'secondary-light',   hex: '#F0CC7A', note: 'Light variant — reserved' },
            { label: 'secondary-subtle',  hex: '#FDF5DC', note: 'Subtle background — reserved' },
          ].map(({ label, hex, note }) => (
            <div key={label} className="flex items-center gap-5 py-3 border-b border-border-subtle">
              <div className="size-8 rounded-sm shrink-0" style={{ backgroundColor: hex }} />
              <p className="font-mono text-body-small text-text-primary w-32 shrink-0">{label}</p>
              <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">{hex}</p>
              <p className="text-body-small text-text-tertiary flex-1 min-w-0">{note}</p>
            </div>
          ))}
        </div>

        {/* ── Semantic: Text ── */}
        <SubLabel>Text · Semantic</SubLabel>
        <div>
          <RowDivider />
          {[
            { label: 'text-text-primary',     hex: '#1A1612', role: 'Body, headings, all primary content' },
            { label: 'text-text-secondary',   hex: '#5C5650', role: 'Supporting prose, descriptions, metadata values' },
            { label: 'text-text-tertiary',    hex: '#9E9890', role: 'Labels, captions, placeholder hints' },
            { label: 'text-text-placeholder', hex: '#C4BFB9', role: 'Form input placeholders — reserved, not yet used' },
            { label: 'text-text-disabled',    hex: '#C4BFB9', role: 'Disabled states — reserved, not yet used' },
            { label: 'text-text-inverse',     hex: '#FFFFFF', role: 'Text on dark/inverse surfaces', border: true },
            { label: 'text-text-link',        hex: '#0a7acc', role: 'Reserved — not currently used (links use text-secondary instead)' },
            { label: 'text-text-link-hover',  hex: '#085fa0', role: 'Reserved — not currently used' },
            { label: 'text-text-on-brand',    hex: '#FFFFFF', role: 'Text on brand-tinted surfaces — reserved, not yet used', border: true },
          ].map(({ label, hex, role, border }) => (
            <div key={label} className="flex items-center gap-5 py-4 border-b border-border-subtle">
              <div
                className={`size-10 rounded-sm shrink-0 ${border ? 'border border-border' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <div className="flex-1 min-w-0 flex items-baseline gap-4">
                <p className="font-mono text-body-small text-text-primary w-52 shrink-0">{label}</p>
                <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">{hex}</p>
                <p className="text-body-small text-text-secondary">{role}</p>
              </div>
            </div>
          ))}
        </div>

        <SubLabel>Background · Semantic</SubLabel>
        <div>
          <RowDivider />
          {[
            { label: 'bg-bg',           hex: '#FFFFFF', role: 'Page background, nav surface', border: true },
            { label: 'bg-bg-secondary', hex: '#F7F6F4', role: 'Card surfaces, image placeholders, callout cards' },
            { label: 'bg-bg-tertiary',  hex: '#EEECEA', role: 'Tag pills, subtle highlights' },
            { label: 'bg-bg-inverse',   hex: '#1A1612', role: 'Dark / inverse surfaces' },
            { label: 'bg-bg-brand',     hex: '#EAF4F4', role: 'Brand-tinted surface — reserved, not yet used' },
          ].map(({ label, hex, role, border }) => (
            <div key={label} className="flex items-center gap-5 py-4 border-b border-border-subtle">
              <div
                className={`size-10 rounded-sm shrink-0 ${border ? 'border border-border' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <div className="flex-1 min-w-0 flex items-baseline gap-4">
                <p className="font-mono text-body-small text-text-primary w-52 shrink-0">{label}</p>
                <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">{hex}</p>
                <p className="text-body-small text-text-secondary">{role}</p>
              </div>
            </div>
          ))}
        </div>

        <SubLabel>Border · Semantic</SubLabel>
        <div>
          <RowDivider />
          {[
            { label: 'border-border-subtle', hex: '#EEECEA', role: 'Dividers, section rules, subtle separators' },
            { label: 'border-border',        hex: '#DDD9D5', role: 'Card outlines, callout card borders' },
            { label: 'border-border-strong', hex: '#C4BFB9', role: 'Emphasized borders, form inputs' },
            { label: 'border-border-focus',  hex: '#2B6B6B', role: 'Focus rings — reserved, not yet used' },
          ].map(({ label, hex, role }) => (
            <div key={label} className="flex items-center gap-5 py-4 border-b border-border-subtle">
              <div
                className="size-10 rounded-sm shrink-0 border-2"
                style={{ borderColor: hex, backgroundColor: 'transparent' }}
              />
              <div className="flex-1 min-w-0 flex items-baseline gap-4">
                <p className="font-mono text-body-small text-text-primary w-52 shrink-0">{label}</p>
                <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">{hex}</p>
                <p className="text-body-small text-text-secondary">{role}</p>
              </div>
            </div>
          ))}
        </div>

        <SubLabel>Accent · Semantic</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          The brand pink accent. Used for high-emphasis interactive states.
        </p>
        <div>
          <RowDivider />
          <div className="flex items-center gap-5 py-4 border-b border-border-subtle">
            <div className="size-10 rounded-sm shrink-0" style={{ backgroundColor: '#e40089' }} />
            <div className="flex-1 min-w-0 flex items-baseline gap-4">
              <p className="font-mono text-body-small text-text-primary w-52 shrink-0">bg-accent</p>
              <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">#e40089</p>
              <p className="text-body-small text-text-secondary">Primary button hover background. Contrast: white on #e40089 ≈ 4.6:1 ✓ AA</p>
            </div>
          </div>
        </div>

        <SubLabel>Gradient · Semantic</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Two named gradients are used site-wide, always applied as{' '}
          <span className="font-mono">bg-clip-text text-transparent bg-gradient-to-r</span>.
        </p>
        <div>
          <RowDivider />

          <div className="flex items-center gap-5 py-6 border-b border-border-subtle">
            <div
              className="h-10 w-10 rounded-sm shrink-0"
              style={{ background: 'linear-gradient(to right, #f02065, #d5189b)' }}
            />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-body-small text-text-primary mb-1">
                from-gradient-red to-gradient-pink
              </p>
              <p className="text-body-small text-text-tertiary mb-3">#f02065 → #d5189b</p>
              <p className="text-body-big bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink">
                Inline text highlights
              </p>
              <p className="text-body-small text-text-tertiary mt-2">
                Used in hero copy and testimonial pull quotes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 py-6 border-b border-border-subtle">
            <div
              className="h-10 w-10 rounded-sm shrink-0"
              style={{ background: 'linear-gradient(to right, #f02065 22%, #ff7700)' }}
            />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-body-small text-text-primary mb-1">
                from-gradient-red from-[22%] to-gradient-orange
              </p>
              <p className="text-body-small text-text-tertiary mb-3">#f02065 → #ff7700 · Pink-orange</p>
              <p className="text-h2 font-medium bg-clip-text text-transparent bg-gradient-to-r from-gradient-red from-[22%] to-gradient-orange">
                Content dictates form
              </p>
              <p className="text-body-small text-text-tertiary mt-2">
                Large text highlights (h2 and larger) and decorative items
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ──────────────────────────── SPACING ─────────────────────── */}
      <section id="spacing">
        <SectionHeading>Spacing</SectionHeading>
        <p className="text-body-small text-text-secondary mb-8">
          Spacing uses Tailwind&apos;s default scale (1 unit = 4px). Semantic uses are
          listed for values with established roles on this site.
        </p>

        <div>
          <div className="flex gap-4 py-3 border-b border-border-subtle">
            <p className="font-mono text-body-small text-text-tertiary w-16 shrink-0">Scale</p>
            <p className="font-mono text-body-small text-text-tertiary w-16 shrink-0">px</p>
            <p className="text-body-small text-text-tertiary flex-1">Semantic role on this site</p>
          </div>
          {[
            { scale: '1',    px: '4px',   role: 'Tag inner padding vertical (py-1)' },
            { scale: '1.5',  px: '6px',   role: 'Tag row gap (gap-1.5)' },
            { scale: '2',    px: '8px',   role: 'Hero tag row gap (gap-2)' },
            { scale: '2.5',  px: '10px',  role: 'Nav logo gap (gap-2.5)' },
            { scale: '3',    px: '12px',  role: 'Tag pill horizontal padding (px-3)' },
            { scale: '4',    px: '16px',  role: 'Callout inner gap, metadata label bottom padding' },
            { scale: '7',    px: '28px',  role: 'Callout card vertical padding (py-7)' },
            { scale: '8',    px: '32px',  role: 'Two-column gap, section inner gap (gap-8); small vertical spacer (h-8)' },
            { scale: '10',   px: '40px',  role: 'Horizontal page padding (px-10); callout horizontal padding (px-10)' },
            { scale: '12',   px: '48px',  role: 'Medium vertical spacer before images (h-12); hero bottom padding (pb-12)' },
            { scale: '16',   px: '64px',  role: 'Hero top padding (pt-16); cover image bottom padding (pb-16)' },
            { scale: '20',   px: '80px',  role: '3-column body section vertical padding (py-20)' },
            { scale: '24',   px: '96px',  role: 'Between subsections (h-24); next section bottom padding (pb-24)' },
          ].map(({ scale, px, role }) => (
            <div key={scale} className="flex items-center gap-4 py-3 border-b border-border-subtle">
              <p className="font-mono text-body-small text-text-primary w-16 shrink-0">{scale}</p>
              <p className="font-mono text-body-small text-text-tertiary w-16 shrink-0">{px}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{role}</p>
            </div>
          ))}
        </div>

        <div className="h-16" />

        <SubLabel>Layout</SubLabel>
        <div>
          <RowDivider />
          {[
            {
              token: 'max-w-page',
              value: '1560px',
              role: 'Maximum content width — applied to the inner div of every full-width section',
            },
            {
              token: 'Standard container',
              value: 'flex justify-center px-10',
              role: 'Outer shell of every section; pair with max-w-page w-full on the inner div',
            },
            {
              token: '3-column body',
              value: '180px + flex-1 + 200px',
              role: 'TOC (sticky) + content + empty notes column; gap-8 between columns',
            },
          ].map(({ token, value, role }) => (
            <div key={token} className="flex items-start gap-8 py-4 border-b border-border-subtle">
              <p className="font-mono text-body-small text-text-primary w-44 shrink-0 pt-0.5">{token}</p>
              <p className="font-mono text-body-small text-text-tertiary w-40 shrink-0 pt-0.5">{value}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{role}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ──────────────────────────── RADIUS ──────────────────────── */}
      <section id="radius">
        <SectionHeading>Radius</SectionHeading>

        <div>
          <div className="flex gap-5 py-3 border-b border-border-subtle">
            <div className="w-16 shrink-0" />
            <p className="font-mono text-body-small text-text-tertiary w-24 shrink-0">Class</p>
            <p className="font-mono text-body-small text-text-tertiary w-16 shrink-0">Value</p>
            <p className="text-body-small text-text-tertiary flex-1">Use</p>
          </div>
          {[
            { cls: 'rounded-none', value: '0px',    use: 'Sharp / reset' },
            { cls: 'rounded-xs',   value: '2px',    use: '—' },
            { cls: 'rounded-sm',   value: '4px',    use: 'Cards, callout cards, image blocks, cover image (primary use)' },
            { cls: 'rounded-md',   value: '8px',    use: '—' },
            { cls: 'rounded-lg',   value: '12px',   use: '—' },
            { cls: 'rounded-xl',   value: '16px',   use: '—' },
            { cls: 'rounded-2xl',  value: '20px',   use: '—' },
            { cls: 'rounded-3xl',  value: '24px',   use: 'Company logo avatar (rounded-3xl)' },
            { cls: 'rounded-4xl',  value: '32px',   use: '—' },
            { cls: 'rounded-full', value: '9999px', use: 'Tag pills, nav logo dot, company logo avatars' },
          ].map(({ cls, value, use }) => (
            <div key={cls} className="flex items-center gap-5 py-4 border-b border-border-subtle">
              <div
                className="size-10 bg-bg-tertiary shrink-0 border border-border"
                style={{ borderRadius: value }}
              />
              <p className="font-mono text-body-small text-text-primary w-24 shrink-0">{cls}</p>
              <p className="font-mono text-body-small text-text-tertiary w-16 shrink-0">{value}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ──────────────────────────── SHADOW ──────────────────────── */}
      <section id="shadow">
        <SectionHeading>Shadow</SectionHeading>
        <p className="text-body-small text-text-secondary mb-8">
          All shadows use the site&apos;s warm neutral base color (
          <span className="font-mono">#1A1612</span>) at low opacity. Currently{' '}
          <span className="font-mono">shadow-xs</span> and{' '}
          <span className="font-mono">shadow-md</span> are used on CaseStudyCard. The rest are reserved for future use.
        </p>

        <div>
          <div className="flex gap-5 py-3 border-b border-border-subtle">
            <div className="w-16 shrink-0" />
            <p className="font-mono text-body-small text-text-tertiary flex-1">Class</p>
          </div>
          {[
            { cls: 'shadow-xs',    value: '0 1px 2px (5% opacity)' },
            { cls: 'shadow-sm',    value: '0 1px 3px + 0 1px 2px (10% opacity)' },
            { cls: 'shadow-md',    value: '0 4px 6px + 0 2px 4px (8% opacity)' },
            { cls: 'shadow-lg',    value: '0 10px 15px + 0 4px 6px (8% opacity)' },
            { cls: 'shadow-xl',    value: '0 20px 25px + 0 8px 10px (8% opacity)' },
            { cls: 'shadow-2xl',   value: '0 25px 50px (25% opacity)' },
            { cls: 'shadow-inner', value: 'inset 0 2px 4px (8% opacity)' },
          ].map(({ cls, value }) => (
            <div key={cls} className="flex items-center gap-5 py-5 border-b border-border-subtle">
              <div className={`size-10 bg-bg rounded-sm shrink-0 ${cls}`} />
              <div className="flex-1 min-w-0">
                <p className="font-mono text-body-small text-text-primary">{cls}</p>
                <p className="text-body-small text-text-tertiary mt-1">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

// ── Components content ────────────────────────────────────────────────────────

function ComponentsContent() {
  return (
    <>
      <section id="icon-button">
        <SectionHeading>Components</SectionHeading>
        <p className="text-body-small text-text-secondary mb-8">
          Interactive element patterns. All states pass WCAG AA (≥ 4.5:1 for text, ≥ 3:1 for UI).
          Hover always differentiates by more than color alone.
        </p>

        <SubLabel>Icon Button</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <span className="font-mono">components/IconButton.tsx</span>. Icon-only action button. Used in the testimonial carousel.
        </p>

        <div className="mb-6">
          <div className="flex gap-8 py-3 border-b border-border-subtle">
            <p className="text-body-small text-text-tertiary w-36 shrink-0">State</p>
            <p className="text-body-small text-text-tertiary w-56 shrink-0">Specimen</p>
            <p className="font-mono text-body-small text-text-tertiary flex-1">Key classes</p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Default</p>
            <div className="w-56 shrink-0 flex gap-2">
              <span className="size-11 rounded-full border bg-bg border-border text-text-primary flex items-center justify-center">
                <ArrowLeft size={20} strokeWidth={2} />
              </span>
              <span className="size-11 rounded-full border bg-bg border-border text-text-primary flex items-center justify-center">
                <ArrowRight size={20} strokeWidth={2} />
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              size-11 rounded-full bg-bg border-border text-text-primary
            </p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Hover</p>
            <div className="w-56 shrink-0 flex gap-2">
              <span className="size-11 rounded-full border bg-bg-tertiary border-border-strong text-text-primary flex items-center justify-center">
                <ArrowLeft size={20} strokeWidth={2} />
              </span>
              <span className="size-11 rounded-full border bg-bg-tertiary border-border-strong text-text-primary flex items-center justify-center">
                <ArrowRight size={20} strokeWidth={2} />
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              hover:bg-bg-tertiary hover:border-border-strong
            </p>
          </div>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Pass any Lucide icon as the <span className="font-mono">icon</span> prop at{' '}
            <span className="font-mono">size={'{20}'} strokeWidth={'{2}'}</span> (UI icon tier).
            Always provide a descriptive <span className="font-mono">aria-label</span>.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="primary-button">
        <SubLabel>Primary Button</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <span className="font-mono">components/Button.tsx</span>. Renders as{' '}
          <span className="font-mono">{'<Link>'}</span> when given <span className="font-mono">href</span>,
          or <span className="font-mono">{'<button>'}</span> when given <span className="font-mono">onClick</span>.
        </p>

        <div className="mb-6">
          <div className="flex gap-8 py-3 border-b border-border-subtle">
            <p className="text-body-small text-text-tertiary w-36 shrink-0">State</p>
            <p className="text-body-small text-text-tertiary w-56 shrink-0">Specimen</p>
            <p className="font-mono text-body-small text-text-tertiary flex-1">Key classes</p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Default</p>
            <div className="w-56 shrink-0">
              <Button href="#">View Case Study</Button>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              bg-bg-inverse text-text-inverse font-semibold rounded-sm px-6 py-3 gap-2
            </p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Hover</p>
            <div className="w-56 shrink-0">
              <span className="inline-flex items-center gap-3 text-body-small font-semibold bg-accent text-text-inverse rounded-sm px-6 py-3">
                View Case Study
                <ArrowRight size={20} strokeWidth={2} />
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              hover:bg-accent hover:gap-3
            </p>
          </div>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Non-color diff: <span className="font-mono">gap-2 → gap-3</span> shifts the arrow right on hover.{' '}
            Contrast: white on <span className="font-mono">#1A1612</span> ≈ 18:1 · white on{' '}
            <span className="font-mono">#e40089</span> ≈ 4.6:1 — both ✓ WCAG AA.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="nav-link">
        <SubLabel>Navigation Link</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Inline in <span className="font-mono">components/Nav.tsx</span>. Same visual language as
          Table of Contents items — filled background on hover and active.
        </p>

        <div className="mb-6">
          <div className="flex gap-8 py-3 border-b border-border-subtle">
            <p className="text-body-small text-text-tertiary w-36 shrink-0">State</p>
            <p className="text-body-small text-text-tertiary w-56 shrink-0">Specimen</p>
            <p className="font-mono text-body-small text-text-tertiary flex-1">Key classes</p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Default</p>
            <div className="w-56 shrink-0">
              <span className="block text-body-small text-text-secondary px-2.5 py-1.5 rounded-sm">
                work
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              text-body-small text-text-secondary px-2.5 py-1.5 rounded-sm
            </p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Hover</p>
            <div className="w-56 shrink-0">
              <span className="block text-body-small font-medium text-text-primary bg-bg-secondary px-2.5 py-1.5 rounded-sm">
                work
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              hover:bg-bg-secondary hover:text-text-primary hover:font-medium
            </p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Active</p>
            <div className="w-56 shrink-0">
              <span className="block text-body-small font-medium text-text-primary bg-bg-secondary px-2.5 py-1.5 rounded-sm">
                work
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              bg-bg-secondary text-text-primary font-medium
            </p>
          </div>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Non-color diff: background fill appears and font weight shifts to medium on hover.
            Active page retains the same styling. Matches Table of Contents item pattern.
            Contrast: <span className="font-mono">#5C5650</span> on white = 7.2:1 ✓ WCAG AA.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="inline-link">
        <SubLabel>Inline Link</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <span className="font-mono">components/InlineLink.tsx</span>. 4 variants controlled
          by the <span className="font-mono">variant</span> prop. All share the same visual treatment —
          the only difference is the presence of an arrow icon.
        </p>

        <div className="mb-6">
          <div className="flex gap-8 py-3 border-b border-border-subtle">
            <p className="text-body-small text-text-tertiary w-36 shrink-0">State</p>
            <p className="text-body-small text-text-tertiary w-56 shrink-0">Specimen</p>
            <p className="font-mono text-body-small text-text-tertiary flex-1">Key classes</p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Default</p>
            <div className="w-56 shrink-0 text-body-small text-text-secondary">
              Read the{' '}
              <InlineLink href="#">case study</InlineLink>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              text-text-secondary underline underline-offset-2 decoration-1
            </p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Hover</p>
            <div className="w-56 shrink-0 text-body-small text-text-secondary">
              Read the{' '}
              <span className="text-text-primary">case study</span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              hover:text-text-primary hover:no-underline
            </p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">With icon (default)</p>
            <div className="w-56 shrink-0 text-body-small text-text-secondary">
              Read the{' '}
              <InlineLink href="#" external variant="icon">case study</InlineLink>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              variant=&quot;icon&quot; or &quot;icon-emphasis&quot; — adds ArrowUpRight
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex gap-8 py-3 border-b border-border-subtle">
            <p className="text-body-small text-text-tertiary w-36 shrink-0">Variant</p>
            <p className="text-body-small text-text-tertiary w-16 shrink-0">Icon</p>
            <p className="text-body-small text-text-tertiary flex-1">Use case</p>
          </div>
          {[
            { variant: 'subtle', icon: 'No', use: 'Inline, internal or branded names, low emphasis' },
            { variant: 'emphasis', icon: 'No', use: 'Inline, external, high emphasis' },
            { variant: 'icon', icon: '↗', use: 'Standalone external, low emphasis or branded content' },
            { variant: 'icon-emphasis', icon: '↗', use: 'Navigation external, high emphasis, not branded' },
          ].map(({ variant, icon, use }) => (
            <div key={variant} className="flex items-center gap-8 py-4 border-b border-border-subtle">
              <p className="font-mono text-body-small text-text-primary w-36 shrink-0">{variant}</p>
              <p className="text-body-small text-text-tertiary w-16 shrink-0">{icon}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            All variants: <span className="font-mono">text-text-secondary underline</span> default →{' '}
            <span className="font-mono">text-text-primary no-underline</span> on hover. No blue, no bold.
            Underline satisfies WCAG 1.4.1 (not relying on color alone to identify links).
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="filter-pill">
        <SubLabel>Filter Pill</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Inline in <span className="font-mono">components/WorkGrid.tsx</span>. Three states — no
          selected-hover state by design.
        </p>

        <div className="mb-6">
          <div className="flex gap-8 py-3 border-b border-border-subtle">
            <p className="text-body-small text-text-tertiary w-36 shrink-0">State</p>
            <p className="text-body-small text-text-tertiary w-56 shrink-0">Specimen</p>
            <p className="font-mono text-body-small text-text-tertiary flex-1">Key classes</p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Unselected</p>
            <div className="w-56 shrink-0">
              <span className="text-body-small px-4 py-2 rounded-full border bg-bg-secondary border-border text-text-secondary">
                Design Systems
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              bg-bg-secondary border-border text-text-secondary
            </p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Unsel. hover</p>
            <div className="w-56 shrink-0">
              <span className="text-body-small px-4 py-2 rounded-full border bg-bg-tertiary border-border-strong text-text-primary">
                Design Systems
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary
            </p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Selected</p>
            <div className="w-56 shrink-0">
              <span className="text-body-small font-medium px-4 py-2 rounded-full border bg-bg-inverse text-text-inverse border-transparent">
                Design Systems
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              bg-bg-inverse text-text-inverse font-medium border-transparent
            </p>
          </div>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            Non-color diff: unsel. hover shifts background, border, and text simultaneously.
            Selected adds <span className="font-mono">font-medium</span> as a weight signal.
            Contrast: <span className="font-mono">#5C5650</span> on white = 7.2:1 · white on{' '}
            <span className="font-mono">#1A1612</span> = 18:1 — both ✓ WCAG AA.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="table-of-contents">
        <SubLabel>Table of Contents</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <span className="font-mono">components/TableOfContents.tsx</span>. Sticky sidebar
          navigation with IntersectionObserver-based active section tracking. Hidden below{' '}
          <span className="font-mono">lg:</span> breakpoint.
        </p>

        <div className="mb-6">
          <div className="flex gap-8 py-3 border-b border-border-subtle">
            <p className="text-body-small text-text-tertiary w-36 shrink-0">State</p>
            <p className="text-body-small text-text-tertiary w-56 shrink-0">Specimen</p>
            <p className="font-mono text-body-small text-text-tertiary flex-1">Key classes</p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Default</p>
            <div className="w-56 shrink-0">
              <span className="block text-body-small text-text-secondary px-2.5 py-1.5 rounded-sm">
                Overview
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              text-body-small text-text-secondary px-2.5 py-1.5 rounded-sm
            </p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Hover</p>
            <div className="w-56 shrink-0">
              <span className="block text-body-small font-medium text-text-primary bg-bg-secondary px-2.5 py-1.5 rounded-sm">
                Problem
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              hover:bg-bg-secondary hover:text-text-primary hover:font-medium
            </p>
          </div>
          <div className="flex items-center gap-8 py-5 border-b border-border-subtle">
            <p className="text-body-small text-text-secondary w-36 shrink-0">Active</p>
            <div className="w-56 shrink-0">
              <span className="block text-body-small font-medium text-text-primary bg-bg-secondary px-2.5 py-1.5 rounded-sm">
                Solution
              </span>
            </div>
            <p className="font-mono text-body-small text-text-tertiary flex-1 min-w-0 leading-relaxed">
              bg-bg-secondary text-text-primary font-medium
            </p>
          </div>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            Pass an array of <span className="font-mono">{'{ label, id }'}</span> items. The component
            uses IntersectionObserver to detect which <span className="font-mono">id</span> is in
            view and highlights it. Positioned <span className="font-mono">sticky top-24</span> (96px)
            to clear the 64px nav. Hidden below <span className="font-mono">lg:</span> breakpoint.
          </p>
        </div>
      </section>
    </>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

const activeTabCls = 'text-body-small font-medium text-text-primary border-b-2 border-text-primary -mb-px pb-3 transition-colors'
const inactiveTabCls = 'text-body-small text-text-secondary hover:text-text-primary pb-3 transition-colors'

export default function DesignSystemTabs() {
  const [tab, setTab] = useState<Tab>('Foundations')
  const toc = tab === 'Foundations' ? foundationsToc : componentsToc

  return (
    <div className="flex justify-center px-5 md:px-10">
      <div className="max-w-page w-full py-12 md:py-20">

        {/* Tab bar */}
        <div className="border-b border-border-subtle flex gap-8 mb-8 md:mb-12 sticky top-16 z-40 bg-bg pt-4">
          {(['Foundations', 'Components'] as Tab[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={tab === t ? activeTabCls : inactiveTabCls}
            >
              {t}
            </button>
          ))}
        </div>

        {/* 3-column body */}
        <div className="flex gap-8 items-start">

          <TableOfContents items={toc} className="top-36" />

          {/* Content */}
          <div className="flex-1 min-w-0">
            {tab === 'Foundations' ? <FoundationsContent /> : <ComponentsContent />}
          </div>

          {/* Notes column — reserved, hidden on mobile */}
          <div className="hidden lg:block w-[200px] shrink-0" />

        </div>
      </div>
    </div>
  )
}
