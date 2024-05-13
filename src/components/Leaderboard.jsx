import React, { useEffect, useState } from "react";
import Form from "./Form";
import { getScores, addScore } from "../utils/firebase";

import { useGame } from "../context/GameStateProvider";
import { database } from "../utils/consts";

function Leaderboard() {
  const { isGameOver, score } = useGame();
  const [isDisplayingForm, setIsDisplayingForm] = useState(true);
  const [allScores, setAllScores] = useState([]);

  useEffect(() => {
    getData();
  }, [isDisplayingForm]);

  async function getData() {
    {
      console.log("Fetching data from database");

      const scores = await getScores();
      setAllScores(scores);
    }
  }

  const handleNameSubmit = (name) => {
    console.log("Sending score to database...");
    addScore(name, score);
    setIsDisplayingForm(false);
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
