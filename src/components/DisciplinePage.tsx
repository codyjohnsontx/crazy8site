import { useParams, Link } from 'react-router-dom'
import { DisciplineSlug, disciplinesBySlug } from '../data/disciplines'
import { classSchedule, siteDetails } from '../data/site'

type DisciplineDetail = (typeof disciplinesBySlug)[DisciplineSlug] & {
  history: string
  whatToExpect: string
}

const disciplineData: Record<DisciplineSlug, DisciplineDetail> = {
  bjj: {
    ...disciplinesBySlug.bjj,
    history:
      'Brazilian Jiu-Jitsu evolved from Kodokan Judo and Japanese jujutsu, refined by the Gracie family in Brazil throughout the 20th century. It gained worldwide recognition after Royce Gracie dominated the early UFC tournaments, proving that technique and leverage could overcome size and strength.',
    whatToExpect:
      'Classes focus on no-gi grappling. Positional drilling, live sparring (rolling), and technique instruction. You will learn guard passes, sweeps, submissions, and escapes. All experience levels train together with instruction scaled to your ability.',
  },
  'catch-wrestling': {
    ...disciplinesBySlug['catch-wrestling'],
    history:
      'Catch-as-catch-can wrestling originated in Britain and became wildly popular in America through carnival and professional wrestling circuits in the late 1800s and early 1900s. It is the ancestor of modern professional wrestling but retains its roots as a legitimate combat grappling system.',
    whatToExpect:
      'Classes emphasize aggressive top pressure, riding, and a wide variety of submissions including neck cranks, leg locks, and arm locks. The style rewards relentless pace and dominant positioning. Training under Coach Navalle Childs\' Combat City Catch Wrestling curriculum.',
  },
}

const DisciplinePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const discipline =
    slug && slug in disciplineData ? disciplineData[slug as DisciplineSlug] : undefined
  const featuredSession = classSchedule.length > 0 ? classSchedule[0] : undefined

  if (!discipline) {
    return (
      <div className="page-shell py-20 text-center">
        <h1 className="text-3xl font-bold">Discipline not found</h1>
        <Link to="/" className="mt-4 inline-block text-brand-red hover:text-white transition-colors">
          &larr; Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="page-shell pb-16 pt-14 sm:pt-16">
      <Link to="/" className="text-sm uppercase tracking-[0.22em] text-zinc-400 transition-colors hover:text-brand-red">
        &larr; Back to Home
      </Link>

      <section className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">Discipline detail</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {discipline.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            {discipline.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/schedule" className="cta-primary">
              View Schedule
            </Link>
            <Link to="/contact" className="cta-secondary">
              Ask About Your First Class
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Current class window</p>
          {featuredSession ? (
            <>
              <p className="mt-4 text-2xl font-semibold text-white">
                {featuredSession.day}, {featuredSession.time}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{siteDetails.primarySessionSummary}</p>
              <div className="mt-6 space-y-3 text-sm text-zinc-400">
                <p>Coach: {featuredSession.instructor}</p>
                <p>Location: {siteDetails.city}</p>
              </div>
            </>
          ) : (
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
              No current class window is listed right now. Contact the club for the latest training schedule.
            </p>
          )}
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <p className="eyebrow">History</p>
          <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">{discipline.history}</p>
        </div>
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <p className="eyebrow">What to expect</p>
          <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">{discipline.whatToExpect}</p>
        </div>
      </section>
    </div>
  )
}

export default DisciplinePage
