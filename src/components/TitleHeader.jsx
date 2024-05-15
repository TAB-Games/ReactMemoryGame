import React, { useEffect, useState } from "react";
import { useGame } from "../context/GameStateProvider";
import { useUI } from "../context/UIStateProvider";

function TitleHeader() {
  const [title, setTitle] = useState("<(^.^<) | <(^.^)> | (>^.^)>");
  const { isGameOver, sequenceIndex } = useGame();
  const { isTileFlashing } = useUI();

  const faces1 = "<(^.^<) | <(^.^)> | (>^.^)>";
  const faces2 = "<(^.^)> | (>^.^)> | <(^.^<)";
  const faces3 = "(>^.^)> | <(^.^<) | <(^.^)>";
  const faceArr = [faces1, faces2, faces3];

  useEffect(() => {
    setTitle(() => {
      return faceArr[(sequenceIndex + 1) % 3];
    });
  }, [sequenceIndex]);

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
