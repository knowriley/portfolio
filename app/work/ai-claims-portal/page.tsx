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
  NumberedCallout,
  TwoColumnSection,
} from '@/components/case-study'
import InlineLink from '@/components/InlineLink'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/data/case-studies'
import { isUnlocked } from '@/lib/case-study-lock'

const study = caseStudies.find((s) => s.slug === 'ai-claims-portal')!

export const metadata = {
  title: `${study.title} — Riley Knowles`,
}

const nextStudy = caseStudies.find(
  (s) => !s.hidden && s.slug !== 'ai-claims-portal',
)!

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function AiClaimsPortalCaseStudyPage() {
  const unlocked = await isUnlocked()

  const tocItems = unlocked
    ? [
        { label: 'Overview',         id: 'overview' },
        { label: 'Problem',          id: 'problem' },
        { label: 'Strategy',         id: 'strategy' },
        { label: 'Inflection Point', id: 'inflection-point' },
        { label: 'My Proposal',      id: 'my-proposal' },
        { label: 'Solution',         id: 'solution' },
        { label: 'Impact',           id: 'impact' },
        { label: 'Takeaways',        id: 'takeaways' },
      ]
    : [{ label: 'Overview', id: 'overview' }]

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
                <TableOfContents items={tocItems} smoothScroll />
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
                      <span className="text-primary [&_a]:text-inherit">I led the design strategy, redesign and successful measurement of the Chubb Benefits consumer claims portal unification initiative, supporting 350K customers,</span>
                      {' '}owning the re-design of the claims, billing, coverages and notifications experiences.
                    </p>
                    <p className="mt-6">
                      When the original implementation strategy was abandoned, I stepped into a leadership role to own the relationship between design and engineering, and developed a new, successful design strategy that would (a) allow us to meet the delivery timeline, (b) keep designers as the design authority, (c) introduce meaningful user experience improvements.
                    </p>
                    <p className="mt-6">
                      I additionally scaffolded the entire metrics-tracking dashboard in FullStory and partnered with product owners to define delivery success metrics, as well as personally owned the claims, billing and coverages experiences on the website.
                    </p>
                  </div>

                  <div className="h-12" />

                  <MetadataGrid items={[
                    { label: 'Role',     content: 'Lead Experience Designer' },
                    { label: 'Team',     content: 'Myself, 3 Product Owners, 2 Claims Business Analysts, 1 Technical Business Analyst, 1 Project Manager, 1 Principal Engineer, 1 Testing Lead, 8 Offshore Developers' },
                    { label: 'For',      content: (
                      <InlineLink href="https://www.chubb.com/" external variant="icon">Chubb</InlineLink>
                    ) },
                    { label: 'Tools',    content: (
                      <>
                        Figma,{' '}
                        <InlineLink href="https://www.fullstory.com/" external>
                          FullStory
                        </InlineLink>
                      </>
                    ) },
                    { label: 'Timeline', content: 'Jan 2026 – Apr 2026' },
                    { label: 'Status',   content: 'In testing' },
                  ]} />
                </section>

                {/* ── Gate ── */}
                {unlocked ? (
                  <>
                    <SectionDivider />

                    {/* ────────────────────────────── PROBLEM ────────────────────────────── */}
                    <section id="problem">
                      <Label>Background</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-secondary leading-[1.3]">
                        2 portals, 3 customer segments, 3 backend billing systems
                      </h2>

                      <div className="h-4" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Chubb Benefits offers supplemental insurance products to three distinct customer segments:
                      </p>

                      <div className="h-4" />

                      <div className="flex flex-col gap-5">
                        <NumberedCallout number="1">
                          Individuals who purchase coverage directly, like self-employed policyholders managing their own bills
                        </NumberedCallout>
                        <NumberedCallout number="2">
                          Employees who receive coverage through their employer and are named on the policy.
                        </NumberedCallout>
                        <NumberedCallout number="3">
                          Employees who receive coverage through their employer and are not named on the policy.
                        </NumberedCallout>
                      </div>

                      <div className="h-8" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Despite serving these customers under the same brand, Chubb Benefits maintained two separate self-service portals each with a different feature set and different visual identity.{' '}
                        <span className="text-primary [&_a]:text-inherit">Which portal a customer used had nothing to do with who they were or even how their coverage worked</span>
                        {' '}- it was determined entirely by which back-end billing system their policy happened to live in.
                      </p>

                      <SectionDivider />

                      <Label>Problem</Label>
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0">
                          <h2 className="text-h3 md:text-h2 font-normal text-text-secondary leading-[1.3]">
                            One customer cannot use two portals for coverages from the same brand.
                          </h2>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-body-small md:text-body-big text-text-secondary">
                            Chubb Benefits was about to onboard a new block of customers whose policies could span both billing systems.{' '}
                            <span className="text-primary [&_a]:text-inherit">Those customers would have needed two separate logins for two different websites, just to manage coverage from the same company.</span>
                          </p>
                        </div>
                      </div>
                    </section>

                    <SectionDivider />

                    {/* ────────────────────────────── STRATEGY ───────────────────────────── */}
                    <section id="strategy">
                      <Label>Strategy</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Targeted, surgical design updates on a consolidated existing portal
                      </h2>

                      <div className="h-8" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        The team defined a focused, intentional consolidation strategy suitable to our tight timeline rather than going with a ground-up rebuild. We would use Portal A as the foundation - it already had the most complete feature set and serviced the majority of Chubb Benefits&rsquo; policyholders - and migrate the remaining customers there. We would{' '}
                        <span className="text-primary [&_a]:text-inherit">introduce highly targeted, surgical design changes to bring clarity to the unified experience</span>
                        , as well as{' '}
                        <span className="text-primary [&_a]:text-inherit">update the colors and typography in closer alignment to Chubb&rsquo;s brand standards</span>
                        . Critically, the new portal would be dynamically adaptive, relevant to their specific coverage context.
                      </p>

                      <div className="h-12" />
                      <ImageBlock label="example" />
                    </section>

                    <SectionDivider />

                    {/* ────────────────────────────── INFLECTION POINT ───────────────────── */}
                    <section id="inflection-point">
                      <Label>Inflection Point</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Accelerating without any guardrails
                      </h2>

                      <div className="h-8" />

                      <div className="text-body-small md:text-body-big text-text-secondary">
                        <p>
                          As development ramped up, the project took a significant turn. Quickly, and without cross-functional alignment, the implementation approach shifted away from the previously aligned strategy of building on Portal A, toward a full, from-scratch rebuild of the website with Claude Code.
                        </p>
                        <p className="mt-6">
                          <span className="text-primary [&_a]:text-inherit">Without an established design context or clear guardrails in place, Claude built a completely unrecognizable website.</span>
                          {' '}It introduced new and inconsistently applied UX patterns and a visual identity completely divergent from the original website or our global design system&rsquo;s standards. New hallucinated content needed to be combed through and revisited by different stakeholders and legal. QA efforts seemed impossible - deliverables no longer mapped cleanly to previously defined specifications.
                        </p>
                        <p className="mt-6">
                          Scope creep? More like scope explosion. The team needed to recalibrate - quickly.
                        </p>
                      </div>

                      <div className="h-12" />
                      <ImageBlock label="img" />
                    </section>

                    <SectionDivider />

                    {/* ────────────────────────────── MY PROPOSAL ────────────────────────── */}
                    <section id="my-proposal">
                      <Label>My Proposal</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Making an opportunity out of a mess
                      </h2>

                      <div className="h-8" />

                      <div className="text-body-small md:text-body-big text-text-secondary">
                        <p>
                          At this pivotal point in the project, I leveraged my technical background to step into a leadership role - owning the working relationship between design and engineering, and proposing a feasible path forward.
                        </p>
                        <p className="mt-6">
                          I suggested that we evaluate the Claude-generated designs against our design system standards and the existing website designs. Where Claude made brand-aligned and accessible changes, we would accept them and update our mockups to match.
                        </p>
                        <p className="mt-6">
                          Goal of this was to maintain Design&rsquo;s position as an authority, while also demonstrating we could extend an olive branch to engineering and be flexible. It was also a legitimate opportunity to introduce meaningful user experience improvements that weren&rsquo;t previously in-scope.
                        </p>
                      </div>

                      <div className="h-12" />
                      <ImageBlock />
                    </section>

                    <SectionDivider />

                    {/* ────────────────────────────── SOLUTION ───────────────────────────── */}
                    <section id="solution">
                      <Label>Solution</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        TODO: umbrella Solution headline
                      </h2>

                      <div className="h-8" />

                      <ImageBlock
                        type="video"
                        src="/images/chubb-claim-dashboard.mp4"
                        caption="TODO: caption for the claim dashboard overview"
                      />

                      <div className="h-12" />

                      <h3 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
                        Figma mockups engineered like code
                      </h3>

                      <div className="h-8" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        TODO: body copy describing how the Figma mockups were structured / componentized / responsive-engineered to match the code-side approach.
                      </p>

                      <div className="h-12" />

                      <ImageBlock
                        type="video"
                        src="/images/chubb-mobile-responsive-screens.mp4"
                        caption="TODO: caption for the responsive-screens demo"
                      />

                      <div className="h-12" />

                      <ImageBlock
                        src="/images/chubb-structure-again.webp"
                        alt="TODO: alt text describing the Figma file structure"
                        caption="TODO: caption for the structure diagram"
                      />

                      <div className="h-24" />

                      <h3 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
                        Improved claim type selection
                      </h3>

                      <div className="h-8" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        We rebuilt the claim-type selection step around three targeted improvements:
                      </p>

                      <div className="h-4" />

                      <div className="flex flex-col gap-5">
                        <NumberedCallout number="1">
                          Reduced cognitive load by simplifying the path to the right claim type.
                        </NumberedCallout>
                        <NumberedCallout number="2">
                          Sharpened the language so users can clearly identify pregnancy and disability claims.
                        </NumberedCallout>
                        <NumberedCallout number="3">
                          <span className="text-primary [&_a]:text-inherit">Made the flow fully mobile-responsive — the previous site had no mobile layout at all, despite more than 50% of user sessions happening on mobile.</span>
                        </NumberedCallout>
                      </div>

                      <div className="h-12" />

                      <ImageBlock
                        type="video"
                        src="/images/chubb-claim-type-selection.mp4"
                        caption="TODO: caption for the claim-type selection demo"
                      />
                    </section>

                    <SectionDivider />

                    {/* ────────────────────────────── IMPACT ─────────────────────────────── */}
                    <section id="impact">
                      <Label>Impact</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        TODO: Impact headline (e.g. &ldquo;Launched on time, on-brand, and on-message&rdquo;)
                      </h2>

                      <div className="h-8" />

                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 flex-1 flex flex-col gap-4 justify-center">
                          <p className="text-h3 md:text-h2 font-normal text-primary">TODO</p>
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

                    {/* ────────────────────────────── TAKEAWAYS ──────────────────────────── */}
                    <section id="takeaways">
                      <Label>Takeaways</Label>
                      <TwoColumnSection heading="Context Matters">
                        <div>
                          <p className="text-body-small md:text-body-big text-text-secondary">
                            The homepage now sets a visual bar the rest of the site can grow into. The clear next step is to formalize this work as a design system and roll it through the remaining pages as quickly as possible — because the homepage now diverges meaningfully from everything behind it.
                          </p>
                          <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                            TODO: Personal takeaway — what you learned about leading a cross-functional redesign under ambiguous decision ownership, and what you&rsquo;d do differently next time.
                          </p>
                        </div>
                      </TwoColumnSection>

                      <div className="h-8" />

                      <TwoColumnSection heading="Personal AI Velocity">
                        <div>
                          <p className="text-body-small md:text-body-big text-text-secondary">
                            The homepage now sets a visual bar the rest of the site can grow into. The clear next step is to formalize this work as a design system and roll it through the remaining pages as quickly as possible — because the homepage now diverges meaningfully from everything behind it.
                          </p>
                          <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                            TODO: Personal takeaway — what you learned about leading a cross-functional redesign under ambiguous decision ownership, and what you&rsquo;d do differently next time.
                          </p>
                        </div>
                      </TwoColumnSection>
                    </section>
                  </>
                ) : (
                  <div className="h-16 md:h-24" />
                )}

                {!unlocked && <CaseStudyPaywall pathname="/work/ai-claims-portal" />}

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
              <CaseStudyCard study={nextStudy} />
            </div>
          </div>
        </AnimateOnScroll>

      </main>
      <Footer />
    </>
  )
}
