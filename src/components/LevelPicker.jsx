import React from "react";
import { useGame } from "../context/GameStateProvider";

function LevelPicker({ difficulty, level }) {
  const { setGameStart, setIsGameOver, setLevel, setInLevelPicker } = useGame();

  function startGame() {
    setGameStart(true);
    setLevel(level);
    setInLevelPicker(false);
    setIsGameOver(false);
  }

  return (
    <div onClick={() => startGame()} className="level-picker">
      {difficulty}
    </div>
  );
}

export default LevelPicker;
