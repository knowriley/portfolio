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
  TwoColumnSection,
} from '@/components/case-study'
import { caseStudies } from '@/data/case-studies'
import { isUnlocked } from '@/lib/case-study-lock'

const study = caseStudies.find((s) => s.slug === 'evidence-of-insurability')!

export const metadata = {
  title: `${study.title} — Riley Knowles`,
}

const nextStudy = caseStudies.find(
  (s) => !s.hidden && s.slug !== 'evidence-of-insurability',
)!

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function EvidenceOfInsurabilityCaseStudyPage() {
  const unlocked = await isUnlocked()

  const tocItems = unlocked
    ? [
        { label: 'Overview',                  id: 'overview' },
        { label: 'Background',                id: 'background' },
        { label: 'Opportunity',               id: 'opportunity' },
        { label: 'Initial Designs & Testing', id: 'initial-designs-testing' },
        { label: 'Redesign & Test Strategy',  id: 'redesign-test-strategy' },
        { label: 'Results',                   id: 'results' },
        { label: 'Solution',                  id: 'solution' },
        { label: 'Impact',                    id: 'impact' },
        { label: 'Takeaways',                 id: 'takeaways' },
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
                src="/images/eoi-cover.mp4"
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
                      In this project for Chubb, I led the redesign of an Evidence of
                      Insurability flow to support five new products—using Claude Code
                      to prototype, test, and iterate high-fidelity variants at speed.
                    </p>
                    <p className="mt-6">
                      By rethinking the selection model to require explicit decisions
                      per product, refining UX writing, and leveraging AI-enabled
                      prototyping to run rapid A/B tests,{' '}
                      <span className="text-primary [&_a]:text-inherit">
                        I designed an experience that will enable more accurate
                        product selection from users and earn more revenue for the
                        business, without increasing the existing workload of
                        downstream underwriting staff.
                      </span>
                    </p>
                  </div>

                  <div className="h-12" />

                  <MetadataGrid items={[
                    { label: 'Role',     content: 'Lead UX Designer' },
                    { label: 'Team',     content: 'Myself, Product Owner, Business Stakeholders' },
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
                    { label: 'Timeline', content: 'Apr 2026, 4 weeks' },
                    { label: 'Status',   content: 'Handoff' },
                  ]} />
                </section>

                {/* ── Gate ── */}
                {unlocked ? (
                  <>
                    <SectionDivider />

                    {/* ────────────────────── BACKGROUND ────────────────────── */}
                    <section id="background">
                      <Label>Background</Label>
                      <TwoColumnSection heading="Getting approved for insurance above the guaranteed limit">
                        <p className="text-body-small md:text-body-big text-text-secondary">
                          Employees requesting insurance above a set limit must complete an Evidence
                          of Insurability (EOI) form, which underwriting uses to evaluate eligibility
                          for higher coverage.
                        </p>
                      </TwoColumnSection>
                    </section>

                    <SectionDivider />

                    {/* ────────────────────── OPPORTUNITY ────────────────────── */}
                    <section id="opportunity">
                      <Label>Opportunity</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        The original experience was designed for a single product, unintentionally
                        constraining both the business and the user
                      </h2>

                      <div className="h-6" />

                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <p className="text-body-biggest text-text-secondary">
                          <span className="text-primary [&_a]:text-inherit">
                            Customers had no path to request additional coverage
                          </span>
                          {' '}beyond the one product
                        </p>
                      </div>

                      <div className="h-8" />

                      <div className="bg-bg-secondary border border-border rounded-sm px-5 md:px-10 py-7 w-full">
                        <p className="text-body-biggest text-text-secondary">
                          Chubb was{' '}
                          <span className="text-primary [&_a]:text-inherit">
                            missing opportunities to underwrite higher coverage
                          </span>
                          {' '}across products
                        </p>
                      </div>
                    </section>

                    <SectionDivider />

                    {/* ────────── INITIAL DESIGNS & TESTING ────────── */}
                    <section id="initial-designs-testing">
                      <Label>Initial Designs &amp; Testing</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Leaning on the design system
                      </h2>
                      <div className="h-4" />
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        For the initial design I asked Claude to build a first iteration based on
                        the requirements, then refined it to more closely follow our global design
                        system&apos;s guidelines, presenting products as a set of clickable tiles.
                      </p>

                      <div className="h-16" />
                      <ImageBlock
                        src="/images/eoi-first-iteration.webp"
                        alt="First-iteration prototype — clickable product tiles"
                        caption="First-iteration prototype — clickable product tiles"
                      />

                      <div className="h-12" />
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        I then designed and ran an initial unmoderated think-aloud usability test
                        with 20 participants to gauge users&apos; ability to confidently select the
                        products they needed. In the test, participants were instructed to select
                        two specific products with different coverage amounts, and provided the
                        coverage selections to reference as part of the test.
                      </p>

                      <div className="h-16" />
                      <ImageBlock
                        type="video"
                        src="/images/eoi-test-recording.mp4"
                        caption="Test recording"
                      />

                      <div className="h-16" />
                      <Label>First Round Results</Label>
                      <TwoColumnSection heading="Nearly half of test participants selected only one of two products">
                        <p className="text-body-small md:text-body-big text-text-secondary">
                          Even being told explicitly which product selections to make, and throwing
                          out tests taken by &lsquo;professional testers&rsquo; - nearly half of
                          participants, 5 out of the viable 11 tests did not select one of the two
                          products they were meant to include.
                        </p>
                      </TwoColumnSection>
                    </section>

                    <SectionDivider />

                    {/* ────────── REDESIGN & TEST STRATEGY ────────── */}
                    <section id="redesign-test-strategy">
                      <Label>Redesign &amp; Test Strategy</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Change the interaction model so that every product mapped to an explicit response
                      </h2>
                      <div className="h-4" />
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        After seeing how quickly I could create new prototypes and administer tests,
                        I decided to build two new design variations that encouraged users to engage
                        with each product, each with differing levels of effort.
                      </p>

                      <div className="h-16" />

                      {/* Variant A */}
                      <Label>Variant A</Label>
                      <h3 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
                        Explicit Yes / No answer for every product
                      </h3>
                      <div className="h-8" />
                      <ImageBlock
                        src="/images/eoi-variant-a-yes-no.webp"
                        alt="Variant A — explicit Yes/No per product"
                        caption="Variant A — explicit Yes/No per product"
                      />
                      <div className="h-8" />
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        I additionally adjusted the proximity of follow-up questions to associated
                        products. Usually I wouldn&apos;t fix something that wasn&apos;t broken,
                        but{' '}
                        <span className="text-primary [&_a]:text-inherit">
                          because we were collecting speak-aloud feedback, I used the opportunity
                          to introduce greater variation between design options to observe whether
                          participants expressed clear preferences for specific approaches.
                        </span>
                      </p>

                      <div className="h-8" />
                      <ImageBlock
                        src="/images/eoi-variant-a-contextual-product.webp"
                        alt="Contextual product placement"
                        caption="Contextual product placement"
                      />

                      <div className="h-16" />

                      {/* Variant B */}
                      <Label>Variant B</Label>
                      <h3 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
                        Defaulted drop downs to encourage cognitive engagement without increasing physical interaction cost
                      </h3>
                      <div className="h-8" />
                      <ImageBlock
                        src="/images/eoi-variant-b-dropdowns.webp"
                        alt="Variant B — defaulted dropdowns"
                        caption="Variant B — defaulted dropdowns"
                      />
                      <div className="h-8" />
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        Defaulted &ldquo;I don&apos;t need an EOI for this product&rdquo; reduces
                        users&apos; physical interaction cost, while the list layout leverages
                        users&apos; natural scanning behavior to ensure they cognitively acknowledge
                        each product.
                      </p>
                    </section>

                    <SectionDivider />

                    {/* ────────────────────── RESULTS ────────────────────── */}
                    <section id="results">
                      <Label>Results</Label>
                      <TwoColumnSection heading="62% improvement in product selection, but jargon is still an obstacle">
                        <p className="text-body-small md:text-body-big text-text-secondary">
                          In an A/B test of 54 participants,{' '}
                          <span className="text-primary [&_a]:text-inherit">
                            task success for selecting both products was 88% and 89% for variants
                            A &amp; B respectively
                          </span>
                          , a 62% increase from the 55% success of the original design.
                        </p>
                      </TwoColumnSection>

                      <div className="h-12" />

                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            type="video"
                            src="/images/eoi-getting-help.mp4"
                            caption="Helper text usage in Yes / No variants"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-body-small md:text-body-big text-text-secondary">
                            In the Yes / No variant, participants used the helper text and clicked
                            on the inline help link, but found the drawer content to be confusing
                            and unhelpful.
                          </p>
                        </div>
                      </div>

                      <div className="h-12" />

                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/eoi-variant-b-screenshot-product-zoom.webp"
                            alt="Defaulted dropdown over-selection"
                            caption="Defaulted dropdown over-selection"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-body-small md:text-body-big text-text-secondary space-y-6">
                            <p>
                              Defaulted dropdowns were misinterpreted as a recommendation, and
                              the lower-friction input seemed to drive over-selection when
                              participants were confused.
                            </p>
                            <p className="text-primary [&_a]:text-inherit">
                              This was a key insight, because shipping an experience that
                              encouraged over-selection would have negative downstream impacts
                              to the underwriting team.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <SectionDivider />

                    {/* ────────────────────── SOLUTION ────────────────────── */}
                    <section id="solution">
                      <Label>Solution</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Yes/No Variant just edged out the Dropdowns
                      </h2>
                      <div className="h-8" />
                      <ImageBlock
                        type="video"
                        src="/images/eoi-final-solution.mp4"
                        caption="Final solution iteration"
                      />
                      <div className="h-12" />
                      <h3 className="text-h4 md:text-h3 font-normal text-text-primary leading-[1.3]">
                        with jargon-free, legal-approved language
                      </h3>
                      <div className="h-8" />
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/eoi-writing-before.webp"
                            alt="Original Employee coverage amount explainer copy"
                            caption="Before"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <ImageBlock
                            src="/images/eoi-writing-after.webp"
                            alt="Revised Employee total coverage amount explainer copy"
                            caption="After"
                          />
                        </div>
                      </div>
                    </section>

                    <SectionDivider />

                    {/* ────────────────────── IMPACT ────────────────────── */}
                    <section id="impact">
                      <Label>Impact</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Validated design, mitigating risk, new ways of working
                      </h2>
                      <div className="h-8" />
                      <div className="text-body-small md:text-body-big text-text-secondary space-y-6">
                        <p>By preventing passive product omission, it reduces the risk of:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Users missing products they actually want (lost coverage + lost revenue)</li>
                          <li>Users over-selecting due to confusion (unnecessary underwriting work)</li>
                        </ul>
                        <p>And this results in cleaner submissions entering the underwriting pipeline, leading to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Fewer incomplete or incorrect EOI forms</li>
                          <li>Less manual review and rework for underwriting teams</li>
                          <li>More efficient processing of valid, high-intent requests</li>
                        </ul>
                      </div>
                    </section>

                    <SectionDivider />

                    {/* ────────────────────── TAKEAWAYS ────────────────────── */}
                    <section id="takeaways">
                      <Label>Takeaways</Label>
                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        I want to ship frontend code
                      </h2>
                      <div className="h-8" />
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        This was my first project using agentic prototyping and it honestly
                        transformed how I want to work forever. Figma is still ideal for
                        collaborating with other designers — but the speed and fidelity I can
                        achieve with code, and{' '}
                        <span className="text-primary [&_a]:text-inherit">the ability to engineer design context</span>{' '}
                        into the CLAUDE.md file I think planted the seed in my mind that
                        designers — as the SMEs of design — could in some future own the frontend
                        experience of the delivery pipeline (with review from senior frontend
                        developers, of course).
                      </p>

                      <div className="h-24" />

                      <h2 className="text-h3 md:text-h2 font-normal text-text-primary leading-[1.3]">
                        Sometimes the biggest UX improvements aren&apos;t on-screen changes.
                      </h2>
                      <div className="h-8" />
                      <p className="text-body-small md:text-body-big text-text-secondary">
                        My very first question when getting onboarded to this project was,{' '}
                        <span className="text-primary [&_a]:text-inherit">
                          &ldquo;Can we automatically populate which products the customer
                          selected, so they don&apos;t have to?&rdquo;
                        </span>{' '}
                        Because of budget and timeline constraints this wasn&apos;t a part of this
                        delivery, but the same complaint was made by nearly half of the
                        participants during testing. For me, this stands out as another example of
                        where looking beyond the screens and thinking about the system and the
                        service overall could be the answer to the greatest win-win solutions for
                        customers and businesses.
                      </p>
                    </section>
                  </>
                ) : (
                  <div className="h-16 md:h-24" />
                )}

                {!unlocked && <CaseStudyPaywall pathname="/work/evidence-of-insurability" />}

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
