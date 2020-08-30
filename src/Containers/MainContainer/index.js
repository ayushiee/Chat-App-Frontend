import React, {useState} from "react";

import MessageInput from "../../Components/MessageInput";
import TextComponent from "../../Components/TextComponent";
import TitleBar from "../../Components/TitleBar";

import "./MainContainer.css";

const makeMessage  = (userId, content) => ({userId, content});

const getBotReply = message => {
  const botId = 'bot-user';
  let content = 'I do not know what to say';

  if (message.includes('hello')) {
    content = 'well, hello there'
  }

  return makeMessage(botId, content);
}

function MainContainer() {
  const user = {
    id: 'user-me'
  };

  const [messages, setMessages] = useState([]);

  const onSend = content => {
    const message = makeMessage(user.id, content);
    const botMessage = getBotReply(content);

    setMessages(messages => {
      const updatedMessages = [...messages];
      updatedMessages.push(message)
      updatedMessages.push(botMessage);
      console.log(updatedMessages);
      return updatedMessages;
    });
  };

  const renderMessages = () => messages.map((message, index) => {
      const { userId, content } = message;
      const isMe = userId === user.id;

      return <TextComponent key={index} text={content} isMe={isMe} />
    })

  return (
    <div className="mainContainer">
      <div className="chatWindow">
        <TitleBar />
        <div className="texts">
          {renderMessages()}
        </div>
        <div className="inputTexts">
          <MessageInput onSend={onSend} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
