// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import Card from '../../../Components/Cards/Card';
const Slider = () => {
 
    return (
        <div>
            <swiper-container virtual="true">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
             
            </swiper-container>
            <Card></Card>
        </div>
    );
};

export default Slider;