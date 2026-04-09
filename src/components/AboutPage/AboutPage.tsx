import { Link } from 'react-router-dom'
import { siteDetails } from '../../data/site'

const bioSections = [
  'I\'m Sergio "Coco" Ortiz, and I\'ve been training for 17 years, primarily in Brazilian Jiu-Jitsu and more recently in Catch Wrestling. I am a 1st-degree black belt in Jiu-Jitsu and continue studying Catch Wrestling under Coach Navalle Childs through Combat City Catch Wrestling in San Antonio.',
  'I\'ve served as a corrections officer for 22 years, including 19 years with the Hays County Sheriff\'s Office, where I currently work in the Classifications Division. I also assist with the agency\'s Control Tactics and Combatives program and hold TCOLE, Level 1 EFC Combatives, and Level 3 C4C Combatives instructor certifications.',
  'While I have limited competition experience and I\'m still growing as an instructor, I believe I have practical details and hard-earned lessons worth sharing. My goal with Crazy 8 Grappling Club is to help students build more aggressive, more dominant, and more reliable grappling habits.',
]

const credentials = [
  '1st-degree Black Belt, Brazilian Jiu-Jitsu',
  'TCOLE Certified Instructor',
  'Level 1 EFC Combatives Instructor',
  'Level 3 C4C Combatives Instructor',
  '17 years training experience',
  '22 years in corrections / law enforcement',
]

const AboutPage = () => {
  return (
    <div className="pb-16">
      <section className="page-shell grid gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-18">
        <div className="overflow-hidden border border-white/10 p-3">
          <img
            src="/assets/Sergio.png"
            alt="Sergio Ortiz"
            className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow">Meet your instructor</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {siteDetails.instructorName}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
            {siteDetails.instructorSummary}
          </p>
          <div className="mt-8 space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">
            {bioSections.map((section, idx) => (
              <p key={idx}>{section}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-8 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="border-t border-white/10 pt-6 md:pt-8">
            <p className="eyebrow">Credentials</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Built on years of instruction, service, and mat time.
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {credentials.map((credential) => (
                <li key={credential} className="border-b border-white/10 py-3 text-sm leading-6 text-zinc-300">
                  {credential}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between border-t border-white/10 pt-6 md:pt-8">
            <div>
              <p className="eyebrow">Mission</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Practical grappling, taught with intent.
              </h2>
              <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">
                {siteDetails.mission}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/schedule" className="cta-primary">
                View Schedule
              </Link>
              <Link to="/contact" className="cta-secondary">
                Contact the Club
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
