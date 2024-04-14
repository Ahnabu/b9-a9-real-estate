/* eslint-disable react/prop-types */
import {

    Button,
    IconButton,
    Typography
} from "@material-tailwind/react";
import { FaMapSigns } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Provider";

// ..
AOS.init();
const SingleCard = ({ card }) => {
    const { location, area, status, price, description, segment_name, estate_title, image, id } = card;

    const isEven = (id) => {

        return id % 2 == 0


    }
    //    console.log(isEven);
    const { wishList } = useContext(AuthContext);
    const handleWishList = (id) => {
        wishList(id)
    }

    return (


        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
            <Helmet>
                <title>Dwell-well || Cards</title>
            </Helmet>
            <div className="container mx-auto space-y-12">
                <div className={`flex flex-col overflow-hidden rounded-md shadow-sm  ${isEven(id) ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                    data-aos="fade-up"
                    data-aos-anchor-placement={`${isEven(id) ? 'bottom-bottom' : 'center-bottom'}`}
                    data-aos-easing="ease-in-back"
                >
                    <img src={image} alt="" className="h-80 dark:bg-gray-500 aspect-video group relative overflow-hidden hover:transition duration-300 ease-in-out hover:scale-105 lg:w-1/2" />
                   
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        <div className="md:flex justify-between">
                            <h3 className="text-3xl font-bold flex animate__animated animate__bounce animate__delay-2s"><FaMapSigns className="mr-1 mt-1" /> {estate_title}</h3>
                            <div className="flex flex-col">
                                <IconButton
                                    size="sm"

                                    variant="text"
                                    className="relative md:right-2 rounded-full"
                                    onClick={() => { handleWishList(id) }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 "
                                        color="red"
                                    >
                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                    
                                </IconButton>
                                <span className="relative md:right-6 ">Add to favorite</span>
                            </div>
                            
                              
                        </div>
                        
                        <div className="mt-4 md:mt-6 flex  flex-wrap "


                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-offset="300"
                        >
                            <span className="uppercase font-semibold mb-2 p-2 border border-gray-800  flex-wrap rounded-lg mr-4 lg:mr-6" > For: {status}</span>
                            <span className="uppercase font-semibold mb-2 p-2  border border-gray-800 rounded-lg mr-4 lg:mr-6"> Price: {price}</span>
                            <span className="uppercase font-semibold mb-2 p-2  border border-gray-800 rounded-lg mr-4 lg:mr-6"> Area: {area}</span>

                        </div>
                        <span className="uppercase font-semibold mt-4   p-2" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-offset="300"
                        > Category: {segment_name}</span>
                        <Typography variant="h5" className="font-medium flex text-gray-800 mb-2"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back">
                            <IoLocationOutline className="mr-1 " />  {location}.
                        </Typography>
                        <p className="mb-4 dark:text-gray-600" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"

                            data-aos-delay="300"
                        >
                            {description}
                        </p>
                        <NavLink to={`/card-details/${id}`}>
                            <Button size="lg" className="md:w-1/3">View Details
                            </Button>
                        </NavLink>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default SingleCard;