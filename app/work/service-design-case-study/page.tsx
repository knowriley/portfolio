import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudyCard from '@/components/CaseStudyCard'
import TableOfContents from '@/components/TableOfContents'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ServiceBlueprintToggle from '@/components/ServiceBlueprintToggle'
import BeforeAfterToggle from '@/components/BeforeAfterToggle'
import InlineLink from '@/components/InlineLink'
import {
  Label,
  SectionDivider,
  ImageBlock,
  TwoColumnSection,
  MetadataGrid,
} from '@/components/case-study'
import { caseStudies } from '@/data/case-studies'

const study = caseStudies.find((s) => s.slug === 'service-design-case-study')!

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
  { label: 'Overview',     id: 'overview' },
  { label: 'Context',      id: 'context' },
  { label: 'Research', id: 'research' },
  { label: 'Co-design',    id: 'co-design' },
  { label: 'Interventions', id: 'interventions' },
  { label: 'Impact',       id: 'impact' },
  { label: 'Reflection',   id: 'reflection' },
]

const nextStudy = caseStudies.find(
  (s) => !s.hidden && s.slug !== 'service-design-case-study',
)!

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
                      courses. They approached our team to help them{' '}
                      <span className="text-primary [&_a]:text-inherit">improve efficiency of internal DX Center workflows</span> and{' '}
                      <span className="text-primary [&_a]:text-inherit">grow the volume of high-quality clients</span>{' '}
                      coming through the door.
                    </p>
                    <p className="mt-6">
                      I led research synthesis and service blueprint creation, then scoped three
                      design interventions — a dedicated Graduate Assistant role, a Faculty
                      Onboarding Kit, and a plain-language intake form — to widen the recruitment
                      bottleneck and bring professors into the process as collaborators, not
                      bystanders.
                    </p>
                  </div>

                  <div className="h-12" />

                  <MetadataGrid items={[
                    { label: 'Role',     content: 'Service Designer' },
                    { label: 'Team',     content: 'Myself, 1 Visual Designer, 1 User Researcher, 1 Project Manager' },
                    { label: 'For',      content: (
                      <InlineLink href="https://prattdx.org/" external variant="icon">Center for Digital Experiences, Pratt Institute</InlineLink>
                    ) },
                    { label: 'Tools',    content: 'Figma, FigJam' },
                    { label: 'Timeline', content: 'Jan 2026 - May 2026' },
                    { label: 'Status',   content: 'Recommendations delivered' },
                  ]} />
                </section>

                <SectionDivider />

                {/* ────────────────────────────── CONTEXT ────────────────────────────── */}
                <section id="context">
                  <Label>Context</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3] [&_a]:text-inherit">
                    The Center for Digital Experiences (DX Center) is a service within Pratt
                    Institute&rsquo;s IXD program that{' '}
                    <span className="text-primary">recruits and matches non-profit clients with student-project driven courses in the IXD program</span>.
                  </h2>

                  <div className="h-12" />

                  <ImageBlock src="/images/service-design-context.webp" alt="DX Center Homepage of their website" caption="DX Center Homepage" />

                  <div className="h-12 md:h-24" />

                  <p className="text-body-small md:text-body-big text-text-secondary">
                    The DX Center approached our team with two broad goals:
                  </p>

                  <div className="flex flex-col md:flex-row gap-5 mt-6">
                    <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 flex-1">
                      <div className="flex gap-4 items-start">
                        <span className="text-body-biggest text-primary shrink-0">1</span>
                        <p className="text-body-small md:text-body-big text-text-primary">
                          Increase the volume and quality of client applications
                        </p>
                      </div>
                    </div>
                    <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 flex-1">
                      <div className="flex gap-4 items-start">
                        <span className="text-body-biggest text-primary shrink-0">2</span>
                        <p className="text-body-small md:text-body-big text-text-primary">
                          Improve efficiency of internal DX Center workflows
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <SectionDivider />

                {/* ─────────────────────── RESEARCH & SYNTHESIS ─────────────────────── */}
                <section id="research">
                  <Label>Research &amp; Synthesis</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    Structured interviews with all stakeholders and a thorough collection of
                    touchpoint artifacts.
                  </h2>

                  <div className="h-12" />

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 min-w-0">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        To fully understand the end-to-end service (current recruitment
                        strategies, internal processes, outcomes, etc), and actors&rsquo;
                        experiences within the service, we ran structured interviews with the DX
                        Center Leads and a representative set of professors who run the
                        project-driven courses. We also compiled all external and internal-facing
                        materials to understand communication and tools in use at different
                        touchpoints of the service.
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <ImageBlock src="/images/service-design-application-form.webp" alt="Snapshot of the current project application form." caption="Current Project Application Form" />
                    </div>
                  </div>
                  <div className="h-12 md:h-24" />

                  {/* ── Synthesis ── */}
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 min-w-0">
                      <Label>Synthesis</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Mapping the current service to identify bottlenecks and opportunities
                      </h2>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        I then synthesized these findings into a service blueprint so we could
                        visualize and evaluate the service as whole. At a high level, the process
                        works like this:
                      </p>

                      <div className="h-4" />

                      <ul className="list-disc pl-6 space-y-2 text-body-small md:text-body-big text-text-secondary">
                        <li>
                          Craig begins recruitment for the upcoming semester ~1 month out from
                          project start date.
                        </li>
                        <li>
                          Client project proposals are made via a Google form, which
                          autopopulates in an Airtable with potential course mappings
                        </li>
                        <li>
                          Craig manually reviews Airtable and adjusts assignments based on course
                          requirements, professor feedback and clients&rsquo; clarifying
                          information.
                        </li>
                        <li>
                          Craig finalizes assignments and notifies professors so they can make
                          the initial contact.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="h-12" />
                  <ServiceBlueprintToggle />

                  <div className="h-12 md:h-24" />

                  {/* ── Key Findings ── */}
                  <Label>Key Findings</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    When Craig did it all, communication broke down and left professors and
                    potential clients in the dark.
                  </h2>

                  <div className="h-12" />

                  {/* Finding 1: Craig did everything */}
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
                        Every task ran through one person — personalized communication, manual
                        notifications, hands-on coordination of everything.
                      </h3>
                      <div className="h-6" />
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Craig manually sent email blasts to previous clients, handled all
                        communication with ad-hoc personalized responses (because it had proven to
                        produce better conversion outcomes), reviewed initial client-to-course
                        auto-matching in the Airtable database and coordinated all manual review
                        and finalization of assignments with professors.
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <ImageBlock src="/images/service-design-bottleneck-mapped.webp" alt="Illustration mapping the DX Center recruitment bottleneck — workload concentrated on the DX Center Leads" caption="Bottleneck identification & zoom-in on the service blueprint" />
                    </div>
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Finding 2: Professors stuck waiting */}
                  <div>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
                          Professors got stuck in a waiting cycle, creating stress and weakening
                          confidence they&rsquo;d get clients on-time.
                        </h3>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-body-small md:text-body-big text-text-secondary">
                          Professors had some correspondence with Craig mid-match process, but
                          could go a week or two with silence as client project start dates
                          quickly approached.{' '}
                          <span className="text-primary [&_a]:text-inherit">Lack of communication made professors feel anxious</span>{' '}
                          they&rsquo;d have to pivot their course structure at the last minute or
                          rapidly onboard a set of ill-matched clients right at the deadline.
                        </p>
                      </div>
                    </div>
                    <div className="h-12" />
                    <ImageBlock src="/images/service-design-professor-experience.webp" alt="Diagram mapping the professor’s experience during recruitment — minimal communication producing anxiety and decreased confidence" caption="Professor experience mapped" />
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Finding 3: Promising clients left in the dark */}
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
                        Promising clients were getting left in the dark
                      </h3>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Every recruitment cycle is different, and sometimes there are more
                        clients than the program can place.{' '}
                        <span className="text-primary [&_a]:text-inherit">Craig doesn&rsquo;t have the capacity to respond to everyone, so clients who weren&rsquo;t a fit this time, but could have been next time, never heard back.</span>{' '}
                        This is a service design failure: there should be{' '}
                        <InlineLink href="https://good.services/principle-10" external>no dead ends</InlineLink>, every actor should get a{' '}
                        <InlineLink href="https://good.services/principle-14" external>clear explanation for decisions</InlineLink>, and{' '}
                        <InlineLink href="https://good.services/principle-15" external>human assistance</InlineLink> should always be within reach.
                      </p>
                    </div>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── CO-DESIGN ────────────────────────────── */}
                <section id="co-design">
                  <Label>Co-design</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3] [&_a]:text-inherit">
                    Craig and professors had a clear mismatch in communication expectations —{' '}
                    <span className="text-primary">I saw co-design as an opportunity to build mutual empathy between actors</span>{' '}
                    in addition to co-creating design interventions.
                  </h2>

                  <div className="h-12" />
                  <ImageBlock src="/images/service-design-workshop-planning.webp" alt="Sticky-note board from planning the co-design workshop — candidate workshop formats, with the chosen option (co-design with Craig and a handful of professors, to envision the ideal collaboration and shared information space) highlighted" caption="Scoping the co-design workshop" />

                  <div className="h-12 md:h-24" />

                  <p className="text-body-small md:text-body-big text-text-secondary">
                    In the first stage of the workshop, we had Craig and the professors each map
                    their own personal journey following the last recruitment cycle and share what
                    they created to build empathy and shared understanding.
                  </p>

                  <div className="h-12" />
                  <ImageBlock src="/images/service-design-journey-map-empathy.webp" alt="Journey-map activity from the co-design workshop — participants mapping and sharing their own experiences inside the service" caption="Journey-mapping activity — building empathy through shared experience" />

                  <div className="h-12 md:h-24" />

                  <p className="text-body-small md:text-body-big text-text-secondary">
                    We then guided them through prioritized pain-point identification and the
                    co-creation of the &ldquo;ideal workflow.&rdquo;
                  </p>

                  <div className="h-12" />
                  <ImageBlock src="/images/service-design-prioritization.webp" alt="Prioritization activity from the co-design workshop — DX Center Leads and professors ranking the biggest pain points themselves" caption="Prioritizing pain points during the co-design workshop" />

                  <div className="h-12" />
                  <ImageBlock src="/images/service-design-ideal-workflow.webp" alt="“Creating an Ideal Workflow” activity board from the co-design workshop — participants choose a card, assign an actor, and add a connector to map the ideal recruitment flow across stages like Outreach and Initial Contact" caption="Co-creating the ideal recruitment workflow" />

                  <div className="h-12 md:h-24" />

                  {/* ── Key Insights ── */}
                  <Label>Key Insights</Label>

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Professors wanted more involvement in the recruitment process
                      </h2>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        In the co-creation activity, professors mapped what their ideal
                        involvement in recruitment could look like — what they&rsquo;d want to own,
                        where they&rsquo;d want the DX Center to step in, and what artifacts would
                        help them feel confident doing it. The specifics they surfaced became the{' '}
                        <span className="text-primary [&_a]:text-inherit">seed for the Faculty Onboarding Kit</span>{' '}
                        (intervention 2 below) — every piece of the kit traces back to something a
                        professor said they&rsquo;d need.
                      </p>
                    </div>
                  </div>

                  <div className="h-12 md:h-24" />

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Prospective clients struggle to identify which project type they&rsquo;re
                        best suited for
                      </h2>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Both professors and Craig kept returning to the same gap: prospective
                        clients often don&rsquo;t understand the different project types being
                        offered. For both professors and Craig, the priority is always protecting the
                        students&rsquo; ability to execute the learning outcomes and the specific
                        deliverables a course is built around.{' '}
                        <span className="text-primary [&_a]:text-inherit">When a client can&rsquo;t accurately identify the type of work they need most, or what they&rsquo;ll actually &ldquo;get&rdquo; at the end, the &ldquo;messy middle&rdquo; of matching them to the right course drags on far longer than it should.</span>
                      </p>
                    </div>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── INTERVENTIONS ────────────────────────────── */}
                <section id="interventions">
                  <Label>Proposed Interventions</Label>
                  <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                    Three interventions: a dedicated GA, faculty as recruiters, and a
                    plain-language intake form.
                  </h2>

                  <div className="h-12 md:h-24" />

                  {/* Intervention 1: GA Role */}
                  <div>
                    <Label>Intervention 1</Label>
                    <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                      A Graduate Assistant role dedicated to early-stage recruitment and
                      preliminary matching, so Craig can handle the sticky stuff.
                    </h2>

                    <div className="h-12" />

                    <p className="text-body-small md:text-body-big text-text-secondary">
                      To release pressure on the DX Center Leads, I proposed a Graduate Assistant
                      (GA) role dedicated entirely to early-stage client recruitment and ownership
                      of the DX Center&ndash;client relationship. The GA would take over all DX
                      Center recruitment, early client communications, and preliminary matching.
                      GAs are students in Pratt&rsquo;s IXD program themselves, so they have
                      sufficient knowledge to make judgments on initial matching.
                    </p>
                    <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                      <span className="text-primary [&_a]:text-inherit">Craig keeps the work that genuinely requires his judgment</span>: defining
                      course needs and handling the unique assignment problems that templates
                      can&rsquo;t solve.
                    </p>

                    <div className="h-12" />

                    <BeforeAfterToggle
                      before={{ src: '/images/service-design-bottleneck-before.webp', alt: 'Diagram of the recruitment flow before intervention — DX Center Leads handle outreach, intake, and pipeline themselves' }}
                      after={{ src: '/images/service-design-bottleneck-after.webp', alt: 'Diagram of the recruitment flow after intervention — Graduate Assistant owns outreach, intake, and pipeline; Leads retain judgment work' }}
                      caption="DX Center bottleneck — before and after the Graduate Assistant role"
                    />

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
                    <Label>Intervention 2</Label>
                    <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                      Faculty onboarding kit
                    </h2>

                    <div className="h-12" />

                    <p className="text-body-small md:text-body-big text-text-secondary">
                      Both the blueprint and the workshop highlighted how absent professors felt
                      in the early recruitment stages. For some that was fine; for others it
                      created anxiety. A unanimously approved idea from the workshop was to{' '}
                      <span className="text-primary [&_a]:text-inherit">optionally invite professors into recruitment and give them the
                      right tools to do it confidently</span>. The kit would include:
                    </p>

                    <div className="h-8" />

                    <div className="flex flex-col gap-5">
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <p className="text-body-small md:text-body-big text-text-primary">
                          <span className="text-primary [&_a]:text-inherit">Context-setting content:</span> purpose and working model of students&rsquo; client projects, the professors&rsquo; role, and the recruitment timeline.
                        </p>
                      </div>
                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <p className="text-body-small md:text-body-big text-text-primary">
                          <span className="text-primary [&_a]:text-inherit">Tools to recruit:</span> email templates and marketing materials for professors who optionally want to recruit for their course, a guide to what makes an acceptable client (must be a non-profit, etc.), and the outlined process and constraints for getting DX Center approval.
                        </p>
                      </div>
                    </div>

                    <div className="h-12" />

                    <p className="text-body-small md:text-body-big text-text-secondary">
                      The kit shifts the professor&rsquo;s role from passive recipient to informed
                      collaborator and potential recruiter. The redesigned journey flips the
                      emotional arc: professors move from Curiosity → Clarity → Awareness →
                      Confidence → Excitement, and arrive at semester start Prepared.
                    </p>

                    <div className="h-12" />
                    <BeforeAfterToggle
                      before={{ src: '/images/service-design-professor-experience.webp', alt: 'Diagram mapping the professor’s experience during recruitment — minimal communication producing anxiety and decreased confidence' }}
                      after={{ src: '/images/service-design-professor-journey.webp', alt: 'Improved professor journey — emotional arc moves from Curiosity through Clarity, Awareness, Confidence, and Excitement, arriving at semester start Prepared' }}
                      caption="Professor experience — before and after the recruitment kit"
                    />

                    <div className="h-12" />

                    <p className="text-body-small md:text-body-big text-text-secondary">
                      Enabling professors to recruit for their courses additionally{' '}
                      <span className="text-primary [&_a]:text-inherit">creates another channel for high-quality client recruitment</span>.
                      Clients will be high-quality because professors are the experts on their
                      courses&rsquo; needs, and more professors recruiting minimizes the pressure
                      on the DX Center to recruit all clients itself.
                    </p>
                  </div>

                  <div className="h-12 md:h-24" />

                  {/* Intervention 3: New intake form */}
                  <div>
                    <Label>Intervention 3</Label>
                    <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                      A new intake form that shows plain-language deliverables instead of
                      jargon-heavy course topics.
                    </h2>

                    <div className="h-12" />

                    <p className="text-body-small md:text-body-big text-text-secondary">
                      Without jargon as an obstacle,{' '}
                      <span className="text-primary [&_a]:text-inherit">prospective clients can better self-identify their own needs</span> and
                      have <span className="text-primary [&_a]:text-inherit">more accurate expectations of the project outcomes</span>.
                    </p>
                    <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                      This should create stronger initial course assignments, reducing the
                      &ldquo;messy middle&rdquo; untangling. It also elevates visibility to, and
                      protects execution toward, student learning outcomes — which both Craig and
                      the professors named as their shared top priority for every semester.
                    </p>

                    <div className="h-12" />
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 min-w-0">
                        <ImageBlock
                          src="/images/service-design-intake-before.webp"
                          alt="Original intake form listing jargon-heavy course topics like User Interface Design and Usability Testing with Eye-Tracking, each marked full or half semester"
                          caption="Before — jargon-heavy course topics"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <ImageBlock
                          src="/images/service-design-intake-after.webp"
                          alt="Redesigned plain-language intake form asking what are you looking for help with, offering options like make my website or app easier to use"
                          caption="After — plain-language deliverables"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── IMPACT ────────────────────────────── */}
                <section id="impact">
                  <Label>Impact</Label>

                  <p className="font-normal text-h3 md:text-h2 lg:text-h1 bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink [&_a]:text-inherit">
                    &ldquo;I&rsquo;ve never really thought about the professors&rsquo; experiences before.
                    Just going through the interview and the workshop alone really changed that,
                    and I think it can be better.&rdquo;
                  </p>
                  <p className="text-body-big text-text-tertiary text-right mt-6">
                    — Craig
                  </p>
                </section>

                <SectionDivider />

                {/* ────────────────────────────── REFLECTION ────────────────────────────── */}
                <section id="reflection">
                  <Label>Reflection</Label>
                  <TwoColumnSection heading="The work created impact before anything was implemented.">
                    <p className="text-body-small md:text-body-big text-text-secondary">
                      The most striking outcome wasn&rsquo;t a single intervention — it was the
                      workshop itself. Getting Craig and the professors in one room to map and
                      share their experiences{' '}
                      <span className="text-primary [&_a]:text-inherit">already shifted how each side understood the other</span>, before a single
                      change was made.
                    </p>
                  </TwoColumnSection>

                  <div className="h-12 md:h-24" />

                  <TwoColumnSection heading="Automation isn’t always the answer.">
                    <p className="text-body-small md:text-body-big text-text-secondary">
                      Craig&rsquo;s tailored, personal communication was converting better than any
                      template would, and because of the size of the program and its course
                      offerings, the scale was manageable — the DX Center supports a fixed set of
                      courses and a steady volume of requests, and the program isn&rsquo;t expanding.
                      The answer wasn&rsquo;t to replace the human touch with tooling, but to give a
                      dedicated GA the capacity to keep responses tailored while building the
                      templates that make that sustainable. With a fixed budget already allocated to
                      Graduate Assistants and none set aside for AI, that was also the most accessible
                      way to keep communication personal.
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
          <div className="flex justify-center px-5 md:px-10 pb-12 md:pb-24">
            <div className="max-w-page w-full">
              <SectionDivider />
              <Label>Next</Label>
              <CaseStudyCard study={nextStudy} textOnTop />
            </div>
          </div>
        </AnimateOnScroll>

      </main>
      <Footer />
    </>
  )
}
