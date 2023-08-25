import React from 'react';
import './Input.css';
import add from '../../images/add_avatar.png';
import attach from '../../images/attach_file.png';
import send from '../../images/send.png';


export default function Input() {
  return (
    <div className='input'>
        <div className="enter">
        <input placeholder="Write something..." />
        </div>
        <div className="send-option">
        <img src={add} alt='' className='image' />
        <input id='file' type='file' style={{display:'none'}} />
        <label htmlFor='file'>
            <img className='image tilt' src={attach} />
        </label>
        <button id='send'>
        <img id='btn' src={send}/>
        </button>
        </div>
    </div>
  )
}
