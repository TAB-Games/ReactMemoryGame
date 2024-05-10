import React, { createContext, useContext, useState } from "react";

// Create a context for the game state
const GameContext = createContext();

// Provider component to provide game state to its children
export const GameStateProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [numberOfTiles, setNumberOfTiles] = useState(2);
  const [currentSequence, setCurrentSequence] = useState([]);
  const [sequenceLength, setSequenceLength] = useState(2);
  const [sequenceIndex, setSequenceIndex] = useState(0);
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
        sequenceIndex,
        setSequenceIndex,
        sequenceLength,
        setSequenceLength,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
