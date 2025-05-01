import { Brain, Sparkles, Zap } from 'lucide-react';
import { motion } from 'motion/react';

import { ANIMATIONS, EASY, HARD, MEDIUM } from '@app/constants';
import { Difficulty } from '@app/types';
import { cn } from '@app/utils';

const DIFFICULTIES = [
  {
    type: EASY,
    label: 'Easy',
    icon: Sparkles,
    color: 'from-green-400 to-emerald-500',
  },
  {
    type: MEDIUM,
    label: 'Medium',
    icon: Zap,
    color: 'from-blue-400 to-indigo-500',
  },
  {
    type: HARD,
    label: 'Hard',
    icon: Brain,
    color: 'from-red-400 to-rose-500',
  },
];

type DifficultySelectorProps = {
  onSelect: (difficulty: Difficulty) => void;
};

export function DifficultySelector({ onSelect }: DifficultySelectorProps) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4 sm:gap-8 sm:p-8">
      <motion.div
        {...ANIMATIONS.fadeInUp}
        className="flex flex-col w-full gap-2"
      >
        <h2 className="text-center text-2xl font-bold text-white mb-2 sm:text-2xl">
          Select Difficulty 🤔
        </h2>

        <div className="flex w-full flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          {DIFFICULTIES.map(({ type, icon: Icon, label, color }) => (
            <button
              key={label}
              type="button"
              onClick={() => onSelect(type as Difficulty)}
              className={cn(
                'h-20 sm:h-32 sm:w-32 w-full rounded-xl bg-gradient-to-b',
                color,
              )}
            >
              <div className="flex h-full items-center justify-center gap-2 sm:flex-col">
                <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="text-base font-medium sm:text-lg">
                  {label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
