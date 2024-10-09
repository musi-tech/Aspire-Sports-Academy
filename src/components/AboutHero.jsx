// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowDownward } from 'react-icons/md';
import { Link } from 'react-scroll';
import heroImage from '../assets/hero1.jpg'; // Import the image

const Arrow = () => (
  <motion.div
    className="text-[#D8DBD5] text-4xl mt-6 mx-auto"
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: [0, -10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
  >
    <MdArrowDownward />
  </motion.div>
);

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#040404] text-[#D8DBD5] px-5 h-screen flex items-center justify-center flex-col bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }} // Use imported image here
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative text-center">
      <h1 className="text-5xl font-bold mb-4">
  Welcome to <span className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#6CD123] to-[#38BDF8]">
    Aspire Sports
  </span>
</h1>
        <p className="text-2xl mb-8 text-gray-400">Reach New Heights</p>
        <Link
          to="services"
          smooth={true}
          duration={500}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#6CD123] text-[#040404] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#D8DBD5]"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
      <Arrow />
    </motion.section>
  );
};

export default Hero;