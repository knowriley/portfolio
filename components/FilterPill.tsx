'use client'

import { type CSSProperties } from 'react'

type Size = 'default' | 'small'

const sizeClasses: Record<Size, string> = {
  default: 'text-body-small px-4 py-2',
  small: 'text-body-small px-3 py-1.5',
}

export default function FilterPill({
  label,
  selected,
  onClick,
  size = 'default',
  className,
  style,
}: {
  label: string
  selected: boolean
  onClick: () => void
  size?: Size
  className?: string
  style?: CSSProperties
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`${sizeClasses[size]} rounded-full border transition-colors ${
        selected
          ? 'bg-bg-inverse text-text-inverse font-medium border-transparent'
          : 'bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary'
      }${className ? ` ${className}` : ''}`}
    >
      {label}
    </button>
  )
}
