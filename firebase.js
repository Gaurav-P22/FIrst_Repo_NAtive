// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwmoT1ctyU4h9Q51dneCn1o_cENg3pBkw",
  authDomain: "login1-323a0.firebaseapp.com",
  projectId: "login1-323a0",
  storageBucket: "login1-323a0.appspot.com",
  messagingSenderId: "1000468797230",
  appId: "1:1000468797230:web:2f56f1b4b241ef48658cbf"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB=getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);