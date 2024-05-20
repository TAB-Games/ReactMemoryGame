import React from "react";
import { useGame } from "../context/GameStateProvider";

function LevelPicker({ difficulty, level }) {
  const { setGameStart, setLevel, setInLevelPicker } = useGame();

  function startGame() {
    setGameStart(true);
    setLevel(level);
    setInLevelPicker(false);
  }

  return (
    <div onClick={() => startGame()} className="level-picker">
      {difficulty}
    </div>
  );
}

export default LevelPicker;
