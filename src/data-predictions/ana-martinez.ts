import type { Player } from '../utils/types'

export const anaMartinez: Player = {
  name: 'Ana Martinez',
  predictions: {
    // Partidos con resultados (ya jugados)
    a1: { team1: 1, team2: 0 },  // MÉXICO vs SUDÁFRICA - 2-0 (acierto ganador, 1 punto)
    a2: { team1: 1, team2: 1 },  // COREA DEL SUR vs REPÚBLICA CHECA - 2-1 (falló, 0 puntos)
  }
}