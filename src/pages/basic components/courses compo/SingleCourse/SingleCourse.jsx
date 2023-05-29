import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ coures }) => {
  const { category_id, image_url, details, teacher, title, _id } = coures;
  return (
    <div className="card lg:card-side shadow-xl bg-slate-300">
      <figure>
        <img
        className="lg:ps-3 rounded-lg lg:w-96 lg:h-full"
          src={image_url}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="lg:w-80 text-start">
        {
          details.length > 150 ?
          
          <span>{details.slice(0,180) + '...'} <Link to={`/courseDetail/${category_id}`}>Read More</Link> </span>
          
          :
          <span>{details}</span>
        
        }
        </p>
        <div className="card-actions justify-end">
          <Link to={`/courseDetail/${category_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
