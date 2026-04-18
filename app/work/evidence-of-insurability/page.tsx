import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudyCard from '@/components/CaseStudyCard'
import TableOfContents from '@/components/TableOfContents'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import CaseStudyPaywall from '@/components/CaseStudyPaywall'
import {
  Label,
  SectionDivider,
  ImageBlock,
  MetadataGrid,
} from '@/components/case-study'
import { caseStudies, type CaseStudy } from '@/data/case-studies'
import { isUnlocked } from '@/lib/case-study-lock'

const study = caseStudies.find((s) => s.slug === 'evidence-of-insurability')!

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

export default async function EvidenceOfInsurabilityCaseStudyPage() {
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
                  <span key={tag} className="text-body-small text-text-secondary bg-bg-tertiary rounded-full px-3 py-1">
                    {tag}
                  </span>
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
              <ImageBlock label="TODO: Cover image for Evidence of Insurability" />
            </div>
          </div>
        </div>

        {/* ── 3-column body ── */}
        <div className="flex justify-center px-5 md:px-10">
          <div className="max-w-page w-full">
            <div className="flex gap-8 items-start py-12 md:py-20">

              <TableOfContents items={tocItems} />

              {/* ── Content column ── */}
              <div className="flex-1 min-w-0">

                {/* ────────────────────────────── OVERVIEW ────────────────────────────── */}
                <section id="overview">
                  <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-4">Overview</p>
                  <div className="text-body-big md:text-body-biggest text-text-secondary">
                    <p>
                      TODO: Teaser paragraph 1 — set up the project (enterprise insurance
                      Evidence of Insurability flow) and why rapid prototyping in Claude Code
                      was the right fit.
                    </p>
                    <p className="mt-6">
                      TODO: Teaser paragraph 2 — what made this worth writing up (the design +
                      engineering loop, what shipped, what got validated). Keep it teaser-level;
                      real detail lives behind the paywall.
                    </p>
                  </div>

                  <div className="h-12" />

                  <MetadataGrid items={[
                    { label: 'Role',     content: 'TODO: Role' },
                    { label: 'Team',     content: 'TODO: Team members and titles' },
                    { label: 'For',      content: 'Enterprise insurance client (under NDA)' },
                    { label: 'Tools',    content: 'TODO: Tools (Claude Code, Figma, etc.)' },
                    { label: 'Timeline', content: 'Mar 2026 – Present' },
                    { label: 'Status',   content: 'In progress' },
                  ]} />
                </section>

                {/* ── Gate ── */}
                {unlocked ? (
                  <>
                    <SectionDivider />

                    <section id="case-study">
                      <Label>Behind the NDA</Label>
                      <h2 className="text-h2 font-normal text-text-primary leading-[1.3]">
                        TODO: Full case study content goes here.
                      </h2>
                      <div className="h-8" />
                      <p className="text-body-big text-text-secondary">
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

                {!unlocked && <CaseStudyPaywall pathname="/work/evidence-of-insurability" />}

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
