import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ coures }) => {
  const { category_id, image_url, details, teacher, title } = coures;
  console.log(coures);
  return (
    <div className="card card-side shadow-xl bg-slate-300">
      <figure>
        <img
          src={image_url}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <Link to={`/courseDetail/${category_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
