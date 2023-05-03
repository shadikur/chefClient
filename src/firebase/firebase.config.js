// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.evn.local.FB_apiKey,
  authDomain: process.evn.local.FB_authDomain,
  projectId: process.evn.local.FB_projectId,
  storageBucket: process.evn.local.FB_storageBucket,
  messagingSenderId: process.evn.local.FB_messagingSenderId,
  appId: process.evn.local.FB_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
