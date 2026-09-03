import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import AboutBooks from '@/components/AboutBooks'
import InlineLink from '@/components/InlineLink'

export const metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <AboutHero />

        {/* ── Portrait ── mobile: full-width stack; md: 2/3 viewport stack; lg: 33vw, right-aligned, peeks 15% into the hero above */}
        <section className="flex justify-center px-5 md:px-10 lg:-mt-[calc(4.95vw-40px)]">
          <div className="max-w-page w-full flex justify-end">
            <div className="relative w-full md:w-[66vw] lg:w-[33vw]">
              <div
                aria-hidden
                className="absolute -inset-2 about-image-anim"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gradient-red from-[22%] to-gradient-orange blur-2xl opacity-20" />
              </div>
              <Image
                src="/images/riley-headshot.webp"
                alt="Riley Knowles"
                width={802}
                height={802}
                priority
                className="relative w-full h-auto border border-border shadow-sm rounded-sm about-image-anim"
              />
            </div>
          </div>
        </section>

        {/* ── Narrative ── */}
        <section className="flex justify-center px-5 md:px-10 py-12 md:py-20">
          <div className="max-w-page w-full">
            <div className="lg:max-w-[696px]">
              <p className="text-body-small md:text-body-big text-text-secondary">
                Currently, I&rsquo;m designing customer-facing experiences on the{' '}
                <span className="text-primary [&_a]:text-inherit">
                  Branded Card team at{' '}
                  <InlineLink href="https://www.jpmorganchase.com/" external>
                    JPMorgan Chase
                  </InlineLink>
                </span>
                .
              </p>
              <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                Previously, I led user-centered design for <InlineLink href="https://benefits.chubb.com/us-en/" external>
                  Chubb Benefits
                </InlineLink>&rsquo;
                consumer claims portal and multiple agent-facing experiences at{' '}
                <InlineLink href="https://www.chubb.com/us-en/" external>
                  Chubb
                </InlineLink>
                , using Claude Code to accelerate prototyping and testing.
                Earlier, I contributed to major web, product, and design system
                initiatives at{' '}
                <InlineLink href="https://www.conductor.com/" external>
                  Conductor
                </InlineLink>{' '}
                on highly collaborative cross-functional teams, and led freelance
                UX research and design projects for clients such as <InlineLink href="https://www.cooperhewitt.org/" external>
                  The Cooper Hewitt Smithsonian Design Museum
                </InlineLink>, <InlineLink href="https://theinformationlab.com/" external>
                  The Information Lab
                </InlineLink>, and <InlineLink href="https://sva.edu/life-at-sva/campus-life/campus-spaces/library" external>
                  School of Visual Arts Library
                </InlineLink>.
              </p>
              <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                Additionally, I hold a MS in Information Experience Design
                from{' '}
                <InlineLink
                  href="https://www.pratt.edu/information/information-experience-design/"
                  external
                >
                  Pratt Institute
                </InlineLink>{' '}
                and a BS in Computer Science from{' '}
                <InlineLink href="https://www.cs.ubc.ca/" external>
                  The University of British Columbia
                </InlineLink>
                .
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-center px-5 md:px-10">
          <div className="max-w-page w-full border-t border-border" />
        </div>

        <AboutBooks />

      </main>
      <Footer />
    </>
  )
}
