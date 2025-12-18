import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 JYM Gym. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-yellow-400 hover:text-orange-400">Facebook</a>
          <a href="#" className="text-yellow-400 hover:text-orange-400">Instagram</a>
          <a href="#" className="text-yellow-400 hover:text-orange-400">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;