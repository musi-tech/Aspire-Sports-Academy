import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const logo = require('../assets/logo.svg').default;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-2 px-6 fixed w-full z-20 shadow-xl backdrop-blur-lg"
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/home">
          <img
            src={logo}
            alt="logo"
            className="h-16 w-auto lg:h-20 cursor-pointer transition-transform transform hover:scale-105"
          />
        </Link>

        {/* Menu Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-3xl focus:outline-none z-50"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <ul
          className={`lg:flex space-y-5 lg:space-y-0 lg:space-x-8 absolute lg:static top-20 right-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-all duration-500 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:translate-x-0`}
        >
          {[
            { to: '/home', text: 'Home' },
            { to: '/about', text: 'About Us' },
            { to: '/sports', text: 'Event' },
            { to: '/service', text: 'Coaching' },
            { to: '/sports', text: 'Turf' },
            { to: '/membership', text: 'Membership' },
            { to: '/contact', text: 'Contact Us' },
          ].map((link, index) => (
            <li
              key={index}
              className="text-center text-lg font-medium transition-colors"
            >
              <Link
                to={link.to}
                className="flex items-center justify-center lg:justify-start hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Chat With Us Button */}
        <a
          href="https://drive.google.com/file/d/1NjfC5RDxMF1zdAIqfOtddKgKuQSOKL4x/view?usp=drive_link"
          className="inline-block bg-[#6CD123] hover:bg-[#5BB61D] text-[#FFFFFF] px-8 py-3 mt-1 rounded-xl font-bold hover:scale-105 transition-transform duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Brochure
        </a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
