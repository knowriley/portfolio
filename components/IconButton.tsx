'use client'

interface IconButtonProps {
  icon: React.ReactNode
  onClick: () => void
  'aria-label': string
  className?: string
}

/**
 * Icon-only action button. Visual language matches filter pills:
 * bg-bg-secondary base, rounded-full, same border/hover token progression.
 *
 * Default: bg-bg border-border text-text-primary
 * Hover:   bg-bg-tertiary border-border-strong text-text-primary
 *
 * Usage:
 *   <IconButton icon={<ArrowLeft size={20} strokeWidth={2} />} onClick={prev} aria-label="Previous" />
 */
export default function IconButton({
  icon,
  onClick,
  'aria-label': ariaLabel,
  className = '',
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`size-11 rounded-full border bg-bg border-border text-text-primary flex items-center justify-center hover:bg-bg-tertiary hover:border-border-strong transition-colors ${className}`}
    >
      {icon}
    </button>
  )
}
