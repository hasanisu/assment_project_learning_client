import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-slate-500 ">
            <div className="hero-content flex-col sm:mt-48 lg:mt-24">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 text-orange-400">Dont`t have an account <Link to='/register' className='hover:underline text-indigo-700'>Please Register</Link></p>
                </div>
                <div className="card flex-shrink-0 lg:w-96 sm:w-86 max-w-sm shadow-2xl bg-slate-300">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn bg-slate-800 w-auto">Login with Google</button>
                    <div className="divider">OR</div>
                    <button className="btn bg-slate-500 w-auto">Login with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;