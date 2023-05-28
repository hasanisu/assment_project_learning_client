import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import CoursesInfo from '../CoursesInfo/CoursesInfo';

const Courses = () => {
    return (
        <div className='mt-20 flex '>
          
            <div className='lg:w-9/12'>
                <h2>Right side</h2>
                <CoursesInfo></CoursesInfo>
            </div>

            <div className='lg:w-3/12'>
                <h2>Left side</h2>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Courses;