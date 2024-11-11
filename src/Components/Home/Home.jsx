import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/fitness image.png'

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center rounded-lg">
            <div className="container mx-auto text-center p-6">
                <h1 className="text-6xl font-bold mb-4 animate-slideDown">Welcome to Fitness Heaven</h1>
                <p className="text-xl mb-8 px-6 md:px-20 lg:px-40 animate-fadeInUp">
                    Join our community and take the first step towards a healthier, happier life. We provide a variety of resources and tools to help you reach your fitness goals.
                </p>
                <div className="flex justify-center space-x-4 mb-12 animate-fadeInUp">
                    <Link to="/signup" className="px-8 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-700 transform transition-all duration-300 hover:scale-105">
                        Get Started
                    </Link>
                    <Link to="/login" className="px-8 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transform transition-all duration-300 hover:scale-105">
                        Login
                    </Link>
                </div>
                <div className="relative animate-fadeInUp">
                    <img src={image} className="mx-auto rounded-xl shadow-2xl max-w-md md:max-w-lg" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                            <h2 className="text-2xl font-bold">Your Journey Starts Here</h2>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-3xl font-bold mb-4 animate-fadeInUp">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInUp">
                        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                            <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
                            <p>Get trained by professional trainers who will guide you through every step of your fitness journey.</p>
                        </div>
                        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                            <h3 className="text-xl font-semibold mb-2">Customized Plans</h3>
                            <p>Receive personalized workout plans tailored to your specific needs and goals.</p>
                        </div>
                        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                            <p>Join a supportive community of fitness enthusiasts who are always there to motivate and inspire you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

