'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const pageLinks = [
  { href: '/', label: 'home' },
  { href: '/', label: 'work' },
  { href: '/about', label: 'about' },
]

const contactLinks = [
  { href: 'https://linkedin.com/in/rileyknowles', label: 'linkedin' },
  { href: 'mailto:riley@rileyknowles.com', label: 'email' },
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
    <footer className="flex justify-center px-10">
      <div className="max-w-page w-full">
        {/* Top row */}
        <div className="flex justify-between items-start mb-12 pt-12">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-text-tertiary mb-2">local time</p>
            <p className="text-sm text-text-secondary">
              {localTime}&nbsp;&nbsp;Brooklyn, NY
            </p>
            <p className="text-sm text-text-secondary">{localDate}</p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-tertiary mb-3">pages</p>
              <ul className="space-y-2">
                {pageLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-text-tertiary mb-3">contact</p>
              <ul className="space-y-2">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-text-secondary hover:text-text-primary flex items-center gap-1"
                    >
                      <span className="text-text-tertiary">↗</span> {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <p className="text-accent font-normal leading-none tracking-wordmark select-none text-[56px] md:text-[80px] lg:text-[120px]">
          Riley Knowles
        </p>

        {/* Copyright */}
        <div className="border-t border-border-subtle py-4">
          <p className="text-xs text-text-tertiary">
            © {now ? now.getFullYear() : new Date().getFullYear()} Claude-coded from scratch by Riley Knowles
          </p>
        </div>
      </div>
    </footer>
  )
}
