import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic1 from '../../assets/work-12/ss1.png'
import pic2 from '../../assets/work-11/ss7.png'
import pic3 from '../../assets/work-10/ss1.png'
import pic4 from '../../assets/work-9/ss9.png'

const HomeProjects = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className=' grid grid-cols-1 md:grid-cols-2 justify-center '>

                <div className="border p-10 m-10  flex flex-col items-center shadow-lg hover:scale-105 duration-500 shadow-gray-500 hover:bg-gray-100 rounded-md">
                    <div  data-aos="flip-left" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"  className='border w-50 mx-auto rounded-md'>
                        <img src={pic1} alt="" />
                    </div>
                    <h2 className='text-xl uppercase my-1 font-semibold'>storts club</h2>
                    <p className='mb-2'>An online based sports learning platform</p>
                    <Link className='btn btn-sm bg-yellow-400' to="/project1">View Details</Link>
                </div>

                <div className="border p-10 m-10  flex flex-col items-center shadow-lg hover:scale-105 duration-500 shadow-gray-500 hover:bg-gray-100 rounded-md">
                    <div  data-aos="flip-right" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"  className='border w-50 mx-auto rounded-md'>
                        <img src={pic2} alt="" />
                    </div>
                    <h2 className='text-xl uppercase my-1 font-semibold'>KID CAR STORE</h2>
                    <p className='mb-2'>The ultimate Toys store</p>
                    <Link className='btn btn-sm bg-yellow-400' to="/project2">View Details</Link>
                </div>

                <div  className="border p-10 m-10  flex flex-col items-center shadow-lg hover:scale-105 duration-500 shadow-gray-500 hover:bg-gray-100 rounded-md">
                    <div data-aos="flip-right" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out"  className='border w-50 mx-auto rounded-md'>
                        <img src={pic3} alt="" />
                    </div>
                    <h2 className='text-xl uppercase my-1 font-semibold'>CHEF CAVE</h2>
                    <p className='mb-2'>A Chef Related Website</p>
                    <Link className='btn btn-sm bg-yellow-400' to="/project3">View Details</Link>
                </div>

                <div   className="border p-10 m-10  flex flex-col items-center shadow-lg hover:scale-105 duration-500 shadow-gray-500 hover:bg-gray-100 rounded-md">
                    <div data-aos="flip-left" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out" className='border w-50 mx-auto rounded-md'>
                        <img src={pic4} alt="" />
                    </div>
                    <h2 className='text-xl uppercase my-1 font-semibold'>DREAM JOB CENTER</h2>
                    <p className='mb-2'>A Job Details Related Responsive website</p>
                    <Link className='btn btn-sm bg-yellow-400' to="/project4">View Details</Link>
                </div>




            </div>
        </div>
    );
};

export default HomeProjects;