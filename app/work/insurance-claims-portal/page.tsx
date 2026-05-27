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
import { caseStudies } from '@/data/case-studies'
import { isUnlocked } from '@/lib/case-study-lock'

const study = caseStudies.find((s) => s.slug === 'insurance-claims-portal')!

const metaDescription = study.metaDescription ?? study.description

export const metadata = {
  title: study.title,
  description: metaDescription,
  openGraph: { title: study.title, description: metaDescription },
  twitter: { title: study.title, description: metaDescription },
}

const nextStudy = caseStudies.find(
  (s) => !s.hidden && s.slug !== 'insurance-claims-portal',
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
        { label: 'UX Wins',          id: 'ux-wins' },
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
                type="video"
                src="/images/chubb-cover-unified-experience.mp4"
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
                      I led the design strategy and redesign of the Chubb Benefits consumer claims portal unification initiative, supporting{' '}
                      <span className="text-primary [&_a]:text-inherit">350K customers</span>
                      , and{' '}
                      <span className="text-primary [&_a]:text-inherit">owned measurement end-to-end, from scaffolding the baseline tracking system to defining delivery success metrics with product owners</span>
                      . Before kickoff, I ran a stakeholder discovery workshop with 10+ insurance agents and led structured validation interviews to refine Chubb Benefits&rsquo; existing proto-personas, sharpening our understanding of the end user before design work began.
                    </p>
                    <p className="mt-6">
                      Entering the build phase, our initial design strategy was constrained to brand updates and targeted, tightly-scoped changes due to the complexity of the backend development requirements. However, midway through delivery{' '}
                      <span className="text-primary [&_a]:text-inherit">the engineering team began a new AI-enabled development strategy without cross-functional alignment</span>
                      , and the entire team — BAs, Product Owners, and QA — had to rapidly adjust.
                    </p>
                    <p className="mt-6">
                      As the most technical member of the design team,{' '}
                      <span className="text-primary [&_a]:text-inherit">I stepped into a leadership role to own the relationship between design and engineering</span>
                      . I developed a new design strategy highly collaborative with engineering that{' '}
                      <span className="text-primary [&_a]:text-inherit">kept designers as the design authority</span>
                      {' '}and{' '}
                      <span className="text-primary [&_a]:text-inherit">expanded the user experience improvements beyond the original targeted updates</span>
                      , all while meeting the delivery timeline.
                    </p>
                  </div>

                  <div className="h-12" />

                  <MetadataGrid items={[
                    { label: 'Role',     content: 'Lead Experience Designer' },
                    { label: 'Team',     content: 'Myself, 2 other Designers, 3 Product Owners, 2 Claims Business Analysts, 1 Technical Business Analyst, 1 Project Manager, 1 Principal Engineer, 1 Testing Lead, 8 Offshore Developers' },
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
                    { label: 'Timeline', content: 'Nov 2025 – Present' },
                    { label: 'Status',   content: 'In testing' },
                  ]} />
                </section>

                {/* ── Gate ── */}
                {unlocked ? (
                  <>
                    <SectionDivider />

                    {/* ────────────────────────────── PROBLEM ────────────────────────────── */}
                    <section id="problem">
                      <Label>Context</Label>
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
                          Individuals who <span className="text-primary [&_a]:text-inherit">purchase coverage directly</span>, like self-employed policyholders managing their own bills
                        </NumberedCallout>
                        <NumberedCallout number="2">
                          Employees who receive <span className="text-primary [&_a]:text-inherit">coverage through their employer</span> and are <span className="text-primary [&_a]:text-inherit">named on the policy</span>.
                        </NumberedCallout>
                        <NumberedCallout number="3">
                          Employees who receive <span className="text-primary [&_a]:text-inherit">coverage through their employer</span> and are <span className="text-primary [&_a]:text-inherit">not named on the policy</span>.
                        </NumberedCallout>
                      </div>

                      <div className="h-8" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Despite serving these customers under the same brand, Chubb Benefits maintained two separate self-service portals each with a different feature set and different visual identity.{' '}
                        <span className="text-primary [&_a]:text-inherit">Which portal a customer used had nothing to do with who they were or even how their coverage worked</span>
                        {' '}- it was determined entirely by which back-end billing system their policy happened to live in.
                      </p>

                      <div className="h-12" />

                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/chubb-expected-starting-place.webp"
                            alt="Portal A — supporting most customers, has direct-pay billing features but outdated branding."
                            caption="Portal A &mdash; Supporting most customers, has direct-pay billing features but outdated branding."
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/chubb-blue-portal.webp"
                            alt="Portal B — for 1 customer segment only, limited features, closer branding but still not there."
                            caption="Portal B &mdash; For 1 customer segment only, limited features, closer branding but still not there"
                          />
                        </div>
                      </div>

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

                      <ImageBlock
                        src="/images/chubb-strategy-before-after.webp"
                        alt="Example of targeted design updates handoff"
                        caption="Example of targeted design updates handoff"
                      />

                      <div className="h-12" />

                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0">
                          <p className="text-body-small md:text-body-big text-text-secondary">
                            The team defined a focused, intentional consolidation strategy suitable to our tight timeline rather than going with a ground-up rebuild. We would use Portal A as the foundation - it already had the most complete feature set and serviced the majority of Chubb Benefits&rsquo; policyholders - and migrate the remaining customers there. We would{' '}
                            <span className="text-primary [&_a]:text-inherit">introduce highly targeted, surgical design changes to bring clarity to the unified experience</span>
                            , as well as{' '}
                            <span className="text-primary [&_a]:text-inherit">update the colors and typography in closer alignment to Chubb&rsquo;s brand standards</span>
                            . Critically, the new portal would be dynamically adaptive, relevant to their specific coverage context.
                          </p>
                        </div>
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/chubb-targeted-updates-strategy.webp"
                            alt="Handoff file for full page"
                            caption="Handoff file for full page"
                          />
                        </div>
                      </div>
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
                      </div>

                      <div className="h-6" />

                      <div className="bg-bg-secondary border border-border rounded-sm px-10 py-7">
                        <p className="text-body-small md:text-body-big lg:text-body-biggest text-primary">
                          Without an established design context or clear guardrails in place, Claude built a completely unrecognizable website.
                        </p>
                      </div>

                      <div className="h-12" />

                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/chubb-expected-starting-place.webp"
                            alt="Expected starting point"
                            caption="Expected starting point"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/chubb-combined.webp"
                            alt="AI output starting state"
                            caption="AI output starting state"
                          />
                        </div>
                      </div>

                      <div className="h-12" />

                      <div className="text-body-small md:text-body-big text-text-secondary">
                        <p>
                          Claude introduced new and inconsistently applied UX patterns and a visual identity completely divergent from the original website or our global design system&rsquo;s standards. New hallucinated content needed to be combed through and revisited by different stakeholders and legal. QA efforts seemed impossible - deliverables no longer mapped cleanly to previously defined specifications.
                        </p>
                        <p className="mt-6">
                          Scope creep? More like scope explosion. The team needed to recalibrate - quickly.
                        </p>
                      </div>
                    </section>

                    <SectionDivider />

                    {/* ────────────────────────────── MY PROPOSAL ────────────────────────── */}
                    <section id="my-proposal">
                      <Label>My Proposal</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Making an opportunity out of a mess
                      </h2>

                      <div className="h-8" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        <span className="text-primary [&_a]:text-inherit">As the most technical member of the design team, I stepped into a leadership role to own the relationship between design and engineering.</span> I suggested that we evaluate the Claude-generated designs against our design system standards and the existing website designs. Where Claude made brand-aligned and accessible changes, we would accept them and update our mockups to match.
                      </p>

                      <div className="h-12" />

                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/chubb-cancer-before.webp"
                            alt="Original Cancer Claim Details Form"
                            caption="Original Cancer Claim Details Form"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/chubb-cancer-ai.webp"
                            alt="AI-Generated Cancer Claim Details Form"
                            caption="AI-Generated Cancer Claim Details Form"
                          />
                        </div>
                      </div>

                      <div className="h-12" />

                      <ImageBlock
                        src="/images/chubb-diagnosis.webp"
                        alt="Design System Aligned Cancer Claim Details Form"
                        caption="Design System Aligned Cancer Claim Details Form"
                      />

                      <div className="h-12" />

                      <p className="text-body-small md:text-body-big lg:text-body-biggest text-text-secondary">
                        My goals for this design strategy were to:
                      </p>

                      <div className="h-4" />

                      <div className="flex flex-col gap-5">
                        <NumberedCallout number="1">
                          <span className="text-primary [&_a]:text-inherit">Keep designers as the design authority</span>, while still welcoming AI-recommended improvements, when they were actually improvements.
                        </NumberedCallout>
                        <NumberedCallout number="2">
                          Find opportunities to add visual hierarchy across claim flows, <span className="text-primary [&_a]:text-inherit">address known customer confusion with claim-type selection</span>, and bring the experience closer to Chubb&rsquo;s brand standards.
                        </NumberedCallout>
                        <NumberedCallout number="3">
                          <span className="text-primary [&_a]:text-inherit">Position the design team as cooperative</span>, problem-solving oriented cross-functional partners.
                        </NumberedCallout>
                      </div>

                      <div className="h-24" />

                      <h3 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Setting engineering up for success with Figma frames structured like code
                      </h3>

                      <div className="h-8" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Because our design team didn&rsquo;t have access to Claude Code, we couldn&rsquo;t work on the frontend ourselves. To support our development team as much as possible, we created fully responsive wireframes with well-structured properties to map seamlessly to code.
                      </p>

                      <div className="h-12" />

                      <ImageBlock
                        type="video"
                        src="/images/chubb-mobile-responsive-screens.mp4"
                        caption="New Handoff &mdash; Fully Mobile Responsive at Every Breakpoint"
                      />

                      <div className="h-12" />

                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/chubb-structure-again.webp"
                            alt="Renamed Figma layers and components for predictable structure"
                            caption="Renamed Figma layers and components for predictable structure"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-body-big md:text-body-biggest text-text-secondary">
                            I even renamed components and file layers to create a predictable structure Claude could easily read, understand and implement.
                          </p>
                        </div>
                      </div>
                    </section>

                    <SectionDivider />

                    {/* ────────────────────────────── SOLUTION ───────────────────────────── */}
                    <section id="ux-wins">
                      <Label>UX Wins</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Reducing overwhelm and bringing clarity to claim initiation
                      </h2>

                      <div className="h-4" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        In the original website, claimant and claim-type selection lived on the same step, cluttering the page and confusing users. Now they&rsquo;re clear, segmented steps.
                      </p>

                      <div className="h-8" />

                      <ImageBlock
                        type="video"
                        src="/images/chubb-claim-dashboard.mp4"
                        caption="New claim type selection"
                      />

                      <div className="h-24" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        FullStory recordings and insights from our stakeholder discovery workshop revealed that customers had a really hard time identifying which claim type they needed to submit. <span className="text-primary [&_a]:text-inherit">Reimagining the claim types themselves was still out of scope, but we could add high-visibility, reassuring disability language for users looking to submit a disability claim.</span> We also added examples to each claim type, leaning on the design principle that recognition of examples helps people more quickly assign meaning to choices.
                      </p>

                      <div className="h-12" />

                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/chubb-claim-selection-before.webp"
                            alt="Original claimant and claim type selection"
                            caption="Original claimant and claim type selection"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/chubb-claim-selection-after.webp"
                            alt="New claim type selection"
                            caption="New claim type selection"
                          />
                        </div>
                      </div>

                      <div className="h-24" />

                      <h3 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
                        Using progressive disclosure to handle staggered backend data loads &mdash; improving overall page load time.
                      </h3>

                      <div className="h-4" />

                      <p className="text-body-small md:text-body-big text-text-secondary">
                        One of the most frequent customer complaints reported from our customer experience director was users&rsquo; frustration with slow page loading times. I partnered with our principal engineer to solution staggered backend data loads, ensuring pages can load as quickly as possible, while still enabling the user to reach the information they need.
                      </p>

                      <div className="h-8" />

                      <ImageBlock
                        type="video"
                        src="/images/chubb-coverage-data-load.mp4"
                        caption="Staggered data load interaction"
                      />

                      <div className="h-24" />

                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:flex-[2_1_0] min-w-0">
                          <h3 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
                            Mobile-responsive for the first time, giving the 50%+ of mobile users the experience they deserve.
                          </h3>
                          <div className="h-4" />
                          <p className="text-body-small md:text-body-big text-text-secondary">
                            By scaffolding our behavioral analytics platform, FullStory, I was able to capture that more than 50% of website sessions happened on mobile. Using this insight, I was able to get buy-in to prioritize mobile-responsive design and development of every page.
                          </p>
                        </div>
                        <div className="md:flex-[1_1_0] min-w-0">
                          <ImageBlock
                            type="video"
                            src="/images/chubb-mobile-claim-selection.mp4"
                            caption="Mobile responsive starting a claim"
                          />
                        </div>
                      </div>
                    </section>

                    <SectionDivider />

                    {/* ────────────────────────────── IMPACT ─────────────────────────────── */}
                    <section id="impact">
                      <Label>Impact</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Brand-aligned, first-time fully responsive web experience for 350K customers, delivered on time.
                      </h2>

                      <div className="h-12" />

                      <ImageBlock
                        src="/images/chubb-new-homepage.webp"
                        alt="New homepage"
                        caption="New homepage"
                      />
                    </section>

                    <SectionDivider />

                    {/* ────────────────────────────── TAKEAWAYS ──────────────────────────── */}
                    <section id="takeaways">
                      <Label>Takeaways</Label>
                      <TwoColumnSection heading="Personal AI Velocity">
                        <div>
                          <p className="text-body-small md:text-body-big text-text-secondary">
                            Debugging over Zoom while I sent engineers annotated screenshots of inspected HTML over Teams felt deeply un-ideal. I was reacting to AI output instead of directing it. <span className="text-primary [&_a]:text-inherit">This work reframed AI for me: done well, it isn&rsquo;t just slop-creation; it&rsquo;s a way to scale craft, not replace it.</span> I wanted to get my hands on Claude Code myself, and I did, on my very{' '}
                            <InlineLink href="/work/insurance-product-selection">next project</InlineLink>
                            .
                          </p>
                        </div>
                      </TwoColumnSection>
                    </section>
                  </>
                ) : (
                  <div className="h-16 md:h-24" />
                )}

                {!unlocked && <CaseStudyPaywall pathname="/work/insurance-claims-portal" />}

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
