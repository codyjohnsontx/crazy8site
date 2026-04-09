import { Link } from 'react-router-dom'
import { disciplines } from '../data/disciplines'
import { siteDetails } from '../data/site'

const Footer = () => {
  const disciplineDetailsTarget =
    disciplines.find((discipline) => discipline.slug === 'bjj') ?? disciplines[0]

  return (
    <footer className="border-t border-white/10 py-14">
      <div className="page-shell">
        <div className="mx-auto grid max-w-2xl justify-center gap-x-24 gap-y-10 text-center md:grid-cols-2">
          <div className="mx-auto">
            <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">Contact</h3>
            <p className="mt-4 text-sm text-zinc-400">{siteDetails.city}</p>
            <Link to="/contact" className="mt-5 inline-block text-sm text-zinc-300 transition-colors hover:text-brand-red">
              Use the contact form
            </Link>
          </div>

          <div className="mx-auto">
            <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">Explore</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/about" className="text-sm text-zinc-300 transition-colors hover:text-brand-red">
                  About
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-sm text-zinc-300 transition-colors hover:text-brand-red">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-zinc-300 transition-colors hover:text-brand-red">
                  Contact
                </Link>
              </li>
              {disciplineDetailsTarget && (
                <li>
                  <Link
                    to={`/disciplines/${disciplineDetailsTarget.slug}`}
                    className="text-sm text-zinc-300 transition-colors hover:text-brand-red"
                  >
                    Discipline Details
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
