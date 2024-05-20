import React from "react";
import { useGame } from "../context/GameStateProvider";

function MainMenu() {
  const { setInLevelPicker, setInMenu } = useGame();

  function showLevels() {
    setInMenu(false);
    setInLevelPicker(true);
  }

  return (
    <div className="main-menu">
      <h1>./memory</h1>
      <div className="menu-option" onClick={() => showLevels()}>
        Play
      </div>
      <div className="menu-option">Settings</div>
      <div className="menu-option">Exit</div>
    </div>
  );
}

export default MainMenu;
