import Link from 'next/link'
import NavLink from './NavLink'

const links = [
  { href: '/', label: 'work' },
  { href: '/about', label: 'about' },
  { href: '/design-system', label: 'system' },
]

export default function Nav() {
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

        <ul className="flex items-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
