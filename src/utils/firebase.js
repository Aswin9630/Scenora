// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfx0q16KQ23KUTmDQ8StdwyLa99Qd5l4Q",
  authDomain: "scenora-4cafc.firebaseapp.com",
  projectId: "scenora-4cafc",
  storageBucket: "scenora-4cafc.firebasestorage.app",
  messagingSenderId: "27683647460",
  appId: "1:27683647460:web:1b5d9a13bde2544d1061f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();