import React, { useState, useEffect } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import { PlayBtn } from "./components/PlayBtn";
import Score from "./components/Score";

function App() {
  const [currentSequence, setCurrentSequence] = useState([]); // flashing tiles
  const [userInput, setUserInput] = useState([]); // keeps track of what user types
  const [score, setScore] = useState(0); // score starts at 0
  const [sequenceLength, setSequenceLength] = useState(2); // sequence starts at 2
  const [numTiles, setNumTiles] = useState(4);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    // Logic to generate random flashing sequence for current level
    // Update flashingTiles state accordingly
  }, [level]);

  const handleTileClick = (id) => {
    // Logic to handle user input when clicking on a tile
    // Update userInput state accordingly
  };

  const handleNextLevel = () => {
    // Logic to handle advancing to the next level
    // Update level and score states accordingly
  };

  return (
    <div>
      <h1>Memorization Station</h1>
      <Score value={score} />
      <GameBoard numTiles={numTiles} />
      <PlayBtn />
    </div>
  );
}

export default App;
