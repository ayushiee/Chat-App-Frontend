import React from 'react';
import './MainContainer.css';
import MessageInput from '../../Components/MessageInput';

function MainContainer() {

    return (
        <div className='mainContainer'>
            hello
            <div className='chatWindow'>
                <div className='profileIcon'>
                    oh
                </div>
                <div className='senderChatBubble'>
                    hello
                </div>
                <div className='receiverChatBubble'>
                    hello
                </div>
                <MessageInput />
            </div>
        </div>
    )
}

export default MainContainer;