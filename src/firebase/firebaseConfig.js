import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, remove, update, onValue, child, get, push, onChildRemoved, onChildAdded} from "firebase/database";
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAuth, signOut} from "firebase/auth"

const firebaseConfig = {
  //Your config.
};

const firebase = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const database = getDatabase(firebase);


export {database as default, provider, signInWithPopup, onAuthStateChanged, getAuth, signOut, firebase}
