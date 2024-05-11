import React, { useEffect, useState } from "react";

import { useGame } from "../context/GameStateProvider";

function Leaderboard() {
  const { isGameOver } = useGame();
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
    }
  }

  return (
    <div className="leaderboard">
      {allScores.slice(0, 10).map((score, index) => (
        <div key={index} className="leaderboard-row">
          <div className="leaderboard-col">{score.name}</div>
          <div className="leaderboard-col">{score.score}</div>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
