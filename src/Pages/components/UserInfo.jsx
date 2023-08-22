import React from 'react';
import './UserInfo.css'

export default function UserInfo() {
  return (
    <div>
        <div className="headline">
          <div className="logo">Q Chat</div>
          <div className="user">
            <div id="name">Username</div>
            <button className='logout'>Logout</button>
          </div>
      </div>
    </div>
  )
}
