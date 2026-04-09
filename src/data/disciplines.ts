export type DisciplineSlug = 'bjj' | 'catch-wrestling'

export interface BaseDiscipline {
  name: string
  slug: DisciplineSlug
  description: string
}

export const disciplinesBySlug: Record<DisciplineSlug, BaseDiscipline> = {
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
}

function defineDisciplineOrder<const T extends readonly DisciplineSlug[]>(
  order: Exclude<DisciplineSlug, T[number]> extends never ? T : never,
) {
  return order
}

export const disciplineOrder = defineDisciplineOrder(['bjj', 'catch-wrestling'] as const)

export const disciplines = disciplineOrder.map((slug) => disciplinesBySlug[slug])
