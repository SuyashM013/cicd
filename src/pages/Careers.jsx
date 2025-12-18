import React from 'react';

const Careers = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-yellow-400 mb-8">Careers at JYM</h1>
            <p className="text-gray-300 mb-4">Join our team and help others achieve their fitness goals.</p>
            <ul className="text-gray-300">
                <li className="mb-2">Personal Trainer</li>
                <li className="mb-2">Front Desk Staff</li>
                <li className="mb-2">Nutritionist</li>
            </ul>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-lg transition">
                Apply Now
            </button>
        </div>
    );
};

export default Careers;