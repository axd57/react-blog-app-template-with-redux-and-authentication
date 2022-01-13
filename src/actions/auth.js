import {getAuth, provider, signInWithPopup, signOut} from "../firebase/firebaseConfig";

export const login = () =>{
    const auth = getAuth();
    return signInWithPopup(auth, provider);
}

export const logout = () =>{
    const auth = getAuth();
    return signOut(auth);
}