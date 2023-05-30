import React from 'react';

const Contacts = () => {
    return (
        <div className='bg-slate-500'>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto  md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100 mt-14">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2 mt-6 mb-20">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aDM34TpLRnqZTIXNJI4smivVDTp05WXSffxs_7nGZEMKkgzkYs0Tm3t4lxCTz7YfwNk&usqp=CAU" alt="" className="p-6 h-52 md:h-80" />
                </div>
                <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid mt-24">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-base-200" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded bg-base-200" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded bg-base-200"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;