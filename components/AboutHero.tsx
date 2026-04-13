'use client'

import { useState } from 'react'

const audiences = [
  {
    label: 'Anyone',
    message:
      'I am a product designer who turns complex problems into intuitive experiences. I bring systems thinking to every challenge.',
  },
  {
    label: 'Recruiters',
    message:
      'I have 5+ years of product design experience across enterprise and consumer. I ship systems, not just screens.',
  },
  {
    label: 'Designers',
    message:
      'I think in systems and components. I care about consistency, accessibility, and building design foundations that scale.',
  },
  {
    label: 'Product Managers',
    message:
      'I translate business goals into user-centered solutions. I prototype fast, validate early, and ship with confidence.',
  },
  {
    label: 'Engineers',
    message:
      'I design with implementation in mind. I build and maintain design systems, write design tokens, and speak your language.',
  },
]

export default function AboutHero() {
  const [active, setActive] = useState(0)

  return (
    <section className="flex justify-center px-5 md:px-10 md:h-[calc(100dvh-64px)]">
      <div className="max-w-page w-full flex flex-col">
        {/* Cover image — right-aligned; fills remaining space on desktop, fixed aspect on mobile */}
        <div className="order-3 md:order-1 flex items-start justify-end pt-10 md:pt-16 md:flex-1 md:min-h-0">
          <div className="w-full md:w-[45%] aspect-[4/5] md:aspect-auto md:h-full bg-bg-secondary rounded-sm flex items-center justify-center">
            <span className="text-small text-text-tertiary">Cover image</span>
          </div>
        </div>

        {/* Filter row */}
        <div className="order-1 md:order-2 flex flex-wrap items-center gap-2 mb-4 pt-10 md:pt-0 md:mt-8">
          <span className="text-body-big text-text-primary mr-1">About Riley, for</span>
          {audiences.map((a, i) => (
            <button
              key={a.label}
              type="button"
              onClick={() => setActive(i)}
              className={`text-body-small px-4 py-2 rounded-full border transition-colors ${
                active === i
                  ? 'bg-bg-inverse text-text-inverse font-medium border-transparent'
                  : 'bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        {/* Display message */}
        <h1 className="order-2 md:order-3 text-h1 md:text-display font-normal text-text-primary pb-10 md:pb-16">
          {audiences[active].message}
        </h1>
      </div>
    </section>
  )
}
