import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import pic from '../../assets/work-9/fullss.png'
import pic1 from '../../assets/work-9/ss2.png'
import pic2 from '../../assets/work-9/ss3.png'
import pic3 from '../../assets/work-9/ss1.png'



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Helmet } from 'react-helmet-async';

const Project4 = () => {
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='my-2'>
            <Helmet>
                <title>Sazzad || Project 4</title>
            </Helmet>
            <div className="  bg-base-200 p-4">
                <h2 className="text-4xl font-bold uppercase text-center mt-4">Dream Job Center</h2>
                <div className="hero hero-content flex-col lg:flex-row-reverse mt-5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold uppercase">Features : </h1>
                        <div className="py-6">
                            <ul className='md:space-y-2 text-left'>
                                <li className='font-semibold text-lg'>A Job Details Related Responsive website-</li>
                                <li>&nbsp;&#8658; You can see remote and onside job by category on applied jobs</li>
                                <li>&nbsp;&#8658; react chart hook is using on blog page</li>
                                <li>&nbsp;&#8658;   in home page four featured job is initially set, clicking button can see all jobs</li>
                                <li>&nbsp;&#8658; fully responsive website</li>
                                <li>&nbsp;&#8658; you can sort jobs by remote or onside </li>
                                <li>&nbsp;&#8658; in view details page jobs alldescription added </li>
                                <li>&nbsp;&#8658; live link: <a className='text-blue-600 font-bold' href="https://dazzling-pika-d7c743.netlify.app/job/6433c38c8d0c5944b835093a">Dream Job Center</a> || GitHub link: <a className='text-blue-600 font-bold' href="https://github.com/Sazzads/dreamjob">server </a></li>
                                <li><span className='font-bold'>Technologies:</span> <br />  React.js | Tailwind CSS | React Hook</li>
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

export default Project4;