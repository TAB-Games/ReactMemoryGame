import React, { useEffect, useState } from "react";
import Form from "./Form";
import { ref, get } from "firebase/database";
import { useGame } from "../context/GameStateProvider";
import { database } from "../utils/consts";

function Leaderboard() {
  const { isGameOver, score } = useGame();
  const [isDisplayingForm, setIsDisplayingForm] = useState(true);
  const [playerName, setPlayerName] = useState(null);
  const [allScores, setAllScores] = useState([]);

  useEffect(() => {
    getData();
  }, [isGameOver]);

  const handleNameSubmit = (name) => {
    console.log("Sending score to database...");
    console.log(`${name}: ${score}`);
    // setPlayerName(name);
    setIsDisplayingForm(false);
    // Send name and score to the database
  };

  async function getData() {
    const scoreRef = await ref(database, `ScoreSet/`);
    await get(scoreRef).then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.exists()) {
          const data = childSnapshot.val();

          allScores.push(data);
        } else {
          console.log("no data from database");
        }
      });
    });
    return allScores.sort((a, b) => b.score - a.score).splice(5);
  }

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
