import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
   console.log(singleCard);
    return (
        <div>
            {id}
        </div>
    );
};

export default CardDetails;