
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useRef, useState, useEffect } from "react";
import Project1 from './Project1';

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

        </>
    );
};

export default Projects;