// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-413ba.firebaseapp.com",
  projectId: "blog-413ba",
  storageBucket: "blog-413ba.appspot.com",
  messagingSenderId: "689915179618",
  appId: "1:689915179618:web:3a495717e51a2d8ac0973b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
