import { MapPin } from 'lucide-react'
import InlineLink from './InlineLink'

export default function Hero() {
  return (
    <section className="flex justify-center px-5 md:px-10 py-12 md:py-20">
      <div className="max-w-page w-full">
        <p className="text-body-small text-text-tertiary mb-4 flex items-center gap-1.5">
          <MapPin size={20} strokeWidth={2} />
          Based in New York City
        </p>

        <h1 className="font-normal text-text-primary mb-4 text-h2 lg:text-display">
          UX Strategist & Product Designer solving complex problems with{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink">human-centered design</span> and{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink">systems thinking.</span>
        </h1>

        <p className="text-body-big text-text-secondary">
          Currently designing claims experiences @{' '}
          <InlineLink href="https://chubb.com" external variant="subtle">Chubb</InlineLink>{' '}
          and pursuing a MS in Information Experience Design @{' '}
          <InlineLink href="https://pratt.edu" external variant="subtle">Pratt</InlineLink>
        </p>
      </div>
    </section>
  )
}
