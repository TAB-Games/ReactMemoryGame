import { useGame } from "../context/GameStateProvider";
import { generateRandomSequence } from "../utils/utils";

export const PlayBtn = () => {
  const { setCurrentSequence, isGameOver, setIsGameOver } = useGame();
  


  function handlePlay() {
    setCurrentSequence(generateRandomSequence(2, 2));
    setIsGameOver(false)
  }

  return (
    <div className="play-btn" onClick={handlePlay}>
      Play
    </div>
  );
};
