'use client'

import { useState } from 'react'
import Button from './Button'
import IconButton from './IconButton'
import InlineLink from './InlineLink'
import TableOfContents from './TableOfContents'
import SegmentedControl from './SegmentedControl'
import InlineCode from './InlineCode'
import CaseStudyTag from './CaseStudyTag'
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

// Wrap parenthetical class refs in InlineCode chips: "padding (py-1)" → "padding (<chip>py-1</chip>)"
function renderWithParenChips(text: string): React.ReactNode[] {
  return text.split(/\(([^)]+)\)/g).map((p, i) =>
    i % 2 === 1 ? <span key={i}>(<InlineCode>{p}</InlineCode>)</span> : p
  )
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
  { label: 'Motion',     id: 'motion' },
  { label: 'Media',      id: 'media' },
]

const componentsToc = [
  { label: 'Icon Button',        id: 'icon-button' },
  { label: 'Primary Button',     id: 'primary-button' },
  { label: 'Navigation Link',    id: 'nav-link' },
  { label: 'Inline Link',        id: 'inline-link' },
  { label: 'Filter Pill',        id: 'filter-pill' },
  { label: 'Tag',                id: 'tag' },
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

        <div className="bg-bg-secondary border border-border rounded-sm p-8">
          <div className="sticky top-24 z-10 -mx-8 -mt-8 px-8 pt-8 pb-4 mb-2 bg-bg-secondary rounded-t-sm flex justify-end">
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
                    <InlineCode>{resolvedClass}</InlineCode>
                    <p className="text-body-small text-text-tertiary">
                      {size.rem} / {size.px} · lh {size.lh}
                    </p>
                    <InlineCode>{utilityModifiers}</InlineCode>
                  </div>
                  <p className="text-body-small text-text-tertiary text-right">
                    {useCase}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <SubLabel>Application conventions</SubLabel>
        <div className="mb-8 flex flex-col gap-3 text-body-small text-text-secondary">
          <p>
            <span className="text-text-primary">Headings always use <InlineCode>font-normal</InlineCode>.</span>{' '}
            Never <InlineCode>font-medium</InlineCode> or <InlineCode>font-bold</InlineCode> on{' '}
            <InlineCode>text-display</InlineCode>, <InlineCode>text-h1</InlineCode>,{' '}
            <InlineCode>text-h2</InlineCode>, or <InlineCode>text-h3</InlineCode>.
          </p>
          <p>
            <span className="text-text-primary">Section labels</span> (e.g. &quot;Overview&quot;,
            &quot;Problem&quot;, &quot;Next&quot;) use{' '}
            <InlineCode>text-body-small text-text-tertiary font-normal</InlineCode> —{' '}
            <span className="text-text-primary">no uppercase, no letter-spacing</span>. They are
            visually distinct from micro-labels.
          </p>
          <p>
            <span className="text-text-primary">Micro-labels</span> (footer column headers,
            TOC &quot;Contents&quot; header, metadata grid field labels) use one unified style:{' '}
            <InlineCode>text-small font-medium uppercase tracking-widest text-text-tertiary</InlineCode>.
          </p>
          <p>
            <span className="text-text-primary"><InlineCode>text-h4</InlineCode> is mobile-only.</span>{' '}
            It exists solely as the step-down pair for <InlineCode>text-h3</InlineCode> (auto-paired
            as <InlineCode>text-h4 md:text-h3</InlineCode>). Never use it as a standalone desktop
            role.
          </p>
          <p>
            <span className="text-text-primary"><InlineCode>text-body-biggest</InlineCode> exception.</span>{' '}
            When used as a card title or step-number indicator (CaseStudyCard thumbnail title,
            NumberedCallout number, CaseStudyPaywall heading), it stays at{' '}
            <InlineCode>text-body-biggest</InlineCode> across all breakpoints — these are compact
            visual anchors, not long-form prose, and stepping them down would collapse the
            card hierarchy on mobile.
          </p>
          <p>
            <span className="text-text-primary">Footer wordmark exception.</span> The footer
            wordmark uses <InlineCode>text-[56px] md:text-[80px] lg:text-[120px]</InlineCode> —
            a deliberate one-off, intentionally outside the type scale. Don&apos;t refactor into
            a role token.
          </p>
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
              <div className="min-w-[11rem] shrink-0 pr-4"><InlineCode>{role}</InlineCode></div>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <InlineCode>{base}</InlineCode>
                <p className="text-body-small text-text-tertiary">{baseRem} / {basePx}</p>
              </div>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <InlineCode>{md}</InlineCode>
                <p className="text-body-small text-text-tertiary">{mdRem} / {mdPx}</p>
              </div>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <InlineCode>{lg}</InlineCode>
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

        <div className="overflow-x-auto bg-bg-tertiary rounded-sm p-4">
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
              <InlineCode>font-sans</InlineCode>
              <InlineCode>Inter</InlineCode>
              <p className="text-body-small text-text-tertiary mt-1">All UI text</p>
            </div>
            <p className="font-sans text-body-big text-text-primary flex-1 min-w-0">
              I want to reach a little closer to the world
            </p>
          </div>

          <div className="py-6 flex items-center gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1 items-start">
              <InlineCode>font-serif</InlineCode>
              <InlineCode>Lora</InlineCode>
              <p className="text-body-small text-text-tertiary mt-1">Available; not in active use</p>
            </div>
            <p className="font-serif text-body-big text-text-primary flex-1 min-w-0">
              I want to reach a little closer to the world
            </p>
          </div>

          <div className="py-6 flex items-center gap-8 border-b border-border-subtle">
            <div className="w-52 shrink-0 flex flex-col gap-1 items-start">
              <InlineCode>font-mono</InlineCode>
              <InlineCode>JetBrains Mono</InlineCode>
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
            { size: 48, strokeWidth: 1.5, label: 'size={48} strokeWidth={1.5}', use: 'Large decorative icon — stat cards, hero accents' },
          ].map(({ size, strokeWidth, label, use }) => (
            <div key={size} className="flex items-center gap-8 py-5 border-b border-border-subtle">
              <div className="w-12 flex items-center justify-center shrink-0">
                <ArrowUpRight size={size} strokeWidth={strokeWidth} className="text-text-primary" />
              </div>
              <div className="min-w-[14rem] shrink-0"><InlineCode>{label}</InlineCode></div>
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
              <div className="min-w-[14rem] shrink-0"><InlineCode>{label}</InlineCode></div>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            <span className="text-text-primary">Adjacency rule:</span> when an icon sits next to text
            (contact links, inline labels, button arrows), <span className="text-text-primary">omit
            the icon&apos;s color class</span> so it inherits from the parent. Icon and adjacent
            text must always render in the same color.
          </p>
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
              <InlineCode>{name}</InlineCode>
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
            { label: 'neutral-100', hex: '#f5f5f4', mapped: 'border-subtle' },
            { label: 'neutral-200', hex: '#e7e5e4', mapped: 'bg-tertiary, border' },
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
              <div className="min-w-[8rem] shrink-0"><InlineCode>{label}</InlineCode></div>
              <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">{hex}</p>
              <p className="text-body-small text-text-tertiary flex-1 min-w-0">
                →{' '}
                {mapped === '—'
                  ? '—'
                  : mapped.split(', ').map((c, i) => (
                      <span key={c}>
                        {i > 0 && ', '}
                        <InlineCode>{c}</InlineCode>
                      </span>
                    ))}
              </p>
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
              <div className="min-w-[8rem] shrink-0"><InlineCode>{label}</InlineCode></div>
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
                <div className="min-w-[13rem] shrink-0"><InlineCode>{label}</InlineCode></div>
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
            { label: 'bg-bg-tertiary',  hex: '#e7e5e4', role: 'Tag pills, subtle highlights' },
            { label: 'bg-bg-inverse',   hex: '#1c1917', role: 'Dark / inverse surfaces' },
            { label: 'bg-bg-brand',     hex: '#EAF4F4', role: 'Brand-tinted surface — reserved, not yet used' },
          ].map(({ label, hex, role, border }) => (
            <div key={label} className="flex items-center gap-5 py-4 border-b border-border-subtle">
              <div
                className={`size-10 rounded-sm shrink-0 ${border ? 'border border-border' : ''}`}
                style={{ backgroundColor: hex }}
              />
              <div className="flex-1 min-w-0 flex items-center gap-4">
                <div className="min-w-[13rem] shrink-0"><InlineCode>{label}</InlineCode></div>
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
                <div className="min-w-[13rem] shrink-0"><InlineCode>{label}</InlineCode></div>
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
              <div className="min-w-[13rem] shrink-0"><InlineCode>bg-accent</InlineCode></div>
              <p className="font-mono text-body-small text-text-tertiary w-20 shrink-0">#f02065</p>
              <p className="text-body-small text-text-secondary">Accent pink — decorative uses. Not used as button hover.</p>
            </div>
          </div>
        </div>

        <SubLabel>Highlights · Application</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          When a span of prose inside a <InlineCode>text-text-secondary</InlineCode> paragraph
          needs visual emphasis, the default treatment is{' '}
          <span className="text-text-primary">primary text on the secondary paragraph</span> —
          wrap the span in <InlineCode>{'<span className="text-text-primary [&_a]:text-inherit">'}</InlineCode>.
          This is the standard emphasis pattern across the site (used by hero copy, bio
          paragraphs, and testimonial quotes). Reach for the gradient treatments below only
          when explicitly requested.
        </p>

        <div className="mb-6 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            Riley is an{' '}
            <span className="text-text-primary">experience strategist</span>,{' '}
            <span className="text-text-primary">interaction designer</span> and{' '}
            <span className="text-text-primary">designer engineer</span> based in Brooklyn, NY.
          </p>
        </div>

        <div className="mb-12 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            <span className="text-text-primary">The highlight always wins over link color.</span>{' '}
            Any <InlineCode>InlineLink</InlineCode> nested inside a highlight span must inherit
            the highlight color instead of rendering in its own default. The Tailwind arbitrary
            variant <InlineCode>{'[&_a]:text-inherit'}</InlineCode> on the highlight span
            propagates the color down to any child anchor — apply it on every highlight wrapper,
            not just gradient ones.
          </p>
        </div>

        <SubLabel>Gradient · Semantic</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Two named gradients are used site-wide, always applied as{' '}
          <InlineCode>bg-clip-text text-transparent bg-gradient-to-r</InlineCode>. Use only when
          the design explicitly calls for a gradient — primary-on-secondary is the default
          emphasis treatment.
        </p>
        <div>
          <RowDivider />

          <div className="flex items-center gap-5 py-6 border-b border-border-subtle">
            <div
              className="h-10 w-10 rounded-sm shrink-0"
              style={{ background: 'linear-gradient(to right, #f02065, #d5189b)' }}
            />
            <div className="flex-1 min-w-0">
              <div className="mb-1"><InlineCode>from-gradient-red to-gradient-pink</InlineCode></div>
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
              <div className="mb-1"><InlineCode>from-gradient-red from-[22%] to-gradient-orange</InlineCode></div>
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

        <div className="mt-8 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary mb-3">
            <span className="text-text-primary">Apply the gradient to the parent element, not
            per highlighted phrase.</span> Wrapping each phrase in its own{' '}
            <InlineCode>bg-clip-text bg-gradient-to-r</InlineCode> span makes every phrase render
            its own narrow, independent gradient — the result reads as several disconnected
            color washes rather than one continuous one. Instead, paint the gradient on the
            parent element and selectively suppress it on non-highlighted text:
          </p>
          <div className="mb-3 bg-bg border border-border-subtle rounded-sm px-5 py-4 overflow-x-auto">
            <pre className="font-mono text-[0.85em] text-text-primary leading-relaxed whitespace-pre">{`<h1 className="bg-clip-text text-transparent
            bg-gradient-to-r from-gradient-red to-gradient-pink
            [&_a]:text-inherit">
  <span className="text-text-primary">Riley is an </span>
  experience strategist
  <span className="text-text-primary">, </span>
  interaction designer
  <span className="text-text-primary"> based in Brooklyn.</span>
</h1>`}</pre>
          </div>
          <p className="text-body-small text-text-secondary">
            <InlineCode>bg-clip-text</InlineCode> on the parent restricts the gradient image to
            the area of glyphs. <InlineCode>text-transparent</InlineCode> makes glyphs see-through
            so the clipped gradient shows. Solid-color child spans paint over the gradient on
            non-highlighted segments. The result reads as one continuous wash. The{' '}
            <InlineCode>{'[&_a]:text-inherit'}</InlineCode> rule still applies — apply it on
            the gradient parent, not each child span.
          </p>
          <p className="text-body-small text-text-tertiary mt-3">
            Reference implementations: <InlineCode>components/Hero.tsx</InlineCode>,{' '}
            <InlineCode>components/TestimonialCarousel.tsx</InlineCode>.
          </p>
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
            <div key={scale} className="flex items-center gap-4 py-3 border-b border-border-subtle">
              <div className="min-w-[4rem] shrink-0"><InlineCode>{scale}</InlineCode></div>
              <p className="font-mono text-body-small text-text-tertiary w-16 shrink-0">{px}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{renderWithParenChips(role)}</p>
            </div>
          ))}
        </div>

        <div className="h-16" />

        <SubLabel>Layout</SubLabel>
        <div>
          <RowDivider />
          {[
            {
              key: 'max-w-page',
              token: <InlineCode>max-w-page</InlineCode>,
              value: <span className="font-mono text-body-small text-text-tertiary">1560px</span>,
              role: 'Maximum content width — applied to the inner div of every full-width section',
            },
            {
              key: 'standard-container',
              token: <span className="text-body-small text-text-secondary">Standard container</span>,
              value: <InlineCode>flex justify-center px-10</InlineCode>,
              role: (
                <>
                  Outer shell of every section; pair with <InlineCode>max-w-page w-full</InlineCode> on the inner div
                </>
              ),
            },
            {
              key: '3-column-body',
              token: <span className="text-body-small text-text-secondary">3-column body</span>,
              value: (
                <span className="font-mono text-body-small text-text-tertiary">
                  220px + <InlineCode>flex-1</InlineCode> + 120px
                </span>
              ),
              role: (
                <>
                  TOC (sticky) + content + empty notes column; <InlineCode>gap-8</InlineCode> between columns
                </>
              ),
            },
          ].map(({ key, token, value, role }) => (
            <div key={key} className="flex items-center gap-8 py-4 border-b border-border-subtle">
              <div className="min-w-[11rem] shrink-0">{token}</div>
              <div className="w-40 shrink-0">{value}</div>
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
                <InlineCode>{base}</InlineCode>
                <p className="text-body-small text-text-tertiary">{baseRem} / {basePx}</p>
              </div>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <InlineCode>{md}</InlineCode>
                <p className="text-body-small text-text-tertiary">{mdRem} / {mdPx}</p>
              </div>
              <div className="flex-1 min-w-0 border-l border-border-subtle pl-4 flex flex-col gap-1 items-start">
                <InlineCode>{lg}</InlineCode>
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
            { cls: 'rounded-sm',   value: '4px',    use: 'Cards, callout cards, image blocks, cover image, InlineCode chip, Segmented Control segments (primary use)' },
            { cls: 'rounded-md',   value: '8px',    use: 'Button (primary + outline); Segmented Control container' },
            { cls: 'rounded-lg',   value: '12px',   use: '—' },
            { cls: 'rounded-xl',   value: '16px',   use: '—' },
            { cls: 'rounded-2xl',  value: '20px',   use: '—' },
            { cls: 'rounded-3xl',  value: '24px',   use: '—' },
            { cls: 'rounded-4xl',  value: '32px',   use: '—' },
            { cls: 'rounded-full', value: '9999px', use: 'IconButton, Filter Pill, Tag, Carousel Dot, nav logo dot' },
          ].map(({ cls, value, use }) => (
            <div key={cls} className="flex items-center gap-5 py-4 border-b border-border-subtle">
              <div
                className="size-10 bg-bg-tertiary shrink-0"
                style={{ borderRadius: value }}
              />
              <div className="min-w-[6rem] shrink-0"><InlineCode>{cls}</InlineCode></div>
              <p className="font-mono text-body-small text-text-tertiary w-16 shrink-0">{value}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{renderWithParenChips(use)}</p>
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
          <InlineCode>#1c1917</InlineCode>) at low opacity.{' '}
          <InlineCode>shadow-sm</InlineCode> is the most-used shadow on the site — applied
          by default to every image and video via <InlineCode>ImageBlock</InlineCode>.{' '}
          <InlineCode>shadow-xs</InlineCode> is used on the <InlineCode>CaseStudyCard</InlineCode>{' '}
          thumbnail (the card itself lifts on hover, so the thumbnail&apos;s shadow stays subtle).
          The remaining shadow tiers are available but not yet in active use.
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
                <InlineCode>{cls}</InlineCode>
                <p className="text-body-small text-text-tertiary">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ──────────────────────────── MOTION ──────────────────────── */}
      <section id="motion">
        <SectionHeading>Motion</SectionHeading>
        <p className="text-body-small text-text-secondary mb-8">
          The site has two distinct kinds of motion — <span className="text-text-primary">page-entry
          animations</span> (fire once when a page or section appears) and{' '}
          <span className="text-text-primary">interaction transitions</span> (fire on hover, focus,
          or state changes). They use different duration budgets by design.
        </p>

        <SubLabel>Page-entry animations</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Defined as keyframe utilities in <InlineCode>app/globals.css</InlineCode>. Each utility
          starts the element invisible (<InlineCode>opacity-0</InlineCode>) and animates to
          visible at its own duration.
        </p>

        <div className="mb-8">
          <div className="flex gap-5 py-3 border-b border-border-subtle">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-56 shrink-0">Utility</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-32 shrink-0">Duration</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1">Used on</p>
          </div>
          {[
            { util: 'animate-fade-in-up',    dur: '0.55s ease-out', use: <>Home Hero <InlineCode>{'<h1>'}</InlineCode>; case study hero wrappers; <InlineCode>AnimateOnScroll</InlineCode> reveals; About Hero filter pills</> },
            { util: 'animate-fade-in-left',  dur: '0.55s ease-out', use: <>Home Hero only — <InlineCode>MapPin</InlineCode> location line and bio line</> },
            { util: 'animate-fade-in-right', dur: '0.7s ease-out',  use: <>About Hero cover image only — intentionally ~27% slower to feel weighty rather than rushed at the end of the longer About stagger</> },
          ].map(({ util, dur, use }) => (
            <div key={util} className="flex items-start gap-5 py-4 border-b border-border-subtle">
              <div className="w-56 shrink-0"><InlineCode>{util}</InlineCode></div>
              <p className="font-mono text-body-small text-text-tertiary w-32 shrink-0">{dur}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary mb-3">
            <span className="text-text-primary">Hero stagger delays are hand-tuned, not formulaic.</span>{' '}
            The home Hero staggers at <InlineCode>0</InlineCode> /{' '}
            <InlineCode>0.8s</InlineCode> / <InlineCode>1.6s</InlineCode>; the About Hero staggers
            its filter pills at <InlineCode>0.3 + i * 0.18s</InlineCode>. These were picked by eye
            for each page&apos;s pacing, not derived from a shared scale. Treat them as
            page-specific design decisions — adjust in place, don&apos;t extract a shared rhythm.
          </p>
        </div>

        <SubLabel>AnimateOnScroll</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Component: <InlineCode>components/AnimateOnScroll.tsx</InlineCode>. Wraps children in a
          div that starts at <InlineCode>opacity-0</InlineCode> and swaps to{' '}
          <InlineCode>animate-fade-in-up</InlineCode> the first time the element is at least 10%
          visible (<InlineCode>IntersectionObserver</InlineCode> with{' '}
          <InlineCode>threshold: 0.1</InlineCode>). The observer disconnects after the first
          intersection — this is a <span className="text-text-primary">one-shot reveal</span>, not
          a continuous effect. Used site-wide for the &quot;Next&quot; section on case study
          pages and any block that should fade in when scrolled into view.
        </p>

        <div className="mb-12 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <pre className="font-mono text-[0.85em] text-text-primary leading-relaxed whitespace-pre overflow-x-auto">{`<AnimateOnScroll>
  {children}
</AnimateOnScroll>`}</pre>
        </div>

        <SubLabel>Interaction transitions</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          Two duration budgets, deliberately different. Color shifts feel snappiest when fast
          and definite; transform changes feel more intentional with a slightly longer duration
          that makes the movement legible.
        </p>

        <div>
          <div className="flex gap-5 py-3 border-b border-border-subtle">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-56 shrink-0">Property</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary w-32 shrink-0">Duration</p>
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary flex-1">Where</p>
          </div>
          {[
            { kind: 'Color / bg / border', dur: '150ms (default)', cls: 'transition-colors', where: <>Nav links, <InlineCode>InlineLink</InlineCode>, Button fills, Filter pills, TOC items — every hover-color swap.</> },
            { kind: 'Transform',           dur: '200ms',           cls: 'duration-200',     where: <><InlineCode>CaseStudyCard</InlineCode> hover lift (<InlineCode>hover:-translate-y-2.5</InlineCode>), <InlineCode>AboutBooks</InlineCode> book-card lift, any other card that translates on hover.</> },
            { kind: 'Arrow rotation',      dur: '150ms (default)', cls: 'transition-transform', where: <><InlineCode>ArrowUpRight</InlineCode> in Button, <InlineCode>InlineLink</InlineCode> icon variants, footer links — all rotate <InlineCode>group-hover:rotate-45</InlineCode> (↗ → →).</> },
          ].map(({ kind, dur, cls, where }) => (
            <div key={kind} className="flex items-start gap-5 py-4 border-b border-border-subtle">
              <div className="w-56 shrink-0">
                <p className="text-body-small font-medium text-text-primary mb-1">{kind}</p>
                <InlineCode>{cls}</InlineCode>
              </div>
              <p className="font-mono text-body-small text-text-tertiary w-32 shrink-0">{dur}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{where}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            <span className="text-text-primary">Adding a new hover interaction?</span> Match the
            convention: color → leave <InlineCode>transition-colors</InlineCode> at default;
            transform → add <InlineCode>duration-200</InlineCode>. The 150ms / 200ms split is
            the rhythm — don&apos;t introduce a third duration without a strong reason.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ──────────────────────────── MEDIA ──────────────────────── */}
      <section id="media">
        <SectionHeading>Media</SectionHeading>
        <p className="text-body-small text-text-secondary mb-8">
          Rules for all images and videos across the site. These ensure consistent presentation,
          prevent cropping or distortion, and keep one entry point for media chrome.
        </p>

        <SubLabel>Component to use</SubLabel>
        <div>
          <RowDivider />
          {[
            {
              context: 'Case study body',
              comp: <InlineCode>ImageBlock</InlineCode>,
              detail: <>Single abstraction for stills, looping videos, Vimeo embeds, and placeholders. Pass <InlineCode>type=&quot;image&quot;</InlineCode> (default), <InlineCode>type=&quot;video&quot;</InlineCode>, or <InlineCode>type=&quot;vimeo&quot;</InlineCode>. Applies the standard chrome and renders <InlineCode>{'<figcaption>'}</InlineCode> from the <InlineCode>caption</InlineCode> prop.</>,
            },
            {
              context: 'Work grid card thumbnail',
              comp: <span><InlineCode>{'<Image>'}</InlineCode> / raw <InlineCode>{'<video>'}</InlineCode></span>,
              detail: <>Inside <InlineCode>CaseStudyCard</InlineCode> only. The thumbnail uses <InlineCode>aspect-video</InlineCode> + <InlineCode>object-cover</InlineCode> framing — wrapping in <InlineCode>ImageBlock</InlineCode> would fight the card&apos;s layout. This is the single sanctioned direct-<InlineCode>{'<video>'}</InlineCode> call site.</>,
            },
            {
              context: 'Anywhere else',
              comp: <InlineCode>ImageBlock</InlineCode>,
              detail: <>Do not import <InlineCode>VideoBlock</InlineCode> directly into a page — it&apos;s an internal implementation detail of <InlineCode>ImageBlock</InlineCode>. One entry point keeps chrome, captions, and play/pause behavior consistent.</>,
            },
          ].map(({ context, comp, detail }) => (
            <div key={context} className="flex items-start gap-8 py-5 border-b border-border-subtle">
              <p className="text-body-small font-medium text-text-primary w-48 shrink-0">{context}</p>
              <div className="w-44 shrink-0">{comp}</div>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{detail}</p>
            </div>
          ))}
        </div>

        <SubLabel>Sizing</SubLabel>
        <div>
          <RowDivider />
          {[
            { rule: 'Full width', detail: <>All images and videos use <InlineCode>w-full</InlineCode> to fill their container</> },
            { rule: 'Natural aspect ratio', detail: <>Never constrain aspect ratio — no <InlineCode>aspect-video</InlineCode>, <InlineCode>object-cover</InlineCode>, <InlineCode>object-fit</InlineCode>, or <InlineCode>fill</InlineCode> on images or videos</> },
            { rule: 'No cropping', detail: 'Containers must never clip image or video content' },
            { rule: 'Vimeo iframe exception', detail: <>Vimeo embeds (<InlineCode>type=&quot;vimeo&quot;</InlineCode>) are the only place <InlineCode>aspect-video</InlineCode> is allowed — the embed container needs a fixed aspect ratio for the iframe.</> },
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
            { rule: 'Border', detail: <><InlineCode>border border-border</InlineCode> — applied by default on all images and videos</> },
            { rule: 'Shadow', detail: <><InlineCode>shadow-sm</InlineCode> — applied by default alongside the border</> },
            { rule: 'CaseStudyCard exception', detail: <>The work-grid card thumbnail uses <InlineCode>shadow-xs</InlineCode> instead of <InlineCode>shadow-sm</InlineCode> — the card itself lifts on hover, so the thumbnail&apos;s shadow stays subtle to avoid stacking shadows.</> },
            { rule: 'Radius', detail: <><InlineCode>rounded-sm</InlineCode> — consistent rounding on all media</> },
            { rule: 'Bare mode', detail: <>Pass <InlineCode>bare</InlineCode> to <InlineCode>ImageBlock</InlineCode> to remove border and shadow (e.g. images that bleed into the background)</> },
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
            { rule: 'Style', detail: <InlineCode>text-small text-text-tertiary mt-2 text-center</InlineCode> },
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
            { rule: 'Play/pause button', detail: <>Round <InlineCode>IconButton</InlineCode> overlay — <InlineCode>absolute bottom-3 right-3</InlineCode>, toggles between <InlineCode>Play</InlineCode> and <InlineCode>Pause</InlineCode> lucide icons</> },
          ].map(({ rule, detail }) => (
            <div key={rule} className="flex items-start gap-8 py-5 border-b border-border-subtle">
              <p className="text-body-small font-medium text-text-primary w-48 shrink-0">{rule}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{detail}</p>
            </div>
          ))}
        </div>

        <SubLabel>File format</SubLabel>
        <div>
          <RowDivider />
          {[
            { rule: 'Images', detail: <><InlineCode>.webp</InlineCode> only. No <InlineCode>.png</InlineCode>, <InlineCode>.jpg</InlineCode>, <InlineCode>.jpeg</InlineCode> in <InlineCode>public/</InlineCode>. Encode at quality 82, <InlineCode>effort: 6</InlineCode>. Resize so the source&apos;s longest edge is no more than 2× the largest rendered width.</> },
            { rule: 'Videos', detail: <><InlineCode>.mp4</InlineCode> H.264 only. <InlineCode>VideoBlock</InlineCode> emits <InlineCode>{'<source type="video/mp4">'}</InlineCode> — any other source extension breaks playback. Encode with <InlineCode>libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart -an</InlineCode>; cap width at 1600px.</> },
            { rule: 'Tooling', detail: <>Install <InlineCode>sharp</InlineCode> + <InlineCode>ffmpeg-static</InlineCode> as temporary dev-deps for the conversion, then remove them. They never land in <InlineCode>package.json</InlineCode>.</> },
            { rule: 'Reference match', detail: <>Code paths must match the file extension on disk — always <InlineCode>.webp</InlineCode> / <InlineCode>.mp4</InlineCode>, never the original format.</> },
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
        <p className="text-body-small text-text-secondary mb-4">
          Interactive element patterns. All states pass WCAG AA (≥ 4.5:1 for text, ≥ 3:1 for UI).
        </p>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-12">
          <p className="text-body-small text-text-secondary">
            <span className="text-text-primary">Non-color-diff rule:</span> every interactive
            element must differentiate hover, active, and selected states by{' '}
            <span className="text-text-primary">more than color alone</span>. Pair color
            shifts with at least one of: background fill, border weight, font weight,
            transform, or icon rotation. This satisfies WCAG 1.4.1 (color is never the only
            channel) and keeps the pattern legible for users with color-vision differences.
          </p>
        </div>

        <SubLabel>Icon Button</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <InlineCode>components/IconButton.tsx</InlineCode>. Icon-only action button.
          Used in the <InlineCode>TestimonialCarousel</InlineCode> prev/next controls and as the{' '}
          <InlineCode>VideoBlock</InlineCode> play/pause overlay (positioned{' '}
          <InlineCode>absolute bottom-3 right-3</InlineCode> on every video). Both call sites
          share the same component so the chrome stays in sync.
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

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-8">
          <p className="text-body-small text-text-secondary">
            Hover transitions <InlineCode>bg-bg-secondary → bg-bg-tertiary</InlineCode>,{' '}
            <InlineCode>border-border → border-border-strong</InlineCode>, and{' '}
            <InlineCode>text-text-secondary → text-text-primary</InlineCode>.
          </p>
        </div>

        <SubLabel>Form-submit / dense props</SubLabel>
        <p className="text-body-small text-text-secondary mb-6">
          For non-link uses (forms, dense layouts), <InlineCode>Button</InlineCode> exposes four
          additional props on top of the variant system. These are off by default so existing
          link call sites stay unchanged.
        </p>
        <div>
          <RowDivider />
          {[
            { prop: 'type="submit"', use: 'Submits the parent form. Use when Button stands in for a native submit input.' },
            { prop: 'disabled', use: <>Renders at <InlineCode>opacity-60</InlineCode> + <InlineCode>cursor-not-allowed</InlineCode> on both variants. Hover styles are suppressed.</> },
            { prop: 'fullWidth', use: <>Adds <InlineCode>w-full justify-center</InlineCode>. Use inside narrow form columns or full-bleed mobile actions.</> },
            { prop: 'noIcon', use: 'Suppresses the trailing ArrowUpRight. Use for submit buttons, destructive actions, or anywhere the rotation cue would be misleading.' },
          ].map(({ prop, use }) => (
            <div key={typeof prop === 'string' ? prop : ''} className="flex items-start gap-8 py-4 border-b border-border-subtle">
              <div className="min-w-[10rem] shrink-0"><InlineCode>{prop}</InlineCode></div>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>
        <p className="text-body-small text-text-secondary mt-6 mb-16">
          Used by <InlineCode>CaseStudyPaywall</InlineCode>&apos;s submit button — reach for these
          props instead of hand-rolling another button-styled element.
        </p>
      </section>

      <SectionDivider />

      <section id="nav-link">
        <SubLabel>Navigation Link</SubLabel>
        <p className="text-body-small text-text-secondary mb-8">
          Component: <InlineCode>components/NavLink.tsx</InlineCode>. Top nav links and any
          inline page navigation. <span className="text-text-primary">No background fill</span>{' '}
          on hover or active — text color and weight shift only. This is the deliberate
          difference from the Table of Contents, which uses a filled background on hover/active.
        </p>

        <div className="mb-8">
          <a href="#" className="inline-block text-body-small text-text-secondary hover:text-text-primary hover:font-medium px-2.5 py-1.5 rounded-sm transition-colors">
            work
          </a>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Non-color diff: font weight shifts from <InlineCode>font-normal</InlineCode> to{' '}
            <InlineCode>font-medium</InlineCode> on hover and on the active page. Active
            page retains the same styling so the cursor preview matches the active state.
            Contrast: <InlineCode>#57534e</InlineCode> on white ≈ 7.8:1 ✓ WCAG AA.
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
              <div className="min-w-[9rem] shrink-0"><InlineCode>{variant}</InlineCode></div>
              <p className="text-body-small text-text-tertiary w-16 shrink-0">{icon}</p>
              <p className="text-body-small text-text-secondary flex-1 min-w-0">{use}</p>
            </div>
          ))}
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            All variants: <InlineCode>text-text-primary underline</InlineCode> default →{' '}
            <InlineCode>text-text-primary no-underline</InlineCode> on hover. Color stays the
            same — only the underline toggles. No blue, no bold. Underline satisfies WCAG 1.4.1
            (not relying on color alone to identify links).
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
              <div className="min-w-[6rem] shrink-0"><InlineCode>{size}</InlineCode></div>
              <div className="flex-1 min-w-0"><InlineCode>{classes}</InlineCode></div>
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
          <span className="font-mono">CaseStudyCard</span>.
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          <CaseStudyTag>Insurance</CaseStudyTag>
          <CaseStudyTag>B2B</CaseStudyTag>
          <CaseStudyTag>Design Systems</CaseStudyTag>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 mb-16">
          <p className="text-body-small text-text-secondary">
            Filled <InlineCode>bg-bg-tertiary</InlineCode> with a{' '}
            <InlineCode>border-border-strong</InlineCode> outline and{' '}
            <InlineCode>rounded-full</InlineCode> shape. Padding{' '}
            <InlineCode>px-2.5 py-1.5</InlineCode> matches the TOC active padding so tags and
            active TOC items have equal vertical weight.
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
            <InlineCode>inline rounded-sm border border-border-subtle bg-neutral-200 px-1.5 py-0.5 font-mono text-[0.9em]</InlineCode>.
            Em-relative font size shrinks the chip to ~90% of the parent prose, so it stays
            proportional inside any role from <InlineCode>text-body-big</InlineCode> down to{' '}
            <InlineCode>text-body-small</InlineCode>. Used both inline within prose and as
            standalone monospaced labels — wherever a code construct, token name, or class name
            needs to render as a chip.
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
            Generic in its option type — pass any string-literal union as <span className="font-mono">value</span>{' '}
            and the matching <span className="font-mono">options[]</span>. Active uses{' '}
            <span className="font-mono">bg-bg-inverse</span> + white text + medium weight; inactive
            shifts text from <span className="font-mono">text-text-secondary</span> →{' '}
            <span className="font-mono">text-text-primary</span> on hover. Container uses{' '}
            <span className="font-mono">bg-bg-tertiary</span> +{' '}
            <span className="font-mono">rounded-md</span> +{' '}
            <span className="font-mono">p-1</span> — visually distinct from the Tab pattern (no
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
          <a href="#" className="block text-body-small text-text-secondary hover:bg-bg-tertiary hover:text-text-primary hover:font-medium px-2.5 py-1.5 rounded-sm transition-colors">
            Overview
          </a>
          <a href="#" className="block text-body-small font-medium text-text-primary bg-bg-tertiary px-2.5 py-1.5 rounded-sm">
            Problem (active)
          </a>
        </div>

        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7">
          <p className="text-body-small text-text-secondary">
            Pass an array of <span className="font-mono">{'{ label, id }'}</span> items. The component
            uses IntersectionObserver to detect which <span className="font-mono">id</span> is in
            view and highlights it. Active and hover share the same{' '}
            <span className="font-mono">bg-bg-tertiary</span> fill — hovering an item previews
            exactly how the active state will look. Positioned{' '}
            <span className="font-mono">sticky top-32</span> (128px) to clear the 64px nav. Hidden
            below <span className="font-mono">lg:</span> breakpoint.
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

            <TableOfContents items={toc} className="top-36" />

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
