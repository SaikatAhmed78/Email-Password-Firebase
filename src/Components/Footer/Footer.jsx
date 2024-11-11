import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-10 mt-10">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="mb-6">
                        <h5 className="text-xl font-bold mb-4">About Us</h5>
                        <p className="text-gray-400">
                            We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes, and transformation stories, we bring health and fitness to your fingertips.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h5 className="text-xl font-bold mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h5 className="text-xl font-bold mb-4">Follow Us</h5>
                        <p className="text-gray-400 mb-4">
                            Stay connected with us through social platforms. Follow us for the latest updates, workouts, and fitness tips.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-600 pt-4 text-center">
                    <p className="text-gray-400">
                        &copy; 2024 Fitness Heaven. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
