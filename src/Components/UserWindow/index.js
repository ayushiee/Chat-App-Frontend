import React from 'react';
import './UserWindow.css';

export default function UserWindow(user) {
    const image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    const name='Sam Dean hhhhhhhhhhhhhhhh';
    const status='Busy';

    return (
        <div className='userContainer'>
            <div className='row'>
                <img src={image} className='img' alt='dp' />
               <div className='textContainer'>
                <div className='name'>
                    {name}
                </div>
                <div className='status'>
                    {status}
                </div>
                </div>
            </div>
        </div>
    )
}