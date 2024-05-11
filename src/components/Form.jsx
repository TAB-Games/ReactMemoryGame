import React, { useState } from "react";

function Form({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name); // TODO: should validate name before onSubmit
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
