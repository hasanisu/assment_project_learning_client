import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';

const CoursesInfo = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='bg-slate-500'>
           <h2>Thsi is cousers ={courses.length}</h2>
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