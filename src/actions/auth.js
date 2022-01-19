import {getAuth, provider, signInWithPopup, signOut} from "../firebase/firebaseConfig";

//Kullanıcı girişi
export const login = () =>{
    const auth = getAuth();
    return signInWithPopup(auth, provider);
}

export const loginAction = (uid) => ({
    type:"LOGIN",
    uid
});

//Kullanıcı çıkışı
export const logout = () =>{
    const auth = getAuth();
    return signOut(auth);
};

export const logoutAction = (uid) => ({
    type:"LOGOUT"
});