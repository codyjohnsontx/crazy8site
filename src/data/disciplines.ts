export interface BaseDiscipline {
  name: string
  slug: string
  description: string
}

export const disciplinesBySlug = {
  bjj: {
    name: 'Brazilian Jiu-Jitsu',
    slug: 'bjj',
    description:
      'Ground-based grappling focused on submissions, positional control, and leverage over strength.',
  },
  'catch-wrestling': {
    name: 'Catch Wrestling',
    slug: 'catch-wrestling',
    description:
      'Aggressive, submission-oriented wrestling emphasizing pins, cranks, and dominant positioning.',
  },
} as const satisfies Record<string, BaseDiscipline>
