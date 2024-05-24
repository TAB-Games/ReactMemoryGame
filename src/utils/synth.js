import * as Tone from "tone";

const NOTE_DURATION = "0.01";
const SCALES = {
  C_MAJOR: ["B", "A", "G", "F", "E", "D", "C"],
};

let synth = null;
let env = null;

export const initSynth = () => {
  startAudioContext();
  if (!synth || !env) {
    synth = new Tone.Synth().toDestination();
    env = new Tone.AmplitudeEnvelope({
      attack: 3,
      decay: 0.1,
      sustain: 0.1,
      release: 0.1,
    }).toDestination();
  }
  synth.connect(env);

  return synth;
};

export const playNote = (tileIndex, numberOfTiles) => {
  const note = "C5";
  if (!synth) {
    initSynth();
  }

  env.triggerAttackRelease(1);
  synth.triggerAttackRelease(
    determineNoteToPlay(tileIndex, numberOfTiles),
    NOTE_DURATION
  );
};

export const disposeSynth = () => {
  if (synth) {
    synth.dispose();
    synth = null;
  }
  if (env) env.dispose();
};

export const isToneLoaded = () => {
  return Tone.loaded();
};

// call this on start to allow audio to play
const startAudioContext = async () => {
  await Tone.start();
  console.log("audio context started");
};

const determineNoteToPlay = (tileIndex = 0, numTiles) => {
  let acc = 0;
  let octave = 6;
  console.log(tileIndex);

  if (tileIndex + 1 > numTiles) {
    acc = Math.floor((tileIndex + 1) / numTiles);
    octave = Math.max(2, octave - Math.floor(tileIndex / 7));
  }

  const note = SCALES.C_MAJOR[(tileIndex + acc) % SCALES.C_MAJOR.length];

  console.log("Note played:", note + octave.toString());

  return note + octave.toString();
};
