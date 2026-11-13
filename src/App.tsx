import { useState } from 'react'
import { buildNextHole } from './domain/park'
import type {
  Course,
  Facility,
  Hole,
  Park,
  ParkItem
} from './domain/park'
import './App.css'

const holes: Hole[] = []

const course: Course = {
  holes: holes,
  capacity: 9,
}

const facilities: Facility[] = [
  {
    id: 'workshop',
    name: 'Workshop',
    kind: 'facility',
  },
]

const clubhouse: Facility = {
  id: 'clubhouse',
  name: 'Clubhouse',
  kind: 'facility',
}

const initialPark: Park = {
  course: course,
  facilities: [clubhouse, ...facilities],
}

function App() {
  const [park, setPark] = useState<Park>(initialPark)
  const [selectedItem, setSelectedItem] = useState<ParkItem | null>(null)
  return (
    <main>
      <h1>Park to Podium</h1>
      <section className="park">
        <h2>Disc Golf Park</h2>
        <div className="holes">
          {park.course.holes.length < park.course.capacity && (
            <div className="empty-course">
              <p>
                {park.course.holes.length === 0
                  ? 'Your course is empty. Build your first hole to get started.'
                  : `${park.course.holes.length} of ${park.course.capacity} holes built.`
                }
              </p>

              <button
                type="button"
                onClick={() =>
                  setPark((currentPark) => buildNextHole(currentPark))
                }
              >
                {park.course.holes.length === 0
                  ? 'Build first hole'
                  : 'Build next hole'}
              </button>
            </div>
          )}
          {park.course.holes.length >= park.course.capacity && (
            <p className="course-complete">
              Your {park.course.capacity}-hole course is complete.
            </p>
          )}
          {park.course.holes.map((hole) => (
            <button
              className={selectedItem?.id === hole.id ? 'hole selected' : 'hole'}
              type="button"
              aria-pressed={selectedItem?.id === hole.id}
              key={hole.id}
              onClick={() => setSelectedItem(hole)}
            >
              {hole.name}
            </button>
          ))}
        </div>
        <button
          className={selectedItem?.id === clubhouse.id ? 'clubhouse selected' : 'clubhouse'}
          type="button"
          aria-pressed={selectedItem?.id === clubhouse.id}
          onClick={() => setSelectedItem(clubhouse)}
        >
          {clubhouse.name}
        </button>
        <div className="facilities">
          {facilities.map((facility) => (
            <button
              className={selectedItem?.id === facility.id ? 'facility selected' : 'facility'}
              type="button"
              aria-pressed={selectedItem?.id === facility.id}
              key={facility.id}
              onClick={() => setSelectedItem(facility)}
            >
              {facility.name}
            </button>
          ))}
        </div>
        <section className="details">
          <h3>Park Object Details</h3>
          {selectedItem ? (
            <div>
              <p>Name: {selectedItem.name}</p>
              <p>Type: {selectedItem.kind}</p>
            </div>
          ) : (
            <p>Select a park object to view its details.</p>
          )}
        </section>
      </section>
    </main>
  )
}

export default App
