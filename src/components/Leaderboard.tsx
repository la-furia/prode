import { getLeaderboard } from '../utils/scoring'
import type { Match } from '../utils/types'

interface LeaderboardProps {
  players: { name: string; predictions: Record<string, { team1: number | null; team2: number | null }> }[]
  matches: Match[]
}

export function Leaderboard({ players, matches }: LeaderboardProps) {
  const ranking = getLeaderboard(players, matches)

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>🏆</span> Leaderboard Prode Mundial
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">#</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Jugador</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Puntos</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((player, index) => (
              <tr
                key={player.name}
                className={`border-b transition-colors hover:bg-gray-50 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                }`}
              >
                <td className="px-4 py-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold rounded-full">
                    {index + 1}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-gray-800">{player.name}</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-lg">{player.points}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}