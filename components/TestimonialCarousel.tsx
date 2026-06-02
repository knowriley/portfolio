'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import IconButton from './IconButton'
import InlineLink from './InlineLink'

interface Segment {
  text: string
  highlight?: boolean
}

interface Testimonial {
  segments: Segment[]
  author: string
  title: string
  subtitle: string
  /** Optional external link rendered in place of the subtitle (e.g. "Read full endorsement on LinkedIn"). */
  link?: { href: string; label: string }
}

const testimonials: Testimonial[] = [
  {
    segments: [
      { text: 'Riley is a ' },
      { text: 'rare talent who I see as a unicorn', highlight: true },
      { text: '...Her combination of technical and design skills has been instrumental—we would have been ' },
      { text: 'unable to scale Claude Code across our global chapter without Riley’s involvement, guidance, and instruction', highlight: true },
      { text: '...she’s an engineer’s dream to collaborate with. When staffing Riley to a project, I know I’m providing a design resource who ' },
      { text: 'can lead in any and all functions of the role', highlight: true },
      { text: '.' },
    ],
    author: 'Brendan Gilsenan',
    title: 'Lead Experience Designer & Manager @ Chubb',
    subtitle: '',
    link: {
      href: 'https://www.linkedin.com/in/riley-knowles/details/recommendations/',
      label: 'Read full endorsement on LinkedIn',
    },
  },
  {
    segments: [
      { text: 'Riley is the ' },
      {
        text: 'rare combination of a talented designer and keen strategist',
        highlight: true,
      },
      {
        text: ", unafraid to untangle complex business problems and use UX as a tool to advance real business goals. If you're looking for a ",
      },
      { text: 'wicked-smart, bold team player', highlight: true },
      {
        text: ' who excels at the intersection of strategy, service design, and UX, you\'ll be lucky to have Riley on your team.',
      },
    ],
    author: 'Taylor Valore',
    title: 'Ex-Product Manager',
    subtitle: 'Professor turned Client',
  },
  {
    segments: [
      { text: 'Riley’s systems thinking approach and knack for simplifying complex concepts proved invaluable when she delivered a seamless billing experience, despite multiple integrations and high load times. ' },
      { text: 'She brings her strategic lens to all problems, ', highlight: true },
      { text: 'consistently improving the user experience while driving business results.' },
    ],
    author: 'Ishan Patel',
    title: 'Experience Design Manager @ Chubb',
    subtitle: '',
  },
  {
    segments: [
      { text: 'I can confidently say that she is an outstanding UX Designer.' },
      { text: ' Riley’s attention to detail, thoughtfulness, and courteous demeanor truly set her apart.', highlight: true },
    ],
    author: 'Nolan Braman',
    title: 'Senior Software Engineer',
    subtitle: 'Freelance client',
  },
  {
    segments: [
      { text: 'I have been so impressed by your thoughtfulness and proactiveness! You’ve been a lifesaver with the website work,' },
      { text: ' literally and obviously wouldn’t have been able to do it without you.', highlight: true },
    ],
    author: 'Jenny Li',
    title: 'Director of Product Marketing @ Conductor',
    subtitle: 'Cross-functional Partner',
  },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  const t = testimonials[index]

  return (
    <section className="flex justify-center px-5 md:px-10 py-12 md:py-20">
      <div className="max-w-page w-full flex flex-col gap-8">

        {/* Quote + attribution — no card; sits directly on the page, led by a large quote mark */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            {/*
              Large filled quotation mark. lucide has no filled quote glyph, so we use a serif
              (Lora) typographic mark painted with the red→pink gradient via the same bg-clip-text
              trick as the highlight text below. Negative bottom margin pulls the quote up under
              the mark's empty lower half (the glyph sits at the top of its em box).
            */}
            <span
              aria-hidden
              className="block select-none font-serif leading-none text-[72px] md:text-[104px] -mb-4 md:-mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink"
            >
              &ldquo;
            </span>
            {/*
              Gradient is applied to the parent <p> (bg-clip:text + text-transparent), so the
              red→pink wash spans the whole quote as one continuous image. Non-highlighted segments
              override `color` with `text-text-primary` to render solid; highlighted segments inherit
              the parent's transparent fill, revealing the slice of gradient at their position.
              See CLAUDE.md → Gradient system for the canonical pattern.
            */}
            <p className="font-normal text-body-big md:text-h3 lg:text-h1 bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink [&_a]:text-inherit">
              {t.segments.map((seg, i) => (
                <span key={i} className={seg.highlight ? undefined : 'text-text-primary'}>
                  {seg.text}
                </span>
              ))}
            </p>
          </div>

          <div className="text-left">
            <p className="text-body-small font-medium text-text-primary">{t.author}</p>
            <p className="text-body-small text-text-tertiary">{t.title}</p>
            {t.subtitle && (
              <p className="text-body-small text-text-tertiary">{t.subtitle}</p>
            )}
            {t.link && (
              <p className="text-body-small">
                <InlineLink href={t.link.href} external variant="icon">
                  {t.link.label}
                </InlineLink>
              </p>
            )}
          </div>
        </div>

        {/* Controls row — outside the card. Phantom left spacer mirrors the
            arrows column so the dot stack stays optically centered. */}
        <div className="flex items-center gap-4">
          <div className="flex-1" />

          <div className="flex items-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`size-2 rounded-full transition-all ${
                  i === index ? 'bg-text-primary' : 'bg-border-strong hover:bg-text-tertiary'
                }`}
              />
            ))}
          </div>

          <div className="flex-1 flex justify-end gap-2">
            <IconButton
              icon={<ArrowLeft size={20} strokeWidth={2} />}
              onClick={prev}
              aria-label="Previous testimonial"
            />
            <IconButton
              icon={<ArrowRight size={20} strokeWidth={2} />}
              onClick={next}
              aria-label="Next testimonial"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
