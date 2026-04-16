import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudyCard, { type CaseStudy } from '@/components/CaseStudyCard'
import { ArrowUpRight } from 'lucide-react'
import {
  Label,
  SectionDivider,
  ImageBlock,
  NumberedCallout,
  TwoColumnSection,
  MetadataGrid,
} from '@/components/case-study'

export const metadata = {
  title: 'Bricks Design System — Riley Knowles',
}

const tags = ['Design Systems', 'Figma', 'Documentation', 'Strategy']

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
    role: '—',
    comingSoon: true,
  },
  {
    slug: 'coming-soon-b',
    title: 'Coming Soon',
    description: '',
    tags: [],
    year: '—',
    role: '—',
    comingSoon: true,
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function MotoDesignSystemPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="flex justify-center px-10 pt-16 pb-12">
          <div className="max-w-page w-full">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-body-small text-text-secondary bg-bg-tertiary rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="h-8" />
            <h1 className="text-display font-normal text-text-primary">
              Creating a single source of truth for the Bricks Design System
            </h1>
          </div>
        </section>

        {/* ── Cover image ── */}
        <div className="flex justify-center px-10 pb-16">
          <div className="max-w-page w-full">
            <div className="bg-bg-secondary rounded-sm aspect-video flex items-center justify-center">
              <span className="text-small text-text-tertiary">Cover image</span>
            </div>
          </div>
        </div>

        {/* ── Full-width rule ── */}
        <div className="border-t border-border-subtle" />

        {/* ── 3-column body ── */}
        <div className="flex justify-center px-10">
          <div className="max-w-page w-full">
            <div className="flex gap-8 items-start py-20">

              {/* ── TOC (180px, sticky) ── */}
              <aside className="w-[180px] shrink-0 sticky top-40">
                <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-2">Contents</p>
                <ul className="space-y-3">
                  {tocItems.map(({ label, id }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="text-body-small text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* ── Content column ── */}
              <div className="flex-1 min-w-0">

                {/* ────────────────────────────── OVERVIEW ────────────────────────────── */}
                <section id="overview">
                  <Label>Overview</Label>
                  <div className="text-body-biggest text-text-primary">
                    <p>
                      The Bricks Design System (&ldquo;Bricks&rdquo;) supports the development of{' '}
                      <a href="https://www.conductor.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                        Conductor Intelligence
                      </a>
                      , a B2B platform that helps enterprise organizations optimize their online presence.
                    </p>
                    <p className="mt-6">
                      At the start of my internship, I interviewed design and development teams to understand
                      current processes and pain points using the Bricks Design System. I then used{' '}
                      <a href="https://www.supernova.io/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                        Supernova
                      </a>{' '}
                      to build a maintainable and scalable documentation site from the ground up, establishing
                      a shared knowledge base for designers and engineers, that removed workflow bottlenecks
                      identified in user research, speeding up the product development life cycle.
                    </p>
                    <p className="mt-6">
                      I launched V1 in Sept 2024, presenting to 50+ members of R&amp;D and iterated from
                      feedback to release V1.2 in Oct 2024 and V1.3 in Nov 2024.
                    </p>
                  </div>

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
                        <div className="flex gap-1.5 items-center">
                          <div className="bg-bg-secondary rounded-full size-6 shrink-0" />
                          <a
                            href="https://www.conductor.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-0.5"
                          >
                            Conductor
                            <ArrowUpRight size={14} strokeWidth={2} className="text-text-tertiary ml-0.5" />
                          </a>
                        </div>
                      ),
                    },
                    {
                      label: 'Tools',
                      content: (
                        <>
                          <a href="https://www.supernova.io/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                            Supernova
                          </a>
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
                  <h2 className="text-h2 font-normal text-text-primary leading-[1.3]">
                    Incomplete design system documentation leads to workflow bottlenecks and
                    designer-developer miscommunication, ultimately extending the product development
                    lifecycle.
                  </h2>

                  <div className="h-24" />
                  <ImageBlock label="Problem framing image" />
                  <div className="h-24" />

                  {/* Subsection: Designers */}
                  <div>
                    <Label>Designers&apos; Pain Points</Label>
                    <TwoColumnSection heading="Incomplete documentation = workflow bottlenecks and decision re-hash">
                      <div>
                        <p className="text-body-big text-text-secondary">
                          To best understand the current processes surrounding the Bricks Design System,
                          I interviewed 3 designers and 3 engineers. It became clear that,
                        </p>
                        <p className="text-body-big text-text-secondary mt-6">
                          Designers do not trust the existing design system documentation because it is
                          incomplete and outdated.
                        </p>
                        <p className="text-body-big text-text-secondary mt-6">
                          This leads designers to answer their design system related questions in one of
                          three ways:
                        </p>
                      </div>
                    </TwoColumnSection>
                    <div className="h-8" />
                    <div className="flex flex-col gap-8">
                      <NumberedCallout number="1">
                        Ask the design systems lead, creating a workflow bottle neck.
                      </NumberedCallout>
                      <NumberedCallout number="2">
                        Search past design files to mimic previous design applications of certain components.
                      </NumberedCallout>
                      <NumberedCallout number="3">
                        Post their question to Slack where the design team collectively rehashes design
                        decisions that were already made (but never written down) a couple features back.
                      </NumberedCallout>
                    </div>
                  </div>

                  <div className="h-24" />

                  {/* Subsection: Developers */}
                  <div>
                    <Label>Developers&apos; Pain Points</Label>
                    <TwoColumnSection heading="Storybook components don't match Figma representations">
                      <p className="text-body-big text-text-secondary">
                        The capabilities of the built Bricks components in Storybook were much broader
                        than the more constrained Figma representations, creating confusion at
                        designer-developer handoff.
                      </p>
                    </TwoColumnSection>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── SOLUTION ────────────────────────────── */}
                <section id="solution">
                  <Label>Solution</Label>
                  <h2 className="text-h2 font-normal text-text-primary leading-[1.3]">
                    A trusted, single-source of truth that aligns development and design teams.
                  </h2>

                  <div className="h-8" />

                  {/* 2-col stat callout row */}
                  <div className="flex gap-8 h-[227px]">
                    <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 flex-1 h-full flex flex-col gap-4 justify-between">
                      <div className="size-16 flex items-center justify-center text-text-tertiary">
                        <ArrowUpRight size={32} strokeWidth={1.5} />
                      </div>
                      <p className="text-body-big text-text-primary">
                        Dynamic linking between both Figma and Storybook minimizes maintenance and ensures trust.
                      </p>
                    </div>
                    <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 flex-1 h-full flex flex-col gap-4 justify-between">
                      <p className="text-display font-normal text-text-primary">100%</p>
                      <p className="text-body-big text-text-primary">
                        All 26 foundational components&apos; anatomy, variants, usage and more documented.
                      </p>
                    </div>
                  </div>

                  <div className="h-8" />
                  <ImageBlock label="Solution overview image" />
                  <div className="h-12" />

                  {/* Subsection: Show, don't tell */}
                  <div>
                    <TwoColumnSection heading="Show, don't tell">
                      <div className="flex flex-col gap-8">
                        <p className="text-body-biggest text-text-secondary pt-2">
                          Scannable dos &amp; don&apos;ts
                        </p>
                        <p className="text-body-big text-text-secondary">
                          Top design system documentation sites like{' '}
                          <a
                            href="https://carbondesignsystem.com/components/checkbox/usage/#when-not-to-use"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2"
                          >
                            IBM Carbon
                          </a>{' '}
                          list dos and don&apos;ts for their components in a quickly scannable and digestible
                          way. I developed similar dos and don&apos;ts sections to help designers quickly find
                          and review component usage guidelines.
                        </p>
                      </div>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock label="Show don't tell image" />
                  </div>

                  <div className="h-24" />

                  {/* Subsection: Interactive embeds */}
                  <div>
                    <TwoColumnSection heading="Interactive Storybook embeds communicate expected behavior">
                      <p className="text-body-big text-text-secondary">
                        Instead of describing expected component behavior, I relied on interactive Storybook
                        embeds. This provides designers with a richer, visual-first understanding of expected
                        component behavior. This also helps designers better understand the built components,
                        improving cross-collaboration between design and development teams.
                      </p>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock label="Interactive embeds image" />
                  </div>

                  <div className="h-24" />

                  {/* Subsection: Surface use cases */}
                  <div>
                    <h2 className="text-h2 font-normal text-text-primary leading-[1.3] mb-8">
                      Surface component use cases early for discoverability
                    </h2>
                    <TwoColumnSection heading={<ImageBlock label="Use cases image" />} align="center">
                      <p className="text-body-big text-text-secondary">
                        After feedback on V1 from the design team, I iterated to create landing pages for
                        each grouping of components that surfaces their targeted use cases for better
                        discoverability and quick decision-making.
                      </p>
                    </TwoColumnSection>
                  </div>

                  <div className="h-24" />

                  {/* Subsection: Side-by-side comparisons */}
                  <div>
                    <TwoColumnSection heading="Side-by-side comparisons differentiate similar components.">
                      <p className="text-body-big text-text-secondary">
                        Most design systems questions sent to the Slack channel followed the form &ldquo;Should
                        I use X component or Y component in this situation?&rdquo; To meet the unique needs of
                        Conductor&apos;s specific design team, I included documentation sections that explained
                        the differences between the most frequently confused components.
                      </p>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock label="Side-by-side comparison image" />
                  </div>

                  <div className="h-24" />

                  {/* Subsection: Behind the scenes */}
                  <div>
                    <Label>Behind the Scenes</Label>
                    <TwoColumnSection heading="Repeatable and maintainable process supporting long-term quality and scale">
                      <p className="text-body-big text-text-secondary">
                        When new components do need to be added to the documentation site, I built
                        slot-component Figma templates to quickly and easily update the documentation and
                        maintain visual consistency.
                      </p>
                    </TwoColumnSection>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── IMPACT ──────────────────────────────── */}
                <section id="impact">
                  <Label>Impact</Label>
                  <TwoColumnSection heading="No more bottlenecks">
                    <div className="flex flex-col gap-8">
                      <p className="text-body-big text-text-secondary">
                        When new components do need to be added to the documentation site, I built
                        slot-component Figma templates to quickly and easily update the documentation and
                        maintain visual consistency.
                      </p>
                      <div className="flex flex-col gap-8">
                        <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7 w-full">
                          <div className="flex gap-4 items-start">
                            <span className="text-body-biggest text-text-primary shrink-0">100%</span>
                            <p className="text-body-big text-text-primary">
                              Something to say here is what I want to express.
                            </p>
                          </div>
                        </div>
                        <NumberedCallout number="1">
                          Something to say here is what I want to express.
                        </NumberedCallout>
                      </div>
                    </div>
                  </TwoColumnSection>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── TAKEAWAYS ───────────────────────────── */}
                <section id="takeaways">
                  <Label>Takeaways</Label>
                  <TwoColumnSection heading="Done is better than perfect">
                    <p className="text-body-big text-text-secondary">
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

              {/* Notes column — empty per Figma (200px placeholder) */}
              <div className="w-[200px] shrink-0" />

            </div>
          </div>
        </div>
        {/* end 3-col body */}

        {/* ── Next case studies ── */}
        <div className="flex justify-center px-10 pt-12 pb-24">
          <div className="max-w-page w-full">
            <Label>Next</Label>
            <h2 className="text-h2 font-normal text-text-primary leading-[1.3] mb-8">
              I&apos;ve done other cool stuff too
            </h2>
            <div className="flex gap-8">
              {nextStudies.map((study) => (
                <div key={study.slug} className="flex-1 min-w-0">
                  <CaseStudyCard study={study} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
