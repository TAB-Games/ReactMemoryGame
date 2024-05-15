import React, { useState } from "react";

function Form({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name); // TODO: should validate name before onSubmit
    setName("");
  };

  return (
    <form className="name-form" onSubmit={handleSubmit}>
      <div className="name-input-label"></div>
      <input
        type="text"
        autoFocus
        className="name-input"
        placeholder="Enter your name"
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
