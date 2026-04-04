interface ClassSession {
  day: string
  time: string
  name: string
  instructor: string
}

const schedule: ClassSession[] = [
  { day: 'Friday', time: '12:00 PM', name: 'Grappling (BJJ / Catch Wrestling)', instructor: 'Sergio Ortiz' },
]

const SchedulePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold uppercase tracking-wider">Class Schedule</h1>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="py-3 pr-6 text-sm text-zinc-400 uppercase tracking-wider font-medium">
                Day
              </th>
              <th className="py-3 pr-6 text-sm text-zinc-400 uppercase tracking-wider font-medium">
                Time
              </th>
              <th className="py-3 pr-6 text-sm text-zinc-400 uppercase tracking-wider font-medium">
                Class
              </th>
              <th className="py-3 text-sm text-zinc-400 uppercase tracking-wider font-medium">
                Instructor
              </th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((s) => (
              <tr key={`${s.day}-${s.time}`} className="border-b border-zinc-900">
                <td className="py-4 pr-6 font-medium">{s.day}</td>
                <td className="py-4 pr-6 text-zinc-300">{s.time}</td>
                <td className="py-4 pr-6">{s.name}</td>
                <td className="py-4 text-zinc-300">{s.instructor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SchedulePage
