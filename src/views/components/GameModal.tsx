type GameModalProps = {
  moves: number;
  time: string;
  onRestart: () => void;
};

export function GameModal({ moves, time, onRestart }: GameModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/5- p-4 backdrop-blur-sm">
      <div className="max-w-sm rounded-xl bg-white p-6 text-center sm:p-8">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl text-black">
          🎉 Congratulations! 🎉
        </h2>
        <p className="mb-6 text-base text-black sm:text-xl">
          You completed the game in <br />
          <b>{moves}</b> moves and <b>{time} seconds</b>!
        </p>
        <button
          type="button"
          onClick={onRestart}
          className="rounded-lg bg-pink px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
        >
          Play again
        </button>
      </div>
    </div>
  );
}
