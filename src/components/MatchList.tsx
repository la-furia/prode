import type { Match } from '../utils/types'

interface MatchListProps {
  matches: Match[]
  selectedGroup?: string
  onGroupChange?: (group: string) => void
}

export function MatchList({ matches, selectedGroup, onGroupChange }: MatchListProps) {
  const filteredMatches = selectedGroup
    ? matches.filter((m) => m.group === selectedGroup)
    : matches

  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>📅</span> Partidos del Mundial
      </h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => onGroupChange?.(group)}
            className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 ${
              selectedGroup === group
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Grupo {group}
          </button>
        ))}
      </div>

      {/* Matches grid */}
      <div className="grid gap-3 md:grid-cols-2">
        {filteredMatches.length === 0 ? (
          <p className="text-gray-500 col-span-2 text-center py-8">Selecciona un grupo para ver los partidos</p>
        ) : (
          filteredMatches.map((match) => (
            <div
              key={match.id}
              className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border-l-4 border-indigo-500 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                  Grupo {match.group}
                </span>
                <span className="text-xs text-gray-500">
                  {match.date} • {match.time}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">{match.team1}</span>
                <span className="text-lg font-bold text-indigo-600">
                  {match.result ? `${match.result.team1 ?? '-'} - ${match.result.team2 ?? '-'}` : 'vs'}
                </span>
                <span className="font-semibold text-gray-800">{match.team2}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}