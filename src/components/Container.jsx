import React, { useState } from "react";
import GameBoard from "./GameBoard";
import LevelBoard from "./LevelBoard";
import MainMenu from "./MainMenu";
import { useGame } from "../context/GameStateProvider";
import { useUI } from "../context/UIStateProvider";
import { initSynth } from "../utils/synth";
import { generateRandomSequence } from "../utils/utils";
import {
  STARTING_MATRIX_SIZE,
  STARTING_SEQUENCE_LENGTH,
} from "../utils/consts";

function Container() {
  //   const [inMenu, setInMenu] = useState(true);
  //   const [inLevelPicker, setInLevelPicker] = useState(true);
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

  function startGame() {
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
  }

  return (
    <div>
      {inMenu && <MainMenu />}
      {inLevelPicker && <LevelBoard />}

      {inGame && <GameBoard />}
      <div className="play-btn" onClick={startGame}>
        {!isGameOver ? "Play" : "Try Again"}
      </div>
    </div>
  );
}

export default Container;
