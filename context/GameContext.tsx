import React, { createContext, useState } from 'react';

export const GameContext = createContext<any>(null);

export const GameProvider = ({ children }: any) => {
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30); // Initial time
  const [question, setQuestion] = useState('');

  const startGame = () => {
    // Generate the first question and start the game logic
    setQuestion(generateQuestion());
    setScore(0);
  };

  const endGame = () => {
    // Logic for ending the game and navigating to the ResultScreen
  };

  const resetGame = () => {
    setScore(0);
    setTimeRemaining(30);
    setQuestion('');
  };

  return (
    <GameContext.Provider value={{ score, timeRemaining, question, startGame, endGame, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};
function generateQuestion(): React.SetStateAction<string> {
  throw new Error('Function not implemented.');
}

