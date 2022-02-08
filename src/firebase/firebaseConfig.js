import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAuth, signOut} from "firebase/auth"

const firebaseConfig = {
  //Your config.
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

const provider = new GoogleAuthProvider();

export {database as default, provider, signInWithPopup, onAuthStateChanged, getAuth, signOut, firebase}
