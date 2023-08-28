import React from 'react';
import './message.css'

export default function Message(props) {
  return (
    <div className='message'>
      <div className="extra get">
        <div className="sender">
              <img id='profile' src={props.img}/>
        </div>
        <div className="content">
          <div>{props.message}</div>
          <img id='sent-img' src={props.src}/>
        </div>
        
      </div>        
    </div>
  )
}
