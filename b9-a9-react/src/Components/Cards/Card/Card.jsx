/* eslint-disable react/prop-types */
import {
   
    Button,
    Typography
} from "@material-tailwind/react";
import { FaMapSigns } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
const SingleCard = ({ card }) => {
    const { location, area, status, price, description, segment_name, estate_title, image, id } = card;
    
    const isEven = (id) => {
        
            return id % 2 == 0
        
        
    }
    //    console.log(isEven);
   
    return (
        
           
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
            <Helmet>
               <title>Dwell-well || Cards</title> 
            </Helmet>
                <div className="container mx-auto space-y-12">
                <div className={`flex flex-col overflow-hidden rounded-md shadow-sm  ${isEven(id) ? 'lg:flex-row-reverse': 'lg:flex-row'}`}>
                    <img src={image} alt="" className="h-80 dark:bg-gray-500 aspect-video group relative overflow-hidden hover:transition duration-300 ease-in-out hover:scale-105 lg:w-1/2" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600"></span>
                        <h3 className="text-3xl font-bold flex"><FaMapSigns className="mr-1 mt-1" /> {estate_title}</h3>
                        <div className="mt-4 md:mt-6 flex  flex-wrap ">
                            <span className="uppercase font-semibold mb-2 p-2 border border-gray-800  flex-wrap rounded-lg mr-4 lg:mr-6"> For: {status}</span>
                            <span className="uppercase font-semibold mb-2 p-2  border border-gray-800 rounded-lg mr-4 lg:mr-6"> Price: {price}</span>
                            <span className="uppercase font-semibold mb-2 p-2  border border-gray-800 rounded-lg mr-4 lg:mr-6"> Area: {area}</span>
                            
                        </div>
                        <span className="uppercase font-semibold mt-4   p-2"> Category: {segment_name}</span>
                        <Typography variant="h5"  className="font-medium flex text-gray-800 mb-2">
                            <IoLocationOutline className="mr-1 " />  {location}.
                        </Typography>
                            <p className="mb-4 dark:text-gray-600"> 
                            { description }
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