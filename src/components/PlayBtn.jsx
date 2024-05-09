import { useCurrentSequence } from "./CurrentSequenceContext";
import { generateRandomSequence } from "../utils/utils";

export const PlayBtn = () => {
  const { currentSequence, setCurrentSequence } = useCurrentSequence();

  function handlePlay() {
    setCurrentSequence(generateRandomSequence(2, 4));
  }

  return (
    <div className="play-btn" onClick={handlePlay}>
      Play
    </div>
  );
};
