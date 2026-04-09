import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteDetails } from '../../data/site'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/contact', label: 'Contact' },
]

const NavBar = () => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between py-3">
        <Link to="/" className="flex items-center">
          <img src="/assets/crazy8logo.jpeg" alt={siteDetails.name} className="h-12 w-12 rounded-full" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="m-0 flex list-none items-center gap-8 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`text-sm uppercase tracking-[0.25em] transition-colors ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-brand-red'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <Link to="/contact" className="cta-primary">
            Book a Visit
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-current transition-transform ${isOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-0.5 w-5 bg-current transition-transform ${isOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <div className="page-shell flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm uppercase tracking-[0.25em] text-zinc-300 transition-colors hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="cta-primary mt-2">
              Book a Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
