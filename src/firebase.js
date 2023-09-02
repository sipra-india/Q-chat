// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV-DWDbolHE5o4uYEZYAv4W-TukXZyNpY",
  authDomain: "q-chat-95881.firebaseapp.com",
  projectId: "q-chat-95881",
  storageBucket: "q-chat-95881.appspot.com",
  messagingSenderId: "915642199933",
  appId: "1:915642199933:web:5f3611292a600eee4be614",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
