const text = {
  mission:
    'Our mission is to provide students with high-quality instruction to advance their knowledge in both sport and self-defense-based grappling.',
  sergio:
    'I\'m Sergio "Coco" Ortiz, and I\'ve been training for 17 years, primarily in Brazilian Jiu Jitsu and more recently, Catch Wrestling. I am a 1st-degree black belt in Jiu Jitsu and I\'m currently learning Catch Wrestling under Coach Navalle Childs in San Antonio through Combat City Catch Wrestling. I\'ve served as a corrections officer for 22 years, with 19 years at the Hays County Sheriff\'s Office, currently in the Classifications Division. I assist with the Agency\'s Control Tactics/Combatives program and hold certifications as a TCOLE instructor, Level 1 EFC Combatives Instructor, and Level 3 C4C Combatives Instructor. While I have limited competition experience and am new to teaching grappling, I believe I have valuable insights and techniques to share. My goal with the Crazy Eights Grappling Club is to help students enhance their grappling by incorporating more aggressive and dominant techniques. I\'m excited to grow alongside my students.',
}

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
    <div>
      {/* Instructor */}
      <section className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto px-4 py-16">
        <div className="md:w-2/5">
          <img
            src="/assets/Sergio.png"
            alt="Sergio Ortiz"
            className="w-full"
          />
        </div>
        <div className="md:w-3/5">
          <h2 className="text-sm text-zinc-400 uppercase tracking-wider">Meet Your Instructor</h2>
          <h1 className="text-3xl font-bold mt-2">Sergio &ldquo;Coco&rdquo; Ortiz</h1>
          <p className="mt-6 text-zinc-300 leading-relaxed">{text.sergio}</p>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-t border-zinc-900 py-16 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold uppercase tracking-wider">Credentials</h2>
        <ul className="mt-6 space-y-3 text-zinc-300">
          {credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {/* Mission */}
      <section className="border-t border-zinc-900 py-16 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold uppercase tracking-wider">Our Mission</h2>
        <p className="mt-4 text-zinc-300 text-lg leading-relaxed">{text.mission}</p>
      </section>
    </div>
  )
}

export default AboutPage
