import { useState, useMemo } from 'react'
import type { Match } from '../utils/types'

interface CalendarioProps {
  matches: Match[]
}

export function Calendario({ matches }: CalendarioProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('A')

  // Encontrar próximo partido (por fecha y hora)
  const nextMatch = useMemo(() => {
    const futureMatches = matches.filter((m) => !m.result)
    return futureMatches.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`).getTime()
      const dateB = new Date(`${b.date}T${b.time}`).getTime()
      return dateA - dateB
    })[0]
  }, [matches])

  const filteredMatches = selectedGroup
    ? matches.filter((m) => m.group === selectedGroup)
    : matches

  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Próximo partido */}
      {nextMatch && (
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl p-6 mb-6 text-white shadow-lg">
          <h2 className="text-lg font-semibold mb-2 opacity-90">Próximo partido</h2>
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">{nextMatch.team1}</span>
            <span className="text-2xl font-bold">VS</span>
            <span className="font-bold text-xl">{nextMatch.team2}</span>
          </div>
          <p className="mt-2 opacity-90">
            Grupo {nextMatch.group} • {nextMatch.date} • {nextMatch.time}
          </p>
        </div>
      )}

      {/* Filtros de grupo */}
      <div className="flex flex-wrap gap-2 mb-6">
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
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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

              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">{match.team1}</span>
                <span className="text-lg font-bold text-indigo-600">
                  {match.result ? `${match.result.team1 ?? '-'} - ${match.result.team2 ?? '-'}` : 'VS'}
                </span>
                <span className="font-semibold text-gray-800">{match.team2}</span>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                {match.date} • {match.time}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}