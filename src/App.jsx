import React, { useState, useEffect, useContext } from "react";

import TitleHeader from "./components/TitleHeader";

import "./App.css";
import GameBoard from "./components/GameBoard";
import { PlayBtn } from "./components/PlayBtn";
import Score from "./components/Score";

import { GameStateProvider } from "./context/GameStateProvider";
import { UIStateProvider } from "./context/UIStateProvider";

import { initializeApp } from "firebase/app";

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_DB_URL,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_SENDER_ID,
  VITE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  databaseURL: VITE_DB_URL,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_SENDER_ID,
  appId: VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <UIStateProvider>
        <GameStateProvider>
          <TitleHeader />
          <Score />
          <GameBoard />
          <PlayBtn />
        </GameStateProvider>
      </UIStateProvider>
    </>
  );
}

export default App;
