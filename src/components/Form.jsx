import React, { useState } from "react";
import { database } from "../utils/consts";
import { ref, push } from "firebase/database";
import { useGame } from "../context/GameStateProvider";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const { score } = useGame();

  const handleSubmit = (event) => {
    event.preventDefault();
    addData();
    onSubmit(name); // TODO: should validate name before onSubmit
    setName("");
  };

  // Function to save score to Firebase
  function addData() {
    const scoreRef = ref(database, `ScoreSet/`); // Reference to the location in the database
    const data = { name: name, score: score }; // Data to be saved
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

  return (
    <form className="name-form" onSubmit={handleSubmit}>
      <div className="name-input-label">Enter your name:</div>
      <input
        type="text"
        className="name-input"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <button className="name-form-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
