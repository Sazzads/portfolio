import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import pic from '../../assets/work-11/fullss.png'
import pic1 from '../../assets/work-11/ss1.png'
import pic2 from '../../assets/work-11/ss2.png'
import pic3 from '../../assets/work-11/ss3.png'
import pic4 from '../../assets/work-11/ss4.png'
import pic5 from '../../assets/work-11/ss5.png'
import pic6 from '../../assets/work-11/ss6.png'
import pic7 from '../../assets/work-11/ss7.png'
import pic8 from '../../assets/work-11/ss9.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Helmet } from 'react-helmet-async';

const Project2 = () => {
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='my-2'>
            <Helmet>
                <title>Sazzad || Project 2</title>
            </Helmet>
            <div className="  bg-base-200 p-4">
                <h2 className="text-4xl font-bold uppercase text-center mt-4">Kid Car Store</h2>
                <div className="hero hero-content flex-col lg:flex-row-reverse mt-5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold uppercase">Features : </h1>
                        <div className="py-6">
                            <ul className='md:space-y-2 text-left'>
                                <li className='font-semibold text-lg'>The ultimate Toys store-</li>
                                <li>&nbsp;&#8658;   Authentic user can Add, Delete and update their products</li>
                                <li>&nbsp;&#8658; User can login and registration using google Authentication</li>
                                <li>&nbsp;&#8658; users can search by name of all Toys which stored in the database  </li>
                                <li>&nbsp;&#8658;  implemented pagination in all toys page</li>
                                <li>&nbsp;&#8658; ○ Logged in Users can sort their products by ascending / descending order</li>
                                <li>&nbsp;&#8658; also update or delete which they are added</li>
                                <li>&nbsp;&#8658; live link: <a className='text-blue-600 font-bold' href="https://work-11-8e951.web.app/">Kid Car Store</a> || GitHub link: <a className='text-blue-600 font-bold' href="https://github.com/Sazzads/kid_car_store_server">server </a> || <a className='text-blue-600 font-bold' href="https://github.com/Sazzads/kid_car_store_client">client </a></li>
                                <li><span className='font-bold'>Technologies:</span> <br />  React.js | Tailwind CSS | Daisy UI | Express.js | Mongo Db | Firebase auth | react-helmet-async</li>
                            </ul>

                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="">
                            <div>
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                                    className="mySwiper"
                                >
                                    <SwiperSlide className='overflow-scroll '>

                                        <img src={pic} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pic1} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pic2} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pic3} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pic4} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pic5} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pic6} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pic7} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pic8} />
                                    </SwiperSlide>

                                    <div className="autoplay-progress" slot="container-end">
                                        
                                        <span ref={progressContent}></span>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;