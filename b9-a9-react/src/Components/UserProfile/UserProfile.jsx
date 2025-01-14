
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/Provider";
import React from "react";
import {
    Drawer,
    Button,
   
} from "@material-tailwind/react";
import toast, { Toaster } from 'react-hot-toast';
import { FaCircleUser } from "react-icons/fa6";

import { Link } from "react-router-dom";
const UserProfile = () => {
    const { LogOut,user } = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
    const [hoverText, setHoverText] = useState('');

    const handleMouseOver = (text) => {
        setHoverText(text);
    };

    const handleMouseLeave = () => {
        setHoverText('');
    };
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const handleLogOut = () => {
        LogOut();
        toast.success("Logged out successfully");
    };
    return (
        <div>
            <React.Fragment>
                <div className="flex">
                <Button onClick={openDrawer} className={`w-12 h-12 rounded-full  dark:bg-gray-500 p-1 `} onMouseOver={() => handleMouseOver(`${user.displayName}`)} onMouseLeave={handleMouseLeave}>
                    
                    {user?.photoURL ?  <div className="w-12 h-12 rounded-full bg-cover -mt-[5px] -ml-[5px] " style={{ backgroundImage: `url(${user.photoURL})` }} ></div> : <FaCircleUser className="text-5xl -mt-[5.5px] -ml-[5px]" />}
                    
                    </Button>
                    {hoverText && <span style={{ position: 'absolute', backgroundColor: 'lightgray', padding: '5px' }}>{hoverText}</span>}
                    <Button onClick={handleLogOut} className="ml-4 hidden md:block">Log Out</Button>
                </div>
                <Toaster
                    position="top-right" />
                <Drawer open={open} onClose={closeDrawer} className={`p-4 bg-gray-400 w-full ${open ? 'block' : 'hidden'}`}>
                    <div className="h-full p-3 space-y-2 w-60 bg-white dark:text-gray-800  ">
                        <div className="flex items-center p-2 space-x-4">

                            <div className="flex">
                                <h2 className="text-lg font-semibold  mr-3">{user.displayName}</h2>
                                <span className="flex items-center space-x-1 mr-3 ">
                                    {user?.photoURL ? <div className="w-12 h-12 rounded-full items-center bg-cover -mt-[14px]" style={{ backgroundImage: `url(${user.photoURL})` }} ></div> : <FaCircleUser className="text-5xl -mt-[14px] " />}
                                </span>
                            </div>
                        </div>
                        <ul role="menu" data-popover="profile-menu" data-popover-placement="bottom"
                            className="absolute z-10 flex min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
                            <button role="menuitem"
                                className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0H2ZM2 2H12V9H10L9 11H5L4 9H2V2Z"
                                        fill="#90A4AE"></path>
                                </svg>
                                <p className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
                                    {user.email}
                                </p>
                            </button>
                            <button role="menuitem"
                                className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M9.48999 1.17C9.10999 -0.39 6.88999 -0.39 6.50999 1.17C6.45326 1.40442 6.34198 1.62213 6.18522 1.80541C6.02845 1.9887 5.83063 2.13238 5.60784 2.22477C5.38505 2.31716 5.1436 2.35564 4.90313 2.33709C4.66266 2.31854 4.42997 2.24347 4.22399 2.118C2.85199 1.282 1.28199 2.852 2.11799 4.224C2.65799 5.11 2.17899 6.266 1.17099 6.511C-0.390006 6.89 -0.390006 9.111 1.17099 9.489C1.40547 9.54581 1.62322 9.65719 1.80651 9.81407C1.98979 9.97096 2.13343 10.1689 2.22573 10.3918C2.31803 10.6147 2.35639 10.8563 2.33766 11.0968C2.31894 11.3373 2.24367 11.5701 2.11799 11.776C1.28199 13.148 2.85199 14.718 4.22399 13.882C4.42993 13.7563 4.66265 13.6811 4.90318 13.6623C5.14371 13.6436 5.38527 13.682 5.60817 13.7743C5.83108 13.8666 6.02904 14.0102 6.18592 14.1935C6.34281 14.3768 6.45419 14.5945 6.51099 14.829C6.88999 16.39 9.11099 16.39 9.48899 14.829C9.54599 14.5946 9.65748 14.377 9.8144 14.1939C9.97132 14.0107 10.1692 13.8672 10.3921 13.7749C10.6149 13.6826 10.8564 13.6442 11.0969 13.6628C11.3373 13.6815 11.57 13.7565 11.776 13.882C13.148 14.718 14.718 13.148 13.882 11.776C13.7565 11.57 13.6815 11.3373 13.6628 11.0969C13.6442 10.8564 13.6826 10.6149 13.7749 10.3921C13.8672 10.1692 14.0107 9.97133 14.1939 9.81441C14.377 9.65749 14.5946 9.546 14.829 9.489C16.39 9.11 16.39 6.889 14.829 6.511C14.5945 6.45419 14.3768 6.34281 14.1935 6.18593C14.0102 6.02904 13.8666 5.83109 13.7743 5.60818C13.682 5.38527 13.6436 5.14372 13.6623 4.90318C13.681 4.66265 13.7563 4.42994 13.882 4.224C14.718 2.852 13.148 1.282 11.776 2.118C11.5701 2.24368 11.3373 2.31895 11.0968 2.33767C10.8563 2.35639 10.6147 2.31804 10.3918 2.22574C10.1689 2.13344 9.97095 1.9898 9.81407 1.80651C9.65718 1.62323 9.5458 1.40548 9.48899 1.171L9.48999 1.17ZM7.99999 11C8.79564 11 9.55871 10.6839 10.1213 10.1213C10.6839 9.55871 11 8.79565 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79564 5 7.99999 5C7.20434 5 6.44128 5.31607 5.87867 5.87868C5.31606 6.44129 4.99999 7.20435 4.99999 8C4.99999 8.79565 5.31606 9.55871 5.87867 10.1213C6.44128 10.6839 7.20434 11 7.99999 11Z"
                                        fill="#90A4AE"></path>
                                </svg>
                                <Link to={'/update-profile'} className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
                                    Edit Profile
                                </Link>
                            </button>
                            
                        
                            <hr className="my-2 border-blue-gray-50" role="menuitem" />
                            <button role="menuitem"
                                className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900" onClick={LogOut}>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                                        fill="#90A4AE"></path>
                                </svg>
                                <p className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
                                    Sign Out
                                </p>
                            </button>
                        </ul>
                    </div>
                </Drawer>
            </React.Fragment>
            
            
        </div>
    );
};

export default UserProfile;