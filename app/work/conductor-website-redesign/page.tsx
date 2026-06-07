import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import CaseStudyCard from '@/components/CaseStudyCard'
import TableOfContents from '@/components/TableOfContents'
import InlineLink from '@/components/InlineLink'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { ArrowUpRight } from 'lucide-react'
import {
  Label,
  SectionDivider,
  ImageBlock,
  TwoColumnSection,
  MetadataGrid,
} from '@/components/case-study'
import { caseStudies, type CaseStudy } from '@/data/case-studies'

const study = caseStudies.find((s) => s.slug === 'conductor-website-redesign')!

export const metadata = {
  title: study.title,
  description: study.description,
  openGraph: {
    title: study.title,
    description: study.description,
    type: 'article',
    url: `/work/${study.slug}`,
  },
}

const tocItems = [
  { label: 'Overview',   id: 'overview' },
  { label: 'Problem',    id: 'problem' },
  { label: 'Goals',      id: 'goals' },
  { label: 'Challenges', id: 'challenges' },
  { label: 'Solution',   id: 'solution' },
  { label: 'Impact',     id: 'impact' },
  { label: 'Takeaways',  id: 'takeaways' },
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

export default function ConductorWebsiteRedesignCaseStudyPage() {
  if (study.hidden) notFound()

  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>

        {/* ── Hero ── */}
        <div className="animate-fade-in-up">
          <section className="flex justify-center px-5 md:px-10 pt-10 md:pt-16 pb-8 md:pb-12">
            <div className="max-w-page w-full">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-8">
                <h1 className="text-h1 md:text-display font-normal text-text-primary md:flex-1 md:min-w-0">
                  {study.title}
                </h1>
                <Button href="https://www.conductor.com/" external>View Live</Button>
              </div>
            </div>
          </section>

          {/* ── Cover image ── */}
          <div className="flex justify-center px-5 md:px-10 pb-10 md:pb-16">
            <div className="max-w-page w-full">
              <ImageBlock type="video" src="/images/product-overview-move-in-animation.mp4" />
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
                      <InlineLink href="https://www.conductor.com/" external variant="emphasis">Conductor</InlineLink>{' '}
                      had made its name as a trusted SEO platform for enterprise brands, and over
                      time expanded into content creation and website performance — growing into an
                      all-in-one optimization platform. When AI search engines began reshaping how
                      customers discovered information, Conductor was well-positioned to respond,
                      rapidly developing and releasing a new frontier of the product: AI visibility
                      optimization. But their homepage needed to announce it.
                    </p>
                    <p className="mt-6">
                      I led the website redesign to support their AI visibility optimization feature
                      go-to-market moment — modernizing the visual identity, collaborating across
                      UX and marketing, and building stakeholder alignment around a web experience
                      that launched this next chapter of Conductor&apos;s story.
                    </p>
                  </div>

                  <div className="h-12" />

                  <MetadataGrid items={[
                    {
                      label: 'Role',
                      content: 'Lead UX Designer',
                    },
                    {
                      label: 'Team',
                      content: 'Marketing Director, Graphic Designer, GTM Lead, UX Design Manager, Product Manager',
                    },
                    {
                      label: 'For',
                      content: (
                        <InlineLink href="https://www.conductor.com/" external variant="icon">Conductor</InlineLink>
                      ),
                    },
                    {
                      label: 'Tools',
                      content: 'Figma',
                    },
                    { label: 'Timeline', content: '4 months, Feb 2025 - May 2025' },
                    { label: 'Status',   content: 'Shipped' },
                  ]} />
                </section>

                <SectionDivider />

                {/* ────────────────────────────── PROBLEM ─────────────────────────────── */}
                <section id="problem">
                  <Label>Problem</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-secondary leading-[1.3]">
                    Conductor&apos;s website didn&apos;t reflect its forward-thinking culture
                    or the new AI-forward product story it needed to tell.
                  </h2>

                  <div className="h-12" />

                  <p className="text-body-small md:text-body-big text-text-secondary">
                    The existing site felt dated and disconnected from the company&apos;s
                    forward-thinking culture and its defining product offering. Internally,
                    the message was blunt:{' '}
                    <span className="text-primary [&_a]:text-inherit">&ldquo;This website does not look like AI.
                    We are GTM and the website needs a facelift.&rdquo;</span>
                  </p>

                  <div className="h-12" />
                  <ImageBlock type="video" src="/images/conductor-website-before.mp4" caption="Conductor&rsquo;s homepage before the redesign" />

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Goals */}
                  <div id="goals">
                    <Label>Goals</Label>
                    <TwoColumnSection heading="Make the site feel modern and AI-forward — without making the rest of the site feel even more outdated.">
                      <div>
                        <p className="text-body-small md:text-body-big text-text-secondary">
                          Three priorities shaped the redesign brief:
                        </p>
                      </div>
                    </TwoColumnSection>
                    <div className="h-8" />
                    <div className="flex flex-col gap-5">
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">1</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            Elevate brand perception to match Conductor&apos;s position as a category leader.
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">2</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            Make the homepage look and feel like an AI-native product.
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">3</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            Better target enterprise audiences who expect a modern, confident brand.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Challenges */}
                  <div id="challenges">
                    <Label>Challenges</Label>
                    <TwoColumnSection heading="Tight timeline and mixed-signal feedback loops.">
                      <div>
                        <p className="text-body-small md:text-body-big text-text-secondary">
                          Conductor was in a race to refresh its positioning and stay ahead of the
                          competition. I advocated for a full design system update, but the timeline
                          only allowed a homepage redesign — which meant designing for the future
                          with one foot stuck in the past. How do we make something AI-forward
                          without making the rest of the site look even more outdated, and how do we
                          avoid creating a frankenstein website?
                        </p>
                        <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                          Mixed-signal feedback loops added their own friction. I would review work
                          with my UX design manager, incorporate her feedback, then receive
                          contradictory feedback from marketing in a separate meeting she
                          wasn&apos;t in. I ended up mediating between stakeholders who each thought
                          they had the final say — without a clear decision owner on record.
                        </p>
                      </div>
                    </TwoColumnSection>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── SOLUTION ────────────────────────────── */}
                <section id="solution">
                  <Label>Solution</Label>
                  <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-3">
                    <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3] md:flex-1 md:min-w-0">
                      A cutting-edge homepage that signals AI-driven innovation while staying
                      unmistakably on-brand.
                    </h2>
                    <Button variant="outline" href="https://www.conductor.com/" external>View Live</Button>
                  </div>

                  <div className="h-12" />
                  <ImageBlock src="/images/conductor-product-overview.webp" alt="Conductor homepage product overview section with modern interactions" caption="Product overview page with modern interactions" />
                  <div className="h-12" />

                  {/* Subsection: First impressions */}
                  <div>
                    <TwoColumnSection heading="First impressions — a hero that earns a double-take">
                      <div>
                        <p className="text-body-small md:text-body-big text-text-secondary">
                          Getting the hero right was the most involved part of the process.
                          It was originally scoped to graphic design, but she was at capacity on
                          day-to-day needs, so I picked it up. I produced{' '}
                          <span className="text-primary [&_a]:text-inherit">10+ variations</span>, starting with
                          high-contrast exploration in shape motifs and motion. After aligning
                          GTM, Marketing, and UX Design on favorites, I ran a second iteration
                          that kept the structural motifs but rebuilt the color ways in-palette.
                        </p>
                      </div>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock src="/images/conductor-cover.webp" alt="Final homepage hero after alignment rounds" caption="Homepage hero after alignment rounds" />
                    <div className="h-8" />

                    <Label>What made this harder</Label>
                    <div className="flex flex-col gap-5">
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">1</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            <span className="text-primary [&_a]:text-inherit">Ownership was ambiguous</span> — was graphic design responsible, or UX?
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">2</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            <span className="text-primary [&_a]:text-inherit">The end state was hard to define</span> — Marketing Director, GTM Lead, or my manager as final say?
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">3</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            The CEO wouldn&apos;t accept <span className="text-primary [&_a]:text-inherit">a dark website</span>, so every direction had to work on light.
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">4</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            Meeting <span className="text-primary [&_a]:text-inherit">color-contrast accessibility across gradients, responsive breakpoints, and Conductor&apos;s challenging green brand color</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Simplified product visuals */}
                  <div>
                    <TwoColumnSection heading="Simplified product visuals that tease the functionality and stay future-proof.">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Rather than screenshot the current UI, I built{' '}
                        <span className="text-primary [&_a]:text-inherit">abstracted product visuals</span> that
                        communicate the product&apos;s value without locking the site to any
                        specific build — so the page holds up as the product continues to evolve.
                      </p>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock src="/images/conductor-product-visuals.webp" alt="Simplified, abstracted product visuals on the redesigned homepage" caption="Future-proof product visuals" />
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: New product icons */}
                  <div>
                    <TwoColumnSection heading="A new product icon set with cross-team buy-in.">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        I designed the icon set anchored on{' '}
                        <span className="text-primary [&_a]:text-inherit">color associations from one department</span>,
                        then refined it with the broader design team. The final set earned
                        immediate buy-in from the Go-to-Market lead and Marketing Director — a
                        rare outcome in a project with this many cooks in the kitchen.
                      </p>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock src="/images/conductor-product-icons.webp" alt="Redesigned product icon set shown on the Conductor homepage" caption="New product icons" />
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Scannable sections */}
                  <div>
                    <TwoColumnSection heading="Scannable sections with custom, copy-driven illustrations.">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        A net-new pattern: <span className="text-primary [&_a]:text-inherit">hyper-simple custom illustrations</span>{' '}
                        that are visually cohesive and help tell the story of the copy. The copy{' '}
                        <span className="text-primary [&_a]:text-inherit">directly</span> informed what I made — each
                        illustration earns its place by reinforcing a specific sentence on the page.
                      </p>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock type="video" src="/images/conductor-website-sub-menu-improved.mp4" caption="Custom illustrations, paired to the copy they support" />
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Summary visual */}
                  <div>
                    <TwoColumnSection heading="The rest of the page, pulled together.">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        TODO: Expand on how the remaining sections tie back to the hero system — shared
                        shape language, motion, and color ways — so the whole homepage reads as
                        one cohesive moment rather than a stack of one-offs.
                      </p>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock src="/images/conductor-summary.webp" alt="Summary view of the redesigned homepage sections" caption="Summary view — the full homepage composition" />
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── IMPACT ──────────────────────────────── */}
                <section id="impact">
                  <Label>Impact</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    TODO: Impact headline (e.g. &ldquo;Launched on time, on-brand, and on-message&rdquo;)
                  </h2>

                  <div className="h-8" />

                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 flex-1 flex flex-col gap-4 justify-center">
                      <p className="text-h3 md:text-h2 font-normal text-primary">TODO: metric</p>
                      <p className="text-body-small md:text-body-big text-text-primary">
                        TODO: Quantitative impact (e.g. traffic lift, engagement, enterprise leads)
                      </p>
                    </div>
                    <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 flex-1 flex flex-col gap-4 justify-center">
                      <ArrowUpRight size={48} strokeWidth={1.5} className="text-primary" />
                      <p className="text-body-small md:text-body-big text-text-primary">
                        TODO: Qualitative impact (e.g. stakeholder feedback, brand perception shift)
                      </p>
                    </div>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── TAKEAWAYS ───────────────────────────── */}
                <section id="takeaways">
                  <Label>Takeaways</Label>
                  <TwoColumnSection heading="TODO: Takeaway headline">
                    <div>
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        The homepage now sets a visual bar the rest of the site can grow into.
                        The clear next step is to{' '}
                        <span className="text-primary [&_a]:text-inherit">formalize this work as a design system</span>{' '}
                        and roll it through the remaining pages as quickly as possible — because
                        the homepage now diverges meaningfully from everything behind it.
                      </p>
                      <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                        TODO: Personal takeaway — what you learned about leading a cross-functional
                        redesign under ambiguous decision ownership, and what you&apos;d do
                        differently next time.
                      </p>
                    </div>
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
                    <CaseStudyCard study={study} textOnTop />
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
