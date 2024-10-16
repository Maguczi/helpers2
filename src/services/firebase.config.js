// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrxlPe7sC5Ex_gciiWedFLMvucueKDk84",
  authDomain: "helpers2-e72b4.firebaseapp.com",
  projectId: "helpers2-e72b4",
  storageBucket: "helpers2-e72b4.appspot.com",
  messagingSenderId: "1046544065122",
  appId: "1:1046544065122:web:8616b5b8bb5ed40ebde73b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
