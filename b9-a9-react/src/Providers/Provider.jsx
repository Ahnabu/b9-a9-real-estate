/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";


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
    const EmailSingIn = (email,password) => {
        return createUserWithEmailAndPassword( auth,email,password)
    }
    const provider = new GoogleAuthProvider();
    const GoogleSingIn = () => {
        return signInWithPopup( auth,provider)
    }

    const gitProvider = new GithubAuthProvider();

    const GitHubSingIn = () => {
        return signInWithPopup(auth, gitProvider)
    }
    const User = signInMethod => {
        signInMethod()
            .then(result => setUser(result.user))
        .catch(error=>console.log(error))
    }

    const info = {
        user,
   
        EmailSingIn,
        GoogleSingIn,
        GitHubSingIn,
        User

    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;