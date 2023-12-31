import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import image from '../../assets/sazzad.png'
import { Link } from 'react-router-dom';
import { FaFile, FaProjectDiagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from '../../Components/Skills';
import HomeProjects from './HomeProjects';
import Blogs from '../Blogs/Blogs';
import ContactForm from '../Contact/ContactForm';
import Swal from 'sweetalert2';



const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const handleDownload = () => {
        Swal.fire({
            title: 'Do you want to download Sazzads Resume?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Download'
          }).then((result) => {
            if (result.isConfirmed) {
                window.open("https://drive.google.com/u/1/uc?id=1phbkUGOpVBN8nCthcqDvsuxFA2z6AwFd&export=download", "_parent")

            }
          })
    }
    return (
        <div className=''>
            <Helmet>
                <title>Sazzad || Home</title>
            </Helmet>
            {/* about section  */}
            <div className="hero py-8  px-2 shadow-lg hover:scale-105 duration-500 px-8 ">
                <div className="flex justify-center flex-col lg:flex-row-reverse ">
                    <img src={image} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div data-aos="flip-right" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out" className='text-left'>
                        <h1 className="text-4xl md:text-5xl  font-bold ">Hello! I'm,
                            <br />
                            Sazzad Hossain</h1>
                        <h1 className='text-4xl md:text-5xl font-bold mt-4 '>A Front End Developer</h1>
                        <p className="py-6">I am an experienced React JS developer with knowledge of HTML, CSS, Bootstrap, Tailwind, and Firebase. With many years of expertise designing and constructing aesthetically beautiful websites.
                        </p>
                        <Link to='/projects' className="btn bg-slate-700 text-white mx-1"><FaProjectDiagram />Projects</Link>
                        <button onClick={handleDownload} to='' className="btn bg-slate-700 text-white mx-1"><FaFile />Resume</button>
                    </div>
                </div>
            </div>
            {/* about section  */}
            <div className="divider"></div>

            <div className='text-justify border py-8 px-5 border-2 rounded-lg  shadow-lg hover:scale-105 duration-500'>
                <h1 data-aos="flip-right" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out" className='text-4xl uppercase font-bold text-center'>---About---</h1>
                <div className="divider"></div>
                <p data-aos="flip-left" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out" className=''>I am a skilled developer fluent in the languages of React, Express, Node.js, MongoDB, and Firebase. With my expertise, I bring web applications to life, creating digital marvels that leave a lasting impression. <br /> I thrive in this digital arena, where invention abounds. I am committed to creating outstanding digital solutions that push limits and surpass expectations by combining my love for constructing excellent user experiences with my expertise of cutting-edge technologies.I aspire to design beautiful and scalable solutions that smoothly connect front-end and back-end technologies with every line of code I write. My knowledge of React allows me to create visually appealing user interfaces, delivering a seamless and intuitive experience for any user that interacts with my projects.
                </p>
            </div>
            {/* skills */}
            <div data-aos="fade-down" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out">
                <Skills ></Skills>
            </div>
            {/* skills */}

            {/* projects */}
            <div data-aos="flip-left" className=" w-full  h-full pt-10">
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div className='text-center'>
                        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline uppercase ">
                            ---Projects---
                        </p>
                        <p className="py-6 ">These are my some projects </p>
                    </div>
                </div>
                <div  className=''>
                    <HomeProjects></HomeProjects>
                </div>
            </div>
            {/* projects */}
            <div className=" w-full  h-full pt-10">
                
                <div data-aos="flip-right" className=''>
                    <Blogs></Blogs>
                </div>
            </div>

            <div data-aos="flip-left" className='my-5'>
                <ContactForm></ContactForm>
            </div>



        </div>
    );
};

export default Home;