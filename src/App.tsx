import { useState } from 'react'
import './App.css'

type Hole = {
  id: string
  name: string
  kind: 'hole'
}

type Facility = {
  id: string
  name: string
  kind: 'facility'
}

type ParkItem = Hole | Facility

type Course = {
  holes: Hole[]
}

type Park = {
  course: Course
  facilities: Facility[]
}

const holes: Hole[] = []

const course: Course = {
  holes: holes,
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
  const [selectedItem, setSelectedItem] = useState<ParkItem | null>(null)
  return (
    <main>
      <h1>Park to Podium</h1>
      <section className="park">
        <h2>Disc Golf Park</h2>
        <div className="holes">
          {initialPark.course.holes.length === 0 && (
            <p className="empty-course">
              Your course is empty. Build your first hole to get started.
            </p>
          )}
          {initialPark.course.holes.map((hole) => (
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
