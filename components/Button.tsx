'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  /** Renders as a Next.js Link. Mutually exclusive with onClick. */
  href?: string
  /** Renders as a <button>. Mutually exclusive with href. */
  onClick?: () => void
  className?: string
}

const base =
  'inline-flex items-center gap-2 hover:gap-3 text-body-small font-semibold ' +
  'bg-bg-inverse text-text-inverse rounded-sm px-6 py-3 ' +
  'hover:bg-accent transition-all'

/**
 * Primary call-to-action button.
 *
 * Default: dark fill (#1A1612), white text, arrow icon at gap-2
 * Hover:   accent pink (#e40089) bg + gap-3 (arrow shifts right)
 *
 * Non-color diff: gap increase shifts the arrow visually.
 * Contrast: white on #1A1612 ≈ 18:1 · white on #e40089 ≈ 4.6:1 — both ✓ WCAG AA
 *
 * Usage:
 *   <Button href="/work">View Case Study</Button>
 *   <Button onClick={handleClick}>Submit</Button>
 */
export default function Button({ children, href, onClick, className = '' }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
        <ArrowRight size={20} strokeWidth={2} />
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${className}`}>
      {children}
      <ArrowRight size={20} strokeWidth={2} />
    </button>
  )
}
