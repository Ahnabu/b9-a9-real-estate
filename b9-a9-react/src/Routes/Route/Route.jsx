import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Slider from "../../Pages/Header/Slider/Slider";
import UpdateProfile from "../../Pages/Profile/UpdateProfile/UpdateProfile";
import UserProfile from "../../Pages/Profile/UserProfile/UserProfile";
import Error from "../../Error/Error";
import LogIn from "../../Pages/ManageUser/LogIn/LogIn";
import Register from "../../Pages/ManageUser/Register/Register";
import Cards from "../../Components/Cards/Cards";
import CardDetails from "../../Components/Cards/Card/CardDetails/CardDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Slider></Slider>,
                loader: () => fetch('../data.json')
            },
            {
                path: "/",
                element: <Cards></Cards>,
                
            },
            {
                path: "/update-profile",
                element:<PrivetRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivetRoute>
                    ,
            },
            {
                path: "/user-profile",
                element:<PrivetRoute>
                    <UserProfile></UserProfile>
                </PrivetRoute>
                    ,
            },
            {
                path: "/login",
                element:<LogIn></LogIn>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/card-details/:id",
                element:<PrivetRoute>
                    <CardDetails></CardDetails>
                </PrivetRoute> ,
            },
          
        ]
    },
]);