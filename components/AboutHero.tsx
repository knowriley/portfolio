'use client'

import { ReactNode, useState } from 'react'

const highlight = 'bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink'

const audiences: { label: string; message: ReactNode }[] = [
  {
    label: 'Anyone',
    message: (
      <>
        I am a strategic designer who cares about crafting intentional
        experiences and{' '}
        <span className={highlight}>
          being someone people genuinely enjoy working with.
        </span>
      </>
    ),
  },
  {
    label: 'Recruiters',
    message: (
      <>
        I&rsquo;ve designed, built and ship experiences across insurance, B2B,
        education, and more for internal teams and consumer-facing
        experiences.
      </>
    ),
  },
  {
    label: 'Designers',
    message: (
      <>
        I&rsquo;m driven by creating craft that scales, learning from other
        designers, and{' '}
        <span className={highlight}>
          advocating for user-centered, accessible design
        </span>
        .
      </>
    ),
  },
  {
    label: 'Design Managers',
    message: (
      <>
        <span className={highlight}>
          Integral to my work philosophy is being a community member
        </span>{' '}
        - investing in shared standards, developing organizational design
        maturity and building design&rsquo;s influence as a strategic partner.
      </>
    ),
  },
  {
    label: 'Product Managers',
    message: (
      <>
        My favorite problems live at the intersection of user experience and
        business goals.{' '}
        <span className={highlight}>
          I partner with PMs to unpack complexity early
        </span>
        , and ensure we&rsquo;re solving real problems that actually drive
        impact.
      </>
    ),
  },
  {
    label: 'Engineers',
    message: (
      <>
        My first love in design was architecting codebases—creating order from
        complexity through systems, logic, and modular components.{' '}
        <span className={highlight}>
          I still design with an engineer&rsquo;s mindset
        </span>{' '}
        - grounded in patterns and what&rsquo;s actually feasible to build.
      </>
    ),
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
