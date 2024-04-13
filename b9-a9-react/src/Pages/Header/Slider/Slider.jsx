import { useRef } from 'react';
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
import { Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

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
                className="mySwiper  mt-2 rounded-3xl h-[390px] w-[370px] md:h-[500px] md:w-[720px] lg:h-[600px] lg:w-[1180px] mx-auto "
            >


                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/LNsZYKL/435123131-957136245953938-8313579374460895802-n.png)` }} id="001" className='item-end w-full '>
                    <div className='flex flex-col  mx-auto lg:flex-row justify-between w-5/6 ' >
                        <div className=' bg-[#ffffffcc] bg-blur bg-shadow-lg w-80 p-4 text-start rounded-lg border border-black h-96'>
                            <h1 className='text-2xl font-semibold'>
                                Modern Apartment
                            </h1>
                            <h4>

                                Los Angeles, CA
                            </h4>
                            <p>
                                Contemporary apartment in a prime location
                            </p>
                            <ul className="list-disc p-4">
                                <li>living room</li>
                                <li>swimming</li>
                                <li>kitchen</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $1,500,000
                                </p>
                                <p >
                                    For: Sale
                                </p>
                            </div>
                           
                            <NavLink to={`/card-details/001`}>
                                <Button size="lg" className=" w-full mt-4 ">View Details
                                </Button>
                            </NavLink>
                        </div>
                        
                    </div>


                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/xg23hgV/434588543-952964312684487-4123971753150353345-n.png)` }} id="002" className='item-end w-full '>
                    <div className='flex flex-col  my-auto lg:flex-row-reverse justify-between w-5/6 ' >
                        <div className=' bg-[#ffffffcc] bg-blur bg-shadow-lg w-80 p-4 text-start rounded-lg border border-black h-96'>
                            <h1 className='text-2xl font-semibold'>
                                Modern Apartment
                            </h1>
                            <h4>
                                New York City, NY
                            </h4>
                            <p>
                                Contemporary apartment in a prime location
                            </p>
                            <ul className="list-disc p-4">
                                <li>living room</li>
                                <li>gym</li>
                                <li>balcony</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $2,500/mon
                                </p>
                                <p >
                                    For: Rent
                                </p>
                            </div>
                            <NavLink to={`/card-details/002`}>
                                <Button size="lg" className=" w-full mt-4  ">View Details
                                </Button>
                            </NavLink>
                        </div>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/7g2Xs4J/400812139-883378230251213-8993397747539996528-n.png)` }} id="003" className='item-end w-full '>
                    <div className='flex flex-col  mx-auto lg:flex-row justify-between w-5/6 ' >
                        <div className=' bg-[#ffffffcc] bg-blur bg-shadow-lg w-80 p-4 text-start rounded-lg border border-black h-96'>
                            <h1 className='text-2xl font-semibold'>
                                Townhouse Retreat
                            </h1>
                            <h4>
                                Chicago, IL
                            </h4>
                            <p>
                                Charming townhouse with a cozy atmosphere
                            </p>
                            <ul className="list-disc p-4">
                                <li>living room</li>
                                <li>garage</li>
                                <li>patio</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $800,000
                                </p>
                                <p>
                                    For: Sale
                                </p>
                            </div>
                            <NavLink to={`/card-details/003`}>
                                <Button size="lg" className=" w-full mt-4  ">View Details
                                </Button>
                            </NavLink>
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/Rj4xh4R/433861014-404833092482985-8452375828009476079-n.png)` }} id="004" className='item-end w-full '>
                    <div className='flex flex-col  mx-auto lg:flex-row-reverse justify-between w-5/6 ' >
                        <div className=' bg-[#ffffffcc] bg-blur bg-shadow-lg w-80 p-4 text-start rounded-lg border border-black h-[400px]'>
                            <h1 className='text-2xl font-semibold'>
                                Student Housing Complex
                            </h1>
                            <h4>

                                Boston, MA
                            </h4>
                            <p>
                                Convenient and comfortable housing for
                            </p>
                            <ul className="list-disc p-4">
                                <li>bedroom</li>
                                <li>study</li>
                                <li>room</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $600/month
                                </p>
                                <p >
                                    For: Rent
                                </p>
                            </div>
                            <NavLink to={`/card-details/004`}>
                                <Button size="lg" className=" w-full mt-4  ">View Details
                                </Button>
                            </NavLink>
                        </div>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/s1WM5V2/433665349-416395344457775-2760803485086630833-n.png)` }} id="005" className='item-end w-full '>
                    <div className='flex flex-col  mx-auto lg:flex-row justify-between w-5/6 ' >
                        <div className=' bg-[#ffffffcc] bg-blur bg-shadow-lg w-80 p-4 text-start rounded-lg border border-black h-[400px]'>
                            <h1 className='text-2xl font-semibold'>
                                Senior Living Community
                            </h1>
                            <h4>
                                Phoenix, AZ
                            </h4>
                            <p>
                                A vibrant community for seniors with various amenities
                            </p>
                            <ul className="list-disc p-4">
                                <li>community center</li>
                                <li>garden</li>
                                <li>center</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $400,000
                                </p>
                                <p>
                                    For: Sale
                                </p>
                            </div>
                            <NavLink to={`/card-details/005`}>
                                <Button size="lg" className=" w-full mt-4  ">View Details
                                </Button>
                            </NavLink>
                        </div>
                      
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/fMQfCh3/435066390-1491787778411941-9022711050693438483-n.png)` }} id="006" className='item-end w-full '>
                    <div className='flex flex-col  mx-auto lg:flex-row-reverse justify-between w-5/6' >
                        <div className=' bg-[#ffffffcc] bg-blur bg-shadow-lg w-80 p-4 text-start rounded-lg border border-black h-96'>
                            <h1 className='text-2xl font-semibold'>
                                Beachfront Vacation
                            </h1>
                            <h4>

                                Miami Beach, FL
                            </h4>
                            <p>
                                beachfront rental for the perfect getaway
                            </p>
                            <ul className="list-disc p-4">
                                <li>ocean view</li>
                                <li>private</li>
                                <li>terrace</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $300/night
                                </p>
                                <p >
                                    For: Rent
                                </p>
                            </div>
                            <NavLink to={`/card-details/006`}>
                                <Button size="lg" className=" w-full mt-4  ">View Details
                                </Button>
                            </NavLink>
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/j5D6KZZ/434561188-447464671117931-4175622643289481365-n.png)` }} id="007" className='item-end w-full '>
                    <div className='flex flex-col  mx-auto lg:flex-row justify-between w-5/6' >
                        <div className=' bg-[#ffffffcc] bg-blur bg-shadow-lg w-80 p-4 text-start rounded-lg border border-black h-96'>
                            <h1 className='text-2xl font-semibold'>
                                Cosy Cottage
                            </h1>
                            <h4>
                                Seattle, WA
                            </h4>
                            <p>

                                Charming cottage nestled in the countryside
                            </p>
                            <ul className="list-disc p-4">
                                <li>fireplace</li>
                                <li>garden</li>
                                <li>porch</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $350,000
                                </p>
                                <p>
                                    For: Sale
                                </p>
                            </div>
                            <NavLink to={`/card-details/007`}>
                                <Button size="lg" className=" w-full mt-4  ">View Details
                                </Button>
                            </NavLink>
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/F4zytFs/434525147-768406965248426-3907028757762818572-n.png)` }} id="008" className='item-end w-full '>
                    <div className='flex flex-col  mx-auto lg:flex-row-reverse justify-between w-5/6 ' >
                        <div className=' bg-[#ffffffcc] bg-blur bg-shadow-lg w-80 p-4 text-start rounded-lg border border-black h-96'>
                            <h1 className='text-2xl font-semibold'>
                                Downtown Loft
                            </h1>
                            <h4>
                                San Francisco, CA
                            </h4>
                            <p>
                                loft with urban vibes in the
                            </p>
                            <ul className="list-disc p-4">
                                <li>open floor</li>
                                <li>city</li>
                                <li>center</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $900,000
                                </p>
                                <p>
                                    For: Sale
                                </p>
                            </div>
                            <NavLink to={`/card-details/008`}>
                                <Button size="lg" className=" w-full mt-4  ">View Details
                                </Button>
                            </NavLink>
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/sJ7K7SG/434532562-987281362944101-3892278133360426503-n.png)` }} id="009" className='item-end w-full '>
                    <div className='flex flex-col  mx-auto lg:flex-row justify-between w-5/6 ' >
                        <div className=' bg-[#ffffffcc] bg-blur bg-shadow-lg w-80 p-4 text-start rounded-lg border border-black  h-96'>
                            <h1 className='text-2xl font-semibold'>
                                Lakefront Retreat
                            </h1>
                            <h4>
                                Lake Tahoe, CA
                            </h4>
                            <p>
                                Tranquil retreat overlooking a serene
                            </p>
                            <ul className="list-disc p-4">
                                <li>dock</li>
                                <li>deck</li>
                                <li>pit</li>
                            </ul>
                            <div className='flex flex-row justify-between mt-4'>
                                <p>
                                    Price: $1,200,000
                                </p>
                                <p >
                                    For: Sale
                                </p>
                            </div>
                            <NavLink to={`/card-details/009`}>
                                <Button size="lg" className=" w-full mt-4  ">View Details
                                </Button>
                            </NavLink>
                        </div>
                       
                    </div>
                </SwiperSlide>
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