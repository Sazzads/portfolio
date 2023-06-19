import React, { useEffect } from 'react';
import image from '../../assets/sazzad.png'
import logo1 from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaFile, FaGithub, FaHackerrank, FaKaggle, FaLinkedin, FaProjectDiagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="hero py-8 bg-base-200 px-2">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img data-aos="flip-left" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out" src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div data-aos="flip-right" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out" className='text-left'>
                        <h1 className="text-5xl font-bold ">Hello! I'm,
                            <br />
                            Sazzad Hossain</h1>
                        <h1 className='text-5xl font-bold mt-4 '>A Front End Developer</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='' className="btn bg-slate-700 text-white mx-1"><FaProjectDiagram />Projects</Link>
                        <Link to='' className="btn bg-slate-700 text-white mx-1"><FaFile />Resume</Link>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className='my-5'>
                <h1 className='my-4 text-4xl uppercase font-bold '>---Education---</h1>
                <div className="mockup-window border border-base-300">
                    <div className=" px-4 py-16 border-t border-base-300" data-aos="flip-left" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out">
                        <img className='mx-auto h-12' src={logo1} alt="" />
                        <h2 className='text-3xl font-semibold'>Daffodil International University</h2>
                        <h4 className='text-2xl'>BSc in CSE</h4>
                        <h5 className='text-xl'>2019-2022</h5>
                        <h5>CGPA-3.59/4.00</h5>
                    </div>
                    <div className=" px-4 py-16 border-t border-base-300" data-aos="flip-right" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out">
                        <img className='mx-auto h-12' src={logo2} alt="" />
                        <h2 className='text-3xl font-semibold'>Major General Mahmudul Hasan Adarsha College, Tangail</h2>
                        <h4 className='text-2xl'>Science</h4>
                        <h5 className='text-xl'>2015-2017</h5>
                    </div>
                    <div className=" px-4 py-16 border-t border-base-300" data-aos="flip-left" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out">
                        <img className='mx-auto h-12' src={logo2} alt="" />
                        <h2 className='text-3xl font-semibold'>Bindu Bashini Govt. Boys High School, Tangail</h2>
                        <h4 className='text-2xl'>Science</h4>
                        <h5 className='text-xl'>2010-2015</h5>
                        <h5>GPA-5.00/5.00</h5>
                    </div>
                </div>


            </div>
            {/* social links  */}
            <div className='my-5'>
                <h1 className='my-4 text-4xl uppercase font-bold '>---Social Links---</h1>
                <Link to='https://www.facebook.com/sazzadz' className="btn bg-blue-500 text-white mx-1" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaFacebookF />Facebook</Link>
                <Link to='https://github.com/Sazzads' className="btn bg-slate-700 text-white mx-1" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaGithub />github</Link>
                <Link to="https://www.linkedin.com/in/sazzzad/" className="btn bg-blue-600 text-white mx-1" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaLinkedin />linkedin</Link>
                <Link to="https://www.hackerrank.com/sazzadtk?hr_r=1" className="btn bg-green-700 text-white mx-1" data-aos="fade-up"data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaHackerrank />Hackerrank</Link>
                <Link to="https://www.kaggle.com/sazzadhossains" className="btn bg-blue-600 text-white mx-1" data-aos="fade-up"data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"><FaKaggle />Kaggle</Link>
            </div>
        </>
    );
};

export default About;