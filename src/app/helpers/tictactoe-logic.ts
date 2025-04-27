/* eslint-disable no-restricted-syntax */
import { BoardState, Player } from '@app/types';

export const WINNING_COMBINATIONS = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonals
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(board: BoardState): Player | null {
  for (const combo of WINNING_COMBINATIONS) {
    const [i1, i2, i3] = combo;

    if (board[i1] && board[i1] === board[i2] && board[i1] === board[i3]) {
      return board[i1];
    }
  }

  return null;
}

export function isBoardFull(board: BoardState): boolean {
  return !board.includes(null);
}
