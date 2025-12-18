import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-yellow-400 mb-8">Contact Us</h1>
            <form className="max-w-md mx-auto">
                <input type="text" placeholder="Name" className="w-full p-3 mb-4 bg-gray-800 text-white rounded" />
                <input type="email" placeholder="Email" className="w-full p-3 mb-4 bg-gray-800 text-white rounded" />
                <textarea placeholder="Message" className="w-full p-3 mb-4 bg-gray-800 text-white rounded"></textarea>
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-lg transition">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;