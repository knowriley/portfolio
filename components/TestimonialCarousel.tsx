'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import IconButton from './IconButton'

interface Segment {
  text: string
  highlight?: boolean
}

interface Testimonial {
  segments: Segment[]
  author: string
  title: string
  subtitle: string
}

const testimonials: Testimonial[] = [
  {
    segments: [
      { text: '"Riley is the ' },
      {
        text: 'rare combination of a talented designer and keen strategist',
        highlight: true,
      },
      {
        text: ", unafraid to untangle complex business problems and use UX as a tool to advance real business goals. If you're looking for a ",
      },
      { text: 'wicked-smart, bold team player', highlight: true },
      {
        text: ' who excels at the intersection of strategy, service design, and UX, you\'ll be lucky to have Riley on your team."',
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
      { text: 'Riley’s attention to detail, thoughtfulness, and courteous demeanor truly set her apart.', highlight: true }
    ],
    
    author: 'Nolan Braman',
    title: 'Senior Software Engineer',
    subtitle: 'Freelance client',
  },
  {
    segments: [
      { text: 'I have been so impressed by your thoughtfulness and proactiveness! You’ve been a lifesaver with the website work,' },
      { text: 'literally and obviously wouldn’t have been able to do it without you.', highlight: true }
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
      <div className="max-w-page w-full flex flex-col gap-12">
        {/* Quote */}
        <p className="font-medium text-text-primary text-h2 lg:text-h1">
          {t.segments.map((seg, i) =>
            seg.highlight ? (
              <span key={i} className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink">
                {seg.text}
              </span>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </p>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5">
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

        {/* Controls row */}
        <div className="flex items-center justify-end gap-6">
          {/* Attribution + arrows */}
          <div className="text-right">
            <p className="text-body-small font-medium text-text-primary">{t.author}</p>
            <p className="text-body-small text-text-tertiary">{t.title}</p>
            <p className="text-body-small text-text-tertiary">{t.subtitle}</p>
          </div>

          <div className="flex gap-2">
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
