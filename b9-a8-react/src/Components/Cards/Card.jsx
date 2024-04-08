/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom"

const Card = () => {
    const data = useLoaderData()
    console.log('card');
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Card;