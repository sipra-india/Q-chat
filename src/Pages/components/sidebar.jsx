import React from 'react';
import './sidebar.css';
import UserInfo from './UserInfo';
import Search from './search';

export default function Sidebar() {
  return (
    <div className='main'>
      <UserInfo/>
      <Search/>
    </div>
  )
}
