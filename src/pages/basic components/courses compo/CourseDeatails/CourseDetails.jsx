import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseBuy from '../CourseBuy/CourseBuy';

const CourseDetails = () => {
    const detailsInfo = useLoaderData();
    console.log(detailsInfo)
    const { category_id, image_url, details, teacher, title, _id } = detailsInfo;
    
    return (
        <div>
            {
                detailsInfo.map(n => <CourseBuy
                key={n._id}
                buyCourse={n}
                ></CourseBuy>)
            }
        </div>
    );
};

export default CourseDetails;