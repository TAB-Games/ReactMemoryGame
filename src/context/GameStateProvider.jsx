import React, { createContext, useContext, useReducer, useState } from "react";
import {
  STARTING_MATRIX_SIZE,
  STARTING_SEQUENCE_LENGTH,
} from "../utils/consts";
// Create a context for the game state
const GameContext = createContext();

// Provider component to provide game state to its children
export const GameStateProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [numberOfTiles, setNumberOfTiles] = useState(0);
  const [currentSequence, setCurrentSequence] = useState([]);
  const [sequenceLength, setSequenceLength] = useState(
    STARTING_SEQUENCE_LENGTH
  );
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const [inLevelPicker, setInLevelPicker] = useState(false);
  const [inMenu, setInMenu] = useState(true);
  const [level, setLevel] = useState(0);
  const [inGame, setInGame] = useState(false);

  // TODO: to handle level select with reducer. ex.
  // const [state, dispatch] = useReducer(gameReducer, initialState)

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

        level,
        setLevel,
        inLevelPicker,
        setInLevelPicker,
        inMenu,
        setInMenu,
        inGame,
        setInGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
