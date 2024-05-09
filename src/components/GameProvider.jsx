import React, { createContext, useContext, useState } from "react";

// Create a context for the game state
const GameContext = createContext();

// Provider component to provide game state to its children
export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [numberOfTiles, setNumberOfTiles] = useState(4);
  const [currentSequence, setCurrentSequence] = useState([]);
  const [level, setLevel] = useState(1);

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        currentSequence,
        setCurrentSequence,
        numberOfTiles,
        setNumberOfTiles,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to use game context
export const useGame = () => useContext(GameContext);
