// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Pb3DvOt6GUyzfmdk5WOajUZ2jT3ORbA",
  authDomain: "air-nomad-tours.firebaseapp.com",
  projectId: "air-nomad-tours",
  storageBucket: "air-nomad-tours.appspot.com",
  messagingSenderId: "340875400453",
  appId: "1:340875400453:web:44e0d1338bc9ac0457136c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
