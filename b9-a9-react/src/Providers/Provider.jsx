/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null)




const Provider = ({ children }) => {
   
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const EmailSingIn = (email, password) => {
        setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
    }
    const provider = new GoogleAuthProvider();
    const googleSingIn = () => {
        setLoading(true);
        return signInWithPopup( auth,provider)
    }

    const gitProvider = new GithubAuthProvider();

    const githubSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider)
    }
  
    const LogInEmail = async (email, password) => {
        try {
            setLoading(true);
            const result = await signInWithEmailAndPassword(email, password);
            setUser(result.user);
        } catch (error) {
            return console.log(error);
        }
    }
    const ProfileUpdate = (name, photoURL) => {
        
        return updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: `${photoURL}`
        })
            // .then(result => console.log(result.user))
            // .catch((error)=>{console.log(error)} );
    }
    const LogOut = () => {
        signOut(auth)
            .then(setUser(null))
        .catch(error=>console.log(error))
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('on auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unSubscribe()
        }
    }, []);
    

    const info = {
        user,
   
        EmailSingIn,
        googleSingIn,
        githubSingIn,
        LogOut,
        LogInEmail,
        ProfileUpdate,
        loading

    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;