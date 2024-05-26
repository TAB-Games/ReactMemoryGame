import { useState } from "react";
import { useGame } from "../context/GameStateProvider";
import { useUI } from "../context/UIStateProvider";
import { initSynth } from "../utils/synth";
import { generateRandomSequence } from "../utils/utils";
import {
  STARTING_MATRIX_SIZE,
  STARTING_SEQUENCE_LENGTH,
} from "../utils/consts";

export const useGameStart = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const { setIsTileFlashing } = useUI();
  const {
    isGameOver,

    inMenu,
    inLevelPicker,
    inGame,
    setSequenceLength,
    setCurrentSequence,
    setScore,
    setNumberOfTiles,
    level,
    setLevel,
    setInLevelPicker,
    setIsGameOver,
    setInGame,
  } = useGame();

  const startGame = () => {
    // setInGame(false);
    // setIsGameStarted(true);
    console.log("Game started");

    setInGame(true);
    setLevel(level);
    setInLevelPicker(false);
    initSynth();
    setSequenceLength(STARTING_SEQUENCE_LENGTH);
    setNumberOfTiles(() => STARTING_MATRIX_SIZE * level);
    setCurrentSequence(
      generateRandomSequence(STARTING_SEQUENCE_LENGTH, STARTING_MATRIX_SIZE)
    );
    setScore(0);
    setIsGameOver(false);
    setIsTileFlashing(true);
  };
  return { isGameStarted, startGame };
};
