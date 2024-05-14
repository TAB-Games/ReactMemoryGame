import React, { useEffect, useState } from "react";
import { useGame } from "../context/GameStateProvider";

function TitleHeader() {
  const [title, setTitle] = useState("<(^.^<) | <(^.^)> | (>^.^)>");
  const { isGameOver } = useGame();

  useEffect(() => {
    changeTitle();
  }, [isGameOver]);

  function changeTitle() {
    if (isGameOver) {
      const gameOver = "GAME OVER";
      setTitle(gameOver);
    } else {
      const gameOver = "<(^.^<) | <(^.^)> | (>^.^)>";
      setTitle(gameOver);
    }
  }
  return <h1 className="title"> {title} </h1>;
}

export default TitleHeader;
