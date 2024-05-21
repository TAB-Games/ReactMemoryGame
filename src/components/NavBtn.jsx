import React from "react";
import { useGame } from "../context/GameStateProvider";
import {
  STARTING_MATRIX_SIZE,
  STARTING_SEQUENCE_LENGTH,
} from "../utils/consts";

function NavBtn() {
  const {
    setCurrentSequence,
    setNumberOfTiles,
    setIsGameOver,
    setScore,
    setSequenceLength,
    level,
    isGameOver,
    inMenu,
    setInMenu,
    setGameStart,
  } = useGame();

  function mainMenu() {
    setInMenu(() => true);
    setScore(0);
    setGameStart(false);
    setSequenceLength(STARTING_SEQUENCE_LENGTH);
    setNumberOfTiles(0);
  }

  return (
    <div className="play-btn" onClick={() => mainMenu()}>
      {"Main menu"}
    </div>
  );
}

export default NavBtn;
