export const EASY = 'easy';
export const MEDIUM = 'medium';
export const HARD = 'hard';

export const EMOJIS = [
  '🍬',
  '🍭',
  '🍫',
  '🍨',
  '🍪',
  '🍩',
  '🧁',
  '🎂',
  '🥞',
  '🍰',
  '🥧',
  '🍡',
] as const;

export const PAIR_COUNTS = {
  [EASY]: 6,
  [MEDIUM]: 10,
  [HARD]: 15,
};

export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
};

export const GUESSES = 6;

export const GAME_STATUS = {
  PLAYING: 'playing',
  WON: 'won',
  LOST: 'lost',
} as const;

export const WORDS = [
  {
    word: 'react',
    tip: 'A popular JavaScript library for building user interfaces',
  },
  { word: 'hangman', tip: 'The name of this game' },
  { word: 'typescript', tip: 'A typed superset of JavaScript' },
  { word: 'nextjs', tip: 'A React framework for production' },
  { word: 'vercel', tip: 'A platform for deploying web projects' },
];
