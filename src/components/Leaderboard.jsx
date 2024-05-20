import React, { useEffect, useState } from "react";
import Form from "./Form";
import { getScores, addScore } from "../utils/firebase";

import { useGame } from "../context/GameStateProvider";

function Leaderboard() {
  const { score } = useGame();
  const [isDisplayingForm, setIsDisplayingForm] = useState(true);
  const [allScores, setAllScores] = useState([]);

  useEffect(() => {
    getData();
    if (score === 0) {
      setIsDisplayingForm(false);
    }
  }, []);

  async function getData() {
    {
      const scores = await getScores();
      setAllScores(scores);
    }
  }

  const handleNameSubmit = (name) => {
    if (score === 0) {
      setIsDisplayingForm(false);
    } else {
      addScore(name, score);
      getData();
      setIsDisplayingForm(false);
    }
  };

  return (
    <div className="container-gameOver">
      {score !== 0 && isDisplayingForm && <Form onSubmit={handleNameSubmit} />}
      {!isDisplayingForm && (
        <div className="leaderboard">
          {allScores.map((score, index) => (
            <div key={index} className="leaderboard-row">
              <div className="leaderboard-col">{index + 1}</div>
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
