import React, { useState } from "react";
import "./MessageInput.css";

export default function MessageInput({ onSend }) {
  const [input, setInput] = useState("");

  const onSubmit = () => {
    onSend(input);
    setInput("");
  };

  const onInputChange = ({ target }) => setInput(target.value);

  const onEnter = ({ key }) => {
    if (key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="msgInputContainer">
      <input
        value={input}
        onChange={onInputChange}
        onKeyDown={onEnter}
        type="text"
        className="textInput"
        placeholder="Type a message"
      />
      <button type="submit" onClick={onSubmit} className="sendButton">
        Send
      </button>
    </div>
  );
}
