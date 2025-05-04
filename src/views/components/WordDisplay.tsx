/* eslint-disable react/no-array-index-key */
type WordDisplayProps = {
  word: string;
  guessedLetters: Set<string>;
};

export function WordDisplay({ word, guessedLetters }: WordDisplayProps) {
  return (
    <div className="flex flex-wrap space-x-1 justify-center">
      {word.split('').map((letter, index) => (
        <div
          key={index}
          className="w-6 h-8 sm:w-8 sm:h-12 border-b-2 border-gray-100 pb-1 flex items-center justify-center text-lg uppercase font-bold"
        >
          {guessedLetters.has(letter) ? letter : ''}
        </div>
      ))}
    </div>
  );
}
