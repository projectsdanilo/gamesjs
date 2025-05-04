/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';

import { cn } from '@app/utils';

const KEY_ROWS = [
  'qwertyuiop'.split(''),
  'asdfghjkl'.split(''),
  'zxcvbnm'.split(''),
];

type KeyboardProps = {
  guessedLetters: Set<string>;
  onGuessLetter: (letter: string) => void;
};

export function Keyboard({ guessedLetters, onGuessLetter }: KeyboardProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const letter = event.key.toLowerCase();

      if (KEY_ROWS.flat().includes(letter)) {
        onGuessLetter(letter);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onGuessLetter]);

  return (
    <div className="flex flex-col items-center gap-2">
      {KEY_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1" role="row">
          {row.map((letter) => (
            <button
              type="button"
              key={letter}
              onClick={() => onGuessLetter(letter)}
              disabled={guessedLetters.has(letter)}
              className={cn(
                'h-8 w-8 sm:w-10 sm:h-10 rounded-md text-white bg-blue-100 hover:bg-pink hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink',
                guessedLetters.has(letter) &&
                'bg-gray-100/50 pointer-events-none',
              )}
            >
              {letter.toLocaleUpperCase()}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
