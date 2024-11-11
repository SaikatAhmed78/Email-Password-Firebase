import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import error from '../../src/assets/download.jpeg'

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <div className="text-center p-8 rounded-lg shadow-2xl bg-white text-gray-800">
                <h1 className="text-8xl font-bold mb-4 animate-slideDown">404</h1>
                <h2 className="text-3xl font-semibold mb-4 animate-fadeInUp">Page Not Found</h2>
                <p className="mb-6 text-gray-600 animate-fadeInUp">Sorry, the page you're looking for doesn't exist.</p>
                <Link to="/" className="flex items-center justify-center space-x-2 bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 animate-fadeInUp">
                    <FaHome className="mr-2" /> 
                    <span>Back to Home</span>
                </Link>
                <div className="mt-8">
                    <img src={error} className="mx-auto rounded-md shadow-md max-w-full h-auto animate-fadeInUp" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
