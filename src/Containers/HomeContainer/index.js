import React from 'react';

import ChatWindow from '../ChatWindow';
import ChatSideNav from '../ChatNavSidebar';

import './Home.css';

export default function HomeContainer() {
    return (
        <div className='home'>
            <div className='content'>
            <ChatSideNav/>
            <ChatWindow />
            </div>
        </div>
    )
}