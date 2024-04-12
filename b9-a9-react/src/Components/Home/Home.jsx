import { StickyNavbar } from "../../Pages/Header/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";
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
            <Footer></Footer>
        </div>
    );
};

export default Home;