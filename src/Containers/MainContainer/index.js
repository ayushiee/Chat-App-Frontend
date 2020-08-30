import React from "react";

import MessageInput from "../../Components/MessageInput";
import TextComponent from "../../Components/TextComponent";
import TitleBar from "../../Components/TitleBar";

import "./MainContainer.css";

function MainContainer() {
  return (
    <div className="mainContainer">
      <div className="chatWindow">
        <TitleBar />
        <div className="texts">
          <TextComponent text="helloooo" isMe />
          <TextComponent text="helloooo" isMe={false} />
          <TextComponent text="helloooo" isMe />
        </div>
        <div className="inputTexts">
          <MessageInput />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
