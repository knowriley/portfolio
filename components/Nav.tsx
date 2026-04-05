'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'work' },
  { href: '/about', label: 'about' },
  { href: '/resume', label: 'resume' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-text-primary font-medium text-sm"
        >
          <span className="w-5 h-5 rounded-full bg-secondary block shrink-0" />
          Riley Knowles
        </Link>

        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                    ? 'text-text-primary font-semibold'
                    : 'text-text-tertiary hover:text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
