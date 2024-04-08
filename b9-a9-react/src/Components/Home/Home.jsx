import { StickyNavbar } from "../../Pages/Header/Navbar/Navbar";
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className="mx-auto">
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;