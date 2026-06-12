import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Posiciones } from './pages/Posiciones'
import { Calendario } from './pages/Calendario'
import { Selecciones } from './pages/Selecciones'
import { matches } from './data-matches/matches'
import { diegoGalarza } from './data-predictions/diego-galarza'
import { anaMartinez } from './data-predictions/ana-martinez'

function App() {
  const players = [diegoGalarza, anaMartinez]

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Navbar />
        <main className="py-6">
          <Routes>
            <Route path="/" element={<Posiciones players={players} matches={matches} />} />
            <Route path="/calendario" element={<Calendario matches={matches} />} />
            <Route path="/selecciones" element={<Selecciones players={players} matches={matches} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App