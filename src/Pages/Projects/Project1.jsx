import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import pic from '../../assets/work-12/work-12.png'
import pic1 from '../../assets/work-12/ss1.png'
import pic2 from '../../assets/work-12/ss2.png'
import pic3 from '../../assets/work-12/ss3.png'
import pic4 from '../../assets/work-12/ss4.png'
import pic5 from '../../assets/work-12/ss5.png'
import pic6 from '../../assets/work-12/ss6.png'
import pic7 from '../../assets/work-12/ss7.png'
import pic8 from '../../assets/work-12/ss8.png'
import pic9 from '../../assets/work-12/ss9.png'
import pic10 from '../../assets/work-12/ss10.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Project1 = () => {
    return (
        <div>
            <div className="  bg-base-200 p-4">
                <h2 className="text-4xl font-bold uppercase text-center mt-4">sports club</h2>
                <div className="hero hero-content flex-col lg:flex-row-reverse mt-5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold uppercase">Features : </h1>
                        <div className="py-6">
                            <ul className='md:space-y-2 '>
                                <li className='font-semibold text-lg'>An online based sports learning platform-</li>
                                <li>&nbsp;&#8658; Website has three different role,student, instructors and admin. </li>
                                <li>&nbsp;&#8658; Admin can make instructor/admin and approved courses</li>
                                <li>&nbsp;&#8658; Instructor Can add the courses and they see the status </li>
                                <li>&nbsp;&#8658; also feedback their courses and also see the total enrolled students.</li>
                                <li>&nbsp;&#8658; Students can select the courses and enrolled the courses after payment.</li>
                                <li>&nbsp;&#8658; Students also see their payment history.</li>
                                <li>&nbsp;&#8658; live link: <a className='text-blue-600 font-bold' href="https://work-12-ad843.web.app/">Sports club</a> || GitHub link: <a className='text-blue-600 font-bold' href="https://github.com/Sazzads/sports_club_server">server </a> || <a className='text-blue-600 font-bold' href="https://github.com/Sazzads/sports_club_client">client </a></li>
                                <li>&nbsp;&#8658; Admin Email: admin1@mail.com Admin  password: Admin@</li>
                                <li><span className='font-bold'>Technologies:</span> <br /> React.js | Tailwind CSS | Daisy UI | Express.js | Mongo Db | Firebase auth | axios | jsonwebtoken</li>


                            </ul>

                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="">
                            <div>
                                <Swiper
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={"auto"}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    pagination={true}
                                    modules={[EffectCoverflow, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide className='overflow-scroll'>
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
                                    <SwiperSlide>
                                        <img src={pic9} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={pic10} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;