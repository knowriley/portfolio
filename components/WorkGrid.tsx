import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '@/data/case-studies'

export default function WorkGrid() {
  return (
    <section className="flex justify-center px-5 md:px-10 pt-12 md:pt-20 pb-12 md:pb-20">
      <div className="max-w-page w-full">
        <div className="flex flex-col gap-8">
          {caseStudies.filter((study) => !study.hidden).map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
