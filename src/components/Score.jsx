import React from "react";
import { useGame } from "../context/GameStateProvider";

function Score() {
  const { score } = useGame();
  return <div className="score">Score: {score}</div>;
}

export default Score;
