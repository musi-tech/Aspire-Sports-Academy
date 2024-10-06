import React from 'react';
import { motion } from 'framer-motion';
import { FaSwimmer, FaVolleyballBall } from 'react-icons/fa';
import { GiCricketBat, GiGymBag } from 'react-icons/gi';
import { IoFootball } from "react-icons/io5";
import { MdOutlineSportsTennis, MdSportsBasketball } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { TbYoga } from "react-icons/tb";
import { PiBoxingGloveFill } from "react-icons/pi";
import { RiPingPongFill } from "react-icons/ri";
import Header from '../components/Header';
import Footer from '../components/Footer';

const sports = [
  { name: 'Swimming', icon: <FaSwimmer />},
  { name: 'Cricket', icon: <GiCricketBat />},
  { name: 'Football', icon: <IoFootball />},
  { name: 'Toddler Discovery Program', icon: <CgGym /> },
  { name: 'Volleyball', icon: <FaVolleyballBall /> },
  { name: 'Boxing', icon: <PiBoxingGloveFill /> },
  { name: 'Badminton', icon: <MdOutlineSportsTennis /> },
  { name: 'Lawn Tennis', icon: <MdOutlineSportsTennis /> },
  { name: 'Yoga', icon: <TbYoga /> },
  { name: 'Gymnastic', icon: <GiGymBag /> },
  { name: 'Basketball', icon: <MdSportsBasketball /> },
  { name: 'Pickleball', icon: <RiPingPongFill /> },
];

const SportsOffered = () => {
  return (
    <>
    <Header />
    <section id="sports" className="py-16 bg-gradient-to-r from-[#040404] to-[#0A0A0A] text-[#D8DBD5]">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
          Sports We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-xl shadow-lg hover:shadow-2xl bg-gradient-to-br from-[#1F1F1F] to-[#333333] group overflow-hidden hover:bg-gradient-to-bl hover:from-[#6CD123] hover:to-[#3A8C12] transition-all duration-500"
            >
              <div className="absolute inset-0 w-full h-full border-2 border-transparent group-hover:border-[#B5FF4D] transition-all duration-500"></div>
              <div className="relative flex flex-col items-center justify-center text-center">
                <motion.div
                  className="mb-6 text-5xl text-[#6CD123] group-hover:text-white transform transition-transform duration-500 group-hover:rotate-12"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  {sport.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-[#D8DBD5] group-hover:text-white transition-colors duration-500 mb-3">
                  {sport.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-10 text-sm text-[#6CD123]">--------- Terms And Conditions Applied ---------</p>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default SportsOffered;
