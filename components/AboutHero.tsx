'use client'

import { useState } from 'react'

const audiences = [
  {
    label: 'Anyone',
    message:
      'I am a strategic designer who cares about crafting intentional experiences and being someone people genuinely enjoy working with.',
  },
  {
    label: 'Recruiters',
    message:
      'I have 5+ years of experience designing, building and shipping experiences across insurance, B2B, education, and more for internal teams and consumer-facing experiences.',
  },
  {
    label: 'Designers',
    message: 'I’m driven by creating craft that scales, learning from other designers, and advocating for user-centered, accessible design.',
  },
  {
    label: 'Design Managers',
    message:
      'Integral to my work philosophy is being a community member - investing in shared standards, developing organizational design maturity and building design`s influence as a strategic partner.',
  },
  {
    label: 'Product Managers',
    message:
      'My favorite problems live at the intersection of user experience and business impact. I partner with PMs to unpack complexity early, and ensure we’re solving the problems that actually drive impact.',
  },
  {
    label: 'Engineers',
    message:
      'My first love in design was architecting codebases—creating order from complexity through systems, logic, and modular components.  I still design with an engineer’s mindest - grounded in patterns and what’s actually feasible to build.',
  },
]

export default function AboutHero() {
  const [active, setActive] = useState(0)

  return (
    <section className="flex justify-center px-5 md:px-10 md:h-[calc(100dvh-64px)]">
      <div className="max-w-page w-full flex flex-col">
        {/* Cover image — right-aligned; fills remaining space on desktop, fixed aspect on mobile */}
        <div className="order-3 md:order-1 flex items-start justify-end pt-10 md:pt-16 md:flex-1 md:min-h-0 animate-fade-in-right" style={{ animationDelay: '2.0s', animationDuration: '0.5s' }}>
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
              className={`text-body-small px-4 py-2 rounded-full border transition-colors animate-fade-in-up ${
                active === i
                  ? 'bg-bg-inverse text-text-inverse font-medium border-transparent'
                  : 'bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary'
              }`}
              style={{ animationDelay: `${0.3 + i * 0.18}s`, animationDuration: '0.6s' }}
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
