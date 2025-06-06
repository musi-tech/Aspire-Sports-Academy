import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const logo = require('../assets/logo.svg').default;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/home', text: 'Home' },
    { to: '/about', text: 'About Us' },
    { to: '/sports', text: 'Sports' },
    { to: '/service', text: 'Services' },
    { to: '/membership', text: 'Membership' },
    { to: '/contact', text: 'Contact Us' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-2 px-6 fixed w-full z-20 shadow-xl backdrop-blur-lg"
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/home">
          <img
            src={logo}
            alt="logo"
            className="h-16 w-auto lg:h-20 cursor-pointer transition-transform transform hover:scale-105"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-3xl focus:outline-none z-50"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <div
          className={`lg:flex items-center justify-center lg:space-x-10 absolute lg:static top-20 right-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-all duration-500 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-8 py-6 lg:py-0 text-center lg:text-left">
            {navLinks.map((link, index) => (
              <li key={index} className="text-lg font-medium">
                <Link
                  to={link.to}
                  className="hover:text-green-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}

            {/* Brochure Button - Mobile only */}
            <li className="block lg:hidden">
              <a
                href="https://drive.google.com/file/d/1TOHQP0nzPEik_xDb62yECUW_hxFQwejj/view?usp=sharing"
                className="inline-block bg-[#6CD123] hover:bg-[#5BB61D] text-white px-6 py-3 rounded-xl font-bold transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Brochure
              </a>
            </li>
          </ul>
        </div>

        {/* Brochure Button - Desktop only */}
        <div className="hidden lg:block">
          <a
            href="https://drive.google.com/file/d/1TOHQP0nzPEik_xDb62yECUW_hxFQwejj/view?usp=sharing"
            className="inline-block bg-[#6CD123] hover:bg-[#5BB61D] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Brochure
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
