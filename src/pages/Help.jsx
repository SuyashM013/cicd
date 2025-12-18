import React from 'react';

const Help = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-yellow-400 mb-8">Help & Support</h1>
            <p className="text-gray-300 mb-4">Frequently Asked Questions:</p>
            <div className="space-y-4">
                <div>
                    <h3 className="text-orange-400 font-bold">How do I sign up?</h3>
                    <p className="text-gray-300">Visit our contact page or call us directly.</p>
                </div>
                <div>
                    <h3 className="text-orange-400 font-bold">What are the membership fees?</h3>
                    <p className="text-gray-300">Check our services page for details.</p>
                </div>
            </div>
        </div>
    );
};

export default Help;