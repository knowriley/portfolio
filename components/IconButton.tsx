'use client'

interface IconButtonProps {
  icon: React.ReactNode
  onClick: () => void
  'aria-label': string
  className?: string
}

/**
 * Icon-only action button. Matches outline button variant states.
 *
 * Default: bg-bg-secondary border-border text-text-primary
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
      className={`size-11 rounded-full bg-bg-secondary border border-border text-text-secondary flex items-center justify-center hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary transition-colors ${className}`}
    >
      {icon}
    </button>
  )
}
