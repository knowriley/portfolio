'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'work' },
  { href: '/about', label: 'about' },
  { href: '/design-system', label: 'system' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-border-subtle px-5 md:px-10">
      <div className="max-w-page mx-auto h-16 flex items-center justify-between w-full">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-text-primary font-medium text-body-small"
        >
          <span className="size-5 rounded-full bg-gradient-to-r from-gradient-red from-[22%] to-gradient-orange block shrink-0" />
          Riley Knowles
        </Link>

        <ul className="flex items-center gap-2">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-body-small px-2.5 py-1.5 rounded-sm transition-colors ${
                    isActive
                      ? 'bg-bg-secondary text-text-primary font-medium'
                      : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
