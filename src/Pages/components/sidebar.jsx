import React from 'react';
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='main'>
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
