// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.REACT_APP_FB_APIKEY,
  // authDomain: import.meta.env.REACT_APP_FB_AUTHDOMAIN,
  // projectId: import.meta.env.REACT_APP_FB_PROJECTID,
  // storageBucket: import.meta.env.REACT_APP_FB_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.REACT_APP_FB_MESSAGINGSENDERID,
  // appId: import.meta.env.REACT_APP_FB_appId,
  apiKey: "AIzaSyDLvCZjpCQOHak6mfPiO4Mu7wUuMkynz0M",
  authDomain: "thai-chef-e1bc4.firebaseapp.com",
  projectId: "thai-chef-e1bc4",
  storageBucket: "thai-chef-e1bc4.appspot.com",
  messagingSenderId: "518375992516",
  appId: "1:518375992516:web:cea005c0a3f0a568af2d91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
