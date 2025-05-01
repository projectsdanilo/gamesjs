export type Player = 'X' | 'O';
export type BoardState = Array<Player | null>;

export type Card = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
};

export type Difficulty = 'easy' | 'medium' | 'hard';
