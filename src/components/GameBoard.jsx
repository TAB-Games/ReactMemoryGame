import React, { useState, useEffect } from "react";

import { Tile } from "./Tile";
import { generateRandomId } from "../utils/utils";
import { GameStateProvider } from "../context/GameStateProvider";
import { useGame } from "../context/GameStateProvider";
import Leaderboard from "./Leaderboard";

import Gradient from "../models/Gradient";
import { gradient } from "../context/Gradient";
import { useUI } from "../context/UIStateProvider";
import { FLASH_DURATION, FLASH_INTERVAL } from "../utils/consts";
import LevelBoard from "./LevelBoard";
import { PlayBtn } from "./PlayBtn";
import Score from "./Score";
import MainMenu from "./MainMenu";

function GameBoard() {
  const {
    numberOfTiles,
    currentSequence,
    isGameOver,
    sequenceIndex,
    setSequenceIndex,
    gameStart,
    inMenu,
    inLevelPicker,
  } = useGame();
  const { isTileFlashing, setIsTileFlashing, tileArr, setTileArr } = useUI();
  const [disableUserInput, setDisableUserInput] = useState(false);
  const [isDelaying, setIsDelaying] = useState(false);

  // const gradient = new Gradient();
  let timeoutId;

  let prevArrLength = tileArr.length;

  // disable/enable user input
  useEffect(() => {
    // preRoundDelay();
    if (isTileFlashing) {
      setDisableUserInput(true);
    } else {
      setDisableUserInput(false);
    }
  }, [isTileFlashing]);

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

    // this timeout is responsible for preround delay
    setTimeout(() => {
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
    }, 500);

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
    let tileOpacity = 0.05; // we will increment opacity over time

    let newTileArr = [];
    for (let i = 0; i < numberOfTiles * numberOfTiles; i++) {
      let id = generateRandomId();

      let tileColor = {
        backgroundColor: `rgba(${Math.abs(gradient.red.value)}, ${Math.abs(
          gradient.blue.value
        )}, ${Math.abs(gradient.green.value)}, ${tileOpacity})`,
      };

      tileOpacity = tileOpacity < 1 ? tileOpacity + 0.1 : 1; // increases tile opacity over time
      newTileArr.push(<Tile key={id} index={i} tileColor={tileColor} />);
      gradient.update();
    }

    setTileArr(() => {
      return newTileArr;
    });
  }

  return (
    <>
      <>
        {inMenu && <MainMenu />}
        {inLevelPicker && <LevelBoard />}
      </>
      {gameStart && (
        <>
          {isGameOver && <Leaderboard />}
          {isTileFlashing && <div className="disable-input"></div>}

          {!isGameOver && (
            <div className={`container${!disableUserInput ? "" : `-disabled`}`}>
              {tileArr}
            </div>
          )}

          {gameStart && (
            <>
              <div className="bottom-bar">
                <PlayBtn />
                <Score />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default GameBoard;
