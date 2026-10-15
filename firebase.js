// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gaurav-ai-525af.firebaseapp.com",
  projectId: "gaurav-ai-525af",
  storageBucket: "gaurav-ai-525af.firebasestorage.app",
  messagingSenderId: "885136943132",
  appId: "1:885136943132:web:71fdb9a358d4f89e7d17d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}