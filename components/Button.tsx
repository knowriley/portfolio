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
  /** Native button type. Only applies when rendering as a <button>. Defaults to 'button'. */
  type?: 'button' | 'submit'
  /** Disables the button. Only applies when rendering as a <button>. */
  disabled?: boolean
  /** Stretches the button to fill its container and centers the label. */
  fullWidth?: boolean
  /** Suppresses the trailing ArrowUpRight icon. */
  noIcon?: boolean
  className?: string
}

const shared =
  'inline-flex items-center gap-2 text-body-small font-semibold rounded-md px-6 py-3 transition-colors group disabled:opacity-60 disabled:cursor-not-allowed'

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
 *   <Button type="submit" disabled={pending} fullWidth noIcon>Submit</Button>
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  external,
  onClick,
  type = 'button',
  disabled,
  fullWidth,
  noIcon,
  className = '',
}: ButtonProps) {
  const widthCls = fullWidth ? 'w-full justify-center' : ''
  const cls = `${shared} ${variants[variant]} ${widthCls} ${className}`
  const arrow = noIcon ? null : (
    <ArrowUpRight size={20} strokeWidth={2} className="transition-transform group-hover:rotate-45" />
  )

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
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
      {arrow}
    </button>
  )
}
