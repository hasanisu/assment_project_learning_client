import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const { userLogin, loginWithGoogle, loginWithGithub, setLoader } = useContext(AuthContext);
  const [error, setError] = useState();
  const [googleError, setgoogleError] = useState();
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess(false)

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError(" ");
        
        console.log(user);
        if(user.emailVerified){
            setSuccess(true);
            navigate(from, {replace: true});
        }
        else{
            toast("Your email is not verified, please verify!");
            
        }
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      })
      .finally(()=>{
        setLoader(false);
      })
  };

  const handletoGoogole = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setgoogleError(error.message);
      });
  };

  const handletoGithub = () => {
    loginWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      }); 
  };



  return (
    <div className="hero min-h-screen bg-slate-500 ">
      <div className="hero-content flex-col sm:mt-48 lg:mt-24">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 text-orange-400">
            Dont`t have an account{" "}
            <Link to="/register" className="hover:underline text-indigo-700">
              Please Register
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 lg:w-96 sm:w-86 max-w-sm shadow-2xl bg-slate-300">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-lime-500">Login</button>
            </div>

            <p className="text-red-800">{error}</p>
            <p className="text-red-800">{googleError}</p>
            {success && <p className="text-green-400">Successfully login in your account</p>}

            <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
          </form>


          <div className="divider">OR</div>
          <button onClick={handletoGoogole} className="btn bg-slate-800 w-auto">
            Login with Google
          </button>

          <div className="divider">OR</div>
          <button onClick={handletoGithub} className="btn bg-slate-500 w-auto">
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
