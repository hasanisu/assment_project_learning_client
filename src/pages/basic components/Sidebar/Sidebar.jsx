import { LifebuoyIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [catagory, setCatagory] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses-catagories')
        .then(res => res.json())
        .then(data => setCatagory(data))
    },[])
    return (
        <div className='text-left bg-red-400 lg:h-full'>
            <h2 className='pt-20 text-xl'>This is All SideBar Menu {catagory.length}</h2>
            {
                catagory.map(sidebar => <p className='mt-8 ' key={sidebar.id}>
                    <Link to={`/courseDetail/${sidebar.id}`}>{sidebar.name}</Link>
                    </p>)
            }
        </div>
    );
};

export default Sidebar;