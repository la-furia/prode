import type { Match } from '../utils/types'

export const matches: Match[] = [
  // ========== FECHA 1 - Resultados ==========
  { id: 'a1', group: 'A', team1: 'MÉXICO', team2: 'SUDÁFRICA', date: '2026-06-11', time: '16:00', result: { team1: 2, team2: 0 } },
  { id: 'a2', group: 'A', team1: 'COREA DEL SUR', team2: 'REPÚBLICA CHECA', date: '2026-06-11', time: '23:00', result: { team1: 2, team2: 1 } },

  // ========== FECHA 2 ==========
  { id: 'b1', group: 'B', team1: 'CANADÁ', team2: 'BOSNIA Y HERZEGOVINA', date: '2026-06-12', time: '16:00', result: { team1: 1, team2: 1 } },
  { id: 'd1', group: 'D', team1: 'ESTADOS UNIDOS', team2: 'PARAGUAY', date: '2026-06-12', time: '22:00', result: { team1: 4, team2: 1 } },

  // ========== FECHA 3 ==========
  { id: 'b2', group: 'B', team1: 'QATAR', team2: 'SUIZA', date: '2026-06-13', time: '16:00', result: { team1: 1, team2: 1 } },
  { id: 'c1', group: 'C', team1: 'BRASIL', team2: 'MARRUECOS', date: '2026-06-13', time: '19:00', result: { team1: 1, team2: 1 } },
  { id: 'c2', group: 'C', team1: 'HAITÍ', team2: 'ESCOCIA', date: '2026-06-13', time: '22:00', result: { team1: 0, team2: 1 } },
  { id: 'd2', group: 'D', team1: 'AUSTRALIA', team2: 'TURQUÍA', date: '2026-06-14', time: '01:00', result: { team1: 2, team2: 0 } },
  
  // ========== FECHA 4 ==========
  { id: 'e1', group: 'E', team1: 'ALEMANIA', team2: 'CURAZAO', date: '2026-06-14', time: '14:00', result: { team1: 7, team2: 1 } },
  { id: 'f1', group: 'F', team1: 'PAÍSES BAJOS', team2: 'JAPÓN', date: '2026-06-14', time: '17:00', result: { team1: 2, team2: 2 } },
  { id: 'e2', group: 'E', team1: 'COSTA DE MARFIL', team2: 'ECUADOR', date: '2026-06-14', time: '20:00', result: { team1: 1, team2: 0 } },
  { id: 'f2', group: 'F', team1: 'SUECIA', team2: 'TÚNEZ', date: '2026-06-14', time: '23:00', result: { team1: 5, team2: 1 } },

  // ========== FECHA 5 ==========
  { id: 'h1', group: 'H', team1: 'ESPAÑA', team2: 'CABO VERDE', date: '2026-06-15', time: '13:00', result: { team1: 0, team2: 0 } },
  { id: 'g1', group: 'G', team1: 'BELGICA', team2: 'EGIPTO', date: '2026-06-15', time: '16:00', result: { team1: 1, team2: 1 } },
  { id: 'h2', group: 'H', team1: 'ARABIA SAUDITA', team2: 'URUGUAY', date: '2026-06-15', time: '19:00', result: { team1: 1, team2: 1 } },
  { id: 'g2', group: 'G', team1: 'IRÁN', team2: 'NUEVA ZELANDA', date: '2026-06-15', time: '22:00', result: { team1: 2, team2: 2 } },

  // ========== FECHA 6 ==========
  { id: 'i1', group: 'I', team1: 'FRANCIA', team2: 'SENEGAL', date: '2026-06-16', time: '16:00', result: { team1: 3, team2: 1 } },
  { id: 'i2', group: 'I', team1: 'IRAK', team2: 'NORUEGA', date: '2026-06-16', time: '19:00', result: { team1: 1, team2: 4 } },
  { id: 'j1', group: 'J', team1: 'ARGENTINA', team2: 'ARGELIA', date: '2026-06-16', time: '22:00', result: { team1: 3, team2: 0 } },
  { id: 'j2', group: 'J', team1: 'AUSTRIA', team2: 'JORDANIA', date: '2026-06-17', time: '01:00', result: { team1: 3, team2: 1 } },
  
  // ========== FECHA 7 ==========
  { id: 'k1', group: 'K', team1: 'PORTUGAL', team2: 'RD CONGO', date: '2026-06-17', time: '14:00', result: { team1: 0, team2: 0 } },
  { id: 'l1', group: 'L', team1: 'INGLATERRA', team2: 'CROACIA', date: '2026-06-17', time: '17:00', result: { team1: 4, team2: 2 } },
  { id: 'l2', group: 'L', team1: 'GHANA', team2: 'PANAMÁ', date: '2026-06-17', time: '20:00', result: { team1: 1, team2: 0 } },
  { id: 'k2', group: 'K', team1: 'UZBEKISTÁN', team2: 'COLOMBIA', date: '2026-06-17', time: '23:00', result: { team1: 1, team2: 3 } },

  // ========== FECHA 8 ==========
  { id: 'a3', group: 'A', team1: 'REPÚBLICA CHECA', team2: 'SUDÁFRICA', date: '2026-06-18', time: '13:00', result: { team1: 1, team2: 1 } },
  { id: 'b3', group: 'B', team1: 'SUIZA', team2: 'BOSNIA Y HERZEGOVINA', date: '2026-06-18', time: '16:00', result: { team1: 4, team2: 1 } },
  { id: 'b4', group: 'B', team1: 'CANADÁ', team2: 'QATAR', date: '2026-06-18', time: '19:00', result: { team1: 7, team2: 0 } },
  { id: 'a4', group: 'A', team1: 'MÉXICO', team2: 'COREA DEL SUR', date: '2026-06-18', time: '22:00', result: { team1: 1, team2: 0 } },

  // ========== FECHA 9 ==========
  { id: 'd3', group: 'D', team1: 'ESTADOS UNIDOS', team2: 'AUSTRALIA', date: '2026-06-19', time: '16:00', result: { team1: 2, team2: 0 } },
  { id: 'c3', group: 'C', team1: 'ESCOCIA', team2: 'MARRUECOS', date: '2026-06-19', time: '19:00', result: { team1: 0, team2: 1 } },
  { id: 'c4', group: 'C', team1: 'BRASIL', team2: 'HAITÍ', date: '2026-06-19', time: '22:00', result: { team1: 3, team2: 0 } },
  { id: 'd4', group: 'D', team1: 'TURQUÍA', team2: 'PARAGUAY', date: '2026-06-20', time: '01:00', result: { team1: 0, team2: 1 } },

  // ========== FECHA 10 ==========
  { id: 'f3', group: 'F', team1: 'PAÍSES BAJOS', team2: 'SUECIA', date: '2026-06-20', time: '14:00', result: { team1: 5, team2: 1 } },
  { id: 'e3', group: 'E', team1: 'ALEMANIA', team2: 'COSTA DE MARFIL', date: '2026-06-20', time: '17:00', result: { team1: 2, team2: 1 } },
  { id: 'e4', group: 'E', team1: 'ECUADOR', team2: 'CURAZAO', date: '2026-06-20', time: '23:00', result: { team1: 0, team2: 0 } },
  { id: 'f4', group: 'F', team1: 'TÚNEZ', team2: 'JAPÓN', date: '2026-06-21', time: '01:00', result: { team1: 0, team2: 4 } },

  // ========== FECHA 11 ==========
  { id: 'h3', group: 'H', team1: 'ESPAÑA', team2: 'ARABIA SAUDITA', date: '2026-06-21', time: '13:00', result:  { team1: 4, team2: 0 }  },
  { id: 'g3', group: 'G', team1: 'BELGICA', team2: 'IRÁN', date: '2026-06-21', time: '16:00', result:  { team1: 0, team2: 0 }  },
  { id: 'h4', group: 'H', team1: 'URUGUAY', team2: 'CABO VERDE', date: '2026-06-21', time: '19:00', result:  { team1: 2, team2: 2 }  },
  { id: 'g4', group: 'G', team1: 'NUEVA ZELANDA', team2: 'EGIPTO', date: '2026-06-21', time: '22:00', result:  { team1: 1, team2: 3 }  },

  // ========== FECHA 12 ==========
  { id: 'j3', group: 'J', team1: 'ARGENTINA', team2: 'AUSTRIA', date: '2026-06-22', time: '14:00', result: undefined },
  { id: 'i3', group: 'I', team1: 'FRANCIA', team2: 'IRAK', date: '2026-06-22', time: '18:00', result: undefined },
  { id: 'i4', group: 'I', team1: 'NORUEGA', team2: 'SENEGAL', date: '2026-06-22', time: '21:00', result: undefined },
  { id: 'j4', group: 'J', team1: 'JORDANIA', team2: 'ARGELIA', date: '2026-06-23', time: '00:00', result: undefined },

  // ========== FECHA 13 ==========
  { id: 'k3', group: 'K', team1: 'PORTUGAL', team2: 'UZBEKISTÁN', date: '2026-06-23', time: '14:00', result: undefined },
  { id: 'l3', group: 'L', team1: 'INGLATERRA', team2: 'GHANA', date: '2026-06-23', time: '17:00', result: undefined },
  { id: 'l4', group: 'L', team1: 'PANAMÁ', team2: 'CROACIA', date: '2026-06-23', time: '20:00', result: undefined },
  { id: 'k4', group: 'K', team1: 'COLOMBIA', team2: 'RD CONGO', date: '2026-06-23', time: '23:00', result: undefined },

  // ========== FECHA 14 ==========
  { id: 'b5', group: 'B', team1: 'SUIZA', team2: 'CANADÁ', date: '2026-06-24', time: '16:00', result: undefined },
  { id: 'b6', group: 'B', team1: 'BOSNIA Y HERZEGOVINA', team2: 'QATAR', date: '2026-06-24', time: '16:00', result: undefined },
  { id: 'c5', group: 'C', team1: 'ESCOCIA', team2: 'BRASIL', date: '2026-06-24', time: '19:00', result: undefined },
  { id: 'c6', group: 'C', team1: 'MARRUECOS', team2: 'HAITÍ', date: '2026-06-24', time: '19:00', result: undefined },
  { id: 'a5', group: 'A', team1: 'REPÚBLICA CHECA', team2: 'MÉXICO', date: '2026-06-24', time: '22:00', result: undefined },
  { id: 'a6', group: 'A', team1: 'SUDÁFRICA', team2: 'COREA DEL SUR', date: '2026-06-24', time: '22:00', result: undefined },

  // ========== FECHA 15 ==========
  { id: 'e5', group: 'E', team1: 'ECUADOR', team2: 'ALEMANIA', date: '2026-06-25', time: '17:00', result: undefined },
  { id: 'e6', group: 'E', team1: 'CURAZAO', team2: 'COSTA DE MARFIL', date: '2026-06-25', time: '17:00', result: undefined },
  { id: 'f5', group: 'F', team1: 'TÚNEZ', team2: 'PAÍSES BAJOS', date: '2026-06-25', time: '20:00', result: undefined },
  { id: 'f6', group: 'F', team1: 'JAPÓN', team2: 'SUECIA', date: '2026-06-25', time: '20:00', result: undefined },
  { id: 'd5', group: 'D', team1: 'TURQUÍA', team2: 'ESTADOS UNIDOS', date: '2026-06-25', time: '23:00', result: undefined },
  { id: 'd6', group: 'D', team1: 'PARAGUAY', team2: 'AUSTRALIA', date: '2026-06-25', time: '23:00', result: undefined },
  
  // ========== FECHA 16 ==========
  { id: 'i5', group: 'I', team1: 'NORUEGA', team2: 'FRANCIA', date: '2026-06-26', time: '16:00', result: undefined },
  { id: 'i6', group: 'I', team1: 'SENEGAL', team2: 'IRAK', date: '2026-06-26', time: '16:00', result: undefined },
  { id: 'h5', group: 'H', team1: 'URUGUAY', team2: 'ESPAÑA', date: '2026-06-26', time: '21:00', result: undefined },
  { id: 'h6', group: 'H', team1: 'CABO VERDE', team2: 'ARABIA SAUDITA', date: '2026-06-26', time: '21:00', result: undefined },
  { id: 'g5', group: 'G', team1: 'NUEVA ZELANDA', team2: 'BELGICA', date: '2026-06-27', time: '00:00', result: undefined },
  { id: 'g6', group: 'G', team1: 'EGIPTO', team2: 'IRÁN', date: '2026-06-27', time: '00:00', result: undefined },
  
  // ========== FECHA 17 ==========
  { id: 'l5', group: 'L', team1: 'PANAMÁ', team2: 'INGLATERRA', date: '2026-06-27', time: '18:00', result: undefined },
  { id: 'l6', group: 'L', team1: 'CROACIA', team2: 'GHANA', date: '2026-06-27', time: '18:00', result: undefined },
  { id: 'k5', group: 'K', team1: 'COLOMBIA', team2: 'PORTUGAL', date: '2026-06-27', time: '20:30', result: undefined },
  { id: 'k6', group: 'K', team1: 'RD CONGO', team2: 'UZBEKISTÁN', date: '2026-06-27', time: '20:30', result: undefined },
  { id: 'j5', group: 'J', team1: 'JORDANIA', team2: 'ARGENTINA', date: '2026-06-27', time: '23:00', result: undefined },
  { id: 'j6', group: 'J', team1: 'ARGELIA', team2: 'AUSTRIA', date: '2026-06-27', time: '23:00', result: undefined },
  

  // ========== 16° DE FINAL (se agregarán resultados después) ==========
]