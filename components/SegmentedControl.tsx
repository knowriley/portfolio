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
      role="tablist"
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-1 p-1 bg-bg-tertiary rounded-md ${className}`}
    >
      {options.map((opt) => {
        const active = opt.value === value
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
            className={
              active
                ? 'text-body-small font-medium px-3 py-1.5 rounded-sm bg-bg-inverse text-text-inverse transition-colors'
                : 'text-body-small px-3 py-1.5 rounded-sm text-text-secondary hover:text-text-primary transition-colors'
            }
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
