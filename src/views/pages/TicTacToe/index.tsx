import { Hash, RotateCcw } from 'lucide-react';
import { useState } from 'react';

import { checkWinner, isBoardFull } from '@app/helpers/tictactoe-logic';
import { BoardState } from '@app/types';
import { Board } from '@views/components/Board';
import { Sidebar } from '@views/components/Sidebar';

export function TicTacToe() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const winner = checkWinner(board);
  const isDraw = isBoardFull(board);
  const currentPlayer = board.filter(Boolean).length % 2 === 0 ? 'X' : 'O';

  function handleClick(index: number) {
    if (board[index] || winner) return;
    setBoard(board.map((square, i) => (index === i ? currentPlayer : square)));
  }

  function getGameStatus() {
    if (winner) return `Player ${winner} wins!`;
    if (isDraw) return 'Its a Draw!';

    return `Player ${currentPlayer}'s turn`;
  }

  function handleRestart() {
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-blue-200 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-blue-100 p-8 rounded-2xl">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Hash className="md:h-8 md:w-8 text-pink" />
            <h1 className="text-md sm:text-4xl text-white font-bold">
              Tic Tac Toe
            </h1>
          </div>

          <div className="mb-6 text-center">
            <p className="text-sm sm:text-xl font-semibold text-gray-100">
              {getGameStatus()}
            </p>
          </div>

          <Board board={board} winner={winner} onClick={handleClick} />

          {(winner || isDraw) && (
            <div className="mt-8 flex justify-center">
              <button
                className="group bg-pink text-white font-semibold py-2 px-4 rounded flex items-center gap-2"
                onClick={handleRestart}
                type="button"
              >
                Play Again
                <RotateCcw className="transition-transform duration-500 ease-in-out group-hover:-rotate-180" />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
