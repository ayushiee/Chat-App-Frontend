import React, { useState, useEffect } from "react";

import MessageInput from "../../Components/MessageInput";
import TextComponent from "../../Components/TextComponent";
import TitleBar from "../../Components/TitleBar";
import { generateUsers, getBotReply, makeMessage } from '../../utils';

import "./ChatWindow.css";

function MainContainer({ currentUser }) {

    const [messages, setMessages] = useState([]);

    const onSend = (content) => {
        const { userId } = currentUser;
        const message = makeMessage(userId, content);
        const botMessage = getBotReply(content);

        setMessages((messages) => {
            const updatedMessages = [...messages];
            updatedMessages.push(message);
            updatedMessages.push(botMessage);
            console.log(updatedMessages);
            return updatedMessages;
        });
    };

    const renderMessages = () =>
        messages.map((message, index) => {
            const { userId, content } = message;
            const isMe = userId === currentUser.userId;

            return <TextComponent key={index} text={content} isMe={isMe} />;
        });

    return (
        <>
                <div className="chatWindow">
            {currentUser ?
            <>
                    <TitleBar currentUser={currentUser} />
                    <div className="texts">{renderMessages()}</div>
                    <div className="inputTexts">
                        <MessageInput onSend={onSend} />
                    </div>
                    </>
                :
                <div>Start texting</div>
            }
                </div>
        </>
    );
}

export default MainContainer;
