import React from 'react';
import { Link } from 'react-router-dom';

const CourseBuy = ({buyCourse}) => {
    const { category_id, image_url, details, teacher, title, _id } = buyCourse;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{details}</p>
                    <Link to={`/course-confirmed/${_id}`}><button className="btn btn-primary">Get Premium</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseBuy;