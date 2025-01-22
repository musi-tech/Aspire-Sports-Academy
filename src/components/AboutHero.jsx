// components/AboutHero.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import aboutImage from '../assets/C5.webp'; // Replace with your about page image

const AboutHero = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#0A0A0A] text-white px-5 h-screen flex items-center justify-center flex-col bg-cover bg-center relative"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      {/* Overlay for darkening the background image */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl font-extrabold mb-6 leading-tight"
        >
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6CD123] to-[#38BDF8]">Aspire Sports</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto"
        >
          We are committed to excellence in sports, helping athletes reach their peak potential. With world-class facilities, expert coaching, and a community built on passion, Aspire Sports is the place where champions are born.
        </motion.p>

        <Link
          to="facilities"
          smooth={true}
          duration={500}
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#6CD123] to-[#38BDF8] text-black px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl"
          >
            Discover Our Facilities
          </motion.button>
        </Link>
      </div>

      {/* Bottom arrow indicating scroll */}
      <motion.div
        className="text-[#6CD123] text-5xl mt-8 mx-auto absolute bottom-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
      >
        <Link to="facilities" smooth={true} duration={500}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default AboutHero;
