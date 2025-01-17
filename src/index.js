import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // Import global styles
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgAJ2fKq1RCGq_lNOUfui5P31_N2qoqq8",
  authDomain: "tech-challenge-848de.firebaseapp.com",
  databaseURL: "https://tech-challenge-848de-default-rtdb.firebaseio.com",
  projectId: "tech-challenge-848de",
  storageBucket: "tech-challenge-848de.appspot.com",
  messagingSenderId: "922382286728",
  appId: "1:922382286728:web:122defa1ef40d0e3b5443d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
