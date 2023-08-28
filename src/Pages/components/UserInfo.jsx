import React from 'react';
import './UserInfo.css';
import pfp from '../../images/pfp3.jpg'

export default function UserInfo() {
  return (
    <div>
        <div className="headline">
          <div className="logo">Q Chat</div>
          <div className="user">
            <div id="pfp">
            <img id='pfp' src={pfp} ></img>
            </div>
            <div>
            <div id="name">Username</div>
            <button className='logout'>Logout</button>
            </div>
          </div>
      </div>
    </div>
  )
}
