'use client'

import { useState, useMemo } from 'react'
import CaseStudyCard, { type CaseStudy } from './CaseStudyCard'

const caseStudies: CaseStudy[] = [
  {
    slug: 'moto-design-system',
    title: 'Creating a single source of truth for the Moto Design System',
    description:
      'Unified a fragmented design system across teams by establishing a shared component library, documentation, and governance model in Figma.',
    tags: ['Design Systems', 'Figma', 'Documentation', 'Strategy'],
    year: '2024',
    role: 'Lead Designer',
  },
  {
    slug: 'coming-soon-1',
    title: 'Case Study — Coming Soon',
    description: '',
    tags: ['UX Research', 'Product Design'],
    year: '2024',
    role: 'Product Designer',
    comingSoon: true,
  },
  {
    slug: 'coming-soon-2',
    title: 'Case Study — Coming Soon',
    description: '',
    tags: ['Service Design', 'Strategy'],
    year: '2023',
    role: 'UX Strategist',
    comingSoon: true,
  },
  {
    slug: 'coming-soon-3',
    title: 'Case Study — Coming Soon',
    description: '',
    tags: ['UX Research', 'Figma'],
    year: '2023',
    role: 'UX Designer',
    comingSoon: true,
  },
]

const allTags = Array.from(new Set(caseStudies.flatMap((s) => s.tags))).sort()

export default function WorkGrid() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = useMemo(
    () =>
      activeTag ? caseStudies.filter((s) => s.tags.includes(activeTag)) : caseStudies,
    [activeTag]
  )

  return (
    <section className="flex justify-center px-10 pb-20">
      <div className="max-w-page w-full">
        {/* Section header + filters */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-xl font-medium text-text-primary">Featured Work</h2>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeTag === null
                  ? 'bg-text-primary text-text-inverse border-text-primary'
                  : 'border-border text-text-secondary hover:border-border-strong hover:text-text-primary'
              }`}
            >
              All
            </button>

            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  activeTag === tag
                    ? 'bg-text-primary text-text-inverse border-text-primary'
                    : 'border-border text-text-secondary hover:border-border-strong hover:text-text-primary'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
