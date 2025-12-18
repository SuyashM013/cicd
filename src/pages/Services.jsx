import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Personal Training</h2>
          <p className="text-gray-300">One-on-one sessions tailored to your goals.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Group Classes</h2>
          <p className="text-gray-300">High-energy classes like HIIT and yoga.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Membership Plans</h2>
          <p className="text-gray-300">Flexible plans for all fitness levels.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;