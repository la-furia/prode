import { HashRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Posiciones } from './pages/Posiciones'
import { Calendario } from './pages/Calendario'
import { Selecciones } from './pages/Selecciones'
import { matches } from './data-matches/matches'
import { diegoGalarza } from './data-predictions/diego-galarza'
import { anaMartinez } from './data-predictions/ana-martinez'
import { jugador01 } from './data-predictions/jugador-01'
import { jugador02 } from './data-predictions/jugador-02'
import { jugador03 } from './data-predictions/jugador-03'
import { jugador04 } from './data-predictions/jugador-04'
import { jugador05 } from './data-predictions/jugador-05'
import { jugador06 } from './data-predictions/jugador-06'
import { jugador07 } from './data-predictions/jugador-07'
import { jugador08 } from './data-predictions/jugador-08'
import { jugador09 } from './data-predictions/jugador-09'
import { jugador10 } from './data-predictions/jugador-10'
import { jugador11 } from './data-predictions/jugador-11'
import { jugador12 } from './data-predictions/jugador-12'
import { jugador13 } from './data-predictions/jugador-13'
import { jugador14 } from './data-predictions/jugador-14'
import { jugador15 } from './data-predictions/jugador-15'
import { jugador16 } from './data-predictions/jugador-16'
import { jugador17 } from './data-predictions/jugador-17'
import { jugador18 } from './data-predictions/jugador-18'
import { jugador19 } from './data-predictions/jugador-19'
import { jugador20 } from './data-predictions/jugador-20'
import { jugador21 } from './data-predictions/jugador-21'
import { jugador22 } from './data-predictions/jugador-22'
import { jugador23 } from './data-predictions/jugador-23'
import { jugador24 } from './data-predictions/jugador-24'
import { jugador25 } from './data-predictions/jugador-25'
import { jugador26 } from './data-predictions/jugador-26'
import { jugador27 } from './data-predictions/jugador-27'
import { jugador28 } from './data-predictions/jugador-28'
import { jugador29 } from './data-predictions/jugador-29'
import { jugador30 } from './data-predictions/jugador-30'
import { jugador31 } from './data-predictions/jugador-31'
import { jugador32 } from './data-predictions/jugador-32'

function App() {
  const players = [diegoGalarza, anaMartinez, jugador01, jugador02, jugador03, jugador04, jugador05, jugador06, jugador07, jugador08, jugador09, jugador10, jugador11, jugador12, jugador13, jugador14, jugador15, jugador16, jugador17, jugador18, jugador19, jugador20, jugador21, jugador22, jugador23, jugador24, jugador25, jugador26, jugador27, jugador28, jugador29, jugador30, jugador31, jugador32]

  return (
    <HashRouter>
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
    </HashRouter>
  )
}

export default App