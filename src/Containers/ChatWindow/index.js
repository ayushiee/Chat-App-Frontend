import React, { useState } from "react";

import MessageInput from "../../Components/MessageInput";
import TextComponent from "../../Components/TextComponent";
import TitleBar from "../../Components/TitleBar";
import { getBotReply, makeMessage } from '../../utils';
import Chat from '../../assets/chat.svg';

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
                <div className='noChat'>
                    <img src={Chat} alt='no chats' className='altImage' />
                    <h2>Let's start messaging!</h2>
                </div>
            }
                </div>
        </>
    );
}

export default MainContainer;
