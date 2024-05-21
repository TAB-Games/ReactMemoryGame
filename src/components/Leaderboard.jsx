import React, { useEffect, useState, useRef } from "react";
import Form from "./Form";
import { getScores, addScore } from "../utils/firebase";
import arrow from "../assets/icons/arrow.png";

import { useGame } from "../context/GameStateProvider";
import Score from "./Score";

function Leaderboard() {
  const leaderboardRef = useRef(null);
  const { score } = useGame();
  const [isDisplayingForm, setIsDisplayingForm] = useState(true);
  const [allScores, setAllScores] = useState([]);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  // gets leaderboard data and handles scrolling
  useEffect(() => {
    getData();
    if (leaderboardRef.current) {
      if (
        leaderboardRef.current.scrollHeight >
        leaderboardRef.current.clientHeight
      ) {
        console.log("can scroll down");
        setCanScrollDown(true);
      } else {
        console.log("cant scroll down");
        setCanScrollDown(false);
      }
    }
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
      <Score />
      {score !== 0 && isDisplayingForm && <Form onSubmit={handleNameSubmit} />}
      {!isDisplayingForm && (
        <div className="leaderboard-container">
          <div className="leaderboard" ref={leaderboardRef}>
            {allScores.map((score, index) => (
              <div key={index} className="leaderboard-row">
                <div className="leaderboard-col">{index + 1}</div>
                <div className="leaderboard-col">{score.name}</div>
                <div className="leaderboard-col">{score.score}</div>
              </div>
            ))}
            {canScrollUp && <img className="scroll-indicator-up" src={arrow} />}
            {canScrollDown && (
              <img className="scroll-indicator-down" src={arrow} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
