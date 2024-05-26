import { useGame } from "../context/GameStateProvider";
import { useUI } from "../context/UIStateProvider";
import { generateRandomSequence } from "../utils/utils";
import {
  STARTING_MATRIX_SIZE,
  STARTING_SEQUENCE_LENGTH,
} from "../utils/consts";

import { initSynth } from "../utils/synth";

export const PlayBtn = () => {
  const { isGameOver } = useGame();
  const {
    setCurrentSequence,
    setNumberOfTiles,
    setIsGameOver,
    setScore,
    setSequenceLength,
    level,
  } = useGame();
  const { setIsTileFlashing } = useUI();

  function handlePlay() {
    initSynth();
    setSequenceLength(STARTING_SEQUENCE_LENGTH);
    setNumberOfTiles(() => STARTING_MATRIX_SIZE * level);
    setCurrentSequence(
      generateRandomSequence(STARTING_SEQUENCE_LENGTH, STARTING_MATRIX_SIZE)
    );
    setScore(0);
    setIsGameOver(false);
    setIsTileFlashing(true);
  }

  return (
    <div className="play-btn" onClick={handlePlay}>
      {!isGameOver ? "Play" : "Try Again"}
    </div>
  );
};
