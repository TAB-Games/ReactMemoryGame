import React from "react";
import LevelPicker from "./LevelPicker";

function LevelBoard() {
  return (
    <div className="level-board">
      <LevelPicker difficulty={"Easy"} level={1} />
      <LevelPicker difficulty={"Medium"} level={2} />
      <LevelPicker difficulty={"Hard"} level={3} />
      <LevelPicker difficulty={"Expert"} level={4} />
    </div>
  );
}

export default LevelBoard;
