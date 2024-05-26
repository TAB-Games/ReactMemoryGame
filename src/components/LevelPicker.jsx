import React from "react";
import { useGame } from "../context/GameStateProvider";
import { useUI } from "../context/UIStateProvider.jsx";

import { initSynth } from "../utils/synth.js";
import {
  STARTING_MATRIX_SIZE,
  STARTING_SEQUENCE_LENGTH,
} from "../utils/consts";
import { generateRandomSequence } from "../utils/utils.jsx";

function LevelPicker({ difficulty, level }) {
  const { setIsTileFlashing } = useUI();
  const {
    setCurrentSequence,
    setNumberOfTiles,
    setIsGameOver,
    setScore,
    setSequenceLength,
    setInGame,
    setInLevelPicker,
    setLevel,
  } = useGame();

  function handleClick() {
    setInGame(true);
    setLevel(level);
    setInLevelPicker(false);
  }

  return (
    <div onClick={() => handleClick()} className="level-picker">
      {difficulty}
    </div>
  );
}

export default LevelPicker;
