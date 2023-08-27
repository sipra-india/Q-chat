import React from 'react';
import Message from './message';
import pfp from '../../images/pfp3.jpg';
import './message_area.css'

export default function Message_area() {
  return (
    <div className="message-area">
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
        <Message img={pfp} message="Hii!!"/>
    </div>
  )
}
