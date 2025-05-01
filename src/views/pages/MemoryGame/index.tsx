import {
  Brain,
  CircleCheck,
  Gamepad2,
  Hash,
  Menu,
  PersonStanding,
  Worm,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ANIMATIONS } from '@app/constants';
import { useMemoryGame } from '@app/hooks/use-memory-game';
import { routes } from '@app/router/routes';
import { Difficulty } from '@app/types';
import { formatTime } from '@app/utils/formatTime';
import { DifficultySelector } from '@views/components/DifficultySelector';
import { GameBoard } from '@views/components/GameBoard';
import { GameModal } from '@views/components/GameModal';
import { ScoreBoard } from '@views/components/ScoreBoard';

export function MemoryGame() {
  const [showSidebar, setShowSidebar] = useState(true);

  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const { cards, handleCardClick, moves, time, gameCompleted, resetGame } =
    useMemoryGame(difficulty || 'easy');

  const formattedTime = formatTime(time);

  function handleRestartGame() {
    resetGame();
    setDifficulty(null);
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
            <Link to={routes.memory} className="flex gap-1 items-center">
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
        <div className="w-full p-8 rounded-2xl">
          <motion.div
            {...ANIMATIONS.fadeInDown}
            className="mb-7 flex items-center justify-center gap-2"
          >
            <Brain className="md:h-8 md:w-8 text-pink" />
            <h1 className="text-md sm:text-4xl text-white font-bold">
              Memory Game
            </h1>
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-2">
            <ScoreBoard
              moves={moves}
              time={formattedTime}
              onRestart={handleRestartGame}
            />

            {!difficulty ? (
              <DifficultySelector onSelect={setDifficulty} />
            ) : (
              <GameBoard
                cards={cards}
                difficulty={difficulty}
                onCardClick={handleCardClick}
              />
            )}

            {gameCompleted && (
              <GameModal
                moves={moves}
                time={formattedTime}
                onRestart={handleRestartGame}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
