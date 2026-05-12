import Image from 'next/image'
import Link from 'next/link'
import { type CaseStudy } from '@/data/case-studies'

export type { CaseStudy }

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const isVideo = !!study.thumbnail && /\.(mov|mp4|webm)$/i.test(study.thumbnail)
  const content = (
    <div className="flex flex-col gap-5 md:gap-8">
      {/* Meta — title + year on the left, description on the right at md+ */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
        <div className="w-full md:w-1/2 space-y-2.5">
          <h3
            className={`text-h4 md:text-h3 font-medium ${
              study.comingSoon ? 'text-text-tertiary' : 'text-text-primary'
            }`}
          >
            {study.title}
          </h3>
          <p className="text-small text-text-tertiary">
            {study.year}
          </p>
        </div>

        {!study.comingSoon && (
          <div className="w-full md:w-1/2">
            <p className="text-body-small text-text-secondary">{study.description}</p>
          </div>
        )}
      </div>

      {/* Thumbnail — full width */}
      <div className="relative w-full bg-bg-secondary rounded-sm overflow-hidden aspect-video shadow-xs border border-border">
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
              sizes="100vw"
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
    </div>
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
