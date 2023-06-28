import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaHackerrank, FaKaggle, FaLinkedin, FaMailBulk } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Sazzad || Contact</title>
            </Helmet>
            <div className='my-5 py-5 bg-base-200'>
            </div>
            <div className='text-center'>
                <div className='my-5 py-5 bg-base-200'>
                    <h1 className='my-4 text-4xl uppercase font-bold '>---Social Links---</h1>
                    <Link to='https://www.facebook.com/sazzadz' className="btn bg-blue-500 text-white mx-1" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaFacebookF />Facebook</Link>
                    <Link to='https://github.com/Sazzads' className="btn bg-slate-700 text-white mx-1" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaGithub />github</Link>
                    <Link to="https://www.linkedin.com/in/sazzzad/" className="btn bg-blue-600 text-white mx-1" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaLinkedin />linkedin</Link>
                    <Link to="https://www.hackerrank.com/sazzadtk?hr_r=1" className="btn bg-green-700 text-white mx-1" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaHackerrank />Hackerrank</Link>
                    <Link to="" className="btn bg-red-600 text-white mx-1" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaMailBulk />Email</Link>
                    <Link to="https://www.kaggle.com/sazzadhossains" className="btn bg-blue-600 text-white mx-1" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaKaggle />Kaggle</Link>
                </div>
            </div>

            <div data-aos="flip-left" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"  className='my-5 py-5 bg-base-200 text-center'>
            <h1 className='my-4 text-4xl uppercase font-bold '>---Contact Information---</h1>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out" className='max-w-screen-sm mx-auto border border-black px-5 py-10 bg-slate-50'>
                    <div className="chat chat-start">
                        <div className="chat-bubble">Mobile No: </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble">+8801733439812</div>
                    </div>

                    <div className="chat chat-start">
                        <div className="chat-bubble">E-mail :</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble">sazzadtk@gmail.com</div>
                    </div>

                    <div className="chat chat-start">
                        <div className="chat-bubble">Present Address: </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble">Poschim Akur Takur Para <br />Tangail, Dhaka, Bangladesh </div>
                    </div>
                </div>

            </div>
            <ContactForm></ContactForm>



        </>
    );
};

export default Contact;