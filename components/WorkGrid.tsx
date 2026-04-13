'use client'

import { useState, useMemo } from 'react'
import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '@/data/case-studies'

const allTags = Array.from(new Set(caseStudies.flatMap((s) => s.tags))).sort()

export default function WorkGrid() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = useMemo(
    () =>
      activeTag ? caseStudies.filter((s) => s.tags.includes(activeTag)) : caseStudies,
    [activeTag]
  )

  return (
    <section className="flex justify-center px-5 md:px-10 pb-12 md:pb-20">
      <div className="max-w-page w-full">
        {/* Section header + filters */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-body-biggest font-medium text-text-primary">Featured Work</h2>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-body-small px-4 py-2 rounded-full border transition-colors ${
                activeTag === null
                  ? 'bg-bg-inverse text-text-inverse font-medium border-transparent'
                  : 'bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary'
              }`}
            >
              All
            </button>

            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`text-body-small px-4 py-2 rounded-full border transition-colors ${
                  activeTag === tag
                    ? 'bg-bg-inverse text-text-inverse font-medium border-transparent'
                    : 'bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary hover:border-border-strong hover:text-text-primary'
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
