import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { lazyLoad } from '@app/utils/lazyLoad';
import { Hangman } from '@views/pages/Hangman';
import { TicTacToe } from '@views/pages/TicTacToe';

import { routes } from './routes';

const { MemoryGame } = lazyLoad(() => import('@views/pages/MemoryGame'));

export function Router() {
  return (
    <Suspense
      fallback={
        <div className="w-10 h-10 rounded-full border-4 border-r-white animate-spin" />
      }
    >
      <Routes>
        <Route path="/" element={<TicTacToe />} />
        <Route path={routes.memory} element={<MemoryGame />} />
        <Route path={routes.hangman} element={<Hangman />} />
      </Routes>
    </Suspense>
  );
}
