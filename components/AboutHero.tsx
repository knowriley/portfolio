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
      'I have 3+ years of experience designing, building and shipping across insurance, B2B, education, and more \u2014 for internal teams and consumer-facing experiences.',
  },
  {
    label: 'Designers',
    message:
      'I\u2019m driven by creating craft that scales, learning from other designers, and advocating for user-centered, accessible design.',
  },
  {
    label: 'Design Managers',
    message:
      'Integral to my work philosophy is being a community member - investing in shared standards, developing organizational design maturity and building design\u2019s influence as a strategic partner.',
  },
  {
    label: 'Product Managers',
    message:
      'My favorite problems live at the intersection of user experience and business goals. I partner with PMs to unpack complexity early, and ensure we\u2019re solving real problems that actually drive impact.',
  },
  {
    label: 'Engineers',
    message:
      'My first love in design was architecting codebases—creating order from complexity through systems, logic, and modular components. I still design with an engineer\u2019s mindset - grounded in patterns and what\u2019s actually feasible to build.',
  },
]

export default function AboutHero() {
  const [active, setActive] = useState(0)

  return (
    <section className="flex justify-center px-5 md:px-10 lg:h-[calc(100dvh-64px)]">
      <div className="max-w-page w-full flex flex-col">
        {/* Filter row — at md+ stacks normally at the top; at lg+ drops to the bottom directly above the h1 */}
        <div className="flex flex-wrap items-center gap-2 mb-4 lg:mt-auto pt-10 lg:pt-0">
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

        {/* Display message — at lg+, lifted by exactly the image peek height (4.95vw = 15% of 33vw) so the two can never overlap */}
        <h1 className="text-h1 md:text-display font-normal text-text-primary pb-10 lg:pb-[4.95vw]">
          {audiences[active].message}
        </h1>
      </div>
    </section>
  )
}
