export type Hole = {
  id: string
  name: string
  kind: 'hole'
}

export type Facility = {
  id: string
  name: string
  kind: 'facility'
}

export type ParkItem = Hole | Facility

export type Course = {
  holes: Hole[]
  capacity: 9 | 18
}

export type Park = {
  course: Course
  facilities: Facility[]
}

export function buildNextHole(currentPark: Park): Park {
  if (
    currentPark.course.holes.length >= currentPark.course.capacity
  ) {
    return currentPark
  }
  const nextHoleNumber = currentPark.course.holes.length + 1

  const nextHole: Hole = {
    id: `hole-${nextHoleNumber}`,
    name: `Hole ${nextHoleNumber}`,
    kind: 'hole',
  }

  return {
    ...currentPark,
    course: {
      ...currentPark.course,
      holes: [...currentPark.course.holes, nextHole],
    },
  }
}