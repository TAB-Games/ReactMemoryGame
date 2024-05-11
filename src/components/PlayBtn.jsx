import { useGame } from "../context/GameStateProvider";
import { generateRandomSequence } from "../utils/utils";

export const PlayBtn = () => {
  const { setCurrentSequence, isGameOver, setIsGameOver, setScore } = useGame();

  function handlePlay() {
    setCurrentSequence(generateRandomSequence(2, 2));
    setScore(0);
    setIsGameOver(false);
  }

  return (
    <div className="play-btn" onClick={handlePlay}>
      Play
    </div>
  );
};
