import React from 'react';
import About from './About';
import Banner from './Banner';
import Blogs from './Blogs';
import Contract from './Contract';
import Navbar from './Navbar';
import Projects from './Projects';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contract></Contract>
        </div>
    );
};

export default Home;