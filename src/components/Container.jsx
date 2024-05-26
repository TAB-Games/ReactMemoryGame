import React, { useState } from "react";
import GameBoard from "./GameBoard";
import LevelBoard from "./LevelBoard";
import MainMenu from "./MainMenu";
import { useGame } from "../context/GameStateProvider";
import { useUI } from "../context/UIStateProvider";
import { initSynth } from "../utils/synth";
import { generateRandomSequence } from "../utils/utils";

function Container() {
  const {
    isGameOver,

    inMenu,
    inLevelPicker,
    inGame,
  } = useGame();

  return (
    <div>
      {inMenu && <MainMenu />}
      {inLevelPicker && <LevelBoard />}
      {inGame && <GameBoard />}
    </div>
  );
}

export default Container;
