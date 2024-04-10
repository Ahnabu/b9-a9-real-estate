import { StickyNavbar } from "../../Pages/Header/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <div className="mx-auto">
            <Helmet> 
                <title>
                    Dwell-well || Home
                </title>
                
            </Helmet>
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;