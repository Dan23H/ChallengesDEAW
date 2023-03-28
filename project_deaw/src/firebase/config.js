// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9oG-z4ix8HLLYMvgpbLbB8F79PD9carY",
  authDomain: "prueba1-196b8.firebaseapp.com",
  projectId: "prueba1-196b8",
  storageBucket: "prueba1-196b8.appspot.com",
  messagingSenderId: "927988949121",
  appId: "1:927988949121:web:b81dee9806a6e5e4e56d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth}