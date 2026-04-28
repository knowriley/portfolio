'use client'

interface IconButtonProps {
  icon: React.ReactNode
  onClick: () => void
  'aria-label': string
  className?: string
}

/**
 * Icon-only action button. Matches primary button color.
 *
 * Default: bg-bg-inverse text-text-inverse
 * Hover:   bg-neutral-800
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
      className={`size-11 rounded-full bg-bg-inverse text-text-inverse flex items-center justify-center hover:bg-neutral-800 transition-colors ${className}`}
    >
      {icon}
    </button>
  )
}
