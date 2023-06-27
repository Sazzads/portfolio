
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useRef, useState, useEffect } from "react";
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Sazzad || Projects</title>
            </Helmet>


            {/* card */}
            <Project1></Project1>
            <Project2></Project2>
            <Project3></Project3>
            <Project4></Project4>

        </>
    );
};

export default Projects;