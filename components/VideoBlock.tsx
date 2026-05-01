'use client'

import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import IconButton from './IconButton'

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
        <IconButton
          icon={playing
            ? <Pause size={20} strokeWidth={2} fill="currentColor" />
            : <Play size={20} strokeWidth={2} fill="currentColor" />
          }
          onClick={toggle}
          aria-label={playing ? 'Pause video' : 'Play video'}
          className="absolute bottom-3 right-3"
        />
      </div>
      {caption && (
        <figcaption className="text-small text-text-tertiary mt-2 text-center">{caption}</figcaption>
      )}
    </figure>
  )
}
