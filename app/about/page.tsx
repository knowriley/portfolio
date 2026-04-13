import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'

export const metadata = {
  title: 'About — Riley Knowles',
}

const experience = [
  {
    employer: 'Chubb',
    role: 'UX Designer',
    description:
      'Designing claims experiences for enterprise insurance platforms.',
    time: '2025 — Present',
  },
  {
    employer: 'Conductor',
    role: 'UX Design Consultant',
    description:
      'Led UX strategy and design for client engagements across healthcare, fintech, and SaaS.',
    time: '2024 — 2025',
  },
]

const education = [
  {
    employer: 'Pratt Institute',
    role: 'MS Information Experience Design',
    description:
      'Graduate research in systems thinking, service design, and human-computer interaction.',
    time: '2024 — 2026',
  },
  {
    employer: 'University of British Columbia',
    role: 'BS Computer Science',
    description:
      'Concentration in UX design and information systems.',
    time: '2017 — 2022',
  },
]


export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <AboutHero />
        {/* ── Experience ── */}
        <section className="flex justify-center px-5 md:px-10 py-12 md:py-20">
          <div className="max-w-page w-full">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-8 md:mb-12">
              Experience
            </p>

            {experience.map((entry, i) => (
              <div key={entry.employer}>
                {i > 0 && <div className="border-t border-border-subtle" />}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-8 md:py-12">
                  {/* Employer */}
                  <div className="md:w-[280px] shrink-0">
                    <p className="text-body-big md:text-body-biggest font-medium text-text-primary">
                      {entry.employer}
                    </p>
                    <p className="text-body-small text-text-secondary mt-1">
                      {entry.role}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="flex-1 min-w-0">
                    <p className="text-body-big text-text-secondary">
                      {entry.description}
                    </p>
                  </div>

                  {/* Time */}
                  <div className="md:w-[140px] shrink-0 md:text-right">
                    <p className="text-body-small text-text-tertiary">
                      {entry.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="flex justify-center px-5 md:px-10 py-12 md:py-20">
          <div className="max-w-page w-full">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-8 md:mb-12">
              Education
            </p>

            {education.map((entry, i) => (
              <div key={entry.employer}>
                {i > 0 && <div className="border-t border-border-subtle" />}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-8 md:py-12">
                  <div className="md:w-[280px] shrink-0">
                    <p className="text-body-big md:text-body-biggest font-medium text-text-primary">
                      {entry.employer}
                    </p>
                    <p className="text-body-small text-text-secondary mt-1">
                      {entry.role}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body-big text-text-secondary">
                      {entry.description}
                    </p>
                  </div>
                  <div className="md:w-[140px] shrink-0 md:text-right">
                    <p className="text-body-small text-text-tertiary">
                      {entry.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
