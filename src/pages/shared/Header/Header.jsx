import React, { useContext } from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logos from "../../../materials/logos.jpeg";
import logos1 from "../../../materials/111.png";
import { AuthContext } from "../../../context/UserContext/UserContext";
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, userLogout } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    userLogout()
      .then(() => { })
      .catch((error) => { })
  }


  return (
    <div className=" bg-red-700" id="head-part">
      <header className="absolute inset-x-0 top-0 z-50 bg-red-600">
        {/* For Desktop device */}

        <nav
          className="flex items-center justify-between p-2 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-18 rounded-lg" src={logos1} alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 text-2xl text-zinc-200">
            <Link
              className="border border-red-600 py-2 px-4 rounded-lg hover:text-lime-500"
              to="/"
            >
              Home
            </Link>
            <Link to='/courses' className="border border-red-600 py-2  rounded-lg hover:text-lime-500">
              Courses
            </Link>
            <Link to='/blogs' className="border border-red-600 py-2 rounded-lg hover:text-lime-500">
              Blogs
            </Link>
            <Link to='/faq' className="border border-red-600 py-2 rounded-lg hover:text-lime-500">
              FAQ
            </Link>
            

          {/* theme doggle */}
            <label for="Toggle2" className="inline-flex items-center space-x-2 cursor-pointer dark:text-gray-100">
              <span>Light</span>
              <span className="relative">
                <input id="Toggle2" type="checkbox" className="hidden peer" />
                <div className="w-10 h-4 rounded-full shadow bg-slate-300 peer-checked:bg-gray-600"></div>
                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-violet-400"></div>
              </span>
              <span className="text-black">Dark</span>
            </label>

          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end text-xl text-zinc-200">
            <span class="relative flex h-3 w-3 mb-9">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75 ms-10"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>

              {/* Condition Rendering */}
              {
                user?.uid ?
                  <div className="flex ">

                    <div>
                      <Link to="/login" className=" text-red-400">
                        <button onClick={handleLogout} className="btn bg-lime-500">Logout</button>
                      </Link>
                    </div>

                    <div className="tooltip tooltip-center mt-3" data-tip={user.displayName}>
                      {
                        user?.photoURL ?
                          <img className="h-10 w-14 rounded-full " src={user.photoURL} alt="" />
                          :
                          <FaUser className="h-8 w-10 ms-4" />
                      }
                    </div>


                  </div>
                  :

                  <Link

                    to="/login"
                    className="font-semibold leading-4 text-gray-900"
                  >
                    <button className="btn bg-lime-500 px-6">Login</button>
                  </Link>


              }
            </span>
          </div>




          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>




        {/* For Mobile Devise */}



        <Dialog
          as="div"
          className="lg:hidden "
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root bg-red-600 rounded-3xl ps-4">
              <div className="-my-6 divide-y divide-gray-500/10 delay-150">
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link to='/courses' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Courses
                  </Link>
                  <Link to='/blogs' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Blogs
                  </Link>
                  <Link to='/faq' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    FAQ
                  </Link>
                  <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Contact
                  </Link>
                </div>

                <div className="py-10">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Login <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Header;
