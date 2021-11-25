// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuFdvMYWbkp8Mt93cSGthb0IUBaR5EE3A",
  authDomain: "week4-e3bb7.firebaseapp.com",
  projectId: "week4-e3bb7",
  storageBucket: "week4-e3bb7.appspot.com",
  messagingSenderId: "404432330526",
  appId: "1:404432330526:web:69f2f29a65e9d9e271b30f",
  measurementId: "G-QXYF8XXNX1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
