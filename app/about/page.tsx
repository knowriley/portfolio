import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About — Riley Knowles',
}

const skills = [
  'UX Strategy',
  'Product Design',
  'Design Systems',
  'User Research',
  'Service Design',
  'Figma',
  'Interaction Design',
  'Prototyping',
  'Systems Thinking',
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="max-w-7xl mx-auto px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-sm text-text-tertiary mb-4">About</p>
          <h1 className="text-4xl font-bold text-text-primary mb-10">Riley Knowles</h1>

          <div className="space-y-6 text-md text-text-secondary leading-relaxed">
            <p>[Bio placeholder — who you are, where you come from, what drives you.]</p>
            <p>[Background placeholder — your experience, companies, and impact.]</p>
            <p>[Philosophy placeholder — your approach to design and problem-solving.]</p>
          </div>

          <div className="mt-16 pt-12 border-t border-border-subtle">
            <p className="text-xs uppercase tracking-widest text-text-tertiary mb-6">
              Skills & Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-text-secondary bg-bg-secondary rounded-full px-4 py-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
