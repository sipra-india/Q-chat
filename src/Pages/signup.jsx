import React from 'react';
import './signup.css';
import add from '../images/add_avatar.png'

export default function Signup() {
  return (
        <div className='main-container'>
            <div className='form-wrapper'>
              <div className='logo'>Q-Chat</div>
              <div className='title'>Sign Up</div>
                <form>
                    <input type='text' placeholder='Username'/>
                    <input type='email' placeholder='E-mail'/>
                    <input type='password' placeholder='Password'/>
                    <input type='file' id='avatar'/>
                    <label htmlFor='avatar'>
                      <img src={add} />
                      <p>Add a profile picture</p>
                    </label>
                    <button className='sign-up-btn'>Sign Up</button>
                    
                </form>
                <p className='login-text'>Already have an account? Login</p>
            </div>
        </div>
  )
}
