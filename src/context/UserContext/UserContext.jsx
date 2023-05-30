import React, { createContext, useEffect, useState } from 'react';
import app from '../../config/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithGithub =()=>{
        return signInWithPopup(auth, githubProvider);
    }

    const userLogout =()=>{
        return signOut(auth);
    }

    
    useEffect(()=>{
        const subcription = onAuthStateChanged(auth, (curretUser)=>{
            setUser(curretUser)

        });
        return()=>{
            subcription();
        }
    },[])

    const authInfo ={
        user, 
        createUser,
        userLogin,
        loginWithGoogle,
        loginWithGithub,
        userLogout,
    
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;