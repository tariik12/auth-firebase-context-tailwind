import React, { createContext, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    const singIN = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

const authInfo ={
    user,
    createUser,
    singIN
}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;