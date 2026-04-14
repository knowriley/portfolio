'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  /** Visual variant. Defaults to 'primary'. */
  variant?: 'primary' | 'outline'
  /** Renders as a Next.js Link. Mutually exclusive with onClick. */
  href?: string
  /** Opens in a new tab with rel="noopener noreferrer". Only applies when href is set. */
  external?: boolean
  /** Renders as a <button>. Mutually exclusive with href. */
  onClick?: () => void
  className?: string
}

const shared =
  'inline-flex items-center gap-2 text-body-small font-semibold rounded-md px-6 py-3 transition-colors group'

const variants = {
  primary:
    'bg-bg-inverse text-text-inverse hover:bg-neutral-800',
  outline:
    'bg-bg-secondary border border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary',
}

/**
 * Call-to-action button with primary and outline variants.
 *
 * Primary: dark fill, white text, lightens on hover
 * Outline: transparent bg, border, fills bg-tertiary on hover
 *
 * Usage:
 *   <Button href="/work">View Case Study</Button>
 *   <Button variant="outline" onClick={fn}>Secondary</Button>
 *   <Button href="https://example.com" external>External</Button>
 */
export default function Button({ children, variant = 'primary', href, external, onClick, className = '' }: ButtonProps) {
  const cls = `${shared} ${variants[variant]} ${className}`
  const arrow = <ArrowUpRight size={20} strokeWidth={2} className="transition-transform group-hover:rotate-45" />

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrow}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {arrow}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
      {arrow}
    </button>
  )
}
