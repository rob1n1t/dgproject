import { describe, expect, it } from 'vitest'
import { buildNextHole, type Park } from './park'

describe('buildNextHole', () => {
    it('builds Hole 1 on an empty course', () => {
        const park: Park = {
            course: {
                holes: [],
                capacity: 9,
            },
            facilities: [],
        }

        const result = buildNextHole(park)

        expect(result.course.holes).toHaveLength(1)
        expect(result.course.holes[0]).toEqual({
            id: 'hole-1',
            name: 'Hole 1',
            kind: 'hole',
        })
    })

    it('builds the next numbered hole', () => {
        const park: Park = {
            course: {
                holes: [
                    {
                        id: 'hole-1',
                        name: 'Hole 1',
                        kind: 'hole',
                    },
                ],
                capacity: 9,
            },
            facilities: [],
        }
        const result = buildNextHole(park)
        expect(result.course.holes).toHaveLength(2)
        expect(result.course.holes[1]).toEqual({
            id: 'hole-2',
            name: 'Hole 2',
            kind: 'hole',
        })
    })

    it('does not build beyond course capacity', () => {
        let park: Park = {
            course: {
                holes: [],
                capacity: 9,
            },
            facilities: [],
        }

        for (let index = 0; index < 10; index += 1) {
            park = buildNextHole(park)
        }

        expect(park.course.holes).toHaveLength(9)
        expect(park.course.holes.map((hole) => hole.id)).toEqual([
            'hole-1',
            'hole-2',
            'hole-3',
            'hole-4',
            'hole-5',
            'hole-6',
            'hole-7',
            'hole-8',
            'hole-9',
        ])
    })

    it('does not mutate the original park', () => {
        const park: Park = {
            course: {
                holes: [],
                capacity: 9,
            },
            facilities: [],
        }

        const result = buildNextHole(park)

        expect(park.course.holes).toHaveLength(0)
        expect(result.course.holes).toHaveLength(1)
        expect(result).not.toBe(park)
        expect(result.course).not.toBe(park.course)
        expect(result.course.holes).not.toBe(park.course.holes)
    })
})
