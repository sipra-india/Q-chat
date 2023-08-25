import React from 'react';
import './chats.css';
import more from '../../images/more.png';
import cam from '../../images/camera.png';
import add from '../../images/add.png';

export default function Chat_Area() {
  return (
    <div className='chats'>
      <div className="chat-info">
        <div id="username">
        <span id='name'>Name</span>
        </div>
        <div id="options">
        <img className='img' src={cam}/>
        <img className='img' src={add} />
        <img className='img' src={more} />
        </div>
      </div>
    </div>
  )
}
