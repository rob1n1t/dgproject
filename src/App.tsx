import { useState } from 'react'
import './App.css'

type ParkItem = {
  id: string
  name: string
  kind: 'hole' | 'facility'
}

const holes: ParkItem[] = [
  {
    id: 'hole-1',
    name: 'Hole 1',
    kind: 'hole',
  },
  {
    id: 'hole-2',
    name: 'Hole 2',
    kind: 'hole',
  },
  {
    id: 'hole-3',
    name: 'Hole 3',
    kind: 'hole',
  },
  {
    id: 'hole-4',
    name: 'Hole 4',
    kind: 'hole',
  },
  {
    id: 'hole-5',
    name: 'Hole 5',
    kind: 'hole',
  },
  {
    id: 'hole-6',
    name: 'Hole 6',
    kind: 'hole',
  },
]

const facilities: ParkItem[] = [
  {
    id: 'practice-area',
    name: 'Practice Area',
    kind: 'facility',
  },
  {
    id: 'pro-shop',
    name: 'Pro Shop',
    kind: 'facility',
  },
  {
    id: 'workshop',
    name: 'Workshop',
    kind: 'facility',
  },
]

const clubhouse: ParkItem = {
  id: 'clubhouse',
  name: 'Clubhouse',
  kind: 'facility',
}

function App() {
  const [selectedItem, setSelectedItem] = useState<ParkItem | null>(null)
  return (
    <main>
      <h1>Park to Podium</h1>
      <section className="park">
        <h2>Disc Golf Park</h2>
        <div className="holes">
          {holes.map((hole) => (
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
