import React from 'react';
import './chats.css';
import pfp from '../../images/pfp1.jpg';
import more from '../../images/more.png';
import cam from '../../images/camera.png';
import add from '../../images/add.png';

export default function Chat_Area() {
  return (
    <div className='chats'>
      <div className="chat-info">
        <img src={pfp} alt=''/>
        <span>Name</span>
        <img src={cam}/>
        <img src={add} />
        <img src={more} />
      </div>
    </div>
  )
}
