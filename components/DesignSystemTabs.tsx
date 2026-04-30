'use client'

import { useState } from 'react'
import Button from './Button'
import IconButton from './IconButton'
import InlineLink from './InlineLink'
import TableOfContents from './TableOfContents'
import SegmentedControl from './SegmentedControl'
import Token from './Token'
import InlineCode from './InlineCode'
import { SectionDivider } from './case-study'
import {
  ArrowUpRight, ExternalLink, ArrowRight, ArrowLeft,
  X, Check, ChevronDown, ChevronRight, Search, Plus,
} from 'lucide-react'

// ── Local helpers ─────────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-h3 md:text-h2 font-normal text-text-primary mb-6">{children}</h2>
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

// ── TOC data ──────────────────────────────────────────────────────────────────

type Tab = 'Foundations' | 'Components'

const foundationsToc = [
  { label: 'Typography', id: 'typography' },
  { label: 'Icons',      id: 'icons' },
  { label: 'Color',      id: 'color' },
  { label: 'Spacing',    id: 'spacing' },
  { label: 'Radius',     id: 'radius' },
  { label: 'Shadow',     id: 'shadow' },
  { label: 'Media',      id: 'media' },
]

const componentsToc = [
  { label: 'Icon Button',        id: 'icon-button' },
  { label: 'Primary Button',     id: 'primary-button' },
  { label: 'Navigation Link',    id: 'nav-link' },
  { label: 'Inline Link',        id: 'inline-link' },
  { label: 'Filter Pill',        id: 'filter-pill' },
  { label: 'Tag',                id: 'tag' },
  { label: 'Token',              id: 'token' },
  { label: 'Inline Code',        id: 'inline-code' },
  { label: 'Tab',                id: 'tab' },
  { label: 'Segmented Control',  id: 'segmented-control' },
  { label: 'Carousel Dot',       id: 'carousel-dot' },
  { label: 'Table of Contents',  id: 'table-of-contents' },
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

const sizeFor: Record<string, { rem: string; px: string; lh: string }> = {
  'text-display':      { rem: '3.5rem',   px: '56px',    lh: '1.3' },
  'text-h1':           { rem: '2.488rem', px: '39.81px', lh: '1.3' },
  'text-h2':           { rem: '2.074rem', px: '33.18px', lh: '1.3' },
  'text-h3':           { rem: '1.728rem', px: '27.65px', lh: '1.3' },
  'text-h4':           { rem: '1.44rem',  px: '23.04px', lh: '1.3' },
  'text-body-biggest': { rem: '1.44rem',  px: '23.04px', lh: '1.5' },
  'text-body-big':     { rem: '1.2rem',   px: '19.2px',  lh: '1.5' },
  'text-body-small':   { rem: '1rem',     px: '16px',    lh: '1.5' },
  'text-small':        { rem: '0.833rem', px: '13.33px', lh: '1' },
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
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile')
  const [typeBreakpoint, setTypeBreakpoint] = useState<Breakpoint>('desktop')
  return (
    <>
      {/* ──────────────────────────── TYPOGRAPHY ──────────────────────── */}
      <section id="typography">
        <p className="text-body-small text-text-tertiary mb-4">Typography</p>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="flex-1 min-w-0">
            <h2 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
              A role-based type scale built on top of Tailwind&apos;s fontSize utility
            </h2>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-body-small text-text-secondary">
              All readable text uses one of these roles. Every role is{' '}
              <InlineCode>font-normal</InlineCode> except{' '}
              <InlineCode>label</InlineCode>, which sets its own weight. Raw Tailwind
              sizes (<InlineCode>text-sm</InlineCode>,{' '}
              <InlineCode>text-lg</InlineCode>, etc.) and arbitrary pixel values are
              not used for body or UI text.
            </p>
          </div>
        </div>

        <p className="text-body-small text-text-secondary mb-6">
          Most heading roles step down one notch on mobile, then return to their intrinsic size at
          the <InlineCode>md:</InlineCode> breakpoint and above.{' '}
          <InlineCode>text-body-biggest</InlineCode> is the only 3-tier role — it grows
          again at <InlineCode>lg:</InlineCode>. Use the control below to preview each
          role at any tier.
        </p>

        <div className="bg-bg border border-border rounded-sm p-8">
          <div className="sticky top-16 z-10 -mx-8 -mt-8 px-8 pt-8 pb-4 mb-2 bg-bg border-b border-border-subtle rounded-t-sm flex justify-end">
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

          {typeRoles.map(({ token, utilityModifiers, useCase, sample, sampleColor, extraSampleClasses, resolved }) => {
            const resolvedClass = resolved[typeBreakpoint]
            const size = sizeFor[resolvedClass]
            return (
              <div key={token} className="py-6 flex flex-col gap-2 border-b border-border-subtle last:border-b-0">
                <div className="grid w-full items-end">
                  <p aria-hidden className={`${resolved.desktop} ${sampleColor} ${extraSampleClasses ?? ''} col-start-1 row-start-1 invisible w-full`}>
                    {sample}
                  </p>
                  <p className={`${resolvedClass} ${sampleColor} ${extraSampleClasses ?? ''} col-start-1 row-start-1 w-full`}>
                    {sample}
                  </p>
                </div>
                <div className="h-px bg-border w-full" />
                <div className="flex gap-4 items-start pt-3">
                  <div className="flex-1 min-w-0 flex flex-col gap-1.5 items-start">
                    <Token>{resolvedClass}</Token>
                    <p className="text-body-small text-text-tertiary">
                      {size.rem} / {size.px} · lh {size.lh}
                    </p>
                    <p className="font-mono text-body-small text-text-tertiary">
                      {utilityModifiers}
                    </p>
                  </div>
                  <p className="text-body-small text-text-tertiary text-right">
                    {useCase}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <SubLabel>Responsive Mapping</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Role tokens resolve to the same value at every breakpoint. The responsive shift happens
          at the usage site (e.g. <InlineCode>text-h1 md:text-display</InlineCode>).
          This table documents the site-wide convention.
        </p>

        <div>
          <div className="flex items-stretch py-3 border-b border-border-subtle">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-44 shrink-0 pr-4">Role</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1 min-w-0 border-l border-border-subtle pl-4">Mobile · &lt;768px</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1 min-w-0 border-l border-border-subtle pl-4">md: · ≥768px</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1 min-w-0 border-l border-border-subtle pl-4">lg: · ≥1024px</p>
          </div>
          {[
            { role: 'text-display',      base: 'text-h1',         baseRem: '2.488rem', basePx: '39.81px', md: 'text-display',      mdRem: '3.5rem',   mdPx: '56px',    lg: 'text-display',      lgRem: '3.5rem',   lgPx: '56px' },
            { role: 'text-h1',           base: 'text-h2',         baseRem: '2.074rem', basePx: '33.18px', md: 'text-h1',           mdRem: '2.488rem', mdPx: '39.81px', lg: 'text-h1',           lgRem: '2.488rem', lgPx: '39.81px' },
            { role: 'text-h2',           base: 'text-h3',         baseRem: '1.728rem', basePx: '27.65px', md: 'text-h2',           mdRem: '2.074rem', mdPx: '33.18px', lg: 'text-h2',           lgRem: '2.074rem', lgPx: '33.18px' },
            { role: 'text-h3',           base: 'text-h4',         baseRem: '1.44rem',  basePx: '23.04px', md: 'text-h3',           mdRem: '1.728rem', mdPx: '27.65px', lg: 'text-h3',           lgRem: '1.728rem', lgPx: '27.65px' },
            { role: 'text-body-biggest', base: 'text-body-small', baseRem: '1rem',     basePx: '16px',    md: 'text-body-big',     mdRem: '1.2rem',   mdPx: '19.2px',  lg: 'text-body-biggest', lgRem: '1.44rem',  lgPx: '23.04px' },
            { role: 'text-body-big',     base: 'text-body-small', baseRem: '1rem',     basePx: '16px',    md: 'text-body-big',     mdRem: '1.2rem',   mdPx: '19.2px',  lg: 'text-body-big',     lgRem: '1.2rem',   lgPx: '19.2px' },
            { role: 'text-body-small',   base: 'text-body-small', baseRem: '1rem',     basePx: '16px',    md: 'text-body-small',   mdRem: '1rem',     mdPx: '16px',    lg: 'text-body-small',   lgRem: '1rem',     lgPx: '16px' },
            { role: 'text-small',        base: 'text-small',      baseRem: '0.833rem', basePx: '13.33px', md: 'text-small',        mdRem: '0.833rem', mdPx: '13.33px', lg: 'text-small',        lgRem: '0.833rem', lgPx: '13.33px' },
          ].map(({ role, base, baseRem, basePx, md, mdRem, mdPx, lg, lgRem, lgPx }) => (
            <div key={role} className="flex items-start py-4 border-b border-border-subtle">
              <div className="min-w-[11rem] shrink-0 pr-4"><Token>{role}</Token></div>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <Token>{base}</Token>
                <p className="text-body-small text-text-tertiary">{baseRem} / {basePx}</p>
              </div>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <Token>{md}</Token>
                <p className="text-body-small text-text-tertiary">{mdRem} / {mdPx}</p>
              </div>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <Token>{lg}</Token>
                <p className="text-body-small text-text-tertiary">{lgRem} / {lgPx}</p>
              </div>
            </div>
          ))}
        </div>

        <SubLabel>Breakpoint Samples</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          The same compressed case study rendered at the selected breakpoint. Type sizes inside
          the frame are hardcoded to the values that would resolve at that breakpoint — so the
          differences are visible without resizing the window. Frames wider than the page scroll
          horizontally.
        </p>

        <div className="mb-4">
          <SegmentedControl
            options={[
              { label: 'Mobile · 375px',  value: 'mobile'  },
              { label: 'Tablet · 768px',  value: 'tablet'  },
              { label: 'Desktop · 1024px', value: 'desktop' },
            ]}
            value={breakpoint}
            onChange={setBreakpoint}
            ariaLabel="Preview breakpoint"
          />
        </div>

        <div className="overflow-x-auto bg-bg-tertiary rounded-sm border border-border-subtle p-4">
          {breakpoint === 'mobile' && (
            <div className="w-[375px] bg-bg rounded-sm border border-border p-5">
              <div className="flex flex-col gap-4">
                <div className="flex gap-1.5 flex-wrap">
                  <span className="text-small text-text-tertiary px-2 py-0.5 rounded-full bg-bg-tertiary">Design Systems</span>
                  <span className="text-small text-text-tertiary px-2 py-0.5 rounded-full bg-bg-tertiary">2024</span>
                </div>
                <p className="text-h1 font-normal text-text-primary leading-[1.3]">Sample Case Study</p>
                <div className="aspect-video bg-bg-secondary rounded-sm border border-border" />
                <div>
                  <p className="text-body-small text-text-tertiary mb-2">Overview</p>
                  <p className="text-body-small text-text-primary">Redesigning the case study template so typography reads well at every breakpoint.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { label: 'Role',     value: 'Lead Designer' },
                    { label: 'Team',     value: 'Design Systems' },
                    { label: 'Timeline', value: '6 months' },
                    { label: 'Status',   value: 'Shipped' },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-1">{label}</p>
                      <p className="text-body-small text-text-secondary">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border-subtle pt-4">
                  <p className="text-body-small text-text-tertiary mb-2">Problem</p>
                  <p className="text-h4 font-normal text-text-primary leading-[1.3] mb-3">Type doesn&apos;t land the same way on every screen</p>
                  <p className="text-body-small text-text-secondary">Body prose steps down to <InlineCode>text-body-small</InlineCode> on mobile for comfortable reading, then up to <InlineCode>text-body-big</InlineCode> from tablet up.</p>
                </div>
              </div>
            </div>
          )}

          {breakpoint === 'tablet' && (
            <div className="w-[768px] bg-bg rounded-sm border border-border p-6">
              <div className="flex flex-col gap-5">
                <div className="flex gap-1.5 flex-wrap">
                  <span className="text-small text-text-tertiary px-2 py-0.5 rounded-full bg-bg-tertiary">Design Systems</span>
                  <span className="text-small text-text-tertiary px-2 py-0.5 rounded-full bg-bg-tertiary">2024</span>
                </div>
                <p className="text-display font-normal text-text-primary leading-[1.3]">Sample Case Study</p>
                <div className="aspect-video bg-bg-secondary rounded-sm border border-border" />
                <div>
                  <p className="text-body-small text-text-tertiary mb-2">Overview</p>
                  <p className="text-body-big text-text-primary">Redesigning the case study template so typography reads well at every breakpoint.</p>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-2">
                  {[
                    { label: 'Role',     value: 'Lead Designer' },
                    { label: 'Team',     value: 'Design Systems' },
                    { label: 'Timeline', value: '6 months' },
                    { label: 'Status',   value: 'Shipped' },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-1">{label}</p>
                      <p className="text-body-small text-text-secondary">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border-subtle pt-5">
                  <p className="text-body-small text-text-tertiary mb-2">Problem</p>
                  <p className="text-h2 font-normal text-text-primary leading-[1.3] mb-3">Type doesn&apos;t land the same way on every screen</p>
                  <p className="text-body-big text-text-secondary">From tablet up, body prose renders at <InlineCode>text-body-big</InlineCode>.</p>
                </div>
              </div>
            </div>
          )}

          {breakpoint === 'desktop' && (
            <div className="w-[1024px] bg-bg rounded-sm border border-border p-6">
              <div className="flex gap-6">
                <div className="w-[140px] shrink-0 flex flex-col gap-1">
                  <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-2">Contents</p>
                  <span className="block text-body-small text-text-secondary px-2 py-1">Overview</span>
                  <span className="block text-body-small font-medium text-text-primary bg-bg-secondary px-2 py-1 rounded-sm">Problem</span>
                  <span className="block text-body-small text-text-secondary px-2 py-1">Solution</span>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-5">
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="text-small text-text-tertiary px-2 py-0.5 rounded-full bg-bg-tertiary">Design Systems</span>
                    <span className="text-small text-text-tertiary px-2 py-0.5 rounded-full bg-bg-tertiary">2024</span>
                  </div>
                  <p className="text-display font-normal text-text-primary leading-[1.3]">Sample Case Study</p>
                  <div className="aspect-video bg-bg-secondary rounded-sm border border-border" />
                  <div>
                    <p className="text-body-small text-text-tertiary mb-2">Overview</p>
                    <p className="text-body-biggest text-text-primary">Redesigning the case study template so typography reads well at every breakpoint.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-6 pt-2">
                    {[
                      { label: 'Role',     value: 'Lead Designer' },
                      { label: 'Team',     value: 'Design Systems' },
                      { label: 'Timeline', value: '6 months' },
                      { label: 'Status',   value: 'Shipped' },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-1">{label}</p>
                        <p className="text-body-small text-text-secondary">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border-subtle pt-5">
                    <p className="text-body-small text-text-tertiary mb-2">Problem</p>
                    <p className="text-h2 font-normal text-text-primary leading-[1.3] mb-3">Type doesn&apos;t land the same way on every screen</p>
                    <p className="text-body-big text-text-secondary">From tablet up, body prose renders at <InlineCode>text-body-big</InlineCode>.</p>
                  </div>
                </div>
                <div className="w-[160px] shrink-0" />
              </div>
            </div>
          )}
        </div>

        <SubLabel>Font Families</SubLabel>
        <div>
          <RowDivider />

          <div className="py-6 flex items-center gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1 items-start">
              <Token>font-sans</Token>
              <p className="text-body-small text-text-tertiary">Inter</p>
              <p className="text-body-small text-text-tertiary mt-1">All UI text</p>
            </div>
            <p className="font-sans text-body-big text-text-primary flex-1 min-w-0">
              I want to reach a little closer to the world
            </p>
          </div>

          <div className="py-6 flex items-center gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1 items-start">
              <Token>font-serif</Token>
              <p className="text-body-small text-text-tertiary">Lora</p>
              <p className="text-body-small text-text-tertiary mt-1">Available; not in active use</p>
            </div>
            <p className="font-serif text-body-big text-text-primary flex-1 min-w-0">
              I want to reach a little closer to the world
            </p>
          </div>

          <div className="py-6 flex items-center gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1 items-start">
              <Token>font-mono</Token>
              <p className="text-body-small text-text-tertiary">JetBrains Mono</p>
              <p className="text-body-small text-text-tertiary mt-1">Step numbers, code, token names</p>
            </div>
            <p className="font-mono text-body-big text-text-primary flex-1 min-w-0">
              I want to reach a little closer to the world
            </p>
          </div>
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
          Color is always set via <InlineCode>className</InlineCode> using
          text token classes. Never hardcode stroke or fill colors.
        </p>

        <SubLabel>Sizes</SubLabel>
        <div>
          <RowDivider />
          {[
            { size: 20, strokeWidth: 2,   label: 'size={20} strokeWidth={2}',   use: 'UI icons at body-small scale — buttons, inputs, nav, inline links' },
            { size: 24, strokeWidth: 2,   label: 'size={24} strokeWidth={2}',   use: 'Inline with body-small text, standalone icons' },
            { size: 32, strokeWidth: 1.5, label: 'size={32} strokeWidth={1.5}', use: 'Decorative / card icon' },
            { size: 48, strokeWidth: 2, label: 'size={48} strokeWidth={2}', use: 'Large decorative icon — stat cards, hero accents' },
          ].map(({ size, strokeWidth, label, use }) => (
            <div key={size} className="flex items-center gap-8 py-5 border-b border-border-subtle">
              <div className="w-12 flex items-center justify-center shrink-0">
                <ArrowUpRight size={size} strokeWidth={strokeWidth} className="text-text-primary" />
              </div>
              <div className="min-w-[14rem] shrink-0"><Token>{label}</Token></div>
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
              <div className="min-w-[14rem] shrink-0"><Token>{label}</Token></div>
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
          The Tailwind CSS Stone (warm neutral) ramp underpins every semantic token. Referenced by semantic roles, never used directly in components.
        </p>
        <div>
          <RowDivider />
          {[
            { label: 'neutral-000', hex: '#FFFFFF', mapped: 'bg-secondary, text-inverse' },
            { label: 'neutral-050', hex: '#fafaf9', mapped: 'bg' },
            { label: 'neutral-100', hex: '#f5f5f4', mapped: 'bg-tertiary, border-subtle' },
            { label: 'neutral-200', hex: '#e7e5e4', mapped: 'border' },
            { label: 'neutral-300', hex: '#d6d3d1', mapped: 'border-strong, text-placeholder' },
            { label: 'neutral-400', hex: '#a8a29e', mapped: '—' },
            { label: 'neutral-500', hex: '#78716c', mapped: 'text-tertiary' },
            { label: 'neutral-600', hex: '#57534e', mapped: 'text-secondary' },
            { label: 'neutral-700', hex: '#44403c', mapped: '—' },
            { label: 'neutral-800', hex: '#292524', mapped: '—' },
            { label: 'neutral-900', hex: '#1c1917', mapped: 'bg-inverse, text-primary' },
            { label: 'neutral-950', hex: '#0c0a09', mapped: '—' },
          ].map(({ label, hex, mapped }) => (
            <div key={label} className="flex items-center gap-5 py-3 border-b border-border-subtle">
              <div
                className={`size-8 rounded-sm shrink-0 ${hex === '#FFFFFF' ? 'border border-border' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <div className="min-w-[8rem] shrink-0"><Token>{label}</Token></div>
              <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">{hex}</p>
              <p className="text-body-small text-text-tertiary flex-1 min-w-0">→ {mapped}</p>
            </div>
          ))}
        </div>

        {/* ── Atomic: Primary ── */}
        <SubLabel>Primary · Atomic</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Magenta hue aligned with the gradient-pink direction. Used for text highlights, numbered callouts, and interactive accents. WCAG AA compliant as text on page bg (4.71:1) and as button bg with white text (4.91:1).
        </p>
        <div>
          <RowDivider />
          {[
            { label: 'primary',        hex: '#DA007B', note: 'Base — text highlights, callout numbers' },
            { label: 'primary-hover',   hex: '#B80068', note: 'Hover variant — button hover bg' },
            { label: 'primary-active',  hex: '#940054', note: 'Active variant' },
            { label: 'primary-light',   hex: '#E279B4', note: 'Light variant' },
            { label: 'primary-subtle',  hex: '#FEF6FA', note: 'Subtle background tint' },
          ].map(({ label, hex, note }) => (
            <div key={label} className="flex items-center gap-5 py-3 border-b border-border-subtle">
              <div className="size-8 rounded-sm shrink-0" style={{ backgroundColor: hex }} />
              <div className="min-w-[8rem] shrink-0"><Token>{label}</Token></div>
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
            { label: 'text-text-primary',     hex: '#1c1917', role: 'Body, headings, all primary content' },
            { label: 'text-text-secondary',   hex: '#57534e', role: 'Supporting prose, descriptions, metadata values' },
            { label: 'text-text-tertiary',    hex: '#78716c', role: 'Labels, captions, placeholder hints' },
            { label: 'text-text-placeholder', hex: '#d6d3d1', role: 'Form input placeholders — reserved, not yet used' },
            { label: 'text-text-disabled',    hex: '#d6d3d1', role: 'Disabled states — reserved, not yet used' },
            { label: 'text-text-inverse',     hex: '#FFFFFF', role: 'Text on dark/inverse surfaces', border: true },
            { label: 'text-text-link',        hex: '#085fa0', role: 'Reserved — not currently used (links use text-secondary instead)' },
            { label: 'text-text-link-hover',  hex: '#064b7d', role: 'Reserved — not currently used' },
            { label: 'text-text-on-brand',    hex: '#FFFFFF', role: 'Text on brand-tinted surfaces — reserved, not yet used', border: true },
          ].map(({ label, hex, role, border }) => (
            <div key={label} className="flex items-center gap-5 py-4 border-b border-border-subtle">
              <div
                className={`size-10 rounded-sm shrink-0 ${border ? 'border border-border' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <div className="flex-1 min-w-0 flex items-center gap-4">
                <div className="min-w-[13rem] shrink-0"><Token>{label}</Token></div>
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
            { label: 'bg-bg',           hex: '#fafaf9', role: 'Page background, nav surface' },
            { label: 'bg-bg-secondary', hex: '#FFFFFF', role: 'Card surfaces, image placeholders, callout cards', border: true },
            { label: 'bg-bg-tertiary',  hex: '#f5f5f4', role: 'Tag pills, subtle highlights' },
            { label: 'bg-bg-inverse',   hex: '#1c1917', role: 'Dark / inverse surfaces' },
            { label: 'bg-bg-brand',     hex: '#EAF4F4', role: 'Brand-tinted surface — reserved, not yet used' },
          ].map(({ label, hex, role, border }) => (
            <div key={label} className="flex items-center gap-5 py-4 border-b border-border-subtle">
              <div
                className={`size-10 rounded-sm shrink-0 ${border ? 'border border-border' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <div className="flex-1 min-w-0 flex items-center gap-4">
                <div className="min-w-[13rem] shrink-0"><Token>{label}</Token></div>
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
            { label: 'border-border-subtle', hex: '#f5f5f4', role: 'Dividers, section rules, subtle separators' },
            { label: 'border-border',        hex: '#e7e5e4', role: 'Card outlines, callout card borders' },
            { label: 'border-border-strong', hex: '#d6d3d1', role: 'Emphasized borders, form inputs' },
            { label: 'border-border-focus',  hex: '#2B6B6B', role: 'Focus rings — reserved, not yet used' },
          ].map(({ label, hex, role }) => (
            <div key={label} className="flex items-center gap-5 py-4 border-b border-border-subtle">
              <div
                className="size-10 rounded-sm shrink-0 border-2"
                style={{ borderColor: hex, backgroundColor: 'transparent' }}
              />
              <div className="flex-1 min-w-0 flex items-center gap-4">
                <div className="min-w-[13rem] shrink-0"><Token>{label}</Token></div>
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
            <div className="size-10 rounded-sm shrink-0" style={{ backgroundColor: '#f02065' }} />
            <div className="flex-1 min-w-0 flex items-center gap-4">
              <div className="min-w-[13rem] shrink-0"><Token>bg-accent</Token></div>
              <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">#f02065</p>
              <p className="text-body-small text-text-secondary">Accent pink — decorative uses. Not used as button hover.</p>
            </div>
          </div>
        </div>

        <SubLabel>Gradient · Semantic</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Two named gradients are used site-wide, always applied as{' '}
          <InlineCode>bg-clip-text text-transparent bg-gradient-to-r</InlineCode>.
        </p>
        <div>
          <RowDivider />

          <div className="flex items-center gap-5 py-6 border-b border-border-subtle">
            <div
              className="h-10 w-10 rounded-sm shrink-0"
              style={{ background: 'linear-gradient(to right, #f02065, #d5189b)' }}
            />
            <div className="flex-1 min-w-0">
              <div className="mb-1"><Token>from-gradient-red to-gradient-pink</Token></div>
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
              <div className="mb-1"><Token>from-gradient-red from-[22%] to-gradient-orange</Token></div>
              <p className="text-body-small text-text-tertiary mb-3">#f02065 → #ff7700 · Pink-orange</p>
              <p className="text-h2 font-normal bg-clip-text text-transparent bg-gradient-to-r from-gradient-red from-[22%] to-gradient-orange">
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
              <div className="min-w-[4rem] shrink-0"><Token>{scale}</Token></div>
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
              value: '220px + flex-1 + 120px',
              role: 'TOC (sticky) + content + empty notes column; gap-8 between columns',
            },
          ].map(({ token, value, role }) => (
            <div key={token} className="flex items-center gap-8 py-4 border-b border-border-subtle">
              <div className="min-w-[11rem] shrink-0"><Token>{token}</Token></div>
              <p className="font-mono text-body-small text-text-tertiary w-40 shrink-0">{value}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{role}</p>
            </div>
          ))}
        </div>

        <SubLabel>Responsive Mapping</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Spacing tokens themselves don&apos;t change at breakpoints — the swap happens at the usage
          site (e.g. <InlineCode>px-5 md:px-10</InlineCode>). These are the recurring
          site-wide patterns.
        </p>

        <div>
          <div className="flex items-stretch py-3 border-b border-border-subtle">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-56 shrink-0 pr-4">Usage</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1 min-w-0 border-l border-border-subtle pl-4">Mobile · &lt;768px</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1 min-w-0 border-l border-border-subtle pl-4">md: · ≥768px</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1 min-w-0 border-l border-border-subtle pl-4">lg: · ≥1024px</p>
          </div>
          {[
            { usage: 'Horizontal page padding',        base: 'px-5',  baseRem: '1.25rem', basePx: '20px', md: 'px-10', mdRem: '2.5rem', mdPx: '40px', lg: 'px-10', lgRem: '2.5rem', lgPx: '40px' },
            { usage: 'Section vertical padding',       base: 'py-12', baseRem: '3rem',    basePx: '48px', md: 'py-20', mdRem: '5rem',   mdPx: '80px', lg: 'py-20', lgRem: '5rem',   lgPx: '80px' },
            { usage: 'Case study hero top',            base: 'pt-10', baseRem: '2.5rem',  basePx: '40px', md: 'pt-16', mdRem: '4rem',   mdPx: '64px', lg: 'pt-16', lgRem: '4rem',   lgPx: '64px' },
            { usage: 'Case study hero bottom',         base: 'pb-8',  baseRem: '2rem',    basePx: '32px', md: 'pb-12', mdRem: '3rem',   mdPx: '48px', lg: 'pb-12', lgRem: '3rem',   lgPx: '48px' },
            { usage: 'Cover image bottom',             base: 'pb-10', baseRem: '2.5rem',  basePx: '40px', md: 'pb-16', mdRem: '4rem',   mdPx: '64px', lg: 'pb-16', lgRem: '4rem',   lgPx: '64px' },
            { usage: 'Subsection spacer',              base: 'h-12',  baseRem: '3rem',    basePx: '48px', md: 'h-24',  mdRem: '6rem',   mdPx: '96px', lg: 'h-24',  lgRem: '6rem',   lgPx: '96px' },
            { usage: 'Paywall spacer',                 base: 'h-16',  baseRem: '4rem',    basePx: '64px', md: 'h-24',  mdRem: '6rem',   mdPx: '96px', lg: 'h-24',  lgRem: '6rem',   lgPx: '96px' },
            { usage: 'Next section bottom',            base: 'pb-12', baseRem: '3rem',    basePx: '48px', md: 'pb-24', mdRem: '6rem',   mdPx: '96px', lg: 'pb-24', lgRem: '6rem',   lgPx: '96px' },
          ].map(({ usage, base, baseRem, basePx, md, mdRem, mdPx, lg, lgRem, lgPx }) => (
            <div key={usage} className="flex items-start py-4 border-b border-border-subtle">
              <p className="text-body-small text-text-secondary w-56 shrink-0 pr-4">{usage}</p>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <Token>{base}</Token>
                <p className="text-body-small text-text-tertiary">{baseRem} / {basePx}</p>
              </div>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <Token>{md}</Token>
                <p className="text-body-small text-text-tertiary">{mdRem} / {mdPx}</p>
              </div>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <Token>{lg}</Token>
                <p className="text-body-small text-text-tertiary">{lgRem} / {lgPx}</p>
              </div>
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
              <div className="min-w-[6rem] shrink-0"><Token>{cls}</Token></div>
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
          <InlineCode>#1c1917</InlineCode>) at low opacity. Currently{' '}
          <InlineCode>shadow-xs</InlineCode> and{' '}
          <InlineCode>shadow-md</InlineCode> are used on CaseStudyCard. The rest are reserved for future use.
        </p>

        <div>
          <div className="flex gap-5 py-3 border-b border-border-subtle">
            <div className="w-16 shrink-0" />
            <p className="font-mono text-body-small text-text-tertiary flex-1">Class</p>
          </div>
          {[
            { cls: 'shadow-xs',    value: '0 1px 3px (4% opacity)' },
            { cls: 'shadow-sm',    value: '0 2px 6px + 0 1px 3px (6%/4% opacity)' },
            { cls: 'shadow-md',    value: '0 6px 12px + 0 3px 6px (6%/4% opacity)' },
            { cls: 'shadow-lg',    value: '0 12px 24px + 0 6px 10px (6%/4% opacity)' },
            { cls: 'shadow-xl',    value: '0 24px 40px + 0 10px 16px (6%/4% opacity)' },
            { cls: 'shadow-2xl',   value: '0 32px 64px (16% opacity)' },
            { cls: 'shadow-inner', value: 'inset 0 2px 6px (6% opacity)' },
          ].map(({ cls, value }) => (
            <div key={cls} className="flex items-center gap-5 py-5 border-b border-border-subtle">
              <div className={`size-10 bg-bg rounded-sm shrink-0 ${cls}`} />
              <div className="flex-1 min-w-0 flex flex-col gap-1 items-start">
                <Token>{cls}</Token>
                <p className="text-body-small text-text-tertiary">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ──────────────────────────── MEDIA ──────────────────────── */}
      <section id="media">
        <SectionHeading>Media</SectionHeading>
        <p className="text-body-small text-text-secondary mb-8">
          Rules for all images and videos across the site. These ensure consistent presentation
          and prevent cropping or distortion.
        </p>

        <SubLabel>Sizing</SubLabel>
        <div>
          <RowDivider />
          {[
            { rule: 'Full width', detail: 'All images and videos use w-full to fill their container' },
            { rule: 'Natural aspect ratio', detail: 'Never constrain aspect ratio — no aspect-video, object-cover, object-fit, or fill on images or videos' },
            { rule: 'No cropping', detail: 'Containers must never clip image or video content' },
          ].map(({ rule, detail }) => (
            <div key={rule} className="flex items-start gap-8 py-5 border-b border-border-subtle">
              <p className="text-body-small font-medium text-text-primary w-48 shrink-0">{rule}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{detail}</p>
            </div>
          ))}
        </div>

        <SubLabel>Chrome</SubLabel>
        <div>
          <RowDivider />
          {[
            { rule: 'Border', detail: 'border border-border — applied by default on all images and videos' },
            { rule: 'Shadow', detail: 'shadow-sm — applied by default alongside the border' },
            { rule: 'Radius', detail: 'rounded-sm — consistent rounding on all media' },
            { rule: 'Bare mode', detail: 'Pass bare to ImageBlock to remove border and shadow (e.g. images that bleed into the background)' },
          ].map(({ rule, detail }) => (
            <div key={rule} className="flex items-start gap-8 py-5 border-b border-border-subtle">
              <p className="text-body-small font-medium text-text-primary w-48 shrink-0">{rule}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{detail}</p>
            </div>
          ))}
        </div>

        <SubLabel>Captions</SubLabel>
        <div>
          <RowDivider />
          {[
            { rule: 'Default on', detail: 'Every image and video should include a caption — omitting is the exception' },
            { rule: 'Style', detail: 'text-small text-text-tertiary mt-2 text-center' },
            { rule: 'Position', detail: 'Centered below the media element' },
          ].map(({ rule, detail }) => (
            <div key={rule} className="flex items-start gap-8 py-5 border-b border-border-subtle">
              <p className="text-body-small font-medium text-text-primary w-48 shrink-0">{rule}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{detail}</p>
            </div>
          ))}
        </div>

        <SubLabel>Video controls</SubLabel>
        <div>
          <RowDivider />
          {[
            { rule: 'Autoplay', detail: 'Videos autoplay muted and loop by default' },
            { rule: 'Play/pause button', detail: 'Round IconButton overlay — absolute bottom-3 right-3, toggles between Play and Pause lucide icons' },
          ].map(({ rule, detail }) => (
            <div key={rule} className="flex items-start gap-8 py-5 border-b border-border-subtle">
              <p className="text-body-small font-medium text-text-primary w-48 shrink-0">{rule}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            The <InlineCode>ImageBlock</InlineCode> component handles all media rendering —
            images, looping videos, Vimeo embeds, and placeholders. Videos delegate to the{' '}
            <InlineCode>VideoBlock</InlineCode> client component for play/pause interactivity.
          </p>
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
          Component: <InlineCode>components/IconButton.tsx</InlineCode>. Icon-only action button. Used in the testimonial carousel.
        </p>

        <div className="flex gap-2 mb-8">
          <IconButton icon={<ArrowLeft size={20} strokeWidth={2} />} onClick={() => {}} aria-label="Previous" />
          <IconButton icon={<ArrowRight size={20} strokeWidth={2} />} onClick={() => {}} aria-label="Next" />
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Matches the primary button color: <InlineCode>bg-bg-inverse</InlineCode> →{' '}
            <InlineCode>bg-neutral-800</InlineCode> on hover. Pass any Lucide icon as the{' '}
            <InlineCode>icon</InlineCode> prop at{' '}
            <InlineCode>size={'{20}'} strokeWidth={'{2}'}</InlineCode> (UI icon tier).
            Always provide a descriptive <InlineCode>aria-label</InlineCode>.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="primary-button">
        <SubLabel>Primary Button</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <InlineCode>components/Button.tsx</InlineCode>. Renders as{' '}
          <InlineCode>{'<Link>'}</InlineCode> when given <InlineCode>href</InlineCode>,
          or <InlineCode>{'<button>'}</InlineCode> when given <InlineCode>onClick</InlineCode>.
        </p>

        <div className="mb-8">
          <Button href="#">View Case Study</Button>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-8">
          <p className="text-body-small text-text-secondary">
            Non-color diff: ArrowUpRight icon rotates 45° on hover (↗ → →).{' '}
            Subtle lightening on hover (<InlineCode>#1c1917 → #292524</InlineCode>).{' '}
            Contrast: white on <InlineCode>#292524</InlineCode> ≈ 15.4:1 ✓ WCAG AA.
          </p>
        </div>

        <SubLabel>Outline Variant</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Secondary actions. Transparent background with border, fills on hover.
        </p>

        <div className="mb-8">
          <Button variant="outline" href="#">Secondary</Button>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Hover transitions <InlineCode>bg-bg-secondary → bg-bg-tertiary</InlineCode>,{' '}
            <InlineCode>border-border → border-border-strong</InlineCode>, and{' '}
            <InlineCode>text-text-secondary → text-text-primary</InlineCode>.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="nav-link">
        <SubLabel>Navigation Link</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Inline in <InlineCode>components/Nav.tsx</InlineCode>. Same visual language as
          Table of Contents items — filled background on hover and active.
        </p>

        <div className="mb-8">
          <a href="#" className="inline-block text-body-small text-text-secondary hover:text-text-primary hover:font-medium px-2.5 py-1.5 rounded-sm transition-colors">
            work
          </a>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Non-color diff: background fill appears and font weight shifts to medium on hover.
            Active page retains the same styling. Matches Table of Contents item pattern.
            Contrast: <InlineCode>#57534e</InlineCode> on white ≈ 7.0:1 ✓ WCAG AA.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="inline-link">
        <SubLabel>Inline Link</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <InlineCode>components/InlineLink.tsx</InlineCode>. 4 variants controlled
          by the <InlineCode>variant</InlineCode> prop. All share the same visual treatment —
          the only difference is the presence of an arrow icon.
        </p>

        <div className="mb-8 flex flex-col gap-3 text-body-small text-text-secondary">
          <div>Read the <InlineLink href="#">case study</InlineLink> (no icon)</div>
          <div>Read the <InlineLink href="#" external variant="icon">case study</InlineLink> (with icon)</div>
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
              <div className="min-w-[9rem] shrink-0"><Token>{variant}</Token></div>
              <p className="text-body-small text-text-tertiary w-16 shrink-0">{icon}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            All variants: <InlineCode>text-text-secondary underline</InlineCode> default →{' '}
            <InlineCode>text-text-primary no-underline</InlineCode> on hover. No blue, no bold.
            Underline satisfies WCAG 1.4.1 (not relying on color alone to identify links).
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="filter-pill">
        <SubLabel>Filter Pill</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Inline in <InlineCode>components/AboutHero.tsx</InlineCode>. Two sizes (default,
          small) × three states — no selected-hover state by design. AboutHero auto-swaps default →
          small below <InlineCode>md:</InlineCode> via responsive classes.
        </p>

        <div className="mb-8 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-16 shrink-0">Default</p>
            <button type="button" className="text-body-small px-4 py-2 rounded-full border bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary transition-colors">
              Design Systems
            </button>
            <button type="button" className="text-body-small font-medium px-4 py-2 rounded-full border bg-bg-inverse text-text-inverse border-transparent">
              Selected
            </button>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-16 shrink-0">Small</p>
            <button type="button" className="text-body-small px-3 py-1.5 rounded-full border bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary transition-colors">
              Design Systems
            </button>
            <button type="button" className="text-body-small font-medium px-3 py-1.5 rounded-full border bg-bg-inverse text-text-inverse border-transparent">
              Selected
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex gap-8 py-3 border-b border-border-subtle">
            <p className="text-body-small text-text-tertiary w-24 shrink-0">Size</p>
            <p className="text-body-small text-text-tertiary flex-1">Classes</p>
            <p className="text-body-small text-text-tertiary flex-1">Use</p>
          </div>
          {[
            { size: 'default', classes: 'text-body-small px-4 py-2', use: 'Tablet and up, desktop layouts' },
            { size: 'small', classes: 'text-body-small px-3 py-1.5', use: 'Mobile, dense layouts' },
          ].map(({ size, classes, use }) => (
            <div key={size} className="flex items-center gap-8 py-4 border-b border-border-subtle">
              <div className="min-w-[6rem] shrink-0"><Token>{size}</Token></div>
              <p className="font-mono text-body-small text-text-secondary flex-1 min-w-0">{classes}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            Non-color diff: unsel. hover shifts background, border, and text simultaneously.
            Selected adds <InlineCode>font-medium</InlineCode> as a weight signal.
            Contrast: <InlineCode>#57534e</InlineCode> on white ≈ 7.0:1 · white on{' '}
            <InlineCode>#1c1917</InlineCode> ≈ 17.6:1 — both ✓ WCAG AA.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="tag">
        <SubLabel>Tag</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <InlineCode>components/CaseStudyTag.tsx</InlineCode>. Single visual
          treatment, no variants. Used for the tag row in case study heroes and inside{' '}
          <InlineCode>CaseStudyCard</InlineCode>. Visually mirrors the TOC active state but
          with a pill shape.
        </p>

        <div className="mb-8 flex gap-2">
          <span className="text-body-small font-medium text-text-primary bg-bg-secondary border border-border-subtle rounded-full px-2.5 py-1.5">
            Insurance
          </span>
          <span className="text-body-small font-medium text-text-primary bg-bg-secondary border border-border-subtle rounded-full px-2.5 py-1.5">
            B2B
          </span>
          <span className="text-body-small font-medium text-text-primary bg-bg-secondary border border-border-subtle rounded-full px-2.5 py-1.5">
            Design Systems
          </span>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Same `bg-bg-secondary` + `border-border-subtle` treatment as the TOC active item, but
            `rounded-full` instead of `rounded-sm`. Padding `px-2.5 py-1.5` matches the TOC active
            padding so tags and active TOC items have equal vertical weight.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="token">
        <SubLabel>Token</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <InlineCode>components/Token.tsx</InlineCode>. A monospace pill chip
          used to display every design token name on this page — color tokens, type roles, spacing
          values, radius classes, shadow classes, and component variants. Single visual treatment,
          no variants. Pass the token name as children.
        </p>

        <div className="mb-8 flex flex-wrap items-center gap-2">
          <Token>text-display</Token>
          <Token>neutral-100</Token>
          <Token>spacing/16</Token>
          <Token>rounded-full</Token>
          <Token>shadow-md</Token>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            <InlineCode>bg-neutral-100</InlineCode> + <InlineCode>border-border-strong</InlineCode> + <InlineCode>rounded-full</InlineCode> + <InlineCode>px-2 py-1</InlineCode>.
            Inline-flex with <InlineCode>whitespace-nowrap</InlineCode> so it sits cleanly
            beside surrounding text and never wraps. Mirrors the Figma Token component (no variants).
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="inline-code">
        <SubLabel>Inline Code</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <InlineCode>components/InlineCode.tsx</InlineCode>. A lightweight rectangular
          chip for inline references to code constructs — Tailwind classes, file names, prop names,
          hex values — within prose. Renders as a semantic <InlineCode>{'<code>'}</InlineCode>{' '}
          element. Single visual treatment, no variants.
        </p>

        <div className="mb-8 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            All readable text uses one of these roles. Every role is{' '}
            <InlineCode>font-normal</InlineCode> except <InlineCode>label</InlineCode>, which sets
            its own weight. Raw Tailwind sizes (<InlineCode>text-sm</InlineCode>,{' '}
            <InlineCode>text-lg</InlineCode>, etc.) are not used for body or UI text.
          </p>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            <InlineCode>inline rounded-sm border border-border-subtle bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.9em]</InlineCode>.
            Em-relative font size shrinks the chip to ~90% of the parent prose, so it stays
            proportional inside any role from <InlineCode>text-body-big</InlineCode> down to{' '}
            <InlineCode>text-body-small</InlineCode>. Distinct from <InlineCode>{'<Token>'}</InlineCode>:
            InlineCode is for inline-in-prose; Token is for standalone labels in metadata columns.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="tab">
        <SubLabel>Tab</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Inline pattern in <InlineCode>components/DesignSystemTabs.tsx</InlineCode>{' '}
          (Foundations / Components header). Two states — Active and Inactive.
        </p>

        <div className="mb-8 flex gap-2">
          <button type="button" className="text-body-small font-medium px-3 py-1.5 rounded-sm bg-bg-inverse text-text-inverse">
            Active
          </button>
          <button type="button" className="text-body-small px-3 py-1.5 rounded-sm bg-bg-secondary border border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary transition-colors">
            Inactive
          </button>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Active uses <InlineCode>bg-bg-inverse</InlineCode> + white text + medium
            weight; inactive matches the Filter Pill unselected treatment. No selected-hover state
            by design — once a tab is active, hovering it is a no-op.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="segmented-control">
        <SubLabel>Segmented Control</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <InlineCode>components/SegmentedControl.tsx</InlineCode>. A grouped
          set of buttons where exactly one is selected — used to switch between mutually-exclusive
          views in place. Currently powers the breakpoint switcher in Foundations → Type Scale →
          Breakpoint Samples.
        </p>

        <div className="mb-8">
          <SegmentedControlDemo />
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Generic in its option type — pass any string-literal union as <InlineCode>value</InlineCode>{' '}
            and the matching <InlineCode>options[]</InlineCode>. Active uses{' '}
            <InlineCode>bg-bg-inverse</InlineCode> + white text + medium weight; inactive
            shifts text from <InlineCode>text-text-secondary</InlineCode> →{' '}
            <InlineCode>text-text-primary</InlineCode> on hover. Container uses{' '}
            <InlineCode>bg-bg-tertiary</InlineCode> + <InlineCode>border-border</InlineCode> +{' '}
            <InlineCode>rounded-md</InlineCode> +{' '}
            <InlineCode>p-1</InlineCode> — visually distinct from the Tab pattern (no
            container, individual outlined inactive buttons).
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="carousel-dot">
        <SubLabel>Carousel Dot</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Inline pattern in <InlineCode>components/TestimonialCarousel.tsx</InlineCode>.
          Small circular indicator buttons; two states — Active and Inactive.
        </p>

        <div className="mb-8 flex items-center gap-2">
          <span className="size-2 rounded-full bg-text-primary inline-block" />
          <span className="size-2 rounded-full bg-border-strong inline-block" />
          <span className="size-2 rounded-full bg-border-strong inline-block" />
          <span className="size-2 rounded-full bg-border-strong inline-block" />
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Active dot uses <InlineCode>bg-text-primary</InlineCode>; inactive dots use{' '}
            <InlineCode>bg-border-strong</InlineCode> with{' '}
            <InlineCode>hover:bg-text-tertiary</InlineCode>. <InlineCode>size-2</InlineCode>{' '}
            (8px) circles, full radius.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="table-of-contents">
        <SubLabel>Table of Contents</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <InlineCode>components/TableOfContents.tsx</InlineCode>. Sticky sidebar
          navigation with IntersectionObserver-based active section tracking. Hidden below{' '}
          <InlineCode>lg:</InlineCode> breakpoint.
        </p>

        <div className="mb-8 flex flex-col gap-1 w-fit">
          <a href="#" className="block text-body-small text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:font-medium px-2.5 py-1.5 rounded-sm border border-transparent transition-colors">
            Overview
          </a>
          <a href="#" className="block text-body-small font-medium text-text-primary bg-bg-secondary border border-border-subtle px-2.5 py-1.5 rounded-sm">
            Problem (active)
          </a>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            Pass an array of <InlineCode>{'{ label, id }'}</InlineCode> items. The component
            uses IntersectionObserver to detect which <InlineCode>id</InlineCode> is in
            view and highlights it. Active adds a{' '}
            <InlineCode>border-border-subtle</InlineCode> outline on top of the filled
            background to distinguish it from hover. Inactive items carry a{' '}
            <InlineCode>border-transparent</InlineCode> placeholder so the active border
            doesn't nudge layout. Positioned <InlineCode>sticky top-32</InlineCode> (128px)
            to clear the 64px nav. Hidden below <InlineCode>lg:</InlineCode> breakpoint.
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
    <>
      {/* Tab bar — edge-to-edge, sticky-pinned, finishes the white hero zone */}
      <div className="sticky top-16 z-40 bg-bg-secondary border-b border-border">
        <div className="flex justify-center px-5 md:px-10">
          <div className="max-w-page w-full flex gap-8 pt-12 md:pt-20">
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

            <TableOfContents items={toc} className="top-36" />

            {/* Content */}
            <div className="flex-1 min-w-0">
              {tab === 'Foundations' ? <FoundationsContent /> : <ComponentsContent />}
            </div>

            {/* Notes column — reserved, hidden on mobile */}
            <div className="hidden lg:block w-[120px] shrink-0" />

          </div>
        </div>
      </div>
    </>
  )
}
