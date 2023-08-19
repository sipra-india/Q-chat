import React from 'react';
import './signup.css';

export default function Login() {
  return (
        <div className='main-container'>
            <div className='form-wrapper'>
              <div className='logo'>Q-Chat</div>
              <div className='title'>Login</div>
                <form>
                    <input type='email' placeholder='E-mail'/>
                    <input type='password' placeholder='Password'/>
                    <button className='sign-up-btn'>Login</button>
                    
                </form>
                <p className='login-text'>Don't have an account? Sign up</p>
            </div>
        </div>
  )
}
