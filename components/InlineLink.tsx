import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

/**
 * 4 inline link variants based on context:
 *
 * | Variant       | Color        | Icon | Use case                                         |
 * |---------------|--------------|------|--------------------------------------------------|
 * | subtle        | text-primary | no   | Inline, internal, low emphasis (branded names)   |
 * | emphasis      | text-primary | no   | Inline, external, high emphasis                  |
 * | icon          | text-primary | ↗    | Standalone, external, low emphasis / branded     |
 * | icon-emphasis | text-primary | ↗    | Navigation, external, high emphasis, not branded |
 *
 * All variants: text-primary + underline default → text-primary + no underline on hover.
 */

type LinkVariant = 'subtle' | 'emphasis' | 'icon' | 'icon-emphasis'

interface InlineLinkProps {
  href: string
  children: React.ReactNode
  /** Opens in a new tab with rel="noopener noreferrer". */
  external?: boolean
  /** Visual variant — defaults to 'emphasis' for external, 'subtle' for internal. */
  variant?: LinkVariant
}

const variantClasses: Record<LinkVariant, string> = {
  subtle:
    'text-text-primary underline underline-offset-2 decoration-1 hover:no-underline transition-colors',
  emphasis:
    'text-text-primary underline underline-offset-2 decoration-1 hover:no-underline transition-colors',
  icon:
    'group text-text-primary underline underline-offset-2 decoration-1 hover:no-underline transition-colors',
  'icon-emphasis':
    'group text-text-primary underline underline-offset-2 decoration-1 hover:no-underline transition-colors',
}

export default function InlineLink({
  href,
  children,
  external = false,
  variant,
}: InlineLinkProps) {
  const resolvedVariant = variant ?? (external ? 'emphasis' : 'subtle')
  const hasIcon = resolvedVariant === 'icon' || resolvedVariant === 'icon-emphasis'
  const cls = variantClasses[resolvedVariant]

  const content = hasIcon ? (
    <span className="inline-flex items-center gap-1">
      {children}
      <ArrowUpRight size={20} strokeWidth={1.5} className="shrink-0 transition-transform group-hover:rotate-45" />
    </span>
  ) : (
    children
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}
