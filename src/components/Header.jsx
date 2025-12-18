import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-yellow-400">JYM</Link>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-orange-400 transition">Home</Link>
                    <Link to="/about" className="hover:text-orange-400 transition">About</Link>
                    <Link to="/services" className="hover:text-orange-400 transition">Services</Link>
                    <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
                    <Link to="/careers" className="hover:text-orange-400 transition">Careers</Link>
                    <Link to="/help" className="hover:text-orange-400 transition">Help</Link>
                </nav>
                <button
                    className="md:hidden text-yellow-400"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-800 py-4">
                    <Link to="/" className="block px-4 py-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="block px-4 py-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/services" className="block px-4 py-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/contact" className="block px-4 py-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to="/careers" className="block px-4 py-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>Careers</Link>
                    <Link to="/help" className="block px-4 py-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>Help</Link>
                </div>
            )}
        </header>
    );
};

export default Header;