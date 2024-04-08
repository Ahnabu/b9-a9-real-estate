/* eslint-disable react/prop-types */
import { createContext } from "react";


const AuthContext = createContext(null)


const Provider = ({ children }) => {
    const info = {
        'name': 'mofiz'
    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;