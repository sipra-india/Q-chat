import React,{ useState } from 'react';
import './signup.css';
import add from '../images/add_avatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Signup() {

  const [err, SetErr] = useState('')

  async function handleSubmit(e){
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const pfp = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, pfp);

uploadTask.on(  

  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,
      });

      console.log(res)

      await setDoc(doc(db,"users", res.user.uid )),{
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
        password
      }
    });
  }
);



    }catch(err){
      SetErr('Something went wrong')
    }
  }

  return (
        <div className='main'>
            <div className='form-wrapper'>
              <div id='logo'>Q-Chat</div>
              <div className='title'>Sign Up</div>
                <form onSubmit={handleSubmit}>
                    <input required type='text' placeholder='Username'/>
                    <input required type='email' placeholder='E-mail'/>
                    <input required type='password' placeholder='Password'/>
                    <input type='file' id='avatar'/>
                    <label htmlFor='avatar'>
                      <img src={add} />
                      <p>Add a profile picture</p>
                    </label>
                    <button className='sign-up-btn'>Sign Up</button>
                    
                </form>
                <p id='err-message'>{err}</p>
                <p className='login-text'>Already have an account? Login</p>
            </div>
        </div>
  )
}
