import React from 'react';
import { Helmet } from 'react-helmet-async';
import image from '../../assets/sazzad.png'
import { Link } from 'react-router-dom';
import { FaFile, FaProjectDiagram } from 'react-icons/fa';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sazzad || Home</title>
            </Helmet>
            {/* about section  */}
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
            {/* about section  */}
        </div>
    );
};

export default Home;