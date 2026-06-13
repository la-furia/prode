import { useState, useMemo } from 'react'
import type { Match, Player } from '../utils/types'
import { calculateTotalPoints, calculatePoints } from '../utils/scoring'

interface SeleccionesProps {
  players: Player[]
  matches: Match[]
}

export function Selecciones({ players, matches }: SeleccionesProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<string>(players[0]?.name || '')
  const [showCompleted, setShowCompleted] = useState(true)
  const [showPending, setShowPending] = useState(false)

  const sortedPlayers = useMemo(() => {
    return [...players].sort((a, b) => {
      const pointsA = calculateTotalPoints(a.predictions, matches)
      const pointsB = calculateTotalPoints(b.predictions, matches)
      if (pointsA !== pointsB) {
        return pointsB - pointsA // Mayor puntaje primero
      }
      return a.name.localeCompare(b.name) // Alfabético por igual
    })
  }, [players, matches])

  const player = sortedPlayers.find((p) => p.name === selectedPlayer)

  const hasPrediction = (pred: { team1: number | null; team2: number | null }) => {
    return pred.team1 !== null && pred.team2 !== null
  }

  const getPredictionStatus = (prediction: { team1: number; team2: number }, result: { team1: number; team2: number }) => {
    const exact = prediction.team1 === result.team1 && prediction.team2 === result.team2
    const correctWinner = (prediction.team1 > prediction.team2 && result.team1 > result.team2) ||
                          (prediction.team1 < prediction.team2 && result.team1 < result.team2) ||
                          (prediction.team1 === prediction.team2 && result.team1 === result.team2)
    return { exact, correctWinner }
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:p-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Lista de jugadores */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span>👥</span> Jugadores
            </h2>
            <div className="max-h-60 md:max-h-[500px] overflow-y-auto space-y-2 pr-2">
              {sortedPlayers.map((p) => {
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
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4">
                <span className="sm:hidden">Predicciones de<br/></span>
                <span className="hidden sm:inline">Predicciones de </span>
                <span className="text-indigo-600">{player.name}</span>
              </h2>

              {/* Partidos Finalizados */}
              <div className="mb-4">
                <button
                  onClick={() => setShowCompleted(!showCompleted)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">📋 Finalizadas</span>
                    <span className="hidden sm:inline text-xs text-gray-500">
                      {showCompleted ? "(clic para ocultar)" : "(clic para mostrar)"}
                    </span>
                    <span className="sm:hidden text-xs text-gray-500">
                      {showCompleted ? "(toca para ocultar)" : "(toca para mostrar)"}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 transition-transform" style={{ transform: showCompleted ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </button>

                {showCompleted && (
                  <div className="mt-3 grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                    {matches
                      .filter((match) => match.result)
                      .map((match) => {
                        const pred = player.predictions[match.id]
                        const validPrediction = pred && hasPrediction(pred)
                        const status = validPrediction && match.result && pred.team1 !== null && pred.team2 !== null && match.result.team1 !== null && match.result.team2 !== null
                          ? getPredictionStatus({ team1: pred.team1, team2: pred.team2 }, { team1: match.result.team1, team2: match.result.team2 })
                          : null

                        const points = validPrediction && match.result
                          ? calculatePoints(pred, match.result)
                          : 0

                        const predictionColor = status?.exact ? 'text-green-600' : status?.correctWinner ? 'text-orange-600' : 'text-gray-700'
                        const borderColor = status?.exact ? 'border-green-500' : status?.correctWinner ? 'border-orange-500' : 'border-gray-300'
                        const pointsColor = points === 3 ? 'bg-green-500' : points === 1 ? 'bg-orange-500' : ''

                        return (
                          <div
                            key={match.id}
                            className={`bg-gradient-to-r from-gray-50 to-white p-3 sm:p-4 rounded-lg border-l-4 ${borderColor} relative`}
                          >
                            <div className={`text-xs font-semibold mb-1 ${status?.exact ? 'text-green-600' : status?.correctWinner ? 'text-orange-600' : 'text-gray-600'}`}>
                              Grupo {match.group} • {match.team1} vs {match.team2}
                            </div>

                            {points > 0 && (
                              <div className={`absolute -top-3 -right-1 ${pointsColor} text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md`}>
                                +{points}
                              </div>
                            )}

                            <div className="flex justify-between items-center relative">
                              {validPrediction ? (
                                <>
                                  <div className="w-5/12 text-center">
                                    <span className="font-medium text-sm">{match.team1}</span>
                                  </div>
                                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className={`font-bold text-lg ${predictionColor}`}>
                                      {pred.team1} - {pred.team2}
                                    </span>
                                  </div>
                                  <div className="w-5/12 text-center">
                                    <span className="font-medium text-sm">{match.team2}</span>
                                  </div>
                                </>
                              ) : (
                                <span className="text-gray-400">Sin predicción</span>
                              )}
                            </div>
                            {validPrediction && !status?.exact && match.result && (
                              <div className="text-xs text-gray-500 mt-1 text-center">
                                Resultado: {match.result.team1} - {match.result.team2}
                              </div>
                            )}
                          </div>
                        )
                      })}
                  </div>
                )}
              </div>

              {/* Partidos Pendientes */}
              <div>
                <button
                  onClick={() => setShowPending(!showPending)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">⏳ Pendientes</span>
                    <span className="hidden sm:inline text-xs text-gray-500">
                      {showPending ? "(clic para ocultar)" : "(clic para mostrar)"}
                    </span>
                    <span className="sm:hidden text-xs text-gray-500">
                      {showPending ? "(toca para ocultar)" : "(toca para mostrar)"}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 transition-transform" style={{ transform: showPending ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </button>

                {showPending && (
                  <div className="mt-3 grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                    {matches
                      .filter((match) => !match.result)
                      .map((match) => {
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

                            <div className="flex justify-start items-center">
                              {validPrediction ? (
                                <span className="font-bold text-gray-700 text-sm">
                                  {match.team1} {pred.team1} - {pred.team2} {match.team2}
                                </span>
                              ) : (
                                <span className="text-gray-400">Sin predicción</span>
                              )}
                            </div>
                          </div>
                        )
                      })}
                  </div>
                )}
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