import './App.css'

const holeNumbers = [1, 2, 3, 4, 5, 6]
const facilityNames = ['Practice Area', 'Pro Shop', 'Workshop']

function App() {
  return (
    <main>
      <h1>Park to Podium</h1>
      <section className="park">
        <h2>Disc Golf Park</h2>
        <div className="holes">
          {holeNumbers.map((holeNumber) => (
            <div className="hole" key={holeNumber}>
              Hole {holeNumber}
            </div>
          ))}
        </div>
        <div className="clubhouse">Clubhouse</div>
        <div className="facilities">
          {facilityNames.map((facilityName) => (
            <div className="facility" key={facilityName}>
              {facilityName}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
