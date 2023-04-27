// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjzbakJVFt2y2iidPuoqNoPa7B1wTSGrw",
  authDomain: "emajon-with-firebase-fe6d0.firebaseapp.com",
  projectId: "emajon-with-firebase-fe6d0",
  storageBucket: "emajon-with-firebase-fe6d0.appspot.com",
  messagingSenderId: "615211758460",
  appId: "1:615211758460:web:a668115eecf6283f736af9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;