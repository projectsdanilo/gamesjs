import { useEffect, useState } from 'react';

import { EMOJIS, PAIR_COUNTS } from '@app/constants';
import { Card, Difficulty } from '@app/types';

import { useTimer } from './use-timer';

export function createShuffledCards(difficulty: Difficulty) {
  const pairs = PAIR_COUNTS[difficulty];
  const gamesEmojis = EMOJIS.slice(0, pairs);

  return [...gamesEmojis, ...gamesEmojis]
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
}

export function checkGameCompletion(cards: Card[]) {
  return cards.every((card) => card.isMatched);
}

export function useMemoryGame(difficulty: Difficulty) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const { time, resetTime } = useTimer(gameStarted && !gameCompleted);

  function initializeGame() {
    setCards(createShuffledCards(difficulty));
    setFlippedCards([]);
    setMoves(0);
    setGameStarted(false);
    setGameCompleted(false);
    resetTime();
  }

  useEffect(initializeGame, [resetTime, difficulty]);

  function handleCardClick(id: number) {
    const clickedCard = cards.find((card) => card.id === id)!;

    if (
      flippedCards.length === 2 ||
      clickedCard.isFlipped ||
      clickedCard.isMatched
    ) {
      return;
    }

    if (!gameStarted) setGameStarted(true);

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card,
      ),
    );

    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((prevMoves) => prevMoves + 1);
      const [firstCard, secondCard] = newFlippedCards;
      const isMatched = firstCard.emoji === secondCard.emoji;

      setTimeout(() => {
        const updatedCards = cards.map((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return {
              ...card,
              isFlipped: isMatched,
              isMatched,
            };
          }

          return card;
        });

        setCards(updatedCards);
        setFlippedCards([]);

        if (isMatched && checkGameCompletion(updatedCards)) {
          setGameCompleted(true);
        }
      }, 500);
    }
  }

  return {
    cards,
    moves,
    time,
    gameCompleted,
    resetGame: initializeGame,
    handleCardClick,
  };
}
