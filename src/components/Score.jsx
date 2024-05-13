import React from "react";
import { useGame } from "../context/GameStateProvider";

function Score() {
  const { score } = useGame();
  return <div id="score">Score: {score}</div>;
}

export default Score;
