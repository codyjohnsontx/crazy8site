import { useParams, Link } from 'react-router-dom'

interface DisciplineDetail {
  name: string
  description: string
  history: string
  whatToExpect: string
}

const disciplineData: Record<string, DisciplineDetail> = {
  bjj: {
    name: 'Brazilian Jiu-Jitsu',
    description:
      'Ground-based grappling focused on submissions, positional control, and leverage over strength.',
    history:
      'Brazilian Jiu-Jitsu evolved from Kodokan Judo and Japanese jujutsu, refined by the Gracie family in Brazil throughout the 20th century. It gained worldwide recognition after Royce Gracie dominated the early UFC tournaments, proving that technique and leverage could overcome size and strength.',
    whatToExpect:
      'Classes focus on no-gi grappling. Positional drilling, live sparring (rolling), and technique instruction. You will learn guard passes, sweeps, submissions, and escapes. All experience levels train together with instruction scaled to your ability.',
  },
  'catch-wrestling': {
    name: 'Catch Wrestling',
    description:
      'Aggressive, submission-oriented wrestling emphasizing pins, cranks, and dominant positioning.',
    history:
      'Catch-as-catch-can wrestling originated in Britain and became wildly popular in America through carnival and professional wrestling circuits in the late 1800s and early 1900s. It is the ancestor of modern professional wrestling but retains its roots as a legitimate combat grappling system.',
    whatToExpect:
      'Classes emphasize aggressive top pressure, riding, and a wide variety of submissions including neck cranks, leg locks, and arm locks. The style rewards relentless pace and dominant positioning. Training under Coach Navalle Childs\' Combat City Catch Wrestling curriculum.',
  },
}

const DisciplinePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const discipline = slug ? disciplineData[slug] : undefined

  if (!discipline) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Discipline not found</h1>
        <Link to="/" className="mt-4 inline-block text-brand-red hover:text-white transition-colors">
          &larr; Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link to="/" className="text-sm text-zinc-400 hover:text-brand-red transition-colors">
        &larr; Back to Home
      </Link>

      <h1 className="text-4xl font-bold uppercase tracking-tight mt-6">{discipline.name}</h1>
      <p className="mt-4 text-xl text-zinc-400 leading-relaxed">{discipline.description}</p>

      <section className="border-t border-zinc-900 mt-12 pt-12">
        <h2 className="text-2xl font-bold uppercase tracking-wider">History</h2>
        <p className="mt-4 text-zinc-300 leading-relaxed">{discipline.history}</p>
      </section>

      <section className="border-t border-zinc-900 mt-12 pt-12">
        <h2 className="text-2xl font-bold uppercase tracking-wider">What to Expect</h2>
        <p className="mt-4 text-zinc-300 leading-relaxed">{discipline.whatToExpect}</p>
      </section>

      <section className="border-t border-zinc-900 mt-12 pt-12">
        <div className="flex gap-x-12 text-lg">
          <Link
            to="/schedule"
            className="text-brand-red hover:text-white transition-colors font-semibold"
          >
            View Schedule &rarr;
          </Link>
          <Link
            to="/contact"
            className="text-brand-red hover:text-white transition-colors font-semibold"
          >
            Get in Touch &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}

export default DisciplinePage
