import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

export const FLASH_DURATION = 300;
export const FLASH_INTERVAL = 600;
export const STARTING_SEQUENCE_LENGTH = 2;
export const STARTING_MATRIX_SIZE = 2;
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DB_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const firebase = initializeApp(firebaseConfig);
export const database = getDatabase();
