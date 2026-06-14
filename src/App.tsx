import { HashRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Posiciones } from './pages/Posiciones'
import { Calendario } from './pages/Calendario'
import { Selecciones } from './pages/Selecciones'
//import { CargarPredicciones } from './pages/CargarPredicciones'
import { matches } from './data-matches/matches'

// Carga dinámica de todos los archivos de predicciones
const predictionModules = import.meta.glob('./data-predictions/*.ts', { eager: true })
const players = Object.values(predictionModules).map((mod: any) => mod.default || mod[Object.keys(mod)[0]])

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Navbar />
        <main className="py-6">
          <Routes>
            <Route path="/" element={<Posiciones players={players} matches={matches} />} />
            <Route path="/calendario" element={<Calendario matches={matches} />} />
            <Route path="/selecciones" element={<Selecciones players={players} matches={matches} />} />
            {/* <Route path="/cargar-predicciones" element={<CargarPredicciones />} /> */}
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App