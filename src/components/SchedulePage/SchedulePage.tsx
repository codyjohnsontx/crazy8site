import { Link } from 'react-router-dom'
import { classSchedule, siteDetails } from '../../data/site'

const SchedulePage = () => {
  const featuredSession = classSchedule[0] ?? null
  const featuredHeading = featuredSession
    ? `Train with us ${featuredSession.day.toLowerCase()} at ${featuredSession.time.toLowerCase()}.`
    : 'Check back soon for the next public class.'

  return (
    <div className="page-shell pb-16 pt-14 sm:pt-16">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <p className="eyebrow">Current public class</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {featuredHeading}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
            The current schedule is deliberately focused. If you want details on your first visit, location logistics, or whether the class is a fit, reach out before you drop in.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="cta-primary">
              Ask about your first class
            </Link>
            <Link to="/about" className="cta-secondary">
              Meet the instructor
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Session details</p>
          {featuredSession ? (
            <dl className="mt-6 grid gap-6 text-sm text-zinc-300">
              <div>
                <dt className="uppercase tracking-[0.2em] text-zinc-500">Day</dt>
                <dd className="mt-2 text-lg font-medium text-white">{featuredSession.day}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.2em] text-zinc-500">Time</dt>
                <dd className="mt-2 text-lg font-medium text-white">{featuredSession.time}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.2em] text-zinc-500">Class</dt>
                <dd className="mt-2 leading-6">{featuredSession.name}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.2em] text-zinc-500">Instructor</dt>
                <dd className="mt-2 leading-6">{featuredSession.instructor}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.2em] text-zinc-500">Location</dt>
                <dd className="mt-2 leading-6">{siteDetails.city}</dd>
              </div>
            </dl>
          ) : (
            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
              No public class is listed right now. Reach out directly for the most current training availability.
            </p>
          )}
        </div>
      </section>

      <section className="mt-10 overflow-x-auto">
        <div className="border-t border-white/10 pt-6 md:pt-8">
          {classSchedule.length > 0 ? (
            <table className="w-full text-left">
              <caption className="sr-only">Class schedule</caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="py-3 pr-6 text-sm font-medium uppercase tracking-[0.22em] text-zinc-400">
                    Day
                  </th>
                  <th scope="col" className="py-3 pr-6 text-sm font-medium uppercase tracking-[0.22em] text-zinc-400">
                    Time
                  </th>
                  <th scope="col" className="py-3 pr-6 text-sm font-medium uppercase tracking-[0.22em] text-zinc-400">
                    Class
                  </th>
                  <th scope="col" className="py-3 text-sm font-medium uppercase tracking-[0.22em] text-zinc-400">
                    Instructor
                  </th>
                </tr>
              </thead>
              <tbody>
                {classSchedule.map((session) => (
                  <tr key={`${session.day}-${session.time}`} className="border-b border-white/5 last:border-b-0">
                    <td className="py-4 pr-6 font-medium text-white">{session.day}</td>
                    <td className="py-4 pr-6 text-zinc-300">{session.time}</td>
                    <td className="py-4 pr-6 text-zinc-200">{session.name}</td>
                    <td className="py-4 text-zinc-300">{session.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-sm leading-7 text-zinc-400">
              Schedule details are not available yet. Contact the club for the latest class information.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default SchedulePage
