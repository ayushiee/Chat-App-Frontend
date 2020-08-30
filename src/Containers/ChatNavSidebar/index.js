import React from 'react';
import UserWindow from '../../Components/UserWindow';
import './ChatSideNav.css';

export default function SideNav() {
    const image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    const count = [1, 2, 3, 4, 5];
    return (
        <div className='userList'>
            <div className='myUser'>
                <img src={image} alt='dp' className='dp' />
            </div>
            {count.map((_, index) => <UserWindow />)}
        </div>
    )
}