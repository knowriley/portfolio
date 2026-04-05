'use client'

import { useState } from 'react'

interface Segment {
  text: string
  highlight?: boolean
}

interface Testimonial {
  segments: Segment[]
  author: string
  title: string
  subtitle: string
}

const testimonials: Testimonial[] = [
  {
    segments: [
      { text: '"Riley is the ' },
      {
        text: 'rare combination of a talented designer and keen strategist',
        highlight: true,
      },
      {
        text: ", unafraid to untangle complex business problems and use UX as a tool to advance real business goals. If you're looking for a ",
      },
      { text: 'wicked-smart, bold team player', highlight: true },
      {
        text: ' who excels at the intersection of strategy, service design, and UX, you\'ll be lucky to have Riley on your team."',
      },
    ],
    author: 'Taylor Valore',
    title: 'Ex-Product Manager',
    subtitle: 'Professor turned Client',
  },
  {
    segments: [{ text: '"[Testimonial coming soon]"' }],
    author: 'Name',
    title: 'Title',
    subtitle: 'Company',
  },
  {
    segments: [{ text: '"[Testimonial coming soon]"' }],
    author: 'Name',
    title: 'Title',
    subtitle: 'Company',
  },
  {
    segments: [{ text: '"[Testimonial coming soon]"' }],
    author: 'Name',
    title: 'Title',
    subtitle: 'Company',
  },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  const t = testimonials[index]

  return (
    <section className="border-t border-border-subtle py-24">
      <div className="max-w-4xl mx-auto px-8">
        {/* Quote */}
        <p className="text-3xl font-semibold text-text-primary leading-snug mb-12">
          {t.segments.map((seg, i) =>
            seg.highlight ? (
              <span key={i} className="text-accent">
                {seg.text}
              </span>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </p>

        {/* Controls row */}
        <div className="flex items-end justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === index
                    ? 'w-2 h-2 bg-text-primary'
                    : 'w-2 h-2 bg-border-strong hover:bg-text-tertiary'
                }`}
              />
            ))}
          </div>

          {/* Attribution + arrows */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm font-medium text-text-primary">{t.author}</p>
              <p className="text-xs text-text-tertiary">{t.title}</p>
              <p className="text-xs text-text-tertiary">{t.subtitle}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-border-strong hover:text-text-primary transition-colors"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-border-strong hover:text-text-primary transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
