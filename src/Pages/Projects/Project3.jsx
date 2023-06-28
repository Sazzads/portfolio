import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import pic from '../../assets/work-10/fullss.png'
import pic1 from '../../assets/work-10/ss1.png'
import pic2 from '../../assets/work-10/ss2.png'
import pic3 from '../../assets/work-10/ss3.png'
import pic4 from '../../assets/work-10/ss4.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Helmet } from 'react-helmet-async';


const Project3 = () => {
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='my-2'>
            <Helmet>
                <title>Sazzad || Project 3</title>
            </Helmet>
            <div className="  bg-base-200 p-4">
                <h2 className="text-4xl font-bold uppercase text-center mt-4">Chef Cave</h2>
                <div className="hero hero-content flex-col lg:flex-row-reverse mt-5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold uppercase">Features : </h1>
                        <div className="py-6">
                            <ul className='md:space-y-2 text-left'>
                                <li className='font-semibold text-lg'>A Chef Related Website-</li>
                                <li>&nbsp;&#8658; User can use this full website after login or registration</li>
                                <li>&nbsp;&#8658; they also use email and password or google/GitHub authentication</li>
                                <li>&nbsp;&#8658;  There have some Chefs Information on the card.</li>
                                <li>&nbsp;&#8658; After clicking view recipes user can see full Details in this website.</li>
                                <li>&nbsp;&#8658;  User can add their favourite recipes by clicking favourite button</li>
                                <li>&nbsp;&#8658;  User can add their favourite recipes by clicking favourite button and</li>
                                <li>&nbsp;&#8658; live link: <a className='text-blue-600 font-bold' href="https://work-10-70bc2.web.app/">Chef Cave</a> || GitHub link: <a className='text-blue-600 font-bold' href="https://github.com/Sazzads/Chef_Cave_Server">server </a> || <a className='text-blue-600 font-bold' href="https://github.com/Sazzads/Chef_Cave_client">client </a></li>
                                <li><span className='font-bold'>Technologies:</span> <br />  React.js | Tailwind CSS | Daisy UI | Express.js | Mongo Db | Firebase auth | react-to-pdf</li>
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

export default Project3;