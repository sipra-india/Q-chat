import React from 'react';
import Input from './input';
import './chats.css';
import Message_area from './Message_area';
import Receiver_info from './Receiver_info';

export default function Chat_Area() {
  return (
    <div className='chats'>
      <Receiver_info/>
      <Message_area/>
      <Input/>
    </div>
  )
}
