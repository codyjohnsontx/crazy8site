import { Link } from 'react-router-dom'
import { disciplines } from '../data/disciplines'
import { classSchedule, siteDetails } from '../data/site'

const HomePage = () => {
  const featuredSession = classSchedule.length > 0 ? classSchedule[0] : undefined

  return (
    <div className="pb-16">
      <section className="overflow-hidden border-b border-white/10">
        <div className="page-shell grid gap-12 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">San Marcos Grappling Club</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Sharpen your grappling with pressure-first Friday training.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              {siteDetails.name} is built for students who want technical no-gi instruction, harder positional pressure, and a clear path to more confident grappling.
            </p>

            <div className="mt-8">
              <Link to="/contact" className="cta-primary">
                Book a Visit
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-10 bottom-0 top-10 rounded-full bg-brand-red/20 blur-3xl" />
            <div className="relative overflow-hidden border border-white/10 p-3">
              <img
                src="/assets/Sergio.png"
                alt="Sergio Ortiz"
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
              />
              <div className="grid gap-3 px-3 pb-3 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                    {siteDetails.instructorName}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {siteDetails.instructorSummary}
                  </p>
                </div>
                <Link
                  to="/about"
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-brand-red"
                >
                  Meet the Coach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Why people show up</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              One focused weekly session, zero wasted motion.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
              The club is intentionally simple: one active class, a clear teaching point of view, and training that respects your time while still pushing your grappling forward.
            </p>
          </div>

          <div className="border-t border-white/10">
            {disciplines.map((discipline, index) => (
              <Link
                key={discipline.slug}
                to={`/disciplines/${discipline.slug}`}
                className="group grid gap-4 border-b border-white/10 py-6 transition-colors md:grid-cols-[auto_1fr_auto] md:items-start"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="max-w-xl">
                  <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-brand-red">
                    {discipline.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{discipline.description}</p>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-300 md:pt-2">
                  View details &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-8 sm:py-12">
        <div className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">This week at the club</p>
            {featuredSession ? (
              <>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  {featuredSession.day}, {featuredSession.time}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                  {siteDetails.primarySessionSummary} Train with a group that wants clean technique, hard rounds, and direct coaching.
                </p>
              </>
            ) : (
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                The next public class has not been posted yet. Check back soon or contact the club for the latest schedule.
              </p>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-l border-white/15 pl-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Class focus</p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {featuredSession?.name ?? 'Current class details will be announced soon.'}
              </p>
            </div>
            <div className="border-l border-white/15 pl-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Primary next step</p>
              <div className="mt-3 flex flex-col gap-2">
                <Link to="/schedule" className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Review schedule
                </Link>
                <p className="text-sm leading-6 text-zinc-500">Reach out when you are ready to visit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-10 sm:py-14">
        <div className="flex flex-col gap-6 border-y border-white/10 py-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Ready to train?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Reach out, get the details, and walk in ready for Friday.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
              If you need logistics, gear guidance, or just want to confirm fit, contact the club and get a direct answer.
            </p>
          </div>
          <div>
            <Link to="/contact" className="cta-primary">
              Contact the Club
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
