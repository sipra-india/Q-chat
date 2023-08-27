import React from 'react';
import more from '../../images/more.png';
import cam from '../../images/camera.png';
import add from '../../images/add.png';
import './receiver_info.css'

export default function Receiver_info() {
  return (
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
  )
}
