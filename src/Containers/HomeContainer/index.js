import React, { useState } from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {MdRefresh} from 'react-icons/md';

import { generateUsers } from '../../utils';
import UserWindow from '../../Components/UserCard';
import ChatWindow from '../ChatWindow';

import './Home.css';

export default function HomeContainer() {
    const users = generateUsers(4);
    const [userlist] = useState(users);
    const [currentUser, setCurrentUser] = useState(null);

    const onUserSelect = (user) => {
        setCurrentUser(user);
    }

    return (
        <div className='home'>
            <div className='content'>
                <div className='userList'>
                    <div className='myUser'>
                        <h2>Messages</h2>
                        <div className='iconsRow'>
                        <MdRefresh size={24} color='#191970' className='icon' />
                        <BsThreeDotsVertical size={20} color='#191970' className='icon' />
                        </div>
                    </div>
                    {userlist.map((user, index) => <UserWindow key={index} user={user} onUserSelect={onUserSelect} />)}
                </div>
                <ChatWindow currentUser={currentUser} />
            </div>
        </div>
    )
}