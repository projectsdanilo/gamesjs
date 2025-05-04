import { PersonStanding } from 'lucide-react';
import { motion } from 'motion/react';

import { ANIMATIONS } from '@app/constants';
import { useHangman } from '@app/hooks/use-hangman';
import { GameModalHangman } from '@views/components/GameModalHangman';
import { HangmanFigure } from '@views/components/HangmanFigure';
import { Keyboard } from '@views/components/Keyboard';
import { Sidebar } from '@views/components/Sidebar';
import { WordDisplay } from '@views/components/WordDisplay';

export function Hangman() {
  const {
    word,
    tip,
    remainingGuesses,
    onGuessLetter,
    guessedLetters,
    gameStatus,
    selectWord,
  } = useHangman();

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-blue-200 min-h-screen flex items-center justify-center p-4">
        <div className="w-full p-8 rounded-2xl">
          <motion.div
            {...ANIMATIONS.fadeInDown}
            className="mb-7 flex items-center justify-center gap-2"
          >
            <PersonStanding className="md:h-8 md:w-8 text-pink" />
            <h1 className="text-md sm:text-4xl text-white font-bold">
              Hangman
            </h1>
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-6">
            <HangmanFigure remainingGuesses={remainingGuesses} />

            <div className="text-gray-100 text-center flex flex-col gap-2">
              <p className="text-xl">
                Remaining guesses:{' '}
                <span className="font-bold">{remainingGuesses}</span>
              </p>

              <p className="text-lg">Tip: {tip}</p>
            </div>

            <WordDisplay word={word} guessedLetters={guessedLetters} />

            <Keyboard
              guessedLetters={guessedLetters}
              onGuessLetter={onGuessLetter}
            />

            <GameModalHangman
              gameStatus={gameStatus}
              word={word}
              onNewWord={selectWord}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
