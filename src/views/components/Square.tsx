import { motion } from 'motion/react';

import { Player } from '@app/types';

type SquareProps = {
  value: Player | null;
  onClick: () => void;
  isWinner: boolean;
};

const getTextColor = (value: Player | null) =>
  value === 'X' ? 'text-pink' : 'text-white';

const getWinnerColor = (isWinner: boolean) =>
  isWinner ? 'border-green-400 text-green-400' : '';

export function Square({ value, onClick, isWinner }: SquareProps) {
  return (
    <motion.button
      className={`h-32 w-32 border-4 border-gray-200 text-4xl font-bold rounded-xl ${getTextColor(value)} ${getWinnerColor(isWinner)}`}
      type="button"
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileTap={{ scale: 0.9 }}
    >
      {value && (
        <motion.span
          className="block"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
        >
          {value}
        </motion.span>
      )}
    </motion.button>
  );
}
