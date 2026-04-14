'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const pageLinks = [
  { href: '/', label: 'home' },
  { href: '/', label: 'work' },
  { href: '/about', label: 'about' },
  { href: '/design-system', label: 'system' },
]

const contactLinks = [
  { href: 'https://www.linkedin.com/in/riley-knowles/', label: 'linkedin' },
  { href: 'mailto:knowles.riley@gmail.com', label: 'email' },
]

export default function Footer() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const localTime = now
    ? now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'America/New_York',
      })
    : '—'

  const localDate = now
    ? now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'America/New_York',
      })
    : '—'

  return (
    <footer className="flex justify-center px-5 md:px-10">
      <div className="max-w-page w-full">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 md:gap-0 mb-8 md:mb-12 pt-8 md:pt-12">
          <div className="space-y-1">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-2">LOCAL TIME</p>
            <p className="text-body-small text-text-secondary">
              {localTime}&nbsp;&nbsp;Brooklyn, NY
            </p>
            <p className="text-body-small text-text-secondary">{localDate}</p>
          </div>

          <div className="flex gap-8 md:gap-16">
            <div>
              <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-3">PAGES</p>
              <ul className="space-y-2">
                {pageLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-small text-text-secondary hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-3">CONTACT</p>
              <ul className="space-y-2">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group text-body-small text-text-secondary hover:text-text-primary flex items-center gap-1"
                    >
                      <ArrowUpRight size={20} strokeWidth={1.5} className="shrink-0 transition-transform group-hover:rotate-45" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Wordmark — overflow-visible keeps descenders visible; negative margin lets text overlap the border */}
        <div className="overflow-visible">
          <p className="relative z-10 -mb-2 md:-mb-4 lg:-mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gradient-red from-[22%] to-gradient-orange font-normal leading-tight tracking-wordmark select-none text-[56px] md:text-[80px] lg:text-[120px]">
            Riley Knowles
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-border-subtle py-4">
          <p className="text-body-small text-text-tertiary">
            © {now ? now.getFullYear() : new Date().getFullYear()} Claude-coded from scratch by Riley Knowles
          </p>
        </div>
      </div>
    </footer>
  )
}
