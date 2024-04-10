/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";


const AuthContext = createContext(null)




const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('../data.json')
           .then(res => res.json())
           .then(data => {
                
                setData(data);
                setLoading(false);
            })
    },[])
    
    const info = {
        user,
        loading,
        data
    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;