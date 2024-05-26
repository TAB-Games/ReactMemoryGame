import React from "react";
import { useGame } from "../context/GameStateProvider";

function LevelPicker({ difficulty, level }) {
  const { setInGame, setInLevelPicker, setLevel } = useGame();

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
