import React, { createContext, useEffect, useState } from 'react';
import app from '../../config/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    

    const createUser =(email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    const userLogin = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle =()=>{
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithGithub =()=>{
        setLoader(true);
        return signInWithPopup(auth, githubProvider);
    }

    const varifyUser =()=>{
        setLoader(true);
        return sendEmailVerification(auth.currentUser);
    }

    const userLogout =()=>{
        setLoader(true);
        return signOut(auth);
    }

    
    useEffect(()=>{
        const subcription = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser === null || currentUser.emailVerified){

                setUser(currentUser);
            }
            
            setLoader(false);

        });
        return()=>{
            subcription();
        }
    },[])

    const authInfo ={
        user,
        loader,
        setLoader, 
        createUser,
        userLogin,
        loginWithGoogle,
        loginWithGithub,
        userLogout,
        varifyUser,
    
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;