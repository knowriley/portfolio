import Image from 'next/image'
import Link from 'next/link'
import { type CaseStudy } from '@/data/case-studies'

export type { CaseStudy }

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const isVideo = !!study.thumbnail && /\.(mov|mp4|webm)$/i.test(study.thumbnail)
  const content = (
    <>
      {/* Thumbnail */}
      <div className="relative bg-bg-secondary rounded-sm overflow-hidden aspect-video mb-5 shadow-xs border border-border-subtle">
        {study.thumbnail ? (
          isVideo ? (
            <video
              src={study.thumbnail}
              autoPlay
              loop
              muted
              playsInline
              aria-label={study.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={study.thumbnail}
              alt={study.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )
        ) : (
          <div className="w-full h-full bg-bg-tertiary flex items-center justify-center">
            {study.comingSoon ? (
              <span className="text-body-small text-text-tertiary tracking-wide uppercase">Coming soon</span>
            ) : (
              <span className="text-small text-text-tertiary">Image placeholder</span>
            )}
          </div>
        )}
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
          className={`text-body-biggest font-medium ${
            study.comingSoon ? 'text-text-tertiary' : 'text-text-primary'
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
    return <div className="group pb-4">{content}</div>
  }

  return (
    <Link href={`/work/${study.slug}`} className="group block pb-4 transition-transform duration-200 hover:-translate-y-2.5">
      {content}
    </Link>
  )
}
