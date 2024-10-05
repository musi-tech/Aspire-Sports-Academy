// components/Navbar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaDumbbell, FaUsers, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { MdCardMembership } from "react-icons/md";
import { Link } from 'react-scroll';
const logo = require('../assets/aspire_logo_hori.svg').default;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#040404] text-[#D8DBD5] py-4 px-6 fixed w-full z-10 shadow-lg"
    >
      <nav className="flex items-center justify-between container mx-auto">
        <img src={logo} alt="logo" />
        <button onClick={toggleMenu} className="lg:hidden text-[#D8DBD5] text-2xl z-50">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`lg:flex pl-5 lg:space-x-6 absolute lg:static top-16 right-0 w-full lg:w-auto bg-[#040404] lg:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}
        >
          <li className="lg:hidden text-center mb-4">
            <Link to="home" smooth={true} duration={500} className="flex items-center hover:text-[#6CD123]" onClick={() => setIsOpen(false)}>
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li className="lg:hidden text-center mb-4">
            <Link to="services" smooth={true} duration={500} className="flex items-center hover:text-[#6CD123]" onClick={() => setIsOpen(false)}>
              <FaDumbbell className="mr-2" /> Services
            </Link>
          </li>
          <li className="lg:hidden text-center mb-4">
            <Link to="sports" smooth={true} duration={500} className="flex items-center hover:text-[#6CD123]" onClick={() => setIsOpen(false)}>
              <FaUsers className="mr-2" /> Sports
            </Link>
          </li>
          <li className="lg:hidden text-center mb-4">
            <Link to="contact" smooth={true} duration={500} className="flex items-center hover:text-[#6CD123]" onClick={() => setIsOpen(false)}>
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="home" smooth={true} duration={500} className="flex items-center hover:text-[#6CD123]">
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="services" smooth={true} duration={500} className="flex items-center hover:text-[#6CD123]">
              <FaDumbbell className="mr-2" /> Services
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="sports" smooth={true} duration={500} className="flex items-center hover:text-[#6CD123]">
              <FaUsers className="mr-2" /> Sports
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="membership-plan" smooth={true} duration={500} className="flex items-center hover:text-[#6CD123]">
              <MdCardMembership className="mr-2" /> MemberShip 
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="contact" smooth={true} duration={500} className="flex items-center hover:text-[#6CD123]">
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
