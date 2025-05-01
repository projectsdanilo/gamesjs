import { Sparkles } from 'lucide-react';

import { cn } from '@app/utils';

type CardProps = {
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
};

const CARD_STYLES = {
  base: 'backface-hidden absolute flex h-full w-full items-center justify-center rounded-xl border-2',
  back: 'border-white/20 bg-pink',
  front:
    'rotate-y-180 border-purple-200 bg-white text-2xl xs:text-3xl sm:text-4xl',
};

export function Card({ emoji, isFlipped, isMatched, onClick }: CardProps) {
  return (
    <button
      type="button"
      className="h-12 w-12 cursor-pointer relative xs:h-20 xs:w-20 sm:h-24 sm:w-24"
      onClick={onClick}
    >
      {/* 3D */}
      <div
        className={cn(
          'preserve-3d h-full w-full transition-transform duration-500',
          isFlipped && 'rotate-y-180',
        )}
      >
        {/* Back */}
        <div className={cn(CARD_STYLES.base, CARD_STYLES.back)}>
          <Sparkles className="h-6 w-6 text-white sm:h-8 sm:w-8 animate-pulse" />
        </div>

        {/* Front */}
        <div
          className={cn(
            CARD_STYLES.base,
            CARD_STYLES.front,
            isMatched && 'border-green-700 bg-green-400/30',
          )}
        >
          {emoji}
        </div>
      </div>
    </button>
  );
}
