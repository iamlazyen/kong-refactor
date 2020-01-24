type PlayType = 'tragedy' | 'comedy'
export type PlayNames = 'hamlet' | 'as-like' | 'othello'
export interface Play {
  name: string;
  type: PlayType
}

export type Plays = Record<PlayNames, Play>

export interface Performance {
  playID: PlayNames;
  audience: number;
}

export interface Invoice {
  customer: string;
  performances: Performance[]
}

