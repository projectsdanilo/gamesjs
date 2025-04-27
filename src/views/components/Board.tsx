/* eslint-disable react/no-array-index-key */
import { WINNING_COMBINATIONS } from '@app/helpers/tictactoe-logic';
import { BoardState, Player } from '@app/types';

import { Square } from './Square';

type BoardProps = {
  board: BoardState;
  winner: Player | null;
  onClick: (index: number) => void;
};

export function Board({ board, onClick, winner }: BoardProps) {
  function isWinner(index: number): boolean {
    if (!winner) return false;

    return WINNING_COMBINATIONS.some(
      (combo) =>
        combo.includes(index) && combo.every((i) => board[i] === winner),
    );
  }

  return (
    <div className="mx-auto grid grid-cols-3 gap-4 w-full sm:max-w-[26rem]">
      {board.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onClick(index)}
          isWinner={isWinner(index)}
        />
      ))}
    </div>
  );
}
