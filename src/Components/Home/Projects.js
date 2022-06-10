import React from 'react';

import img1 from '../../img/project1.jpeg'
import img2 from '../../img/project2.jpeg'
import img3 from '../../img/project3.jpeg'
import img4 from '../../img/project4.jpeg'
import img5 from '../../img/project5.jpeg'
import img6 from '../../img/project6.jpeg'
import Project from './Project';

const Projects = () => {

    const projects = [
        {
            "id":1, 
            
            "name":"Monota Car", "description": "This is Full stack responsive react project where dealers cab buy tools. users can go to the dashboard and pay or cancel their orders. only admins see all orders and their payment status in the dashboard.they can also ship paid orders,admins can make normal users admin and add or delete products", "link": "https://monota-car.web.app/", "client" : "https://github.com/Reduwan-Nyx/Manufacture-Website-client", "server": "https://github.com/Reduwan-Nyx/-Manufacturer-website-server-side", "img": img1 },
            
            {
            "id":2, 
            
            "name":"Halal Food", "description": "This is Full stack responsive react project where dealers cab buy tools. users can go to the dashboard and pay or cancel their orders. only admins see all orders and their payment status in the dashboard.they can also ship paid orders,admins can make normal users admin and add or delete products","link": "https://halal-food-2514a.web.app/", "client" : "https://github.com/Reduwan-Nyx/warehouse-assignment", "server": "https://github.com/Reduwan-Nyx/warehouse-server",  "img": img2 },
            
            {
            "id":3,
            
            "name":"Fitness Gym", "description": "This is Full stack responsive react project where dealers cab buy tools. users can go to the dashboard and pay or cancel their orders. only admins see all orders and their payment status in the dashboard.they can also ship paid orders,admins can make normal users admin and add or delete products", "link": "https://fitness-gym-project.web.app/", "client" : "https://github.com/Reduwan-Nyx/Gym-Website",  "img": img3 },
            
            {
            "id":4,
            
            "name":"Aman Ullah Convention center", "description": "A website for bride.a lot of thinsg are showen in here many services and products ",  "link": "https://aman-ullah-convention-center.netlify.app/", "client" : "https://github.com/Reduwan-Nyx/penguin-fashion",  "img": img4 }, 
            
            {
            "id":5,
            
            "name":"Panda Ecommerce Website", "description": "A  website where we got some bags shoes and a lot of stuff are showen in the home page.this website is fully responsive",  "link": "https://reduwan-nyx.github.io/panda-commerce-website/","client" : "   https://github.com/Reduwan-Nyx/panda-commerce-website",  "img": img5 }, 
            
            {
            "id":6,
            
            "name":"Mobile Shop Mania", "description": "website where we can buy phone ..we can choose randomly which phone we can buy", "link": "  https://magical-kitten-4454fa.netlify.app/","client" : "https://github.com/Reduwan-Nyx/lucky-one-assignment",  "img": img6 }
    ]

    return (
        <div id='project'>
            <h2 className='text-center text-2xl font-bold'>My Projects</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    projects.map(project => <Project
                    key={project.id}
                    project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;