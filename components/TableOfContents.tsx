'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export type TocItem = {
  label: string
  id: string
}

const DEFAULT_SCROLL_OFFSET = 96
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export default function TableOfContents({
  items,
  className,
  smoothScroll = false,
  scrollOffset = DEFAULT_SCROLL_OFFSET,
}: {
  items: TocItem[]
  className?: string
  smoothScroll?: boolean
  /** Distance in px from viewport top where the smooth-scrolled section heading lands.
   *  Default 96 clears the 64px sticky Nav. Pages with an additional sticky bar (e.g.
   *  /design-system's tab bar) should pass a larger value. */
  scrollOffset?: number
}) {
  const [activeId, setActiveId] = useState<string>('')
  const rafRef = useRef<number | null>(null)

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

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      if (!smoothScroll) return
      // Let modified clicks (cmd/ctrl/shift/middle) behave normally
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return

      const target = document.getElementById(id)
      if (!target) return

      e.preventDefault()

      const targetY =
        target.getBoundingClientRect().top + window.scrollY - scrollOffset
      const startY = window.scrollY
      const distance = targetY - startY

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced || Math.abs(distance) < 4) {
        window.scrollTo(0, targetY)
        history.pushState(null, '', `#${id}`)
        setActiveId(id)
        return
      }

      // Distance-aware duration: snappy for short jumps, weighty for long ones
      const duration = Math.min(900, Math.max(420, Math.abs(distance) * 0.55))
      let startTime: number | null = null

      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)

      const step = (now: number) => {
        if (startTime === null) startTime = now
        const progress = Math.min((now - startTime) / duration, 1)
        window.scrollTo(0, startY + distance * easeInOutCubic(progress))
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step)
        } else {
          rafRef.current = null
          history.pushState(null, '', `#${id}`)
          setActiveId(id)
        }
      }
      rafRef.current = requestAnimationFrame(step)
    },
    [smoothScroll, scrollOffset],
  )

  return (
    <aside className={`hidden lg:block w-[220px] shrink-0 sticky ${className ?? 'top-32'}`}>
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
                onClick={(e) => handleClick(e, id)}
                className={`block text-body-small px-2.5 py-1.5 rounded-sm transition-colors ${
                  isActive
                    ? 'bg-bg-tertiary text-text-primary font-medium'
                    : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary hover:font-medium'
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
