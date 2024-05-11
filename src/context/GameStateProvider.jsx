import React, { createContext, useContext, useState } from "react";
import {
  STARTING_MATRIX_SIZE,
  STARTING_SEQUENCE_LENGTH,
} from "../utils/consts";
// Create a context for the game state
const GameContext = createContext();

// Provider component to provide game state to its children
export const GameStateProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [numberOfTiles, setNumberOfTiles] = useState(STARTING_MATRIX_SIZE);
  const [currentSequence, setCurrentSequence] = useState([]);
  const [sequenceLength, setSequenceLength] = useState(
    STARTING_SEQUENCE_LENGTH
  );
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

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
        isGameOver,
        setIsGameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
