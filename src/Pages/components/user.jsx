import React from 'react';
import pfp from '../../images/pfp1.jpg';
import './user.css';

export default function User() {
  return (
    <div className='chat'>
        <img id='img' src={pfp} alt=''/>
        <div className='info'>
            <span>name</span>
            <span>last message</span>
        </div>
    </div>
  )
}
