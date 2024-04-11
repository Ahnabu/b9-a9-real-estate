import { useContext } from "react";
import { AuthContext } from "../../Providers/Provider";
import { useLocation, Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    if (!user) {
        <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
        
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRoute;