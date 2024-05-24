import React, { useEffect, useState } from "react";
import {
  initSynth,
  playNote,
  disposeSynth,
  isToneLoaded,
} from "../utils/synth";

const AudioSynthesizer = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setupSynth = async () => {
      await isToneLoaded();
      initSynth();
      setIsReady(true);
      console.log("synth initialized");
    };

    setupSynth();

    return () => {
      disposeSynth();
    };
  }, []);

  const handlePlay = async () => {
    playNote();
  };

  return (
    <div>
      {isReady ? (
        <button onClick={handlePlay}>Play Sound</button>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AudioSynthesizer;
