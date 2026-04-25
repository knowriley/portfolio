'use client'

import { useEffect, useState } from 'react'

export type TocItem = {
  label: string
  id: string
}

export default function TableOfContents({ items, className }: { items: TocItem[]; className?: string }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const ids = items.map((item) => item.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  return (
    <aside className={`hidden lg:block w-[180px] shrink-0 sticky ${className ?? 'top-32'}`}>
      <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-4">
        Contents
      </p>
      <ul className="flex flex-col gap-0.5">
        {items.map(({ label, id }) => {
          const isActive = activeId === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block text-body-small px-2.5 py-1.5 rounded-sm border transition-colors ${
                  isActive
                    ? 'bg-bg-secondary border-border-subtle text-text-primary font-medium'
                    : 'border-transparent text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:font-medium'
                }`}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
