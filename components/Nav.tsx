'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import NavLink from './NavLink'

const links = [
  { href: '/', label: 'work' },
  { href: '/about', label: 'about' },
  { href: '/design-system', label: 'system' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-border-subtle px-5 md:px-10">
      <div className="max-w-page mx-auto h-16 flex items-center justify-between w-full">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-text-primary font-medium text-body-small"
        >
          <span className="relative shrink-0 flex items-center justify-center">
            <span className="absolute size-4 rounded-full bg-accent blur-[10px] opacity-50" />
            <span className="size-5 rounded-full bg-gradient-to-r from-gradient-red from-[22%] to-gradient-orange block" />
          </span>
          Riley Knowles
        </Link>

        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          className="md:hidden -mr-2 p-2 rounded-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden absolute top-full left-0 right-0 bg-bg border-b border-border-subtle px-5"
        >
          <ul className="flex flex-col py-3 gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
