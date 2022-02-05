import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAuth, signOut} from "firebase/auth"

const firebaseConfig = {
  //Your config.
};

const firebase = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const database = getDatabase(firebase);


export {database as default, provider, signInWithPopup, onAuthStateChanged, getAuth, signOut, firebase}
