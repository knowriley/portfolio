import { type ReactNode } from 'react'

// ── Case study layout primitives ──────────────────────────────────────────────
// Shared across all case study pages. All server components (no hooks).

// Section label — text-body-small text-text-tertiary, no uppercase/tracking
export function Label({ children }: { children: ReactNode }) {
  return <p className="text-body-small text-text-tertiary mb-4">{children}</p>
}

// Major section divider: 96px gap → rule → 96px gap (scales down on mobile)
export function SectionDivider() {
  return (
    <>
      <div className="h-12 md:h-24" />
      <div className="border-t border-border-subtle" />
      <div className="h-12 md:h-24" />
    </>
  )
}

// Image placeholder — 400px tall, centered label
export function ImageBlock({ label = 'Image placeholder' }: { label?: string }) {
  return (
    <div className="bg-bg-secondary rounded-sm h-[400px] flex items-center justify-center w-full">
      <span className="text-small text-text-tertiary">{label}</span>
    </div>
  )
}

// Numbered callout card — used for problem/impact lists
export function NumberedCallout({
  number,
  children,
}: {
  number: string
  children: ReactNode
}) {
  return (
    <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
      <div className="flex gap-4 items-center">
        <span className="text-body-biggest text-text-primary shrink-0">{number}</span>
        <p className="text-body-big text-text-primary">{children}</p>
      </div>
    </div>
  )
}

// Two-column section — left h2 heading, right body content
// align="center" for rows where the right column should vertically center (e.g. image+text)
export function TwoColumnSection({
  heading,
  children,
  align = 'start',
}: {
  heading: ReactNode
  children: ReactNode
  align?: 'start' | 'center'
}) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 items-${align}`}>
      <div className="flex-1 min-w-0">
        <h2 className="text-h3 md:text-h2 font-medium text-text-primary leading-[1.3]">{heading}</h2>
      </div>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}

// Metadata grid — flex-wrap row of label+value pairs (Overview section)
export function MetadataGrid({
  items,
}: {
  items: { label: string; content: ReactNode }[]
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
      {items.map(({ label, content }) => (
        <div key={label} className="flex flex-col gap-1.5">
          <p className="text-small text-text-tertiary font-medium uppercase tracking-widest pb-2">{label}</p>
          <div className="text-body-small text-text-secondary">{content}</div>
        </div>
      ))}
    </div>
  )
}
