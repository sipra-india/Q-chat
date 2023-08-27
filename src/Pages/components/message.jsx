import React from 'react';
import './message.css'

export default function Message(props) {
  return (
    <div className='message'>
      <div className="extra">
      <div className="sender">
            <img id='profile' src={props.img}/>
        </div>
        <div className="content">
        {props.message}
        </div>
        </div>        
    </div>
  )
}
