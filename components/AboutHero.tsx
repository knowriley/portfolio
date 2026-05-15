'use client'

import { useState } from 'react'
import FilterPill from './FilterPill'

const audiences = [
  {
    label: 'Anyone',
    message:
      'I am a strategic designer who cares about crafting intentional experiences and being someone people genuinely enjoy working with.',
  },
  {
    label: 'Recruiters',
    message:
      'I design across enterprise platforms, consumer experiences, and internal tooling, excelling in highly collaborative environments where strategy, systems thinking, and execution intersect.',
  },
  {
    label: 'Designers',
    message:
      'I’m driven by creating craft that scales, learning from other designers, and advocating for user-centered, accessible design.',
  },
  {
    label: 'Design Managers',
    message:
      'Integral to my work philosophy is being a community member - investing in shared standards, developing organizational design maturity and building design’s influence as a strategic partner.',
  },
  {
    label: 'Product Managers',
    message:
      'My favorite problems live at the intersection of user experience and business goals. I partner with PMs to unpack complexity early, and ensure we’re solving real problems that actually drive impact.',
  },
  {
    label: 'Engineers',
    message:
      'My first love in design was architecting codebases—creating order from complexity through systems, logic, and modular components. I still design with an engineer’s mindset - grounded in patterns and what’s actually feasible to build.',
  },
]

export default function AboutHero() {
  const [active, setActive] = useState(0)

  return (
    <section className="flex justify-center px-5 md:px-10 lg:h-[calc(100dvh-64px)]">
      <div className="max-w-page w-full flex flex-col">
        {/* Filter row — at md+ stacks normally at the top; at lg+ drops to the bottom directly above the h1 */}
        <div className="flex flex-wrap items-center gap-2 mb-4 lg:mt-auto pt-10 lg:pt-0">
          <span className="text-body-small md:text-body-big text-text-primary mr-1">About Riley, for</span>
          {audiences.map((a, i) => (
            <FilterPill
              key={a.label}
              label={a.label}
              selected={active === i}
              onClick={() => setActive(i)}
              size="small"
              className="md:px-4 md:py-2 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + i * 0.18}s`, animationDuration: '0.6s' }}
            />
          ))}
        </div>

        {/* Display message — at lg+, lifted by exactly the image peek height (4.95vw = 15% of 33vw) so the two can never overlap */}
        <h1 className="text-h3 md:text-h2 lg:text-display font-normal text-text-primary pb-10 lg:pb-[4.95vw]">
          {audiences[active].message}
        </h1>
      </div>
    </section>
  )
}
