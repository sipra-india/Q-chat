import React from 'react';
import './message.css'

export default function Message(prop) {
  return (
    <div className='message'>{prop.message}</div>
  )
}
