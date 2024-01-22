// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmajOnPHLCFvU_Uc9jD_uR0G2b7okrFaw",
  authDomain: "disneyplus-clonereal.firebaseapp.com",
  projectId: "disneyplus-clonereal",
  storageBucket: "disneyplus-clonereal.appspot.com",
  messagingSenderId: "729448603097",
  appId: "1:729448603097:web:536d9a992ad73af283cdc8",
  measurementId: "G-97KG0EJCTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export{auth, provider, storage}
export default db;


