import React from 'react';
import './MessageInput.css';

export default function MessageInput() {
    return (
        <div className='msgInputContainer'>
            <input type='text' className='textInput' placeholder='Type a message' />
            <button type='submit' className='sendButton'>Send</button>
        </div>
    )
};