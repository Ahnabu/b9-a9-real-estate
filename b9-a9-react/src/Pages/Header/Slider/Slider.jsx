import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cards from '../../../Components/Cards/Cards';
// import { useLoaderData } from "react-router-dom"
 function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
     };
    //  const data = useLoaderData();
    //  const card = data.data
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper  mt-2 rounded-3xl h-[300px] w-[370px] md:h-[500px] md:w-[720px] lg:h-[600px] lg:w-[1180px] mx-auto "
            >
             
                
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/LNsZYKL/435123131-957136245953938-8313579374460895802-n.png)` }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/xg23hgV/434588543-952964312684487-4123971753150353345-n.png)` }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/7g2Xs4J/400812139-883378230251213-8993397747539996528-n.png)` }}className=''>Slide 2</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/Rj4xh4R/433861014-404833092482985-8452375828009476079-n.png)` }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/s1WM5V2/433665349-416395344457775-2760803485086630833-n.png)` }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/fMQfCh3/435066390-1491787778411941-9022711050693438483-n.png)` }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/j5D6KZZ/434561188-447464671117931-4175622643289481365-n.png)` }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/F4zytFs/434525147-768406965248426-3907028757762818572-n.png)` }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/sJ7K7SG/434532562-987281362944101-3892278133360426503-n.png)` }}>Slide 2</SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <Cards></Cards>
        </>
    );
}


export default Slider;