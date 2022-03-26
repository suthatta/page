// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2hDR-MVet0nhfj8OiH24UVvfzlJ1L4kU",
  authDomain: "projects-1d9ae.firebaseapp.com",
  databaseURL: "https://projects-1d9ae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projects-1d9ae",
  storageBucket: "projects-1d9ae.appspot.com",
  messagingSenderId: "616891684697",
  appId: "1:616891684697:web:1890395f81e7f03bd0de48",
  measurementId: "G-YBDT0B6VHR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);