'use client'

import { useState } from 'react'
import Button from './Button'
import IconButton from './IconButton'
import InlineLink from './InlineLink'
import TableOfContents from './TableOfContents'
import SegmentedControl from './SegmentedControl'
import InlineCode from './InlineCode'
import AnimateOnScroll from './AnimateOnScroll'
import { SectionDivider, ImageBlock } from './case-study'
import {
  ArrowUpRight, ArrowDownRight, ArrowRight, ArrowLeft,
  MapPin, Menu, X, Lock, Play, Pause,
} from 'lucide-react'

// ── Local helpers ─────────────────────────────────────────────────────────────

function SectionHeading({ children, descriptor }: { children: React.ReactNode; descriptor?: React.ReactNode }) {
  if (!descriptor) {
    return (
      <h2 className="text-h3 md:text-h2 font-normal text-text-primary mb-6">{children}</h2>
    )
  }
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
      <div className="flex-1 min-w-0">
        <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">{children}</h2>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-body-small text-text-secondary">{descriptor}</p>
      </div>
    </div>
  )
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-body-big md:text-body-biggest font-normal text-text-primary mb-6 mt-16 first:mt-0">{children}</h3>
  )
}

// Wrap parenthetical class refs in InlineCode chips: "padding (py-1)" → "padding (<chip>py-1</chip>)"
function renderWithParenChips(text: string): React.ReactNode[] {
  return text.split(/\(([^)]+)\)/g).map((p, i) =>
    i % 2 === 1 ? <span key={i}>(<InlineCode>{p}</InlineCode>)</span> : p
  )
}

// Light fills that vanish against the page bg (#fafaf9) need a 1px outline
const SWATCH_OUTLINE_HEXES = new Set(['#FFFFFF', '#fafaf9', '#f5f5f4'])
function needsSwatchOutline(hex: string): boolean {
  return SWATCH_OUTLINE_HEXES.has(hex)
}

function SegmentedControlDemo() {
  const [value, setValue] = useState<'list' | 'grid' | 'detail'>('list')
  return (
    <SegmentedControl
      options={[
        { label: 'List',   value: 'list'   },
        { label: 'Grid',   value: 'grid'   },
        { label: 'Detail', value: 'detail' },
      ]}
      value={value}
      onChange={setValue}
      ariaLabel="Demo view"
    />
  )
}

