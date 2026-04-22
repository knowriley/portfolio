import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudyCard from '@/components/CaseStudyCard'
import TableOfContents from '@/components/TableOfContents'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import CaseStudyPaywall from '@/components/CaseStudyPaywall'
import InlineLink from '@/components/InlineLink'
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
              <ImageBlock
                src="/images/chubb-cover-eoi.webp"
                alt="Evidence of Insurability case study cover"
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
                <div aria-hidden className="hidden lg:block w-[180px] shrink-0" />
              )}

              {/* ── Content column ── */}
              <div className="flex-1 min-w-0">

                {/* ────────────────────────────── OVERVIEW ────────────────────────────── */}
                <section id="overview">
                  <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-4">Overview</p>
                  <div className="text-body-big md:text-body-biggest text-text-secondary">
                    <p>
                      I&apos;m redesigning portions of an Evidence of Insurability flow that
                      consumers move through to qualify for extended health insurance products.
                      The team was on a tight deadline to enable five new products, which made
                      it the right moment to run a guinea-pig test of Claude Code prototyping
                      in place of a traditional Figma handoff.
                    </p>
                    <p className="mt-6">
                      I got onto a custom MCP wired into our web component kit, iterated in
                      Claude Code with git branches for each design variant, pulled UX action
                      items directly from Jira requirements, and published testable prototypes
                      through Surge into UserZoom and UserTesting studies. The loop produced
                      richer handoffs than Figma alone — real interactions and state behavior,
                      not just screens.
                    </p>
                  </div>

                  <div className="h-12" />

                  <MetadataGrid items={[
                    { label: 'Role',     content: 'Lead UX Designer' },
                    { label: 'Team',     content: 'Myself, Product Owner, Design System Team' },
                    {
                      label: 'For',
                      content: (
                        <InlineLink href="https://www.chubb.com/" external variant="icon">Chubb</InlineLink>
                      ),
                    },
                    {
                      label: 'Tools',
                      content: (
                        <>
                          Claude Code, Figma MCP, VS Code, Git,{' '}
                          <InlineLink href="https://www.usertesting.com/platform/userzoom" external>UserZoom</InlineLink>,{' '}
                          <InlineLink href="https://surge.sh/" external>Surge</InlineLink>
                        </>
                      ),
                    },
                    { label: 'Timeline', content: 'Mar 2026 – Present' },
                    { label: 'Status',   content: 'In progress' },
                  ]} />
                </section>

                {/* ── Gate ── */}
                {unlocked ? (
                  <>
                    <SectionDivider />

                    <section id="case-study">
                      <Label>Case Study</Label>
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
