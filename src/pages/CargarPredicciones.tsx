import { useState } from 'react'
import { matches } from '../data-matches/matches'

export function CargarPredicciones() {
  const [playerName, setPlayerName] = useState('')
  const [predictions, setPredictions] = useState<Record<string, { team1: string; team2: string }>>(() => {
    const initial: Record<string, { team1: string; team2: string }> = {}
    matches.forEach((match) => {
      initial[match.id] = { team1: '', team2: '' }
    })
    return initial
  })

  const handlePredictionChange = (matchId: string, team: 'team1' | 'team2', value: string) => {
    const num = parseInt(value)
    if (value !== '' && (isNaN(num) || num < 0 || num > 99)) {
      return // Only allow empty or valid numbers 0-99
    }
    setPredictions((prev) => ({
      ...prev,
      [matchId]: { ...prev[matchId], [team]: value },
    }))
  }

  const generateFile = () => {
    if (!playerName.trim()) {
      alert('Por favor ingresa el nombre del jugador')
      return
    }

    const toCamelCase = (str: string) => {
      return str
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/([a-z])(\d+)/g, '$1$2')
        .split(/\s+/)
        .map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
    }

    const varName = toCamelCase(playerName)

    const predictionsObj = Object.fromEntries(
      Object.entries(predictions).map(([id, pred]) => [
        id,
        { team1: pred.team1 === '' ? null : parseInt(pred.team1), team2: pred.team2 === '' ? null : parseInt(pred.team2) },
      ])
    )

    const content = `import type { Player } from '../utils/types'

export const ${varName}: Player = {
  name: '${playerName}',
  predictions: ${JSON.stringify(predictionsObj, null, 2)},
}
`

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${varName}.ts`
    a.click()
    URL.revokeObjectURL(url)

    // Reset form and scroll to top
    setPlayerName('')
    const initial: Record<string, { team1: string; team2: string }> = {}
    matches.forEach((m) => { initial[m.id] = { team1: '', team2: '' } })
    setPredictions(initial)
    document.documentElement.scrollTop = 0
  }

  const filledCount = Object.values(predictions).filter((p) => p.team1 !== '' && p.team2 !== '').length

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">Cargar Predicciones</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Nombre del jugador</label>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Ej: Juan Pérez"
            className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="text-sm text-gray-600 mb-2">
          Predicciones completadas: {filledCount} de {matches.length}
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto mb-4">
          {matches.map((match) => (
            <div key={match.id} className="flex items-center gap-2 p-2 border-b">
              <span className="text-xs font-bold w-8">{match.id.toUpperCase()}</span>
              <span className="text-xs w-20 truncate">{match.team1}</span>
              <input
                type="number"
                min="0"
                max="99"
                value={predictions[match.id]?.team1 ?? ''}
                onChange={(e) => handlePredictionChange(match.id, 'team1', e.target.value)}
                className="w-12 px-1 py-0.5 border border-gray-300 rounded text-center text-sm"
                placeholder="X"
              />
              <span className="text-xs w-20 truncate">{match.team2}</span>
              <input
                type="number"
                min="0"
                max="99"
                value={predictions[match.id]?.team2 ?? ''}
                onChange={(e) => handlePredictionChange(match.id, 'team2', e.target.value)}
                className="w-12 px-1 py-0.5 border border-gray-300 rounded text-center text-sm"
                placeholder="Y"
              />
            </div>
          ))}
        </div>

        <button
          onClick={generateFile}
          disabled={!playerName.trim()}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Descargar archivo .ts
        </button>
      </div>
    </div>
  )
}