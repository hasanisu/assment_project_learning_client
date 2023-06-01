import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <section className="bg-slate-500 text-gray-100 mt-14">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8 ">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Basic concepts of React Authentication</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Some importan issues are shown below</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32 mt-20 mb-14">
			<div className="border p-4 bg-green-600 rounded-lg">
				<h3 className="font-semibold text-2xl">What is CORS?.</h3>
				<p className="mt-1 text-gray-300 text-start">
				CORS is the mechanism that provides the ability to alter the behavior of this policy, 
				enabling you to do things like hosting static content and the backend 
				API. This kind of request would be called a Cross-Origin request, 
				as a resource from one subdomain is requesting a resource from another subdomain.
				</p>
			</div>
			<div className="border p-4 bg-green-600 rounded-lg">
				<h3 className="font-semibold text-2xl">Why are you using firebase?</h3>
				<p className="mt-1 text-gray-300 text-start"> Firebase is Google’s Backend-as-a-Service (BAAS) solution for mobile app development. 
				Originally. The Firebase platform allows for easy integration with IOS, Android, Web, and Unity products. There is a lot to learn about the platform, 
				however in this article we will cover the top five benefits of using Firebase by Google. 
				1.Google Analytics For Firebase
				2.Realtime Database and Firestore
				3.Authentication
				4.Crashlytics
				5.Free Use of Dynamic Links!
				</p>
		        <h2 className="text-start ">What other options do you have to implement authentication!!</h2>
				<p className="mt-1 text-gray-300 text-start">
				<li>Passport..</li>
				<li>Okta..</li>
				<li>Keycloak..</li>
				<li>Amazon Cognito..</li>
				<li>JSON Web Token..</li>
				</p>
			</div>
			<div className="border p-4 bg-green-600 rounded-lg">
				<h3 className="font-semibold text-2xl">What is Node? How does Node work?</h3>
				<p className="mt-1 text-gray-300 text-start">Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p><br/>
				<p className="text-start">Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                    Node.js basically works on two concept

                 Asynchronous
                 Non-blocking I/O</p>
			</div>
			<div className="border p-4 bg-green-600 rounded-lg">
				<h3 className="font-semibold text-2xl">How does the private route work?</h3>
				<p className="mt-1 text-gray-300 text-start">Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blogs;