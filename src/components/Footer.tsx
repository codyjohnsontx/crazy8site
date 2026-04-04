import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 mt-16 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-zinc-400 font-medium">Contact</h3>
          <p className="mt-3 text-zinc-300">info@crazy8grappling.com</p>
          <p className="text-zinc-300">(512) 555-0188</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest text-zinc-400 font-medium">Location</h3>
          <p className="mt-3 text-zinc-300">San Marcos, Texas</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest text-zinc-400 font-medium">Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/about" className="text-zinc-300 hover:text-brand-red transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/schedule" className="text-zinc-300 hover:text-brand-red transition-colors">
                Schedule
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-zinc-300 hover:text-brand-red transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
