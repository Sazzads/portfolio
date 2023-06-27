import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Project1 from "../Pages/Projects/Project1";
import Project2 from "../Pages/Projects/Project2";
import Project3 from "../Pages/Projects/Project3";
import Project4 from "../Pages/Projects/Project4";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>,

            },
            {
                path: '/project1',
                element: <Project1></Project1>
            },
            {
                path: '/project2',
                element: <Project2></Project2>
            },
            {
                path: '/project3',
                element: <Project3></Project3>
            },
            {
                path: '/project4',
                element: <Project4></Project4>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    },
]);

export default router;