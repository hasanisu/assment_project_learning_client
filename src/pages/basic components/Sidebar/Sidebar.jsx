import { LifebuoyIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const Sidebar = () => {
    const [catagory, setCatagory] = useState([]);
    useEffect(()=>{
        fetch('https://assment-project-learning-server.vercel.app/courses-catagories')
        .then(res => res.json())
        .then(data => setCatagory(data))
    },[])
    return (
        <div className='text-left bg-red-400 lg:h-full px-10'>
            <div className='text-left bg-red-400 lg:h-full px-10'>
            <h2 className='pt-20 text-md font-bold text-blue-900 underline'>DashBoard SideBar</h2>
            {
                catagory.map(sidebar => <p className='mt-8 hover:underline' key={sidebar.id}>
                    <Link to={`/courseDetail/${sidebar.id}`}>{sidebar.name}</Link>
                    </p>)
            }
            <div className="mt-52">
              <h2 className='text-xl text-slate-200'>Advertisement</h2>  
            <div className='flex justify-center'>
            <BrandCarousel></BrandCarousel>
            </div>
            </div>
        </div>
       
        </div>
    );
};

export default Sidebar;