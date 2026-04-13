import Link from 'next/link'
import { type CaseStudy } from '@/data/case-studies'

export type { CaseStudy }

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const content = (
    <>
      {/* Thumbnail */}
      <div className="bg-bg-secondary rounded-2xl overflow-hidden aspect-video mb-5 shadow-xs transition-shadow group-hover:shadow-md">
        <div className="w-full h-full bg-bg-tertiary flex items-center justify-center">
          {study.comingSoon ? (
            <span className="text-body-small text-text-tertiary tracking-wide uppercase">Coming soon</span>
          ) : (
            <span className="text-small text-text-tertiary">Image placeholder</span>
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="space-y-2.5">
        <div className="flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-body-small text-text-secondary bg-bg-tertiary rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className={`text-body-biggest font-medium transition-colors ${
            study.comingSoon
              ? 'text-text-tertiary'
              : 'text-text-primary group-hover:text-primary'
          }`}
        >
          {study.title}
        </h3>

        {!study.comingSoon && (
          <p className="text-body-small text-text-secondary">{study.description}</p>
        )}

        <p className="text-body-small text-text-tertiary">
          {study.year}
        </p>
      </div>
    </>
  )

  if (study.comingSoon) {
    return <div className="group">{content}</div>
  }

  return (
    <Link href={`/work/${study.slug}`} className="group block">
      {content}
    </Link>
  )
}
