// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqqpruz32yPTqgsGwqNngDRB8Om5zfWu4",
  authDomain: "clone-9ff24.firebaseapp.com",
  projectId: "clone-9ff24",
  storageBucket: "clone-9ff24.appspot.com",
  messagingSenderId: "1032432816615",
  appId: "1:1032432816615:web:e0b1a4023349869eb26d42",
  measurementId: "G-2WBMYMF772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};