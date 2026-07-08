import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '@/data/case-studies'

export default function WorkGrid() {
  return (
    <section className="flex justify-center px-5 md:px-10 pt-12 md:pt-16 pb-12 md:pb-20">
      <div className="max-w-page w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10">
          {caseStudies.filter((study) => !study.hidden).map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
