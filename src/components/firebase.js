
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTggNT2ZrEZIUWfzMCEcjsAN4U1Jgliz4",
  authDomain: "spotifysongs-79fd5.firebaseapp.com",
  projectId: "spotifysongs-79fd5",
  storageBucket: "spotifysongs-79fd5.firebasestorage.app",
  messagingSenderId: "770479437096",
  appId: "1:770479437096:web:83af54d8d32f0393d30c1d",
  measurementId: "G-4ZMP05FWDX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);