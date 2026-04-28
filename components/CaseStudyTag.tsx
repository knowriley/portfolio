import { type ReactNode } from 'react'

export default function CaseStudyTag({ children }: { children: ReactNode }) {
  return (
    <span className="text-body-small font-medium text-text-primary bg-bg-tertiary border border-border-strong rounded-full px-2.5 py-1.5">
      {children}
    </span>
  )
}
