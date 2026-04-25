'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'

export default function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <Link
      href={href}
      className={`block text-body-small px-2.5 py-1.5 rounded-sm transition-colors ${
        isActive
          ? 'text-text-primary font-medium'
          : 'text-text-secondary hover:text-text-primary hover:font-medium'
      }`}
    >
      {children}
    </Link>
  )
}
