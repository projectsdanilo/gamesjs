import { Brain } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { ANIMATIONS } from '@app/constants';
import { useMemoryGame } from '@app/hooks/use-memory-game';
import { Difficulty } from '@app/types';
import { formatTime } from '@app/utils/formatTime';
import { DifficultySelector } from '@views/components/DifficultySelector';
import { GameBoard } from '@views/components/GameBoard';
import { GameModal } from '@views/components/GameModal';
import { ScoreBoard } from '@views/components/ScoreBoard';
import { Sidebar } from '@views/components/Sidebar';

export function MemoryGame() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const { cards, handleCardClick, moves, time, gameCompleted, resetGame } =
    useMemoryGame(difficulty || 'easy');

  const formattedTime = formatTime(time);

  function handleRestartGame() {
    resetGame();
    setDifficulty(null);
  }

  return (
    <div className="flex">
      <Sidebar />

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
