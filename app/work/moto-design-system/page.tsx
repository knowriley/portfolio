import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Moto Design System — Riley Knowles',
}

const tags = ['Design Systems', 'Figma', 'Documentation', 'Strategy']

const processSections = [
  { step: '01', title: 'Discovery & Audit', content: '[Content placeholder — what you found, what was broken, what was missing.]' },
  { step: '02', title: 'Definition',        content: '[Content placeholder — how you defined the problem, success criteria, and scope.]' },
  { step: '03', title: 'Design & Build',    content: '[Content placeholder — how you designed and built the system components.]' },
  { step: '04', title: 'Governance',         content: '[Content placeholder — how you established ownership, contribution model, and process.]' },
]

export default function MotoDesignSystemPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Case study hero */}
        <section className="max-w-7xl mx-auto px-8 pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-1.5 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-text-secondary bg-bg-tertiary rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-text-primary leading-tight mb-10">
              Creating a single source of truth for the Moto Design System
            </h1>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border-subtle">
              <div>
                <p className="text-xs uppercase tracking-widest text-text-tertiary mb-1.5">Role</p>
                <p className="text-sm text-text-secondary">Lead Designer</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-text-tertiary mb-1.5">Timeline</p>
                <p className="text-sm text-text-secondary">2024</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-text-tertiary mb-1.5">Company</p>
                <p className="text-sm text-text-secondary">Moto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cover image */}
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <div className="w-full aspect-video bg-bg-secondary rounded-3xl flex items-center justify-center">
            <span className="text-text-tertiary text-sm">Cover image</span>
          </div>
        </div>

        {/* Body content */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-2xl mx-auto space-y-20 pb-24">

            {/* Overview */}
            <section>
              <p className="text-xs uppercase tracking-widest text-text-tertiary mb-4">Overview</p>
              <p className="text-md text-text-secondary leading-relaxed">
                [Content placeholder — overview of the project, context, and scope.]
              </p>
            </section>

            {/* Problem */}
            <section>
              <p className="text-xs uppercase tracking-widest text-text-tertiary mb-4">The Problem</p>
              <p className="text-2xl font-semibold text-text-primary leading-snug mb-6">
                [Problem statement placeholder]
              </p>
              <p className="text-md text-text-secondary leading-relaxed">
                [Supporting context placeholder]
              </p>
            </section>

            {/* Process */}
            <section>
              <p className="text-xs uppercase tracking-widest text-text-tertiary mb-10">Process</p>
              <div className="space-y-16">
                {processSections.map(({ step, title, content }) => (
                  <div key={step}>
                    <p className="text-xs text-text-tertiary font-mono mb-2">{step}</p>
                    <h2 className="text-xl font-semibold text-text-primary mb-3">{title}</h2>
                    <p className="text-text-secondary leading-relaxed mb-8">{content}</p>
                    <div className="w-full aspect-video bg-bg-secondary rounded-2xl flex items-center justify-center">
                      <span className="text-text-tertiary text-sm">Image placeholder</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Outcome */}
            <section>
              <p className="text-xs uppercase tracking-widest text-text-tertiary mb-4">Outcome</p>
              <p className="text-2xl font-semibold text-text-primary leading-snug mb-6">
                [Outcome statement placeholder]
              </p>
              <p className="text-md text-text-secondary leading-relaxed">
                [Results and impact placeholder]
              </p>
            </section>

          </div>
        </div>

        {/* Next case study */}
        <div className="border-t border-border-subtle">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <p className="text-xs uppercase tracking-widest text-text-tertiary mb-3">Next</p>
            <p className="text-text-tertiary text-lg">More case studies coming soon →</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
