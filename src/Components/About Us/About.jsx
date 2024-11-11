import React from 'react';
import aboutImg from '../../assets/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg'

const AboutUs = () => {
    return (
        <section className="bg-gray-100 mt-10 py-16">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                    <p className="text-lg text-gray-600">Learn more about our mission, vision, and values.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img src={aboutImg} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600 mb-4">
                            At Fitness Heaven, we believe in making fitness accessible to everyone, everywhere. Our mission is to inspire and empower people to lead healthier, more active lives through our professional workouts, nutritious recipes, and motivational stories.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-600 mb-4">
                            Our vision is to create a world where everyone has the opportunity to achieve their fitness goals, regardless of their background or circumstances. We strive to be a leading source of inspiration and support in the fitness community.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Inclusivity: We welcome everyone to join our fitness community.</li>
                            <li>Commitment: We are dedicated to providing high-quality, professional content.</li>
                            <li>Innovation: We constantly strive to bring new and effective fitness solutions.</li>
                            <li>Integrity: We maintain honesty and transparency in everything we do.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

