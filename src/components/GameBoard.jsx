import React, { useState, useEffect } from "react";

import { Tile } from "./Tile";
import { generateRandomId } from "../utils/utils";
import { GameStateProvider } from "../context/GameStateProvider";
import { useGame } from "../context/GameStateProvider";
import Leaderboard from "./Leaderboard";

import Gradient from "../models/Gradient";
import { useUI } from "../context/UIStateProvider";

function GameBoard() {
  const {
    numberOfTiles,
    currentSequence,
    isGameOver,
    sequenceIndex,
    setSequenceIndex,
  } = useGame();
  const { isTileFlashing, setIsTileFlashing } = useUI();
  const [userInput, setUserInput] = useState([]); // keeps track of what user types
  const [tileArr, setTileArr] = useState([]);

  let gradient = new Gradient();
  let tileColorMap = new Map();

  useEffect(() => {
    createTiles();
  }, [numberOfTiles]); // Regenerate tiles whenever numberOfTiles changes

  useEffect(() => {
    gradient.update();
  }, [gradient]);

  useEffect(() => {
    // Update the grid according to numberOfTiles
    document.documentElement.style.setProperty("--numTiles", numberOfTiles);
  }, [numberOfTiles]);

  useEffect(() => {
    let index = 0;

    const flashTiles = () => {
      if (index < currentSequence.length) {
        flashTile(currentSequence[index], index);
        index++;
        setTimeout(flashTiles, 500); // Flash the next tile after 500ms
      } else {
        setIsTileFlashing(false); // Stop flashing when all tiles are flashed
        // Optionally reset sequence index or perform other actions
      }
    };

    if (isTileFlashing) {
      flashTiles();
    }
  }, [isTileFlashing]);

  function flashTile(tileIndex, index) {
    console.log("Flashing tile:", tileIndex + 1);

    const newTileArr = [...tileArr];

    // Flash the tile
    newTileArr[tileIndex] = (
      <div
        key={tileArr[tileIndex].key}
        className="tile"
        style={{ backgroundColor: "rgba(255, 0, 0, 0.5)" }}
        onClick={tileArr[tileIndex].props.onClick}
      ></div>
    );
    setTileArr(newTileArr);

    // After a delay, restore the original style of the tile
    setTimeout(() => {
      newTileArr[tileIndex] = tileArr[tileIndex];
      setTileArr(newTileArr);
    }, 500);
  }

  function createTiles() {
    const newTileArr = [];
    for (let i = 0; i < numberOfTiles * numberOfTiles; i++) {
      let id = generateRandomId();

      let tileColor = {
        backgroundColor: `rgba(${Math.abs(gradient.red.value)}, ${Math.abs(
          gradient.blue.value
        )}, ${Math.abs(gradient.green.value)}, 0.8)`,
      };
      // add to map to reference later
      tileColorMap.set(
        i,
        `rgba(${gradient.red.value},${gradient.blue.value},${
          gradient.green.value
        },${0.8})`
      );

      newTileArr.push(<Tile key={id} index={i} tileColor={tileColor} />);
      gradient.update();
    }
    setTileArr(newTileArr);
  }

  return (
    <>
      {isGameOver && <Leaderboard />}

      {!isGameOver && <div className="container">{tileArr}</div>}
    </>
  );
}

export default GameBoard;
