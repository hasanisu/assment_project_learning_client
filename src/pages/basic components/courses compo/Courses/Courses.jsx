import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import CoursesInfo from '../CoursesInfo/CoursesInfo';

const Courses = () => {
    return (
        <div className='mt-16 grid lg:grid-cols-6 sm:grid-cols-1'>
          
            <div className='col-start-1 col-span-5'>
                <CoursesInfo></CoursesInfo>
            </div>

            <div className='col-span-1 lg:w-full'>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Courses;