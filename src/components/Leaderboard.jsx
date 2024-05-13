import React, { useEffect, useState } from "react";
import Form from "./Form";

import { useGame } from "../context/GameStateProvider";

function Leaderboard() {
  const { isGameOver, score } = useGame();
  const [isDisplayingForm, setIsDisplayingForm] = useState(true);
  const [playerName, setPlayerName] = useState(null);
  const [allScores, setAllScores] = useState([
    {
      name: "Brian",
      score: "5",
    },
    {
      name: "Elis",
      score: "1",
    },
    {
      name: "Alex",
      score: "4",
    },
  ]);

  useEffect(() => {
    getData();
  }, [isGameOver]);

  function getData() {
    {
      // GET DATA FROM THE DB TO POPULATE LEADERBOARD
    }
  }

  const handleNameSubmit = (name) => {
    console.log("Sending score to database...");
    console.log(`${name}: ${score}`);
    // setPlayerName(name);
    setIsDisplayingForm(false);
    // Send name and score to the database
  };

  return (
    <div className="container-gameOver">
      {isDisplayingForm && <Form onSubmit={handleNameSubmit} />}
      {!isDisplayingForm && (
        <div className="leaderboard">
          {allScores.slice(0, 10).map((score, index) => (
            <div key={index} className="leaderboard-row">
              <div className="leaderboard-col">{score.name}</div>
              <div className="leaderboard-col">{score.score}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
