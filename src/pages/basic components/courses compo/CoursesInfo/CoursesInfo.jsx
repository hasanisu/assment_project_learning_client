import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';

const CoursesInfo = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://assment-project-learning-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='bg-slate-500'>
           <h2 className='mt-2 font-semibold text-3xl text-blue-900'>CHOOSE YOUR <span className="text-red-800">FUTURE</span> CAREER FROM HERE</h2>
           <h4 className="text-purple-200">Available Courses: {courses.length}</h4>
           <div className='grid lg:grid-cols-2 gap-10 sm:grid-cols-1 p-10'>
            {
            courses.map(coures => <SingleCourse
            key={coures._id}
            coures={coures}
            ></SingleCourse>)
           }
           </div>
        </div>
    );
};

export default CoursesInfo;