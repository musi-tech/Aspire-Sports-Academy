// components/Navbar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaDumbbell, FaEnvelope, FaBars, FaTimes, FaFootballBall } from 'react-icons/fa';
import { MdCardMembership, MdInfo } from "react-icons/md";
import { Link } from 'react-router-dom';
const logo = require('../assets/logo.svg').default;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-2 px-6 fixed w-full z-20 shadow-xl backdrop-blur-md"
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <img src={logo} alt="logo" className="h-16 w-auto lg:h-24 cursor-pointer" />
        
        {/* Menu Button for Mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-white text-3xl focus:outline-none z-50">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Navbar Links */}
        <ul
          className={`lg:flex space-y-5 lg:space-y-0 lg:space-x-10 absolute lg:static top-20 right-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}
        >
          {/* Mobile Links */}
          {[
            { to: '/home', icon: <FaHome className="mr-2" />, text: 'Home' },
            { to: '/about', icon: <MdInfo className="mr-2" />, text: 'About' },
            { to: '/service', icon: <FaDumbbell className="mr-2" />, text: 'Services' },
            { to: '/sports', icon: <FaFootballBall className="mr-2" />, text: 'Sports' },
            { to: '/membership', icon: <MdCardMembership className="mr-2" />, text: 'Membership' },
            { to: '/contact', icon: <FaEnvelope className="mr-2" />, text: 'Contact' },
          ].map((link, index) => (
            <li key={index} className="lg:hidden text-center mb-4 text-lg font-medium">
              <Link to={link.to} className="flex items-center justify-center hover:text-green-400 transition-colors" onClick={() => setIsOpen(false)}>
                {link.icon} {link.text}
              </Link>
            </li>
          ))}

          {/* Desktop Links */}
          {[
            { to: '/home', icon: <FaHome className="mr-2" />, text: 'Home' },
            { to: '/about', icon: <MdInfo className="mr-2" />, text: 'About' },
            { to: '/service', icon: <FaDumbbell className="mr-2" />, text: 'Services' },
            { to: '/sports', icon: <FaFootballBall className="mr-2" />, text: 'Sports' },
            { to: '/membership', icon: <MdCardMembership className="mr-2" />, text: 'Membership' },
            { to: '/contact', icon: <FaEnvelope className="mr-2" />, text: 'Contact' },
          ].map((link, index) => (
            <li key={index} className="hidden lg:flex items-center text-lg font-medium">
              <Link to={link.to} className="flex items-center hover:text-green-400 transition-colors">
                {link.icon} {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
