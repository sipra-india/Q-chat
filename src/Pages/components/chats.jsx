import React from 'react';
import Input from './input';
import './chats.css';
import Message from './message';
import more from '../../images/more.png';
import cam from '../../images/camera.png';
import pfp from '../../images/pfp3.jpg'
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
      <div className="messages">
        <Message  message="Hi!!" img={pfp}/>
        <Message message="How are you?" img={pfp}/>
      </div>
      <div className="input">
        <Input/>
      </div>
    </div>
  )
}
