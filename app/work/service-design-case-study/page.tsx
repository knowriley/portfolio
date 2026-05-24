import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudyCard from '@/components/CaseStudyCard'
import TableOfContents from '@/components/TableOfContents'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ServiceBlueprintToggle from '@/components/ServiceBlueprintToggle'
import {
  Label,
  SectionDivider,
  ImageBlock,
  TwoColumnSection,
  MetadataGrid,
} from '@/components/case-study'
import { caseStudies, type CaseStudy } from '@/data/case-studies'

const study = caseStudies.find((s) => s.slug === 'service-design-case-study')!

export const metadata = {
  title: study.title,
}

const tocItems = [
  { label: 'Overview',     id: 'overview' },
  { label: 'Context',      id: 'context' },
  { label: 'Research',     id: 'research' },
  { label: 'Synthesis',    id: 'synthesis' },
  { label: 'Co-design',    id: 'co-design' },
  { label: 'Interventions', id: 'interventions' },
  { label: 'Impact',       id: 'impact' },
  { label: 'Reflection',   id: 'reflection' },
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

export default function ServiceDesignCaseStudyPage() {
  if (study.hidden) notFound()

  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>

        {/* ── Hero ── */}
        <div className="animate-fade-in-up">
          <section className="flex justify-center px-5 md:px-10 pt-10 md:pt-16 pb-8 md:pb-12">
            <div className="max-w-page w-full">
              <h1 className="text-h1 md:text-display font-normal text-text-primary">
                {study.title}
              </h1>
            </div>
          </section>

          {/* ── Cover image ── */}
          <div className="flex justify-center px-5 md:px-10 pb-10 md:pb-16">
            <div className="max-w-page w-full">
              <ImageBlock src="/images/service-design-cover.webp" alt="DX Center slide titled “GAs Takeover Early Funnel Prospecting,” showing the service flow with the Graduate Assistant role mediating between Client, DX Center Leads, and Professors" />
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
                      The DX Center is a service inside Pratt Institute&rsquo;s IXD program that recruits
                      and matches predominantly non-profit clients with student-project-driven
                      courses. They asked our team to help them{' '}
                      <span className="text-primary [&_a]:text-inherit">streamline the matching process</span> and{' '}
                      <span className="text-primary [&_a]:text-inherit">grow the volume of high-quality clients</span>{' '}
                      coming through the door.
                    </p>
                    <p className="mt-6">
                      I led research synthesis and service blueprint creation, then scoped two
                      design interventions — a dedicated Graduate Assistant role and a Faculty
                      Onboarding Kit — to widen the recruitment bottleneck and bring professors
                      into the process as collaborators, not bystanders.
                    </p>
                  </div>

                  <div className="h-12" />

                  <MetadataGrid items={[
                    { label: 'Role',     content: 'Lead Service Designer' },
                    { label: 'Team',     content: 'Multi-disciplinary IXD graduate team' },
                    { label: 'For',      content: 'Center for Digital Experiences, Pratt Institute' },
                    { label: 'Tools',    content: 'Figma, FigJam' },
                    { label: 'Timeline', content: 'Spring 2026, Jan – May' },
                    { label: 'Status',   content: 'Recommendations delivered' },
                  ]} />
                </section>

                <SectionDivider />

                {/* ────────────────────────────── CONTEXT ────────────────────────────── */}
                <section id="context">
                  <Label>Context</Label>

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 min-w-0">
                      <ImageBlock src="/images/service-design-context.webp" alt="DX Center context — Pratt Institute IXD program client matching service" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        The DX Center is a service within Pratt Institute&rsquo;s IXD program that
                        recruits and matches predominantly non-profit clients with student-project
                        driven courses in the IXD program.
                      </p>
                      <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                        The DX Center approached our team with the request to help in some key areas:
                      </p>
                      <ul className="text-body-small md:text-body-big text-text-secondary mt-4 list-disc pl-5 space-y-2">
                        <li>
                          <span className="text-primary [&_a]:text-inherit">Streamline the matching process</span>{' '}
                          to reduce back-and-forth friction.
                        </li>
                        <li>
                          <span className="text-primary [&_a]:text-inherit">Increase the reach of client recruitment</span>{' '}
                          — getting a higher volume of high-quality clients.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── RESEARCH ────────────────────────────── */}
                <section id="research">
                  <Label>Research</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    Structured interviews with the people who run the service.
                  </h2>

                  <div className="h-12" />

                  <p className="text-body-small md:text-body-big text-text-secondary">
                    To understand the current processes, we ran structured interviews with the DX
                    Center Leads and a representative set of professors who run the
                    project-driven courses.
                  </p>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── SYNTHESIS ────────────────────────────── */}
                <section id="synthesis">
                  <Label>Synthesis</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    Mapping the current service to find where it actually broke.
                  </h2>

                  <div className="h-12" />

                  <p className="text-body-small md:text-body-big text-text-secondary">
                    I synthesized those findings into a service blueprint that mapped the service
                    across five stages:{' '}
                    <span className="text-primary [&_a]:text-inherit">Outreach, Contact, Review &amp; Evaluation, Additional Intake, and Client Secured</span>.
                  </p>

                  <div className="h-12" />
                  <ServiceBlueprintToggle />

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Bottleneck */}
                  <div>
                    <TwoColumnSection heading="The DX Center was the bottleneck.">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Progress depended almost entirely on the DX Center Leads. Because they
                        handled all outreach and client communication themselves, they didn&rsquo;t
                        have capacity to respond to every potential client — even though they
                        knew{' '}
                        <span className="text-primary [&_a]:text-inherit">engagement directly drove quality client recruitment</span>. When the
                        Leads got pulled into other work, the entire process stalled.
                      </p>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock src="/images/service-design-bottleneck-mapped.webp" alt="Illustration mapping the DX Center recruitment bottleneck — workload concentrated on the DX Center Leads" caption="DX Center bottleneck mapped" />
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Subsection: Downstream effects */}
                  <div>
                    <TwoColumnSection heading="And that bottleneck caused delayed communication, mismatched expectations, and stakeholder stress.">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Minimal communication with professors during recruitment built anxiety
                        and{' '}
                        <span className="text-primary [&_a]:text-inherit">decreased confidence in the success of their course</span>. The bottleneck
                        at the early stage was producing negative downstream effects two and
                        three roles removed.
                      </p>
                    </TwoColumnSection>
                    <div className="h-12" />
                    <ImageBlock src="/images/service-design-professor-experience.webp" alt="Diagram mapping the professor’s experience during recruitment — minimal communication producing anxiety and decreased confidence" caption="Professor experience mapped" />
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── CO-DESIGN ────────────────────────────── */}
                <section id="co-design">
                  <Label>Co-design</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    From themes to opportunities — a co-design workshop with both sides of the
                    service.
                  </h2>

                  <div className="h-12" />

                  <p className="text-body-small md:text-body-big text-text-secondary">
                    With those initial findings in hand, I proposed a co-design workshop with the
                    DX Center Leads and professors together.
                  </p>

                  <div className="h-12 md:h-24" />

                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    Build empathy between the two actors by having them map and share their own
                    experiences inside the service.
                  </h2>

                  <div className="h-12" />
                  <ImageBlock src="/images/service-design-journey-map-empathy.webp" alt="Journey-map activity from the co-design workshop — participants mapping and sharing their own experiences inside the service" caption="Journey-mapping activity — building empathy through shared experience" />

                  <div className="h-12 md:h-24" />

                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    Let them identify, prioritize, and co-design against the biggest existing pain
                    points themselves.
                  </h2>

                  <div className="h-12" />
                  <ImageBlock src="/images/service-design-prioritization.webp" alt="Prioritization activity from the co-design workshop — DX Center Leads and professors ranking the biggest pain points themselves" caption="Stakeholders prioritizing pain points during the co-design workshop" />

                  <div className="h-12 md:h-24" />

                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    Have professors envision themselves as part of the recruitment process.
                  </h2>

                  <div className="h-12" />

                  <p className="text-body-small md:text-body-big text-text-secondary">
                    In the co-creation activity, professors mapped what their ideal involvement in
                    recruitment could look like — what they&rsquo;d want to own, where they&rsquo;d
                    want the DX Center to step in, and what artifacts would help them feel confident
                    doing it. The specifics they surfaced became the{' '}
                    <span className="text-primary [&_a]:text-inherit">seed for the Faculty Onboarding Kit</span>{' '}
                    (intervention 2 below) — every piece of the kit traces back to something a
                    professor said they&rsquo;d need.
                  </p>

                  <div className="h-12" />
                  <ImageBlock src="/images/service-design-co-creation.webp" alt="Co-creation activity — professors mapping their ideal involvement in the recruitment process" caption="Professors co-creating their role in the recruitment workflow" />

                  <div className="h-12" />

                  <p className="text-body-small md:text-body-big text-text-secondary">
                    The workshop was{' '}
                    <span className="text-primary [&_a]:text-inherit">an absolute success</span>. All participants demonstrated empathy and
                    understanding for the other side&rsquo;s experience, and their conversations
                    echoed our team&rsquo;s working hypotheses while adding richer insights and
                    suggestions that ultimately drove our proposed interventions.
                  </p>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── INTERVENTIONS ────────────────────────────── */}
                <section id="interventions">
                  <Label>Solution</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    Two interventions: shift workload off the leads, and give faculty real tools.
                  </h2>

                  <div className="h-12 md:h-24" />

                  {/* Intervention 1: GA Role */}
                  <div>
                    <TwoColumnSection heading="Intervention 1 — a Graduate Assistant role dedicated to early-stage recruitment.">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        To release pressure on the DX Center Leads, I proposed a{' '}
                        <span className="text-primary [&_a]:text-inherit">Graduate Assistant role</span> dedicated entirely to early-stage client
                        recruitment. The GA owns the end-to-end process: outreach, intake
                        conversations, pipeline management, and the templated communications that
                        keep prospects moving. The Leads keep the work that genuinely requires
                        their judgment — defining course needs and handling the unique assignment
                        problems that templates can&rsquo;t solve.
                      </p>
                    </TwoColumnSection>

                    <div className="h-12" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ImageBlock src="/images/service-design-bottleneck-before.webp" alt="Diagram of the recruitment flow before intervention — DX Center Leads handle outreach, intake, and pipeline themselves" caption="DX Center bottleneck — before intervention" />
                      <ImageBlock src="/images/service-design-bottleneck-after.webp" alt="Diagram of the recruitment flow after intervention — Graduate Assistant owns outreach, intake, and pipeline; Leads retain judgment work" caption="DX Center bottleneck — after intervention" />
                    </div>

                    <div className="h-12" />

                    <p className="text-body-small md:text-body-big text-text-secondary">
                      I scoped the role intentionally to look like a job a graduate student would
                      want and learn from:{' '}
                      <span className="text-primary [&_a]:text-inherit">roughly 60% client account management, 40% process and content ownership</span>.
                      That split also opens up a design opportunity for the student — designing the
                      recruitment processes and measuring their impact.
                    </p>
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Intervention 2: Faculty Onboarding Kit */}
                  <div>
                    <TwoColumnSection heading="Intervention 2 — a Faculty Onboarding Kit that turns recipients into collaborators.">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Both the blueprint and the workshop highlighted how absent professors felt
                        in the early recruitment stages. For some that was fine; for others it
                        created anxiety. A unanimously approved idea from the workshop was to{' '}
                        <span className="text-primary [&_a]:text-inherit">optionally invite professors into recruitment</span> and give them the
                        right tools to do it confidently.
                      </p>
                    </TwoColumnSection>

                    <div className="h-12" />

                    <p className="text-body-small md:text-body-big text-text-secondary">
                      From that idea, the Faculty Onboarding Kit was born — a packet professors
                      receive at week -4 containing five pieces:
                    </p>

                    <div className="h-8" />

                    <div className="flex flex-col gap-5">
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">1</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            A <span className="text-primary [&_a]:text-inherit">Client Collaboration Guide</span> explaining the working model.
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">2</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            A <span className="text-primary [&_a]:text-inherit">Working with DX Center</span> overview.
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">3</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            A <span className="text-primary [&_a]:text-inherit">Recruitment Timeline</span> with milestones.
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">4</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            A <span className="text-primary [&_a]:text-inherit">&ldquo;Wait or Reach Out&rdquo; decision guide</span> for handling silence.
                          </p>
                        </div>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <div className="flex gap-4 items-center">
                          <span className="text-body-biggest text-primary shrink-0">5</span>
                          <p className="text-body-small md:text-body-big text-text-primary">
                            <span className="text-primary [&_a]:text-inherit">Templates &amp; Artifacts</span> professors can use to surface clients from
                            their own networks.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="h-12" />

                    <p className="text-body-small md:text-body-big text-text-secondary">
                      The kit shifts the professor&rsquo;s role from passive recipient to potential
                      collaborator. The redesigned journey flips the emotional arc: professors
                      move from <span className="text-primary [&_a]:text-inherit">Curiosity → Clarity → Awareness → Confidence → Excitement</span>, and
                      arrive at semester start <span className="text-primary [&_a]:text-inherit">Prepared</span>.
                    </p>

                    <div className="h-12" />
                    <ImageBlock src="/images/service-design-professor-journey.webp" alt="Improved professor journey — emotional arc moves from Curiosity through Clarity, Awareness, Confidence, and Excitement, arriving at semester start Prepared" caption="Improved professor journey" />

                    <div className="h-12" />

                    <p className="text-body-small md:text-body-big text-text-secondary">
                      The risk worth naming is that professors recruiting independently can
                      introduce inconsistency — projects sourced outside the Center&rsquo;s vetting
                      process may not match its quality bar, and professors lose visibility into
                      how proposals are evaluated when they bypass the system entirely. The
                      kit&rsquo;s templates and intake forms are the guardrails, but the longer-term
                      answer is{' '}
                      <span className="text-primary [&_a]:text-inherit">keeping the Center in the loop even when professors bring their own leads</span>.
                    </p>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── IMPACT ────────────────────────────── */}
                <section id="impact">
                  <Label>Impact</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    Empathy first — the design changes follow.
                  </h2>

                  <div className="h-12" />

                  <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 md:py-10">
                    <p className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                      &ldquo;I&rsquo;ve never really thought about the professors&rsquo; experiences before.
                      Just going through the interview and the workshop alone really changed
                      that, and I think it can be better.&rdquo;
                    </p>
                    <p className="text-body-small text-text-tertiary mt-6">
                      — DX Center Lead, final presentation
                    </p>
                  </div>

                  <div className="h-8" />

                  <p className="text-body-small md:text-body-big text-text-secondary">
                    If implemented, we anticipate that these interventions will{' '}
                    <span className="text-primary [&_a]:text-inherit">broaden the reach and improve the quality of DX Center recruitment</span>,
                    while improving the experience of the service&rsquo;s actors on both sides.
                  </p>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── REFLECTION ────────────────────────────── */}
                <section id="reflection">
                  <Label>Reflection</Label>
                  <TwoColumnSection heading="The bottleneck wasn’t a process step. It was a person.">
                    <div>
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        The instinct with a service like this is to{' '}
                        <span className="text-primary [&_a]:text-inherit">reach for automation</span>. But the blueprint made it clear that the
                        bottleneck wasn&rsquo;t a process step — it was a person, and no amount of
                        tooling would have changed that.
                      </p>
                      <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                        What moved the work forward was{' '}
                        <span className="text-primary [&_a]:text-inherit">research</span> — specifically the interviews and co-design sessions
                        that let us see the service from inside each role. Without that, I think
                        we would have optimized the wrong thing.
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
                {nextStudies.map((nextStudy) => (
                  <div key={nextStudy.slug} className="flex-1 min-w-0">
                    <CaseStudyCard study={nextStudy} />
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