function TabDemo() {
  type TabValue = 'overview' | 'details'
  const [active, setActive] = useState<TabValue>('overview')
  const options: { value: TabValue; label: string }[] = [
    { value: 'overview', label: 'Overview' },
    { value: 'details', label: 'Details' },
  ]
  return (
    <div className="flex gap-8 border-b border-border w-full">
      {options.map(({ value, label }) => {
        const isActive = active === value
        return (
          <button
            key={value}
            type="button"
            onClick={() => setActive(value)}
            className={`text-body-small pb-3 transition-colors ${
              isActive
                ? 'font-medium text-text-primary border-b-2 border-text-primary -mb-px'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

function CarouselDotDemo() {
  const [active, setActive] = useState(0)
  return (
    <div className="flex items-center gap-2.5">
      {[0, 1, 2, 3].map((i) => (
        <button
          key={i}
          type="button"
          onClick={() => setActive(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`size-2 rounded-full transition-all ${
            i === active ? 'bg-text-primary' : 'bg-border-strong hover:bg-text-tertiary'
          }`}
        />
      ))}
    </div>
  )
}

function TocDemo() {
  type TocValue = 'overview' | 'problem'
  const [active, setActive] = useState<TocValue>('problem')
  const options: { value: TocValue; label: string }[] = [
    { value: 'overview', label: 'Overview' },
    { value: 'problem', label: 'Problem' },
  ]
  return (
    <div className="flex flex-col gap-1 w-fit">
      {options.map(({ value, label }) => {
        const isActive = active === value
        return (
          <button
            key={value}
            type="button"
            onClick={() => setActive(value)}
            className={`text-left text-body-small px-2.5 py-1.5 rounded-sm transition-colors ${
              isActive
                ? 'bg-bg-tertiary text-text-primary font-medium'
                : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary hover:font-medium'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
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
  { label: 'Motion',     id: 'motion' },
]

const componentsToc = [
  { label: 'Icon Button',        id: 'icon-button' },
  { label: 'Button',             id: 'primary-button' },
  { label: 'Navigation Link',    id: 'nav-link' },
  { label: 'Inline Link',        id: 'inline-link' },
  { label: 'Filter Pill',        id: 'filter-pill' },
  { label: 'Inline Code',        id: 'inline-code' },
  { label: 'Tab',                id: 'tab' },
  { label: 'Segmented Control',  id: 'segmented-control' },
  { label: 'Carousel Dot',       id: 'carousel-dot' },
  { label: 'Table of Contents',  id: 'table-of-contents' },
  { label: 'Media',              id: 'media' },
  { label: 'Expandable image',   id: 'expandable-image' },
]

// ── Foundations content ───────────────────────────────────────────────────────

type Breakpoint = 'mobile' | 'tablet' | 'desktop'

type TypeRole = {
  token: string
  utilityModifiers: string
  useCase: string
  sample: string
  sampleColor: string
  extraSampleClasses?: string
  resolved: Record<Breakpoint, string>
}

const typeRoles: TypeRole[] = [
  {
    token: 'text-display',
    utilityModifiers: 'font-normal',
    useCase: 'Hero headlines only',
    sample: 'Content dictates form',
    sampleColor: 'text-text-primary',
    resolved: { mobile: 'text-h1', tablet: 'text-display', desktop: 'text-display' },
  },
  {
    token: 'text-h1',
    utilityModifiers: 'font-normal',
    useCase: 'Page-level headings',
    sample: 'Content dictates form',
    sampleColor: 'text-text-primary',
    resolved: { mobile: 'text-h2', tablet: 'text-h1', desktop: 'text-h1' },
  },
  {
    token: 'text-h2',
    utilityModifiers: 'font-normal',
    useCase: 'Section headings, pull quotes, stats',
    sample: 'Content dictates form',
    sampleColor: 'text-text-primary',
    resolved: { mobile: 'text-h3', tablet: 'text-h2', desktop: 'text-h2' },
  },
  {
    token: 'text-h3',
    utilityModifiers: 'font-normal',
    useCase: 'Sub-section headings within a section',
    sample: 'Content dictates form',
    sampleColor: 'text-text-primary',
    resolved: { mobile: 'text-h4', tablet: 'text-h3', desktop: 'text-h3' },
  },
  {
    token: 'text-h4',
    utilityModifiers: 'font-normal',
    useCase: 'Mobile-only — step-down pair for text-h3',
    sample: 'Content dictates form',
    sampleColor: 'text-text-primary',
    resolved: { mobile: 'text-h4', tablet: 'text-h4', desktop: 'text-h4' },
  },
  {
    token: 'text-body-biggest',
    utilityModifiers: 'font-normal',
    useCase: 'Card titles, sub-headings, overview prose',
    sample: 'Content dictates form',
    sampleColor: 'text-text-primary',
    resolved: { mobile: 'text-body-small', tablet: 'text-body-big', desktop: 'text-body-biggest' },
  },
  {
    token: 'text-body-big',
    utilityModifiers: 'font-normal',
    useCase: 'Primary prose, bio copy',
    sample: 'In order to create the universal, you must pay very great attention to the specific.',
    sampleColor: 'text-text-secondary',
    resolved: { mobile: 'text-body-small', tablet: 'text-body-big', desktop: 'text-body-big' },
  },
  {
    token: 'text-body-small',
    utilityModifiers: 'font-normal',
    useCase: 'Secondary prose, links, nav, badges',
    sample: 'In order to create the universal, you must pay very great attention to the specific.',
    sampleColor: 'text-text-secondary',
    resolved: { mobile: 'text-body-small', tablet: 'text-body-small', desktop: 'text-body-small' },
  },
  {
    token: 'text-small',
    utilityModifiers: 'font-normal',
    useCase: 'Captions only',
    sample: 'Design Systems · 2024 · Lead Designer',
    sampleColor: 'text-text-tertiary',
    resolved: { mobile: 'text-small', tablet: 'text-small', desktop: 'text-small' },
  },
  {
    token: 'label',
    utilityModifiers: 'font-medium uppercase tracking-widest',
    useCase: 'Footer headers, TOC title, metadata field labels',
    sample: 'Role · Team · Local Time',
    sampleColor: 'text-text-tertiary',
    extraSampleClasses: 'font-medium uppercase tracking-widest',
    resolved: { mobile: 'text-small', tablet: 'text-small', desktop: 'text-small' },
  },
]

function FoundationsContent() {
  const [typeBreakpoint, setTypeBreakpoint] = useState<Breakpoint>('desktop')
  return (
    <>
      {/* ──────────────────────────── TYPOGRAPHY ──────────────────────── */}
      <section id="typography">
        <SectionHeading
          descriptor={
            <>A role-based type scale, all set in <InlineCode>font-normal</InlineCode>. Volume comes from size, never weight — bold belongs on labels, not headlines.</>
          }
        >
          Typography
        </SectionHeading>

        <div className="bg-bg-secondary border border-border rounded-sm px-8 pb-8">
          <div className="sticky top-32 z-10 -mx-[52px] mb-6 flex items-center justify-between gap-4 bg-bg border border-border shadow-md rounded-md py-3 pl-5 pr-3">
            <span className="text-body-small text-text-primary font-medium">Breakpoints</span>
            <SegmentedControl
              options={[
                { label: 'Mobile',  value: 'mobile'  },
                { label: 'Tablet',  value: 'tablet'  },
                { label: 'Desktop', value: 'desktop' },
              ]}
              value={typeBreakpoint}
              onChange={setTypeBreakpoint}
              ariaLabel="Preview typography at breakpoint"
            />
          </div>

          {typeRoles
            .filter(({ token }) => token !== 'text-h4')
            .map(({ token, useCase, sample, sampleColor, extraSampleClasses, resolved }) => {
            const resolvedClass = resolved[typeBreakpoint]
            return (
              <div key={token} className="py-6 flex gap-8 items-start border-b border-border-subtle last:border-b-0">
                <p className={`${resolvedClass} ${sampleColor} ${extraSampleClasses ?? ''} flex-1 min-w-0`}>
                  {sample}
                </p>
                <div className="w-52 shrink-0 flex flex-col gap-1.5 items-start">
                  <InlineCode>{resolvedClass}</InlineCode>
                  <p className="text-body-small text-text-tertiary">{useCase}</p>
                </div>
              </div>
            )
          })}
        </div>


      </section>

      <SectionDivider />

      {/* ───────────────────────────── ICONS ──────────────────────── */}
      <section id="icons">
        <SectionHeading descriptor="Lucide. Stroke weight scales inversely with size — bolder for UI, lighter for decorative.">
          Icons
        </SectionHeading>

        <div className="flex flex-wrap gap-6">
          {[
            { icon: <ArrowUpRight    size={48} strokeWidth={1.5} />, name: 'ArrowUpRight' },
            { icon: <ArrowDownRight  size={48} strokeWidth={1.5} />, name: 'ArrowDownRight' },
            { icon: <ArrowRight      size={48} strokeWidth={1.5} />, name: 'ArrowRight' },
            { icon: <ArrowLeft       size={48} strokeWidth={1.5} />, name: 'ArrowLeft' },
            { icon: <MapPin          size={48} strokeWidth={1.5} />, name: 'MapPin' },
            { icon: <Menu            size={48} strokeWidth={1.5} />, name: 'Menu' },
            { icon: <X               size={48} strokeWidth={1.5} />, name: 'X' },
            { icon: <Lock            size={48} strokeWidth={1.5} />, name: 'Lock' },
            { icon: <Play            size={48} strokeWidth={1.5} />, name: 'Play' },
            { icon: <Pause           size={48} strokeWidth={1.5} />, name: 'Pause' },
          ].map(({ icon, name }) => (
            <figure key={name} className="flex flex-col gap-2 items-start w-36">
              <div className="size-36 bg-bg-secondary border border-border rounded-sm flex items-center justify-center text-text-primary">
                {icon}
              </div>
              <figcaption className="font-mono text-body-small text-text-tertiary leading-[1.5]">
                {name}
              </figcaption>
            </figure>
          ))}
        </div>

        <SubLabel>Size</SubLabel>
        <div className="bg-bg-secondary border border-border rounded-sm p-8">
          {[
            { size: 20, strokeWidth: 2,   label: 'size={20} strokeWidth={2}',   use: 'UI icons at body-small scale — buttons, inputs, nav, inline links' },
            { size: 24, strokeWidth: 2,   label: 'size={24} strokeWidth={2}',   use: 'Inline with body-small text, standalone icons' },
            { size: 32, strokeWidth: 1.5, label: 'size={32} strokeWidth={1.5}', use: 'Decorative / card icon' },
            { size: 48, strokeWidth: 1.5, label: 'size={48} strokeWidth={1.5}', use: 'Large decorative icon — stat cards, hero accents' },
          ].map(({ size, strokeWidth, label, use }) => (
            <div key={size} className="flex items-center gap-8 py-5 border-b border-border last:border-b-0">
              <div className="w-12 flex items-center justify-center shrink-0">
                <ArrowUpRight size={size} strokeWidth={strokeWidth} className="text-text-primary" />
              </div>
              <div className="min-w-[14rem] shrink-0"><InlineCode>{label}</InlineCode></div>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>

        <SubLabel>Color</SubLabel>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          <div className="bg-bg-secondary border border-border rounded-sm p-8 shrink-0">
            <span className="text-text-primary inline-flex items-center gap-1 underline underline-offset-2 decoration-1">
              Visit GitHub
              <ArrowUpRight size={20} strokeWidth={1.5} className="shrink-0" />
            </span>
          </div>
          <p className="text-body-small text-text-secondary flex-1 min-w-0">
            Color inherits from adjacent text — never set explicitly when an icon sits next to a word.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ──────────────────────────── COLOR ───────────────────────── */}
      <section id="color">
        <SectionHeading descriptor="Two layers — atomic raw values, semantic roles. Components only ever reference roles, so a retheme is a token swap, never a markup edit.">
          Color
        </SectionHeading>

        {/* ── Atomic: Neutral ── */}
        <SubLabel>Neutral Scale · Atomic</SubLabel>
        <div className="flex flex-wrap gap-6">
          {[
            { label: 'neutral-000', hex: '#FFFFFF', mapped: 'bg-secondary, text-inverse' },
            { label: 'neutral-050', hex: '#fafaf9', mapped: 'bg' },
            { label: 'neutral-100', hex: '#f5f5f4', mapped: 'border-subtle' },
            { label: 'neutral-200', hex: '#e7e5e4', mapped: 'bg-tertiary, border' },
            { label: 'neutral-300', hex: '#d6d3d1', mapped: 'border-strong, text-placeholder' },
            { label: 'neutral-400', hex: '#a8a29e' },
            { label: 'neutral-500', hex: '#78716c', mapped: 'text-tertiary' },
            { label: 'neutral-600', hex: '#57534e', mapped: 'text-secondary' },
            { label: 'neutral-700', hex: '#44403c' },
            { label: 'neutral-800', hex: '#292524' },
            { label: 'neutral-900', hex: '#1c1917', mapped: 'bg-inverse, text-primary' },
            { label: 'neutral-950', hex: '#0c0a09' },
          ].map(({ label, hex, mapped }) => (
            <figure key={label} className="flex flex-col gap-2 items-start w-36">
              <div
                className={`size-36 rounded-sm shrink-0 ${needsSwatchOutline(hex) ? 'border border-border' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <figcaption className="flex flex-col gap-0.5 min-w-0">
                <InlineCode>{label}</InlineCode>
                <span className="font-mono text-body-small text-text-tertiary leading-[1.5]">{hex}</span>
                {mapped && (
                  <span className="text-body-small text-text-tertiary leading-[1.5]">
                    →{' '}
                    {mapped.split(', ').map((c, i) => (
                      <span key={c}>
                        {i > 0 && ', '}
                        <InlineCode>{c}</InlineCode>
                      </span>
                    ))}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* ── Atomic: Primary ── */}
        <SubLabel>Primary · Atomic</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Brand pink. Used for inline emphasis in case-study prose, callout numbers, and stat metrics.
        </p>
        <div className="flex flex-wrap gap-6">
          <figure className="flex flex-col gap-2 items-start w-36">
            <div className="size-36 rounded-sm shrink-0" style={{ backgroundColor: '#DA007B' }} />
            <figcaption className="flex flex-col gap-0.5 min-w-0">
              <InlineCode>primary</InlineCode>
              <span className="font-mono text-body-small text-text-tertiary leading-[1.5]">#DA007B</span>
            </figcaption>
          </figure>
        </div>

        {/* ── Semantic: Text ── */}
        <SubLabel>Text · Semantic</SubLabel>
        <div className="flex flex-wrap gap-6">
          {[
            { label: 'text-text-primary',     hex: '#1c1917' },
            { label: 'text-text-secondary',   hex: '#57534e' },
            { label: 'text-text-tertiary',    hex: '#78716c' },
            { label: 'text-text-placeholder', hex: '#d6d3d1' },
            { label: 'text-text-disabled',    hex: '#d6d3d1' },
            { label: 'text-text-inverse',     hex: '#FFFFFF' },
            { label: 'text-text-link',        hex: '#085fa0' },
            { label: 'text-text-link-hover',  hex: '#064b7d' },
            { label: 'text-text-on-brand',    hex: '#FFFFFF' },
          ].map(({ label, hex }) => (
            <figure key={label} className="flex flex-col gap-2 items-start w-36">
              <div
                className={`size-36 rounded-sm shrink-0 ${needsSwatchOutline(hex) ? 'border border-border' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <figcaption className="flex flex-col gap-0.5 min-w-0">
                <InlineCode>{label}</InlineCode>
                <span className="font-mono text-body-small text-text-tertiary leading-[1.5]">{hex}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <SubLabel>Background · Semantic</SubLabel>
        <div className="flex flex-wrap gap-6">
          {[
            { label: 'bg-bg',           hex: '#fafaf9' },
            { label: 'bg-bg-secondary', hex: '#FFFFFF' },
            { label: 'bg-bg-tertiary',  hex: '#e7e5e4' },
            { label: 'bg-bg-inverse',   hex: '#1c1917' },
            { label: 'bg-bg-brand',     hex: '#EAF4F4' },
          ].map(({ label, hex }) => (
            <figure key={label} className="flex flex-col gap-2 items-start w-36">
              <div
                className={`size-36 rounded-sm shrink-0 ${needsSwatchOutline(hex) ? 'border border-border' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <figcaption className="flex flex-col gap-0.5 min-w-0">
                <InlineCode>{label}</InlineCode>
                <span className="font-mono text-body-small text-text-tertiary leading-[1.5]">{hex}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <SubLabel>Border · Semantic</SubLabel>
        <div className="flex flex-wrap gap-6">
          {[
            { label: 'border-border-subtle', hex: '#f5f5f4' },
            { label: 'border-border',        hex: '#e7e5e4' },
            { label: 'border-border-strong', hex: '#d6d3d1' },
            { label: 'border-border-focus',  hex: '#000ECD' },
          ].map(({ label, hex }) => (
            <figure key={label} className="flex flex-col gap-2 items-start w-36">
              <div
                className="size-36 rounded-sm shrink-0 bg-bg-secondary border-2"
                style={{ borderColor: hex }}
              />
              <figcaption className="flex flex-col gap-0.5 min-w-0">
                <InlineCode>{label}</InlineCode>
                <span className="font-mono text-body-small text-text-tertiary leading-[1.5]">{hex}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <SubLabel>Highlights · Application</SubLabel>
        <div className="mb-12 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            Riley is an{' '}
            <span className="text-primary [&_a]:text-inherit">experience strategist</span>,{' '}
            <span className="text-primary [&_a]:text-inherit">interaction designer</span> and{' '}
            <span className="text-primary [&_a]:text-inherit">designer engineer</span> based in Brooklyn, NY.
          </p>
        </div>

        <SubLabel>Gradient · Semantic</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Two gradients. <InlineCode>red→pink</InlineCode> for hero copy and testimonial quotes; <InlineCode>pink→orange</InlineCode> for decorative use only — Footer wordmark, Nav logo dot, About glow.
        </p>
        <div className="flex flex-wrap gap-6">
          <figure className="flex flex-col gap-2 items-start w-36">
            <div
              className="size-36 rounded-sm shrink-0 bg-gradient-to-r from-gradient-red to-gradient-pink"
            />
            <figcaption className="flex flex-col gap-0.5 min-w-0">
              <InlineCode>from-gradient-red to-gradient-pink</InlineCode>
              <span className="font-mono text-body-small text-text-tertiary leading-[1.5]">#f02065 → #d5189b</span>
            </figcaption>
          </figure>
          <figure className="flex flex-col gap-2 items-start w-36">
            <div
              className="size-36 rounded-sm shrink-0 bg-gradient-to-r from-gradient-red from-[22%] to-gradient-orange"
            />
            <figcaption className="flex flex-col gap-0.5 min-w-0">
              <InlineCode>from-gradient-red from-[22%] to-gradient-orange</InlineCode>
              <span className="font-mono text-body-small text-text-tertiary leading-[1.5]">#f02065 → #ff7700</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-8 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-big bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink mb-2">
            Inline text highlights
          </p>
          <p className="text-body-small text-text-tertiary">
            <InlineCode>from-gradient-red to-gradient-pink</InlineCode> — the only gradient used as
            a text highlight. See <InlineCode>components/Hero.tsx</InlineCode> and{' '}
            <InlineCode>components/TestimonialCarousel.tsx</InlineCode>.
          </p>
        </div>

      </section>

      <SectionDivider />

      {/* ──────────────────────────── SPACING ─────────────────────── */}
      <section id="spacing">
        <SectionHeading descriptor="4px base unit. Every gap on the site is a step on this ladder.">
          Spacing
        </SectionHeading>

        <div className="bg-bg-secondary border border-border rounded-sm p-8">
          <div className="flex gap-4 py-3 border-b border-border last:border-b-0">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-16 shrink-0 pl-[7px]">Scale</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-16 shrink-0">px</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1">Semantic role on this site</p>
          </div>
          {[
            { scale: '1',    px: '4px',   role: 'Inline link inner gap (gap-1); footer column gap (gap-1)' },
            { scale: '1.5',  px: '6px',   role: 'Tag inner padding vertical (py-1.5); metadata cell gap (gap-1.5)' },
            { scale: '2',    px: '8px',   role: 'Button icon gap (gap-2); nav links row gap (gap-2)' },
            { scale: '2.5',  px: '10px',  role: 'Nav logo gap (gap-2.5); Tag horizontal padding (px-2.5); TOC item padding horizontal' },
            { scale: '3',    px: '12px',  role: 'Filter Pill (small) / Tab / Segmented Control segment horizontal padding (px-3)' },
            { scale: '4',    px: '16px',  role: 'Filter Pill (default) horizontal padding (px-4); Button icon gap row spacer' },
            { scale: '6',    px: '24px',  role: 'Button horizontal padding (px-6)' },
            { scale: '7',    px: '28px',  role: 'Callout card vertical padding (py-7)' },
            { scale: '8',    px: '32px',  role: 'Two-column gap, section inner gap (gap-8); small vertical spacer (h-8)' },
            { scale: '10',   px: '40px',  role: 'Horizontal page padding desktop (px-10); callout horizontal padding (px-10)' },
            { scale: '12',   px: '48px',  role: 'Medium vertical spacer before images (h-12); hero bottom padding (pb-12)' },
            { scale: '16',   px: '64px',  role: 'Hero top padding (pt-16); cover image bottom padding (pb-16)' },
            { scale: '20',   px: '80px',  role: '3-column body section vertical padding (py-20)' },
            { scale: '24',   px: '96px',  role: 'Between subsections (h-24); next section bottom padding (pb-24)' },
          ].map(({ scale, px, role }) => (
            <div key={scale} className="flex items-center gap-4 py-3 border-b border-border last:border-b-0">
              <div className="min-w-[4rem] shrink-0"><InlineCode>{scale}</InlineCode></div>
              <p className="font-mono text-body-small text-text-tertiary w-16 shrink-0">{px}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{renderWithParenChips(role)}</p>
            </div>
          ))}
        </div>

      </section>

      <SectionDivider />

      {/* ──────────────────────────── RADIUS ──────────────────────── */}
      <section id="radius">
        <SectionHeading
          descriptor={
            <>Three radii do the work — a subset of Tailwind&apos;s default scale. Soft but precise: enough rounding to feel approachable, never so much that the geometry goes soft.</>
          }
        >
          Radius
        </SectionHeading>

        <div className="bg-bg-secondary border border-border rounded-sm p-8">
          <div className="flex gap-5 py-3 border-b border-border last:border-b-0">
            <div className="size-10 shrink-0" />
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-32 shrink-0 pl-[7px]">Class</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-16 shrink-0">Value</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1">Use</p>
          </div>
          {[
            { cls: 'rounded-sm',   value: '4px',    use: 'Cards, callout cards, image blocks, cover image, InlineCode chip, Segmented Control segments (primary use)' },
            { cls: 'rounded-md',   value: '8px',    use: 'Button (primary + outline); Segmented Control container' },
            { cls: 'rounded-full', value: '9999px', use: 'IconButton, Filter Pill, Tag, Carousel Dot, nav logo dot' },
          ].map(({ cls, value, use }) => (
            <div key={cls} className="flex items-center gap-5 py-4 border-b border-border last:border-b-0">
              <div
                className="size-10 bg-bg-tertiary shrink-0"
                style={{ borderRadius: value }}
              />
              <div className="w-32 shrink-0"><InlineCode>{cls}</InlineCode></div>
              <p className="font-mono text-body-small text-text-tertiary w-16 shrink-0">{value}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{renderWithParenChips(use)}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ──────────────────────────── SHADOW ──────────────────────── */}
      <section id="shadow">
        <SectionHeading
          descriptor={
            <>Reserved for media excerpts and elements that obviously float above the page. One shadow does the work — <InlineCode>shadow-sm</InlineCode> — for controlled, subtle emphasis.</>
          }
        >
          Shadow
        </SectionHeading>

        <ImageBlock
          src="/images/bricks-cover.webp"
          alt="Example image with shadow-sm applied"
          caption="shadow-sm on a media excerpt — the only shadow used in production."
          expandable={false}
        />
      </section>

      <SectionDivider />

      {/* ──────────────────────────── MOTION ──────────────────────── */}
      <section id="motion">
        <SectionHeading descriptor="Two duration budgets. 150ms for color, 200ms for transform — color shifts feel snappiest fast and definite; transforms feel more intentional with slightly more travel time.">
          Motion
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4">
            <div className="bg-bg-secondary border border-border rounded-sm p-8 flex items-start min-h-[200px]">
              <AnimateOnScroll>
                <div className="w-32 aspect-video bg-bg-tertiary rounded-sm border border-border" />
              </AnimateOnScroll>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="text-body-small text-text-primary font-medium">Page entry</p>
              <InlineCode>animate-fade-in-up</InlineCode>
              <p className="text-body-small text-text-tertiary">0.55s ease-out · fires on scroll</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-bg-secondary border border-border rounded-sm p-8 flex items-start min-h-[200px]">
              <div className="bg-bg-inverse text-text-inverse text-body-small px-6 py-3 rounded-md font-semibold transition-transform duration-200 hover:-translate-y-2.5 cursor-pointer">
                Hover to lift
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="text-body-small text-text-primary font-medium">Hover lift</p>
              <InlineCode>duration-200</InlineCode>
              <p className="text-body-small text-text-tertiary">200ms · transform</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-bg-secondary border border-border rounded-sm p-8 flex items-start min-h-[200px]">
              <Button href="#">Hover me</Button>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="text-body-small text-text-primary font-medium">Arrow rotate</p>
              <InlineCode>transition-transform</InlineCode>
              <p className="text-body-small text-text-tertiary">150ms · rotate-45° on group-hover</p>
            </div>
          </div>
        </div>

        <p className="text-body-small text-text-secondary mt-8">
          Hero stagger delays are hand-tuned per page — picked by eye for each page&apos;s pacing, not derived from a shared scale.
        </p>
      </section>

    </>
  )
}

// ── Components content ────────────────────────────────────────────────────────

function ShowcaseCard({
  id,
  title,
  useCase,
  spanFull = false,
  children,
}: {
  id: string
  title: string
  useCase: string
  spanFull?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={`bg-bg-secondary border border-border rounded-sm p-6 md:p-8 flex flex-col gap-6 scroll-mt-32 ${spanFull ? 'md:col-span-2' : ''}`}
    >
      <header>
        <h3 className="text-body-big font-medium text-text-primary mb-1">{title}</h3>
        <p className="text-body-small text-text-tertiary">{useCase}</p>
      </header>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  )
}

function ComponentsContent() {
  return (
    <>
      <SectionHeading descriptor="A library of the small interactive parts that make up this site. Small introductions of motion introduce play, while reinforcing actions. Never used without purpose.">
        Components
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ShowcaseCard
          id="icon-button"
          title="Icon Button"
          useCase="Compact action used in dense UI; matches the primary button colour."
        >
          <IconButton icon={<ArrowRight size={20} strokeWidth={2} />} onClick={() => {}} aria-label="Default" />
          <span aria-hidden className="size-11 rounded-full bg-neutral-800 text-text-inverse flex items-center justify-center">
            <ArrowRight size={20} strokeWidth={2} />
          </span>
        </ShowcaseCard>

        <ShowcaseCard
          id="primary-button"
          title="Button"
          useCase="Primary call to action, with an outline variant for secondary actions."
        >
          <Button href="#">View Case Study</Button>
          <Button variant="outline" href="#">Secondary</Button>
        </ShowcaseCard>

        <ShowcaseCard
          id="nav-link"
          title="Navigation Link"
          useCase="Top-level nav links; weight shifts on hover and active."
        >
          <a href="#" className="inline-block text-body-small text-text-secondary hover:text-text-primary hover:font-medium px-2.5 py-1.5 rounded-sm transition-colors">
            work
          </a>
        </ShowcaseCard>

        <ShowcaseCard
          id="inline-link"
          title="Inline Link"
          useCase="Anchors inside prose; underlined by default, drops the underline on hover. Inline text gets the underline; higher-emphasis outbound links get the arrow."
        >
          <div className="flex flex-col gap-3 text-body-small text-text-secondary">
            <div>Read the <InlineLink href="#">case study</InlineLink> (no icon)</div>
            <div>Read the <InlineLink href="#" external variant="icon">case study</InlineLink> (with icon)</div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard
          id="filter-pill"
          title="Filter Pill"
          useCase="Toggles between mutually-exclusive filters in a row."
        >
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4 flex-wrap">
              <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-16 shrink-0">Default</p>
              <button type="button" className="text-body-small px-4 py-2 rounded-full border bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary transition-colors">
                Design Systems
              </button>
              <button type="button" className="text-body-small font-medium px-4 py-2 rounded-full border bg-bg-inverse text-text-inverse border-transparent">
                Selected
              </button>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-16 shrink-0">Small</p>
              <button type="button" className="text-body-small px-3 py-1.5 rounded-full border bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary transition-colors">
                Design Systems
              </button>
              <button type="button" className="text-body-small font-medium px-3 py-1.5 rounded-full border bg-bg-inverse text-text-inverse border-transparent">
                Selected
              </button>
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard
          id="inline-code"
          title="Inline Code"
          useCase="Monospace chip for code references inside prose."
        >
          <p className="text-body-small text-text-secondary">
            Every role is <InlineCode>font-normal</InlineCode> except{' '}
            <InlineCode>label</InlineCode>, which sets its own weight. Raw Tailwind sizes
            (<InlineCode>text-sm</InlineCode>, <InlineCode>text-lg</InlineCode>, etc.) are not
            used for body or UI text.
          </p>
        </ShowcaseCard>

        <ShowcaseCard
          id="tab"
          title="Tab"
          useCase="Switches between sectioned content within a single view."
        >
          <TabDemo />
        </ShowcaseCard>

        <ShowcaseCard
          id="segmented-control"
          title="Segmented Control"
          useCase="In-place toggle between mutually-exclusive views. Visually identical to the Table of Contents item style — same padding, same active fill — by design, so the two patterns feel like horizontal and vertical variants of one menu."
        >
          <SegmentedControlDemo />
        </ShowcaseCard>

        <ShowcaseCard
          id="carousel-dot"
          title="Carousel Dot"
          useCase="Position indicator for a carousel sequence."
        >
          <CarouselDotDemo />
        </ShowcaseCard>

        <ShowcaseCard
          id="table-of-contents"
          title="Table of Contents"
          useCase="Sticky sidebar with IntersectionObserver-driven active-section tracking. Item style is intentionally identical to Segmented Control — the vertical variant of the same menu pattern."
        >
          <TocDemo />
        </ShowcaseCard>

        <ShowcaseCard
          id="media"
          title="Media"
          useCase="Images and videos share the same treatment — border, soft shadow, rounded corners, centered caption. Videos add a play/pause button; case-study images add an expand button."
          spanFull
        >
          <ImageBlock
            type="video"
            src="/images/eoi-cover.mp4"
            caption="border-border, shadow-sm, rounded-sm, centered caption — applied identically to every image and video on the site."
          />
        </ShowcaseCard>

        <ShowcaseCard
          id="expandable-image"
          title="Expandable image"
          useCase="Case-study images render with an Expand IconButton in the bottom-right corner — click to open the image in a near-fullscreen lightbox with a darkened backdrop, scroll lock, and ESC / backdrop / X dismiss. Mirrors the play/pause affordance on videos. Pass expandable={false} on ImageBlock to opt out (used on /about book covers and inside this design-system page)."
          spanFull
        >
          <ImageBlock
            src="/images/bricks-cover.webp"
            alt="Click the expand button to open this image in a lightbox"
            caption="Click the expand button in the bottom-right to open the lightbox."
          />
        </ShowcaseCard>

      </div>
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
    <>
      {/* Tab bar — edge-to-edge, sticky-pinned, finishes the white hero zone */}
      <div className="sticky top-16 z-40 bg-bg-secondary border-b border-border">
        <div className="flex justify-center px-5 md:px-10">
          <div className="max-w-page w-full flex gap-8 pt-4">
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
        </div>
      </div>

      {/* Body — centered, default page bg */}
      <div className="flex justify-center px-5 md:px-10">
        <div className="max-w-page w-full py-12 md:py-20">
          <div className="flex gap-8 items-start">

            <TableOfContents items={toc} className="top-36" smoothScroll scrollOffset={160} />

            {/* Content */}
            <div className="flex-1 min-w-0">
              {tab === 'Foundations' && <FoundationsContent />}
              {tab === 'Components'  && <ComponentsContent />}
            </div>

            {/* Notes column — reserved, hidden on mobile */}
            <div className="hidden lg:block w-[120px] shrink-0" />

          </div>
        </div>
      </div>
    </>
  )
}
