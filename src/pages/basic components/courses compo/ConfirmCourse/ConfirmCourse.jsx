import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext, { AuthContext } from '../../../../context/UserContext/UserContext';

const ConfirmCourse = () => {
    const {user} = UserContext(AuthContext);
    const courseConfirmed = useLoaderData();
    const {title, teacher} = courseConfirmed;
    toast("Congratulations! Well come to our Programming world family");
    return (
        <div className='mt-20 flex h-screen w-screen justify-center items-center'>
            <div>
            <h2 className='text-5xl text-lime-500 font-extrabold'>Congratulation!! Wellcome to our School <br className=' text-red-600' /> you have successfully buy this course</h2>
            <h2 className='text-orange-500 font-bold text-3xl'>{title}!!!</h2>
            <h2 className='font-bold'>Course Start Date and Time: {teacher.course_StartDate}</h2>
            <ToastContainer />
            </div>
        </div>
    );
};

export default ConfirmCourse;