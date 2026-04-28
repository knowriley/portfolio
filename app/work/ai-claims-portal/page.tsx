import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudyCard from '@/components/CaseStudyCard'
import CaseStudyTag from '@/components/CaseStudyTag'
import TableOfContents from '@/components/TableOfContents'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import CaseStudyPaywall from '@/components/CaseStudyPaywall'
import {
  Label,
  SectionDivider,
  ImageBlock,
  MetadataGrid,
} from '@/components/case-study'
import InlineLink from '@/components/InlineLink'
import { caseStudies, type CaseStudy } from '@/data/case-studies'
import { isUnlocked } from '@/lib/case-study-lock'

const study = caseStudies.find((s) => s.slug === 'ai-claims-portal')!

export const metadata = {
  title: `${study.title} — Riley Knowles`,
}

const nextStudies: CaseStudy[] = [
  {
    slug: 'coming-soon-a',
    title: 'Coming Soon',
    description: '',
    tags: [],
    year: '—',
    industry: '—',
    comingSoon: true,
  },
  {
    slug: 'coming-soon-b',
    title: 'Coming Soon',
    description: '',
    tags: [],
    year: '—',
    industry: '—',
    comingSoon: true,
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function AiClaimsPortalCaseStudyPage() {
  const unlocked = await isUnlocked()

  const tocItems = unlocked
    ? [
        { label: 'Overview',   id: 'overview' },
        { label: 'Case Study', id: 'case-study' },
      ]
    : [{ label: 'Overview', id: 'overview' }]

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <div className="animate-fade-in-up">
          <section className="flex justify-center px-5 md:px-10 pt-10 md:pt-16 pb-8 md:pb-12">
            <div className="max-w-page w-full">
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <CaseStudyTag key={tag}>{tag}</CaseStudyTag>
                ))}
              </div>
              <div className="h-8" />
              <h1 className="text-h1 md:text-display font-normal text-text-primary">
                {study.title}
              </h1>
            </div>
          </section>

          {/* ── Cover image ── */}
          <div className="flex justify-center px-5 md:px-10 pb-10 md:pb-16">
            <div className="max-w-page w-full">
              <ImageBlock
                src="/images/chubb-cover-unified-experience.webp"
                alt="Unified Chubb Benefits portal case study cover"
              />
            </div>
          </div>
        </div>

        {/* ── 3-column body ── */}
        <div className="flex justify-center px-5 md:px-10">
          <div className="max-w-page w-full">
            <div className="flex gap-8 items-start py-12 md:py-20">

              {unlocked ? (
                <TableOfContents items={tocItems} />
              ) : (
                <div aria-hidden className="hidden lg:block w-[220px] shrink-0" />
              )}

              {/* ── Content column ── */}
              <div className="flex-1 min-w-0">

                {/* ────────────────────────────── OVERVIEW ────────────────────────────── */}
                <section id="overview">
                  <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-4">Overview</p>
                  <div className="text-body-small md:text-body-big lg:text-body-biggest text-text-secondary">
                    <p>
                      TODO: Teaser paragraph 1 — frame the problem (8 customer segments,
                      3 billing systems fragmenting the claims experience) and why a unified
                      portal was the right bet.
                    </p>
                    <p className="mt-6">
                      TODO: Teaser paragraph 2 — how AI-assisted Figma engineering + cross-
                      functional alignment accelerated the build. Keep it teaser-level; real
                      detail lives behind the paywall.
                    </p>
                  </div>

                  <div className="h-12" />

                  <MetadataGrid items={[
                    { label: 'Role',     content: 'Experience Designer' },
                    { label: 'Team',     content: 'Myself, 3 Product Owners, 2 Claims Business Analysts, 1 Technical Business Analyst, 1 Project Manager, 1 Principal Engineer, 1 Testing Lead, 8 Offshore Developers' },
                    { label: 'For',      content: 'Chubb' },
                    { label: 'Tools',    content: (
                      <>
                        Figma,{' '}
                        <InlineLink href="https://www.fullstory.com/" external>
                          FullStory
                        </InlineLink>
                      </>
                    ) },
                    { label: 'Timeline', content: 'Mar 2026 – Present' },
                    { label: 'Status',   content: 'In testing' },
                  ]} />
                </section>

                {/* ── Gate ── */}
                {unlocked ? (
                  <>
                    <SectionDivider />

                    <section id="case-study">
                      <Label>Case Study</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        TODO: Full case study content goes here.
                      </h2>
                      <div className="h-8" />
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        TODO: Build out Problem / Goals / Challenges / Solution / Impact /
                        Takeaways sections mirroring the pattern used in the Bricks and
                        Conductor case studies. The paywall plumbing above is independent of
                        this structure — add sections freely.
                      </p>
                    </section>
                  </>
                ) : (
                  <div className="h-16 md:h-24" />
                )}

                {!unlocked && <CaseStudyPaywall pathname="/work/ai-claims-portal" />}

              </div>
              {/* end content column */}

              {/* Notes column — empty per Figma (200px placeholder), hidden on mobile */}
              <div className="hidden lg:block w-[200px] shrink-0" />

            </div>
          </div>
        </div>
        {/* end 3-col body */}

        {/* ── Next case studies ── */}
        <AnimateOnScroll>
          <div className="flex justify-center px-5 md:px-10 pt-12 pb-12 md:pb-24">
            <div className="max-w-page w-full">
              <Label>Next</Label>
              <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3] mb-8">
                I&apos;ve done other cool stuff too
              </h2>
              <div className="flex flex-col md:flex-row gap-8">
                {nextStudies.map((study) => (
                  <div key={study.slug} className="flex-1 min-w-0">
                    <CaseStudyCard study={study} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>

      </main>
      <Footer />
    </>
  )
}
