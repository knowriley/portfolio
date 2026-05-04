import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import CaseStudyCard from '@/components/CaseStudyCard'
import TableOfContents from '@/components/TableOfContents'
import InlineLink from '@/components/InlineLink'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { ArrowDownRight } from 'lucide-react'
import {
  Label,
  SectionDivider,
  ImageBlock,
  TwoColumnSection,
  MetadataGrid,
} from '@/components/case-study'
import { caseStudies, type CaseStudy } from '@/data/case-studies'

const study = caseStudies.find((s) => s.slug === 'design-system-documentation')!

export const metadata = {
  title: `${study.title} — Riley Knowles`,
}

const tocItems = [
  { label: 'Overview',  id: 'overview' },
  { label: 'Problem',   id: 'problem' },
  { label: 'Solution',  id: 'solution' },
  { label: 'Impact',    id: 'impact' },
  { label: 'Takeaways', id: 'takeaways' },
]

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

export default function BricksDesignSystemCaseStudyPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <div className="animate-fade-in-up">
          <section className="flex justify-center px-5 md:px-10 pt-10 md:pt-16 pb-8 md:pb-12">
            <div className="max-w-page w-full">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-8">
                <h1 className="text-h1 md:text-display font-normal text-text-primary md:flex-1 md:min-w-0">
                  {study.title}
                </h1>
                <Button href="https://bricks.supernova-docs.io/latest/welcome-to-bricks/welcome-to-bricks-2mJr8rzI" external>View Live</Button>
              </div>
            </div>
          </section>

          {/* ── Cover image ── */}
          <div className="flex justify-center px-5 md:px-10 pb-10 md:pb-16">
            <div className="max-w-page w-full">
              <img
                src="/images/bricks-cover.webp"
                alt="Bricks Design System documentation site showing the welcome page"
                className="w-full rounded-sm border border-border shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* ── 3-column body ── */}
        <div className="flex justify-center px-5 md:px-10">
          <div className="max-w-page w-full">
            <div className="flex gap-8 items-start py-12 md:py-20">

              <TableOfContents items={tocItems} smoothScroll />

              {/* ── Content column ── */}
              <div className="flex-1 min-w-0">

                {/* ────────────────────────────── OVERVIEW ────────────────────────────── */}
                <section id="overview">
                  <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-4">Overview</p>
                  <div className="text-body-small md:text-body-big lg:text-body-biggest text-text-secondary">
                    <p>
                      The Bricks Design System (&ldquo;Bricks&rdquo;) supports the development of{' '}
                      <InlineLink href="https://www.conductor.com/" external variant="emphasis">Conductor Intelligence</InlineLink>
                      , a B2B platform that helps enterprise organizations optimize their online presence.
                    </p>
                    <p className="mt-6">
                      At the start of my internship, I interviewed design and development teams to understand
                      current processes and pain points using the Bricks Design System. I then used{' '}
                      <InlineLink href="https://www.supernova.io/" external variant="emphasis">Supernova</InlineLink>{' '}
                      to build a maintainable and scalable documentation site from the ground up.
                    </p>
                    <p className="mt-6">
                      I launched V1 in Sept 2024, presenting to 50+ members of R&amp;D and iterated from
                      feedback to release V1.2 in Oct 2024 and V1.3 in Nov 2024.
                    </p>
                  </div>

                  <div className="h-12" />

                  <MetadataGrid items={[
                    {
                      label: 'Role',
                      content: 'User Research (Interviews), UX Design, Visual Design, Logo Design, Development',
                    },
                    {
                      label: 'Team',
                      content: 'Myself, Design Systems Intern; Dana Cormier, Sr Principal Product Designer & Bricks Lead',
                    },
                    {
                      label: 'For',
                      content: (
                        <InlineLink href="https://www.conductor.com/" external variant="icon">Conductor</InlineLink>
                      ),
                    },
                    {
                      label: 'Tools',
                      content: (
                        <>
                          <InlineLink href="https://www.supernova.io/" external variant="emphasis">Supernova</InlineLink>
                          {', Figma, Storybook, Github'}
                        </>
                      ),
                    },
                    { label: 'Timeline', content: 'Jun 2024 – Nov 2024' },
                    { label: 'Status',   content: 'Shipped' },
                  ]} />
                </section>

                <SectionDivider />

                {/* ────────────────────────────── PROBLEM ─────────────────────────────── */}
                <section id="problem">
                  <Label>Problem</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-secondary leading-[1.3]">
                    Incomplete design system documentation leads to workflow bottlenecks and
                    designer-developer miscommunication.
                  </h2>

                  <div className="h-12" />
                  <img
                    src="/images/bricks-unorganized-files.webp"
                    alt="Scattered Figma files showing disorganized design system documentation"
                    className="w-full"
                  />
                  <div className="h-12 md:h-24" />

                  {/* Subsection: Designers */}
                  <div>
                    <Label>Designers&apos; Pain Points</Label>
                    <TwoColumnSection heading="Incomplete documentation = workflow bottlenecks and decision re-hash">
                      <div>
                        <p className="text-body-small md:text-body-big text-text-secondary">
                          To best understand the current processes surrounding the Bricks Design System,
                          I interviewed 3 designers and 3 engineers. It became clear that,
                        </p>
                        <p className="text-body-small md:text-body-big text-primary mt-6">
                          Designers do not trust the existing design system documentation because it is
                          incomplete and outdated.
                        </p>
                        <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                          This leads designers to answer their design system related questions in one of
                          three ways:
                        </p>
                      </div>
                    </TwoColumnSection>
                    <div className="h-8" />
                    <div className="flex flex-col gap-5">
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">1</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            <span className="text-primary">Ask the design systems lead</span>, creating a workflow bottleneck.
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">2</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            <span className="text-primary">Search past design files</span> to mimic previous applications of certain components.
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">3</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            Post their question to Slack where the{' '}
                            <span className="text-primary">design team collectively rehashes design
                            decisions that were already made</span>{' '}
                            (but never written down) a couple features back.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Developers */}
                  <div>
                    <Label>Developers&apos; Pain Points</Label>
                    <TwoColumnSection heading="Storybook components don't match Figma representations">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        The capabilities of the built Bricks components in Storybook were much broader
                        than the more constrained Figma representations, creating{' '}
                        <span className="text-primary">confusion at designer-developer handoff</span>.
                      </p>
                    </TwoColumnSection>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── SOLUTION ────────────────────────────── */}
                <section id="solution">
                  <Label>Solution</Label>
                  <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-3">
                    <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3] md:flex-1 md:min-w-0">
                      A trusted, single-source of truth that aligns development and design teams.
                    </h2>
                    <Button variant="outline" href="https://bricks.supernova-docs.io/latest/welcome-to-bricks/welcome-to-bricks-2mJr8rzI" external>View Live</Button>
                  </div>

                  <div className="h-12" />
                  <ImageBlock src="/images/bricks-components-overview.webp" alt="Bricks Design System components overview page" caption="Components Overview Page" />
                  <div className="h-12" />

                  {/* Subsection: Show, don't tell */}
                  <div>
                    <TwoColumnSection heading="Show, don't tell">
                      <div className="flex flex-col gap-0">
                        <p className="text-h4 md:text-h3 font-normal text-text-secondary">
                          Scannable dos &amp; don&apos;ts
                        </p>
                        <p className="text-body-small md:text-body-big text-text-secondary mt-2">
                          Top design system documentation sites like{' '}
                          <InlineLink href="https://carbondesignsystem.com/components/checkbox/usage/#when-not-to-use" external variant="emphasis">IBM Carbon</InlineLink>{' '}
                          list dos and don&apos;ts for their components in a quickly scannable and digestible
                          way. I developed similar dos and don&apos;ts sections to help designers quickly find
                          and review component usage guidelines.
                        </p>
                      </div>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock src="/images/bricks-switch.webp" alt="Switch component usage guidelines showing dos and don'ts for labeling" caption="Switch Dos & Don'ts Usage Guidelines" />
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Interactive embeds */}
                  <div>
                    <TwoColumnSection heading="Interactive Storybook embeds communicate expected behavior">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Instead of describing expected component behavior, I relied on interactive Storybook
                        embeds.{' '}
                        <span className="text-primary">This provides designers with a richer, visual-first understanding of expected
                        component behavior</span>. This also helps designers better understand the built components,
                        improving cross-collaboration between design and development teams.
                      </p>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock type="video" src="/images/tags-input-autocomplete.mp4" caption="Tags Input component with autocomplete behavior" />
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Surface use cases */}
                  <div>
                    <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3] mb-8">
                      Surface component use cases early for discoverability
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 min-w-0">
                        <ImageBlock src="/images/bricks-inputs-overview.webp" alt="Text-based inputs overview showing component cards for Text Input, Text Area, Tags Input, Search Field, and Password Input" caption="Snapshot of Inputs Overview Page" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-body-small md:text-body-big text-text-secondary">
                          After feedback on V1 from the design team, I iterated to create landing pages for
                          each grouping of components that{' '}
                          <span className="text-primary">surfaces their targeted use cases for better
                          discoverability and quick decision-making.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Side-by-side comparisons */}
                  <div>
                    <TwoColumnSection heading="Side-by-side comparisons differentiate similar components.">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Most design systems questions sent to the Slack channel followed the form &ldquo;Should
                        I use X component or Y component in this situation?&rdquo; To meet the unique needs of
                        Conductor&apos;s specific design team, I included documentation sections that{' '}
                        <span className="text-primary">explained the differences between the most frequently confused components.</span>
                      </p>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock src="/images/dropdown-v-caret-button.webp" alt="Side-by-side comparison of Dropdown and Caret Button components" caption="Dropdown vs Caret Button Comparison" />
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Behind the scenes */}
                  <div>
                    <Label>Behind the Scenes</Label>
                    <TwoColumnSection heading="Repeatable and maintainable process supporting long-term quality and scale.">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        When new components do need to be added to the documentation site,{' '}
                        <span className="text-primary">I built slot-component Figma templates to quickly and easily update the documentation and
                        maintain visual consistency.</span>
                      </p>
                    </TwoColumnSection>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── IMPACT ──────────────────────────────── */}
                <section id="impact">
                  <Label>Impact</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    No more bottlenecks
                  </h2>

                  <div className="h-8" />

                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 flex-1 flex flex-col gap-4 justify-center">
                      <p className="text-h3 md:text-h2 font-normal text-primary">100%</p>
                      <p className="text-body-small md:text-body-big text-text-primary">
                        All 26 foundational components documented
                      </p>
                    </div>
                    <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 flex-1 flex flex-col gap-4 justify-center">
                      <ArrowDownRight size={48} strokeWidth={1.5} className="text-primary" />
                      <p className="text-body-small md:text-body-big text-text-primary">
                        Fewer design system use-case questions posted to Slack
                      </p>
                    </div>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── TAKEAWAYS ───────────────────────────── */}
                <section id="takeaways">
                  <Label>Takeaways</Label>
                  <TwoColumnSection heading="Done is better than perfect">
                    <p className="text-body-small md:text-body-big text-text-secondary">
                      Striving for flawless results can lead to overthinking, procrastination, and
                      unnecessary delays. When something is finished, even if it&apos;s not perfect, it
                      allows room for growth and improvement. That was the entire goal of this project —
                      to establish a foundation for designers and developers to contribute to and own
                      together moving forward.
                    </p>
                  </TwoColumnSection>
                </section>

              </div>
              {/* end content column */}

              {/* Notes column — empty per Figma (120px placeholder), hidden on mobile */}
              <div className="hidden lg:block w-[120px] shrink-0" />

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
