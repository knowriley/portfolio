import type { ReactNode } from 'react'

type InlineCodeProps = {
  children: ReactNode
  className?: string
}

export default function InlineCode({ children, className = '' }: InlineCodeProps) {
  return (
    <code
      className={`inline rounded-sm border border-border-subtle bg-neutral-200 px-1.5 py-0.5 font-mono text-[0.9em] text-text-primary ${className}`}
    >
      {children}
    </code>
  )
}
