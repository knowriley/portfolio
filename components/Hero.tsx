import { MapPin } from 'lucide-react'
import InlineLink from './InlineLink'

export default function Hero() {
  return (
    <section className="flex justify-center px-5 md:px-10 md:h-[calc(100dvh-64px)]">
      <div className="max-w-page w-full flex flex-col">
        {/* Spacer — fills remaining space on desktop, pushes content to bottom */}
        <div className="pt-12 md:pt-0 md:flex-1" />

        <p className="text-body-small text-text-tertiary mb-4 flex items-center gap-1.5 animate-fade-in-left" style={{ animationDelay: '1.6s' }}>
          <MapPin size={20} strokeWidth={1.5} />
          Brooklyn, New York
        </p>

        <h1 className="font-normal text-text-primary mb-4 text-h3 md:text-h2 lg:text-display animate-fade-in-up">
          UX Strategist & Product Designer solving complex problems with{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink">human-centered design</span> and{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink">systems thinking.</span>
        </h1>

        <p className="text-body-small md:text-body-big text-text-secondary pb-12 md:pb-16 animate-fade-in-left" style={{ animationDelay: '0.8s' }}>
          Currently designing claims experiences @{' '}
          <InlineLink href="https://chubb.com" external variant="subtle">Chubb</InlineLink>{' '}
          and pursuing a MS in Information Experience Design @{' '}
          <InlineLink href="https://pratt.edu" external variant="subtle">Pratt</InlineLink>
        </p>
      </div>
    </section>
  )
}
