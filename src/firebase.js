// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace this with your Firebase config
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDpaGZfSkBqskb2yjNi4GJ3ZkjIfM8XwO0",
  authDomain: "reactimageapp.firebaseapp.com",
  projectId: "reactimageapp",
  storageBucket: "reactimageapp.firebasestorage.app",
  messagingSenderId: "581277289975",
  appId: "1:581277289975:web:da38d30529c46a77d372f2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
