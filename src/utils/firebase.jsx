import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { onValue, ref, get, push } from "firebase/database";

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
const db = getDatabase(app);

// Save scores to db
export function addScore(username, score) {
  const scoreRef = ref(db, `ScoreSet/`); // Reference to the location in the database
  const data = { name: username, score: score }; // Data to be saved
  // Set the data at the reference location
  push(scoreRef, data)
    .then(() => {
      // If successful, show success message
      alert("Data Added Successfully");
    })
    .catch((error) => {
      // If unsuccessful, show error message and log the error
      alert("Unsuccessful");
      console.log(error);
    });
}

// Get scores from db
export async function getScores() {
  let allScores = [];
  const scoreRef = ref(db, `ScoreSet/`);
  await get(scoreRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      if (childSnapshot.exists()) {
        const data = childSnapshot.val();

        allScores.push(data);
        return allScores;
      } else {
        console.log("no data from database");
      }
    });
  });
  allScores.sort((a, b) => b.score - a.score).splice(10);
}
