import React from 'react';
import './home.css';
import Sidebar from './components/sidebar';
import Chat_Area from './components/chats';

export default function Home() {
  return (
    <div className='home'>
        <div className='container'>
          <Sidebar className="hide" />
          <Chat_Area/>
        </div>
    </div>
  )
}
