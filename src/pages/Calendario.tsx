import { useState, useMemo } from 'react'
import type { Match } from '../utils/types'

interface CalendarioProps {
  matches: Match[]
}

export function Calendario({ matches }: CalendarioProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('A')

  const now = new Date().getTime()

  // Verificar si un partido está en vivo (dentro de los 90 minutos)
  const isMatchLive = (match: Match) => {
    const start = new Date(`${match.date}T${match.time}`).getTime()
    return now >= start && now < start + 90 * 60 * 1000
  }

  // Encontrar partido en vivo o próximo partido
  const nextMatch = useMemo(() => {
    const futureMatches = matches.filter((m) => !m.result)

    // Primero buscar partidos en vivo
    const liveMatches = futureMatches.filter(isMatchLive)
    if (liveMatches.length > 0) {
      return liveMatches[0]
    }

    // Si no hay en vivo, buscar el próximo partido
    return futureMatches.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`).getTime()
      const dateB = new Date(`${b.date}T${b.time}`).getTime()
      return dateA - dateB
    })[0]
  }, [matches, now])

  const filteredMatches = selectedGroup
    ? matches.filter((m) => m.group === selectedGroup)
    : matches

  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Próximo partido */}
      {nextMatch && (
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl p-4 mb-4 text-white shadow-md max-w-md mx-auto relative">
          <h2 className="text-base font-semibold mb-2 opacity-90 text-center">Próximo partido</h2>
          {isMatchLive(nextMatch) && (
            <div className="absolute bottom-2 right-2 flex items-center">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-100 font-bold text-xs ml-1">EN VIVO</span>
            </div>
          )}
          <div className="flex justify-between items-center relative">
            <div className="w-5/12 text-center">
              <div className="font-bold text-sm">{nextMatch.team1}</div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-xl font-bold">VS</span>
            </div>
            <div className="w-5/12 text-center">
              <div className="font-bold text-sm">{nextMatch.team2}</div>
            </div>
          </div>
          <p className="mt-3 opacity-90 text-sm text-center">
            Grupo {nextMatch.group} • {nextMatch.date} • {nextMatch.time}
          </p>
        </div>
      )}

      {/* Filtros de grupo */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 ${
              selectedGroup === group
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          >
            Grupo {group}
          </button>
        ))}
      </div>

      {/* Partidos */}
      <div className="flex justify-center">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
          {filteredMatches.length === 0 ? (
            <p className="text-gray-500 col-span-3 text-center py-8">Selecciona un grupo para ver los partidos</p>
          ) : (
            filteredMatches.map((match) => (
              <div
                key={match.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                    Grupo {match.group}
                  </span>
                  {match.result && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      Finalizado
                    </span>
                  )}
                </div>

                <div className="flex justify-center items-center">
                  <div className="text-center w-5/12">
                    <span className="font-semibold text-gray-800 text-sm">{match.team1}</span>
                  </div>
                  <div className="text-center w-2/12">
                    <span className="text-lg font-bold text-indigo-600">
                      {match.result ? `${match.result.team1 ?? '-'} - ${match.result.team2 ?? '-'}` : 'VS'}
                    </span>
                  </div>
                  <div className="text-center w-5/12">
                    <span className="font-semibold text-gray-800 text-sm">{match.team2}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  {match.date} • {match.time}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}