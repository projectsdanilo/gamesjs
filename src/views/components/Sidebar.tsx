import {
  Brain,
  CircleCheck,
  Gamepad2,
  Hash,
  Infinity,
  Menu,
  PersonStanding,
  Worm,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@app/router/routes';

export function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  function handleOpenSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpenSidebar}
        className="fixed top-1 left-1 hover:text-pink transition-colors duration-200 z-20 grid place-items-center w-14 h-14"
      >
        <Menu />
      </button>
      {showSidebar && (
        <header className="max-w-[200px] w-full flex-1 py-14 px-4 flex flex-col items-center bg-blue-100 fixed md:relative z-10 left-0 top-0 h-screen">
          <Gamepad2 className="text-pink text-3xl w-10 h-10" />
          <nav className="flex flex-col mt-6 gap-3">
            <Link to="/" className="flex gap-1 items-center">
              <Hash className="text-pink text-sm w-4 h-4" />
              Tic Tac Toe
            </Link>
            <Link to={routes.memory} className="flex gap-1 items-center">
              <Brain className="text-pink text-sm w-4 h-4" />
              Memory Game
            </Link>
            <Link to={routes.hangman} className="flex gap-1 items-center">
              <PersonStanding className="text-pink text-sm w-4 h-4" />
              Hangman
            </Link>
            <Link
              to={routes.memory}
              className="flex gap-1 items-center opacity-10 pointer-events-none"
            >
              <CircleCheck className="text-pink text-sm w-4 h-4" />
              Trivia Game
            </Link>
            <Link
              to={routes.snake}
              className="flex gap-1 items-center"
              target="_blank"
            >
              <Worm className="text-pink text-sm w-4 h-4" />
              Snake Game
            </Link>
            <Link
              to={routes.runner}
              className="flex gap-1 items-center"
              target="_blank"
            >
              <Infinity className="text-pink text-sm w-4 h-4" />
              Infinite Runner
            </Link>
          </nav>
        </header>
      )}
    </>
  );
}
