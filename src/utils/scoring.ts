import type { Match, Prediction } from './types'

export function calculatePoints(
  prediction: Prediction,
  result: { team1: number | null; team2: number | null } | undefined
): number {
  // Si el partido no tiene resultado (aún no se jugó)
  if (!result || result.team1 === null || result.team2 === null) {
    return 0
  }

  // Si la predicción no tiene valores (marcó "- -")
  if (prediction.team1 === null || prediction.team2 === null) {
    return 0
  }

  // Predicción exacta
  if (prediction.team1 === result.team1 && prediction.team2 === result.team2) {
    return 3
  }

  // Determinar ganador o empate
  const predWinner =
    prediction.team1! > prediction.team2! ? 'team1' : prediction.team1! < prediction.team2! ? 'team2' : 'draw'
  const resWinner =
    result.team1 > result.team2 ? 'team1' : result.team1 < result.team2 ? 'team2' : 'draw'

  // Adivinó el ganador o el empate
  if (predWinner === resWinner) {
    return 1
  }

  return 0
}

export function calculateTotalPoints(
  predictions: Record<string, Prediction>,
  matches: Match[]
): number {
  return matches.reduce((total, match) => {
    const pred = predictions[match.id]
    if (!pred || !match.result) return total
    return total + calculatePoints(pred, match.result)
  }, 0)
}

// Para ordenar el leaderboard
export function getLeaderboard(
  players: { name: string; predictions: Record<string, Prediction> }[],
  matches: Match[]
) {
  return players
    .map((player) => ({
      name: player.name,
      points: calculateTotalPoints(player.predictions, matches),
    }))
    .sort((a, b) => b.points - a.points)
}