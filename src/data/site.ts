export interface ClassSession {
  day: string
  time: string
  name: string
  instructor: string
}

export const siteDetails = {
  name: 'Crazy 8 Grappling Club',
  city: 'San Marcos, Texas',
  instructorName: 'Sergio "Coco" Ortiz',
  instructorSummary:
    'Black belt in BJJ with 17 years on the mats, 22 years in law enforcement, and a teaching style built around pressure, control, and practical grappling.',
  primarySessionLabel: 'Friday noon grappling',
  primarySessionSummary:
    'A focused no-gi training block that blends Brazilian Jiu-Jitsu structure with Catch Wrestling pressure and aggression.',
  mission:
    'High-quality instruction for students who want sharper sport grappling and more dominant self-defense fundamentals.',
} as const

export const inquiryHours = ['Mon-Fri 5:30 PM - 9:00 PM', 'Sat 10:00 AM - 1:00 PM']

export const classSchedule: ClassSession[] = [
  {
    day: 'Friday',
    time: '12:00 PM',
    name: 'Grappling (BJJ / Catch Wrestling)',
    instructor: siteDetails.instructorName,
  },
]
