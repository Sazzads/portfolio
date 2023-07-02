import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';





const Blogs = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Sazzad || Blogs</title>
            </Helmet>

            <div>
                <div>
                    <div data-aos="fade-down" data-aos-duration="1000" data-aos-mirror="true" data-aos-delay="50" data-aos-easing="ease-in-out" className=''>
                        <div className='text-center'>
                            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline uppercase ">
                                ---Blogs---
                            </p>
                            <p className="py-6 ">These are my some projects </p>
                        </div>
                    </div>
                    </div>

                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                How to learn MERN stack web development in six months
                            </div>
                            <div className="collapse-content space-y-2">
                                <p>"Are you interested in becoming a web developer and want to learn how to build modern, dynamic web applications? Look no further than the MERN stack! MERN stands for MongoDB, Express.js, React.js, and Node.js, which are four powerful technologies that work together to create full-stack web applications. Whether you're a beginner or an experienced developer looking to expand your skill set, learning the MERN stack can open up a world of possibilities. In this guide, we'll walk you through the steps to learn MERN stack web development in a simple and straightforward manner. So, let's dive in and embark on an exciting journey into the world of MERN stack development!"</p>
                                <p>You hav to follow just few steps.</p>
                                <ul className='space-y-1 font-semibold'>
                                    <li>HTML and CSS: Start by learning HTML, which is used for creating the structure of web pages, and CSS, which is used to make them visually appealing.</li>
                                    <li>JavaScript: Understand JavaScript, the programming language that adds interactivity and dynamic elements to your web pages.</li>
                                    <li>Node.js: Learn Node.js, which allows you to run JavaScript on the server-side and handle server-related tasks.</li>
                                    <li>Express.js: Explore Express.js, a web application framework for Node.js that simplifies building web applications and APIs.</li>
                                    <li>MongoDB: Familiarize yourself with MongoDB, a NoSQL database that stores data for your web applications.</li>
                                    <li>React.js: Dive into React.js, a JavaScript library for building user interfaces, and learn how to create interactive and responsive front-end components.</li>
                                    <li>Full-stack Development: Combine your knowledge of Node.js, Express.js, MongoDB, and React.js to build full-stack web applications.</li>
                                    <li>RESTful APIs: Learn about RESTful APIs and how to create endpoints that allow your front-end and back-end to communicate efficiently.</li>
                                    <li>Deployment: Understand how to deploy your MERN stack applications to the web, making them accessible to users worldwide.</li>
                                    <li>Practice and Projects: Work on real-world projects to apply what you've learned and gain practical experience in MERN stack development.</li>
                                </ul>
                                <p>Remember to take it one step at a time, practice regularly, and seek help from online tutorials, forums, and communities. Learning MERN stack web development can be challenging, but with dedication and perseverance, you'll be well on your way to becoming a proficient web developer. Happy coding!</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>




            </>
            );
};

            export default Blogs;