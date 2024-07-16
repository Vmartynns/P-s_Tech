// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const cong = initializeApp(firebaseConfig);

export default cong;