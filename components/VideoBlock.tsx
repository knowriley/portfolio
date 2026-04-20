'use client'

import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

export default function VideoBlock({
  src,
  caption,
  bare,
}: {
  src: string
  caption?: string
  bare?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const chrome = bare ? '' : ' border border-border shadow-sm'

  return (
    <figure>
      <div className={`relative rounded-sm overflow-hidden w-full${chrome}`}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full"
        >
          <source src={src} type="video/mp4" />
        </video>
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause video' : 'Play video'}
          className="absolute bottom-3 right-3 size-11 rounded-full bg-bg-secondary border border-border text-text-secondary flex items-center justify-center hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary transition-colors"
        >
          {playing ? (
            <Pause size={20} strokeWidth={2} />
          ) : (
            <Play size={20} strokeWidth={2} />
          )}
        </button>
      </div>
      {caption && (
        <figcaption className="text-small text-text-tertiary mt-2 text-center">{caption}</figcaption>
      )}
    </figure>
  )
}
