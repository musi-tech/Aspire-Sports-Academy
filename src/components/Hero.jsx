// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowDownward } from 'react-icons/md';
import { Link } from 'react-scroll';

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
      className="bg-[#040404] text-[#D8DBD5] px-5 h-screen flex items-center justify-center flex-col"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to <span className='uppercase'>Aspire Sports Academy</span></h1>
        <p className="text-xl mb-8 text-[#7C7C7C]">Unlock Your Potential, Achieve Your Goals</p>
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
