import { useState } from 'react'
import type { Match, Player } from '../utils/types'
import { calculateTotalPoints } from '../utils/scoring'

interface SeleccionesProps {
  players: Player[]
  matches: Match[]
}

export function Selecciones({ players, matches }: SeleccionesProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<string>(players[0]?.name || '')

  const player = players.find((p) => p.name === selectedPlayer)

  const hasPrediction = (pred: { team1: number | null; team2: number | null }) => {
    return pred.team1 !== null && pred.team2 !== null
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex gap-6">
        {/* Lista de jugadores */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>👥</span> Jugadores
            </h2>
            <div className="max-h-[500px] overflow-y-auto space-y-2 pr-2">
              {players.map((p) => {
                const points = calculateTotalPoints(p.predictions, matches)
                return (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPlayer(p.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                      selectedPlayer === p.name
                        ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs opacity-75">{points} pts</div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Predicciones del jugador */}
        <div className="flex-1">
          {player ? (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Predicciones de <span className="text-indigo-600">{player.name}</span>
              </h2>

              <div className="grid gap-3 md:grid-cols-2">
                {matches.map((match) => {
                  const pred = player.predictions[match.id]
                  const validPrediction = pred && hasPrediction(pred)

                  return (
                    <div
                      key={match.id}
                      className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border-l-4 border-indigo-500"
                    >
                      <div className="text-xs font-semibold text-indigo-600 mb-1">
                        Grupo {match.group} • {match.team1} vs {match.team2}
                      </div>

                      <div className="flex justify-between items-center">
                        {validPrediction ? (
                          <>
                            <span className="font-medium">{match.team1}</span>
                            <span className="font-bold text-lg text-indigo-600">
                              {pred.team1} - {pred.team2}
                            </span>
                            <span className="font-medium">{match.team2}</span>
                          </>
                        ) : (
                          <span className="text-gray-400">Sin predicción</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Selecciona un jugador</p>
          )}
        </div>
      </div>
    </div>
  )
}