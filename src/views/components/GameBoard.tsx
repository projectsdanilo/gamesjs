import { motion } from 'motion/react';

import { ANIMATIONS, EASY, HARD, MEDIUM } from '@app/constants';
import { Card as CardType, Difficulty } from '@app/types';
import { cn } from '@app/utils';

import { Card } from './Card';

type GameBoardProps = {
  cards: CardType[];
  difficulty: Difficulty;
  onCardClick: (id: number) => void;
};

const GRID_CONFIG = {
  [EASY]: 'grid-cols-4',
  [MEDIUM]: 'sm:grid-cols-5',
  [HARD]: 'sm:grid-cols-5 md:grid-cols-6',
};

export function GameBoard({ cards, difficulty, onCardClick }: GameBoardProps) {
  return (
    <motion.div
      {...ANIMATIONS.fadeInUp}
      className={cn(
        'grid',
        GRID_CONFIG[difficulty],
        'gap-2 rounded-xl bg-blue-100 p-2 sm:gap-4 sm:p-4',
      )}
    >
      {cards.map((card) => (
        <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />
      ))}
    </motion.div>
  );
}
