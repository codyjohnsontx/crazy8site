import { Link } from 'react-router-dom'

interface Discipline {
  name: string
  slug: string
  description: string
}

const disciplines: Discipline[] = [
  {
    name: 'Brazilian Jiu-Jitsu',
    slug: 'bjj',
    description:
      'Ground-based grappling focused on submissions, positional control, and leverage over strength.',
  },
  {
    name: 'Catch Wrestling',
    slug: 'catch-wrestling',
    description:
      'Aggressive, submission-oriented wrestling emphasizing pins, cranks, and dominant positioning.',
  },
]

const HomePage = () => {
  return (
    <div>
      {/* Disciplines */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
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

      {/* CTA */}
      <section className="border-t border-zinc-900 py-12 text-center">
        <Link
          to="/schedule"
          className="text-brand-red hover:text-white transition-colors font-semibold text-lg"
        >
          View Schedule &rarr;
        </Link>
      </section>
    </div>
  )
}

export default HomePage
