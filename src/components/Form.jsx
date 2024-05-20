import React, { useState } from "react";
import BadWordsNext from "bad-words-next";
import en from 'bad-words-next/data/en.json'

const badwords = new BadWordsNext({ data: en })

function Form({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let regex = /^[a-zA-Z0-9]{1,11}$/g
    if(regex.test(name) && !badwords.check(name)){
      onSubmit(name); // TODO: should validate name before onSubmit
      setName("");
    }

    
  };

  return ( <>
    
    {badwords.check(name) && <div>No Bad Words!</div>}
    <form className="name-form" onSubmit={handleSubmit}>
      <div className="name-input-label"></div>
      <input
        type="text"
        autoFocus
        className="name-input"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button className="name-form-btn" type="submit">
        Submit
      </button>
    </form></>
  );
}

export default Form;
