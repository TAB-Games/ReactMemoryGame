import React from "react";
import { useGame } from "../context/GameProvider";

function Score() {
  const { score } = useGame();
  return <div className="score">Score: {score}</div>;
}

export default Score;
