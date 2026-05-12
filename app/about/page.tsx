import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import AboutBooks from '@/components/AboutBooks'
import InlineLink from '@/components/InlineLink'

export const metadata = {
  title: 'About — Riley Knowles',
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
                className="absolute -inset-2 animate-fade-in-up"
                style={{ animationDelay: '1.5s', animationDuration: '0.55s' }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gradient-red from-[22%] to-gradient-orange blur-2xl opacity-20" />
              </div>
              <Image
                src="/images/riley-headshot.webp"
                alt="Riley Knowles"
                width={802}
                height={802}
                priority
                className="relative w-full h-auto border border-border shadow-sm rounded-sm animate-fade-in-up"
                style={{ animationDelay: '1.5s', animationDuration: '0.55s' }}
              />
            </div>
          </div>
        </section>

        {/* ── Narrative ── */}
        <section className="flex justify-center px-5 md:px-10 py-12 md:py-20">
          <div className="max-w-page w-full">
            <div className="lg:max-w-[696px]">
              <p className="text-body-small md:text-body-big text-text-secondary">
                Currently,{' '}
                <span className="text-primary [&_a]:text-inherit">
                  I&rsquo;m driving user-centered design practices end-to-end
                  at{' '}
                  <InlineLink href="https://www.chubb.com/us-en/" external>
                    Chubb
                  </InlineLink>
                  , from discovery workshops down to accelerated prototyping
                  and testing with Claude Code.
                </span>{' '}
                I am the lead designer on the Chubb Benefits consumer claims
                portal and additionally support the design and testing of
                multiple agents&rsquo; quoting experiences.
              </p>
              <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                Previously, I contributed to major web, product and design
                system initiatives at{' '}
                <InlineLink href="https://www.conductor.com/" external>
                  Conductor
                </InlineLink>{' '}
                on highly collaborative cross-functional teams. I&rsquo;ve also
                led freelance UX research and design projects across education,
                nonprofits, and the arts.
              </p>
              <p className="text-body-small md:text-body-big text-text-secondary mt-6">
                Additionally, I am completing a MS in Information Experience
                Design from{' '}
                <InlineLink
                  href="https://www.pratt.edu/information/information-experience-design/"
                  external
                >
                  Pratt Institute
                </InlineLink>{' '}
                and hold a BS in Computer Science from{' '}
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
