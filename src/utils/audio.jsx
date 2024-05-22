import { Howl, Howler } from "howler";
import correct_12 from "./../assets/audio-sfx/correct_12.mp3";
import correct_11 from "./../assets/audio-sfx/correct_11.mp3";
import correct_10 from "./../assets/audio-sfx/correct_10.mp3";
import correct_9 from "./../assets/audio-sfx/correct_09.mp3";
import correct_8 from "./../assets/audio-sfx/correct_08.mp3";

import wrong_01 from "./../assets/audio-sfx/wrong_01.mp3";

const correctSoundFiles = [
  correct_8,
  correct_9,
  correct_10,
  correct_11,
  correct_12,
];

const wrongSound = new Howl({
  src: [wrong_01],
  volume: 0.1,
});

const correctSoundsMap = correctSoundFiles.map(
  (soundFile) =>
    new Howl({
      src: [soundFile],
      volume: 0.1,
    })
);

// Function to play a random correct sound
function playRandomCorrectSound() {
  const randomIndex = Math.floor(Math.random() * correctSoundsMap.length);
  correctSoundsMap[randomIndex].play();
}

export const playCorrect = (index, numTiles) => {
  //   playRandomCorrectSound();
  //   const maths = index / numTiles;
  //   SFX_CORRECT.play();
  console.log("SOUND MAP", correctSoundsMap);
  console.log("MODULO", index % (correctSoundFiles.length - 1));
  console.log("INDEXERINO_INDEX", index);
  console.log("INDEXERINO_numTiles", numTiles);
  correctSoundsMap[index % (correctSoundFiles.length - 1)].play();
};

export const playWrong = () => {
  wrongSound.play();
};
