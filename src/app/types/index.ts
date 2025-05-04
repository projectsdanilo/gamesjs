import { GAME_STATUS } from '@app/constants';

export type Player = 'X' | 'O';
export type BoardState = Array<Player | null>;

export type Card = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
};

export type Difficulty = 'easy' | 'medium' | 'hard';

export type GameStatus = (typeof GAME_STATUS)[keyof typeof GAME_STATUS];
