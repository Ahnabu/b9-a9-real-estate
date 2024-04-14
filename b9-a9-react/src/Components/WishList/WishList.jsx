/* eslint-disable react/prop-types */


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useContext, useEffect, useState } from "react";
import WishListCard from "./WishListCard/WishListCard";
import { AuthContext } from "../../Providers/Provider";
// ..
AOS.init();
const WishList = () => {
    const { getWishList } =useContext(AuthContext)
    const [cards, setCards] = useState([]) 
    const wishlist = getWishList()
    
    useEffect(() => {
        
        const fetchData = async () => {
            const response = await fetch('../data.json');
            const data = await response.json();
            
           const exist = data.data.filter(item => wishlist.includes(item.id));
            if (exist) {
                setCards(exist)
            }
            
        };
        fetchData();
    }, [])

 
   
  

  

    return (

        <div className='mt-4'>
            <h1 className='text-3xl text-center my-3'> Your Favorite</h1>
            {
            cards.map(card => <WishListCard key={card.id} card={card}></WishListCard>)
        }

            
</div>
      
    );
};

export default WishList;