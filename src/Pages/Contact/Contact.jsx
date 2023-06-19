import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaHackerrank, FaKaggle, FaLinkedin, FaMailBulk } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

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
            <div>
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

            <div className="hero  bg-base-200" data-aos="flip-left" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl uppercase font-bold ">Contact Me!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-500 shadow-black mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" className="input input-bordered textarea" />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Your Email" className="input input-bordered textarea" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Enter Your Message" className="input input-bordered textarea" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-slate-700 text-white">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Contact;