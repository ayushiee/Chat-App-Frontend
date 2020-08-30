import React from 'react';
import { IoIosCall, IoIosVideocam } from 'react-icons/io';

import './TitleBar.css';

export default function TitleBar({ currentUser }) {
    const { avatar, name } = currentUser;

    return (
        <div className='container'>
            <div className='userInfo'>
                <img src={avatar} className='profileIcon' alt='user-dp' />
                <div className='username'>{name}</div>
            </div>
            <div className='actions'>
                <IoIosVideocam size={25} color='#191970' className='icon' />
                <IoIosCall size={25} color='#191970' />
            </div>
        </div>
    )
};