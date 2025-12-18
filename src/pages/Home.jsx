import React from 'react';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-yellow-400 text-6xl animate-float">🏋️</div>
        <div className="absolute top-20 right-20 text-orange-400 text-5xl animate-float" style={{ animationDelay: '1s' }}>⚡</div>
        <div className="absolute bottom-20 left-20 text-yellow-400 text-4xl animate-float" style={{ animationDelay: '2s' }}>💪</div>
        <div className="absolute bottom-10 right-10 text-orange-400 text-7xl animate-float" style={{ animationDelay: '0.5s' }}>🏆</div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-4">Welcome to JYM</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Build Strength, Achieve Greatness</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-lg transition">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;