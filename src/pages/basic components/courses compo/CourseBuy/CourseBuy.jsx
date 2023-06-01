import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';
import './CourseBuy.css';
import { FaPrint } from "react-icons/fa";




const CourseBuy = ({ buyCourse }) => {

  const { category_id, image_url, details, teacher, title, _id } = buyCourse;
  const notify = () => toast("Congratulation! you join succesfully in this course");
 const ref = useRef()

  return (
    
    <div ref={ref} className="flex justify-center print ">
       
      <div className=" w-screen h-screen">
      <div  className="container static flex flex-col p-6 py-28 mx-auto divide-y rounded-md divide-gray-700  text-black">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <div>
              <ReactToPrint trigger={()=> <button className="btn btn-primary mb-10">Pdf <FaPrint className="ms-2"/></button>} content={()=>ref.current}/>
                <h4 className="font-bold">Course Teacher</h4>
                <span className="text-xs text-black">{teacher.name}</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-500 ms-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
          </div>
        </div>
        

        
        <div className="mx-auto mb-8 mt-18">
        <h2>Course Overview</h2>
          <img className="w-48 lg:w-96 h-48 lg:h-80 rounded-lg" src={image_url} alt="" />
        </div>

        <div className="p-4 space-y-2 text-sm text-black w-full lg:w-6/12 mx-auto text-start">
          <p>{details}</p>
        </div>

        <div className="mx-auto">
          <Link to={`/check-out/${_id}`}>
            <button className="btn btn-primary mt-20">Get Premium Access</button>
          </Link>
        </div>
        
      </div>
      </div>
    </div>
    
  );
};

export default CourseBuy;
