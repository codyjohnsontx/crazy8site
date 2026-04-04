import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black border-b border-zinc-800 z-50">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-4 py-2">
        <Link to="/">
          <img
            src="/assets/crazy8logo.jpeg"
            alt="Crazy 8 Grappling Club"
            className="h-12"
          />
        </Link>
        <ul className="flex gap-x-10 list-none m-0">
          <li>
            <Link to="/about" className="text-sm uppercase tracking-widest text-zinc-300 hover:text-brand-red transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/schedule" className="text-sm uppercase tracking-widest text-zinc-300 hover:text-brand-red transition-colors">
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-sm uppercase tracking-widest text-zinc-300 hover:text-brand-red transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
