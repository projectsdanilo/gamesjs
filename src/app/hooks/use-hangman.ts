import { useState } from 'react';

import { GAME_STATUS, GUESSES, WORDS } from '@app/constants';

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return {
    word: WORDS[randomIndex].word.toLocaleLowerCase(),
    tip: WORDS[randomIndex].tip,
  };
}

export function useHangman() {
  const [remainingGuesses, setRemainingGuesses] = useState(GUESSES);
  const [currentWord, setCurrentWord] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());

  const isWinner = currentWord.word
    .split('')
    .every((letter) => guessedLetters.has(letter));

  function gameStatus() {
    if (isWinner) return GAME_STATUS.WON;
    if (remainingGuesses === 0) return GAME_STATUS.LOST;
    return GAME_STATUS.PLAYING;
  }

  function onGuessLetter(letter: string) {
    if (gameStatus() !== GAME_STATUS.PLAYING || guessedLetters.has(letter)) {
      return;
    }

    setGuessedLetters((prev) => new Set([...prev, letter]));

    if (!currentWord.word.includes(letter)) {
      setRemainingGuesses((prev) => prev - 1);
    }
  }

  function selectWord() {
    setCurrentWord(getRandomWord);
    setGuessedLetters(new Set());
    setRemainingGuesses(GUESSES);
  }

  return {
    word: currentWord.word,
    tip: currentWord.tip,
    onGuessLetter,
    guessedLetters,
    remainingGuesses,
    gameStatus: gameStatus(),
    selectWord,
  };
}
