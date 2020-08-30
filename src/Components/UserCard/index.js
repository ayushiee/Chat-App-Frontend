import React from 'react';
import {BsDot} from 'react-icons/bs';

import './UserCard.css';

export default function UserCard({user, onUserSelect}) {
    const status='Busy';
    const {name, avatar, day} = user;

    return (
        <div className='userContainer' onClick={() => onUserSelect(user)}>
            <div className='row'>
                <img src={avatar} className='img' alt='dp' />
               <div className='textContainer'>
                <div className='name'>
                    {name}
                </div>
                <div className='status'>
                    {status} <BsDot size={20} /> Last seen on {day}
                </div>
                </div>
            </div>
        </div>
    )
}