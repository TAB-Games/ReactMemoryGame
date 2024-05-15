import React, { useState, useEffect } from "react";

import { Tile } from "./Tile";
import { generateRandomId } from "../utils/utils";
import { GameStateProvider } from "../context/GameStateProvider";
import { useGame } from "../context/GameStateProvider";
import Leaderboard from "./Leaderboard";

import Gradient from "../models/Gradient";
import { useUI } from "../context/UIStateProvider";
import { FLASH_DURATION, FLASH_INTERVAL } from "../utils/consts";

function GameBoard() {
  const {
    numberOfTiles,
    currentSequence,
    isGameOver,
    sequenceIndex,
    setSequenceIndex,
  } = useGame();
  const { isTileFlashing, setIsTileFlashing, tileArr, setTileArr } = useUI();
  const [disableUserInput, setDisableUserInput] = useState(false);

  let gradient = new Gradient();
  let timeoutId;
  let prevArrLength = tileArr.length;

  // disable/enable user input
  useEffect(() => {
    setDisableUserInput((prevState) => !prevState);
  }, [isTileFlashing]);

  useEffect(() => {
    // checks if tileArr got updated
    if (prevArrLength < tileArr.length) {
      prevArrLength = tileArr.length;

      setIsTileFlashing(true);
    }
  }, [tileArr]);

  useEffect(() => {
    createTiles();
    document.documentElement.style.setProperty("--numTiles", numberOfTiles);
  }, [numberOfTiles]); // Regenerate tiles whenever numberOfTiles changes

  useEffect(() => {
    gradient.update();
  }, [gradient]);

  useEffect(() => {
    let index = 0;
    let timeoutIds = [];

    const flashTiles = () => {
      if (tileArr.length === numberOfTiles * numberOfTiles) {
        if (index < currentSequence.length) {
          flashTile(currentSequence[index]);
          index++;
          timeoutIds.push(setTimeout(flashTiles, FLASH_INTERVAL)); // Flash the next tile after 500ms
        } else {
          setSequenceIndex(0);
          setIsTileFlashing(false); // Stop flashing when all tiles have flashed
        }
      }
    };

    if (tileArr.length && isTileFlashing) {
      try {
        flashTiles();
      } catch (err) {
        console.error("Error flashing tiles", err);
      }
    }
    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [prevArrLength, isTileFlashing]);

  function flashTile(tileIndex) {
    if (tileIndex < 0 || tileIndex >= tileArr.length) {
      console.error("Tile array wasn't updated before", tileArr);
      return;
    }

    const originalTileColor = tileArr[tileIndex].props.tileColor;

    // flash tile
    setTileArr((prevTileArr) => {
      const newTileArr = [...prevTileArr];
      newTileArr[tileIndex] = (
        <div key={`tile-${tileIndex}`} className="tile-flashing"></div>
      );
      return newTileArr;
    });

    // return to normal color
    timeoutId = setTimeout(() => {
      setTileArr((prevTileArr) => {
        const newTileArr = [...prevTileArr];
        newTileArr[tileIndex] = (
          <Tile
            key={`tile-${tileIndex}`}
            index={tileIndex}
            tileColor={originalTileColor}
            className="tile"
          />
        );
        return newTileArr;
      });
    }, FLASH_DURATION);

    return () => {
      clearTimeout(timeoutId);
    };
  }

  function createTiles() {
    let tileOpacity = 0.05;

    let newTileArr = [];
    for (let i = 0; i < numberOfTiles * numberOfTiles; i++) {
      let id = generateRandomId();

      let tileColor = {
        backgroundColor: `rgba(${Math.abs(gradient.red.value)}, ${Math.abs(
          gradient.blue.value
        )}, ${Math.abs(gradient.green.value)}, ${tileOpacity})`,
      };

      tileOpacity = tileOpacity < 1 ? tileOpacity + 0.05 : 1; // increases tile opacity over time
      newTileArr.push(<Tile key={id} index={i} tileColor={tileColor} />);
      gradient.update();
    }

    setTileArr(() => {
      return newTileArr;
    });
  }

  return (
    <>
      {isGameOver && <Leaderboard />}
      {isTileFlashing && <div className="disable-input"></div>}

      {!isGameOver && (
        <div className={`container${!disableUserInput ? "" : `-disabled`}`}>
          {tileArr}
        </div>
      )}
    </>
  );
}

export default GameBoard;
