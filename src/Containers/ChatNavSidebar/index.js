import React from 'react';
import UserWindow from '../../Components/UserWindow';
import './ChatSideNav.css';

export default function SideNav() {
    const count = [1, 2, 3, 4, 5];
    return (
        <div className='userList'>
            {count.map((_, index) => <UserWindow />)}
        </div>
    )
}