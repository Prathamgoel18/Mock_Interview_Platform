// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBKQXaI8BgYtei2eedBg7t8SDUYMBP-og",
  authDomain: "prepwise-ba5d0.firebaseapp.com",
  projectId: "prepwise-ba5d0",
  storageBucket: "prepwise-ba5d0.firebasestorage.app",
  messagingSenderId: "589773109021",
  appId: "1:589773109021:web:1f8364d5811052e89cd3f4",
  measurementId: "G-RVF3ZBT26F"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);