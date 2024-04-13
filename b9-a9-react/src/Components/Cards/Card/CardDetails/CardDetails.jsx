import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import 'animate.css';
const CardDetails = () => {
    const {id} = useParams();
   
    const [singleCard, setCard] = useState([]);
    useEffect(() => {
        fetch(`../data.json`)
            .then(res => res.json())
            .then(data => {
                const details = (data.data.find(card => card.id == id));
                if (details) {
                    setCard(details)
                }
            })
        
    }, [id])
    
    const { location, area, price, full_description, segment_name, estate_title, image, position } = singleCard;
    console.log(position);
    
   
    return (
        <div>
            <Helmet>
                <title>Dwell-well || Card-Details</title>
            </Helmet>
            <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-800">
              
                <div className="flex flex-col max-w-[100vw] h-[80vh] mx-auto  rounded bg-no-repeat bg-cover" style={{backgroundImage :`url(${image})`}} >
                  
                    <div className="p-8 pb-6 m-4 space-y-6 lg:w-[70vw]sm:px-10 sm:mx-12 lg:rounded-md  bg-[#ffffffcc] bg-blur bg-shadow-lg mx-auto text-center relative top-[400px] ">
                        <h1 rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl text-gray-800 text-center mx-auto animate__animated animate__bounce animate__delay-2s" >{estate_title} </h1>
                        <div className=" flex justify-around w-[70vw] mx-auto text-gray-800">

                            <p className="text-xl dark:text-gray-600 ">
                                Price:{price}
                            </p>

                            <p className="text-xl dark:text-gray-600">
                                Area: {area}
                            </p>
                            <p className="text-xl dark:text-gray-600">
                                Location :{location}
                            </p>
                            <p className="text-xl dark:text-gray-600">
                                Segment Name:{segment_name}
                            </p>

                        </div>

                    </div>
                   
                </div>
                
            </div>
            <div className="text-center">

                <h1>All you need to know</h1>
                <div className="lg:flex">
                    <div className="lg:w-1/2 w-full ">
                       
                    </div>
                    <div>
                        {full_description}
                    </div>
                </div>
               
                
            </div>
        </div>
    );
};

export default CardDetails;