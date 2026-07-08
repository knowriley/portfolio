'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Maximize2, X } from 'lucide-react'
import IconButton from './IconButton'

interface ExpandableImageProps {
  src: string
  alt: string
  caption?: string
  bare?: boolean
}

/**
 * Image with an expand affordance. Click the bottom-right IconButton to open
 * the image in a near-fullscreen lightbox modal. Dismiss via close button,
 * backdrop click, or Escape.
 *
 * Used by ImageBlock (components/case-study.tsx) for type="image". Pass
 * expandable={false} on ImageBlock to opt out.
 */
export default function ExpandableImage({ src, alt, caption, bare }: ExpandableImageProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)

    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
      triggerRef.current?.focus()
      triggerRef.current = null
    }
  }, [open])

  const handleOpen = () => {
    triggerRef.current = document.activeElement as HTMLElement | null
    setOpen(true)
  }

  const chrome = bare ? '' : ' border border-border shadow-sm'

  return (
    <>
      <div className={`relative rounded-sm overflow-hidden w-full${chrome}`}>
        <img src={src} alt={alt} className="w-full block" />
        <IconButton
          icon={<Maximize2 size={20} strokeWidth={2} />}
          onClick={handleOpen}
          aria-label="Expand image"
          className="absolute bottom-3 right-3"
        />
      </div>

      {mounted && open && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg-inverse/90 p-4 md:p-10 animate-fade-in-up"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close expanded image"
            className="absolute top-4 right-4 size-11 rounded-full bg-bg text-text-primary flex items-center justify-center hover:bg-bg-tertiary transition-colors"
          >
            <X size={20} strokeWidth={2} />
          </button>
          <figure
            className="flex flex-col items-center max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="rounded-sm max-w-full max-h-[85vh] w-auto h-auto"
            />
            {caption && (
              <figcaption className="text-small text-text-inverse mt-3 text-center max-w-[80ch]">
                {caption}
              </figcaption>
            )}
          </figure>
        </div>,
        document.body
      )}
    </>
  )
}
