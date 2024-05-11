import React, { useEffect, useState } from "react";
import { useGame } from "../context/GameStateProvider";

function TitleHeader() {
  const [title, setTitle] = useState(".memory");
  const { isGameOver } = useGame();

  useEffect(() => {
    changeTitle();
  }, [isGameOver]);

  function changeTitle() {
    if (isGameOver) {
      const gameOver = "GameOver";
      setTitle(gameOver);
    } else {
      const gameOver = ".memory";
      setTitle(gameOver);
    }
  }
  return <h1> {title} </h1>;
}

export default TitleHeader;
