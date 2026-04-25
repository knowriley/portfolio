import { type ReactNode } from 'react'
import VideoBlock from './VideoBlock'

// ── Case study layout primitives ──────────────────────────────────────────────
// Shared across all case study pages. All server components (no hooks).

// Section label — text-body-small text-text-tertiary, no uppercase/tracking
export function Label({ children }: { children: ReactNode }) {
  return <p className="text-body-small text-text-tertiary mb-4">{children}</p>
}

// Major section divider: 96px gap → rule → 96px gap (scales down on mobile).
// The rule fills the full width of whatever parent it's rendered into — case study pages drop
// it inside the 3-column content column so it matches the metadata grid / prose width.
export function SectionDivider() {
  return (
    <>
      <div className="h-12 md:h-24" />
      <div className="border-t border-border" />
      <div className="h-12 md:h-24" />
    </>
  )
}

// ── ImageBlock ────────────────────────────────────────────────────────────────
// Renders an image, looping MP4, Vimeo embed, or placeholder.
//
// Usage:
//   <ImageBlock src="/work/slug/fig.png" alt="Audit findings" />
//   <ImageBlock src="/work/slug/fig.png" alt="..." caption="Optional caption" />
//   <ImageBlock type="video" src="/work/slug/demo.mp4" />
//   <ImageBlock type="vimeo" vimeoId="123456789" caption="Full walkthrough" />
//   <ImageBlock />                         ← placeholder
//   <ImageBlock label="Custom label" />    ← placeholder with custom label

type ImageBlockBase = { bare?: boolean }

type ImageBlockProps =
  | (ImageBlockBase & { type?: 'image'; src: string; alt: string; caption?: string })
  | (ImageBlockBase & { type: 'video'; src: string; caption?: string })
  | (ImageBlockBase & { type: 'vimeo'; vimeoId: string; caption?: string })
  | (ImageBlockBase & { type?: never; label?: string })

export function ImageBlock(props: ImageBlockProps) {
  const chrome = props.bare ? '' : ' border border-border shadow-sm'
  if ('type' in props && props.type === 'video') {
    return <VideoBlock src={props.src} caption={props.caption} bare={props.bare} />
  }

  if ('type' in props && props.type === 'vimeo') {
    return (
      <figure>
        <div className={`relative rounded-sm overflow-hidden aspect-video w-full bg-bg-secondary${chrome}`}>
          <iframe
            src={`https://player.vimeo.com/video/${props.vimeoId}?autoplay=0&title=0&byline=0&portrait=0`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
        {props.caption && (
          <figcaption className="text-small text-text-tertiary mt-2 text-center">{props.caption}</figcaption>
        )}
      </figure>
    )
  }

  if ('src' in props) {
    return (
      <figure>
        <img
          src={props.src}
          alt={props.alt}
          className={`w-full rounded-sm${chrome}`}
        />
        {props.caption && (
          <figcaption className="text-small text-text-tertiary mt-2 text-center">{props.caption}</figcaption>
        )}
      </figure>
    )
  }

  // Placeholder
  const label = 'label' in props ? (props.label ?? 'Image placeholder') : 'Image placeholder'
  return (
    <div className={`bg-bg-secondary rounded-sm h-[400px] flex items-center justify-center w-full${chrome}`}>
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
        <p className="text-body-small md:text-body-big text-text-primary">{children}</p>
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
        <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">{heading}</h2>
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
