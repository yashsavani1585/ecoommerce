// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-bScnUis6eOJ2n_z1RQf3aou49sEyfBY",
  authDomain: "myecom-c1028.firebaseapp.com",
  projectId: "myecom-c1028",
  storageBucket: "myecom-c1028.appspot.com",
  messagingSenderId: "170298162208",
  appId: "1:170298162208:web:4c4b232d8f3ed1cf851045"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };