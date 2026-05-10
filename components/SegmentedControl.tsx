'use client'

import { ReactNode } from 'react'

type Option<T extends string> = { label: ReactNode; value: T }

type SegmentedControlProps<T extends string> = {
  options: Option<T>[]
  value: T
  onChange: (value: T) => void
  ariaLabel?: string
  className?: string
}

export default function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  className = '',
}: SegmentedControlProps<T>) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-0.5 ${className}`}
    >
      {options.map((opt) => {
        const active = opt.value === value
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt.value)}
            className={`text-body-small px-2.5 py-1.5 rounded-sm transition-colors ${
              active
                ? 'bg-bg-tertiary text-text-primary font-medium'
                : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary hover:font-medium'
            }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
