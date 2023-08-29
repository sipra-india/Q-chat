import React from 'react';
import './signup.css';
import add from '../images/add_avatar.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

export default function Signup() {

  function handleSubmit(e){
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


  }

  return (
        <div className='main-container'>
            <div className='form-wrapper'>
              <div id='logo'>Q-Chat</div>
              <div className='title'>Sign Up</div>
                <form onSubmit={handleSubmit}>
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
