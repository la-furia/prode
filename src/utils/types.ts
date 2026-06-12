export interface MatchResult {
  team1: number | null
  team2: number | null
}

export interface Match {
  id: string
  group?: string
  team1: string
  team2: string
  date: string
  time: string
  result: {
    team1: number | null
    team2: number | null
  } | undefined
}

export interface Prediction {
  team1: number | null
  team2: number | null
}

export interface Player {
  name: string
  predictions: Record<string, Prediction>
}