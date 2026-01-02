
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCTggNT2ZrEZIUWfzMCEcjsAN4U1Jgliz4",
  authDomain: "spotifysongs-79fd5.firebaseapp.com",
  projectId: "spotifysongs-79fd5",
  storageBucket: "spotifysongs-79fd5.appspot.com",
  messagingSenderId: "770479437096",
  appId: "1:770479437096:web:83af54d8d32f0393d30c1d",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// ✅ Auth
export const auth = getAuth(app)

// ✅ Google Provider
export const googleProvider = new GoogleAuthProvider()
