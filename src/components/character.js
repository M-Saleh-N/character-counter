import React, { useState } from "react";
import "./character.css";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div className="counter-container">
      <h1>📝 Character Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Characters: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;
