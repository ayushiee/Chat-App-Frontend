import React from 'react';
import './TitleBar.css';

export default function TitleBar() {
    const image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    const name='Sam Dean hhhhhhhhhhhhhhhh';
   
    return (
        <div className='container'>
            <img src={image} className='profileIcon' alt='user-dp' />
            <div className='username'>{name}</div>
        </div>
    )
};