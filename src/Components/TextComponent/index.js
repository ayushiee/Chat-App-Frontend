import React from 'react';
import './TextComponent.css';

export default function MessageInput({text, isMe}) {

    return (
    <div className={isMe?'senderChatBubble': 'receiverChatBubble'}>
        {text}
    </div>
    
    )
};