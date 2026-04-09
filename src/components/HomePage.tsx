import { Link } from 'react-router-dom'
import { disciplinesBySlug } from '../data/disciplines'

const disciplines = Object.values(disciplinesBySlug)

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          Sharpen your grappling.{' '}
          <span className="text-brand-red">Every Friday at noon.</span>
        </h1>
      </section>

      {/* Disciplines */}
      <section className="border-t border-zinc-900 py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12">
          {disciplines.map((d) => (
            <Link
              key={d.slug}
              to={`/disciplines/${d.slug}`}
              className="group block"
            >
              <h3 className="text-lg font-semibold uppercase tracking-wider group-hover:text-brand-red transition-colors">
                {d.name} &rarr;
              </h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{d.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Instructor teaser */}
      <section className="border-t border-zinc-900 py-16 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-8">
          <img
            src="/assets/Sergio.png"
            alt="Sergio Ortiz"
            className="w-24 h-24 object-cover rounded-full flex-shrink-0"
          />
          <div>
            <p className="text-zinc-300 leading-relaxed">
              Led by Sergio &ldquo;Coco&rdquo; Ortiz. Black belt in BJJ, 17 years on the mats, 22 years in law enforcement.
            </p>
            <Link
              to="/about"
              className="mt-3 inline-block text-brand-red hover:text-white transition-colors font-semibold text-sm uppercase tracking-widest"
            >
              Meet your instructor &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
