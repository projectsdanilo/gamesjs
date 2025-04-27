import {
  Brain,
  CircleCheck,
  Gamepad2,
  Hash,
  Menu,
  PersonStanding,
  RotateCcw,
  Worm,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { checkWinner, isBoardFull } from '@app/helpers/tictactoe-logic';
import { routes } from '@app/router/routes';
import { BoardState } from '@app/types';
import { Board } from '@views/components/Board';

export function TicTacToe() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [showSidebar, setShowSidebar] = useState(true);
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

  function handleOpenSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="flex">
      <button
        type="button"
        onClick={handleOpenSidebar}
        className="fixed top-1 left-1 hover:text-pink transition-colors duration-200 z-20 grid place-items-center w-14 h-14"
      >
        <Menu />
      </button>
      {showSidebar && (
        <header className="max-w-[200px] w-full flex-1 py-14 px-4 flex flex-col items-center bg-blue-100 fixed md:relative z-10 left-0 top-0 h-screen">
          <Gamepad2 className="text-pink text-3xl w-10 h-10" />
          <nav className="flex flex-col mt-6 gap-3">
            <Link to="/" className="flex gap-1 items-center">
              <Hash className="text-pink text-sm w-4 h-4" />
              Tic Tac Toe
            </Link>
            <Link
              to={routes.memory}
              className="flex gap-1 items-center opacity-10 pointer-events-none"
            >
              <Brain className="text-pink text-sm w-4 h-4" />
              Memory Game
            </Link>
            <Link
              to={routes.memory}
              className="flex gap-1 items-center opacity-10 pointer-events-none"
            >
              <PersonStanding className="text-pink text-sm w-4 h-4" />
              Hangman
            </Link>
            <Link
              to={routes.memory}
              className="flex gap-1 items-center opacity-10 pointer-events-none"
            >
              <CircleCheck className="text-pink text-sm w-4 h-4" />
              Quiz Game
            </Link>
            <Link
              to={routes.memory}
              className="flex gap-1 items-center opacity-10 pointer-events-none"
            >
              <Worm className="text-pink text-sm w-4 h-4" />
              Snake Game
            </Link>
          </nav>
        </header>
      )}
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
