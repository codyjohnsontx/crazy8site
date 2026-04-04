interface ClassSession {
  day: string
  time: string
  name: string
  instructor: string
}

const schedule: ClassSession[] = [
  { day: 'Monday', time: '6:00 PM', name: 'No-Gi BJJ', instructor: 'Sergio Ortiz' },
  { day: 'Monday', time: '7:30 PM', name: 'Catch Wrestling', instructor: 'Sergio Ortiz' },
  { day: 'Tuesday', time: '6:00 PM', name: 'Gi BJJ', instructor: 'Sergio Ortiz' },
  { day: 'Wednesday', time: '6:00 PM', name: 'No-Gi BJJ', instructor: 'Sergio Ortiz' },
  { day: 'Thursday', time: '6:00 PM', name: 'Gi BJJ', instructor: 'Sergio Ortiz' },
  { day: 'Friday', time: '5:30 PM', name: 'Open Mat', instructor: 'Sergio Ortiz' },
  { day: 'Saturday', time: '10:00 AM', name: 'Open Mat', instructor: 'Sergio Ortiz' },
]

const SchedulePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold uppercase tracking-wider">Class Schedule</h1>
      <p className="mt-2 text-zinc-400">All levels welcome unless noted otherwise.</p>

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
            {schedule.map((s, i) => (
              <tr key={i} className="border-b border-zinc-900">
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
