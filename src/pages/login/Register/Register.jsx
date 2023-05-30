import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext/UserContext';
import { toast } from "react-hot-toast";

const Register = () => {
    const {createUser, varifyUser} = useContext(AuthContext);
    const [error, setError] = useState();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            form.reset();
            userVerification();
            toast.success('Please verify your email')
            setError('');
            console.log(user)
        })
        .catch(e =>{
            console.error(e)
            setError(e.message);
        })

        const userVerification=()=>{
            varifyUser()
            .then(result=>{
                const user = result.user;
                console.log(user)
            })
            .catch(error =>{
                console.error(error)
            })
        }
    }
    return (
        <div className="hero min-h-screen bg-slate-500 ">
            <div className="hero-content flex-col mt-28">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please create your own accout!</h1>
                    <p className="py-6 text-center text-orange-400">Have an account <Link to="/login" className='text-indigo-700 hover:underline'>Please login</Link></p>
                </div>
                <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-slate-300">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photoURL' type="photoURL" placeholder="photoURL" className="input input-bordered"/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-lime-500">Submit</button>
                        </div>
                        <p>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;