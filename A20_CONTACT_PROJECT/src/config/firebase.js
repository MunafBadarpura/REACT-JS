// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4thVcG22CPZVrQxdpyv058pYJtymnAc0",
  authDomain: "contact-vite-39268.firebaseapp.com",
  projectId: "contact-vite-39268",
  storageBucket: "contact-vite-39268.appspot.com",
  messagingSenderId: "159080497979",
  appId: "1:159080497979:web:02b4ea0a17cd6e40fc6d1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);