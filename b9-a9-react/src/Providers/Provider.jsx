/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)




const Provider = ({ children }) => {
   
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     fetch('../data.json')
    //        .then(res => res.json())
    //        .then(data => {
                
    //             setData(data);
    //             setLoading(false);
    //         })
    // },[])
    const EmailSingIn =(email, password) => {
      
     
            return createUserWithEmailAndPassword(auth, email, password);
           
           
        
    }
    const provider = new GoogleAuthProvider();
    const googleSingIn = () => {
        return signInWithPopup( auth,provider)
    }

    const gitProvider = new GithubAuthProvider();

    const githubSingIn = () => {
        return signInWithPopup(auth, gitProvider)
    }

   
  
    const LogInEmail = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(email, password);
            setUser(result.user);
        } catch (error) {
            return console.log(error);
        }
    }
    const LogOut = () => {
        signOut(auth)
            .then(setUser(null))
        .catch(error=>console.log(error))
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('on auth state changed', currentUser);
            setUser(currentUser)

        })
        return () => {
            unSubscribe()
        }
    })
console.log(user);
    const info = {
        user,
   
        EmailSingIn,
        googleSingIn,
        githubSingIn,
        
        LogOut,
     
        LogInEmail,
    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;