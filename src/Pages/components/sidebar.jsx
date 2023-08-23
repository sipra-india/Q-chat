import React from 'react';
import './sidebar.css';
import UserInfo from './UserInfo';
import Search from './search';
import User from './user';

export default function Sidebar() {
  return (
    <div className='main'>
      <UserInfo/>
      <Search/>
      <User/>
    </div>
  )
}
