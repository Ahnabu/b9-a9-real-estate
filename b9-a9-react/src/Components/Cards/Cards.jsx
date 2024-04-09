/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom"
import SingleCard from "./Card/Card";

const Cards = () => {
    const data = useLoaderData()
    const cards = data.data;
    
    return (
        <div className="mt-5 mx-auto ">
              <h1 className="text-3xl font-bold text-center">Chose Your Next Residence</h1>
            <p className="text-xl  text-center">Live well, dwell well. We empower you to find the perfect residence. Browse listings, explore neighborhoods, and access expert advice – all on DwellWell.</p>
            <div className="grid grid-cols-1  gap-5 mt-3 mx-auto">
                {
                    cards.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                }
            </div>
        </div>
       
    );
};

export default Cards;