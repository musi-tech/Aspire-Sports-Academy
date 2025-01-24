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

const sports = [
  { 
    name: 'Swimming', 
    icon: <FaSwimmer />, 
    description: "Master your strokes and boost endurance in our world-class Olympic pools." 
  },
  { 
    name: 'Cricket', 
    icon: <GiCricketBat />, 
    description: "Refine your batting, bowling, and strategy with expert training." 
  },
  { 
    name: 'Football', 
    icon: <IoFootball />, 
    description: "Train like a pro with action-packed drills on premium fields." 
  },
  { 
    name: 'Toddler Discovery Program', 
    icon: <CgGym />, 
    description: "Fuel your toddler’s growth with fun, guided activities." 
  },
  { 
    name: 'Volleyball', 
    icon: <FaVolleyballBall />, 
    description: "Perfect your serves, blocks, and teamwork with professional coaching." 
  },
  { 
    name: 'Boxing', 
    icon: <PiBoxingGloveFill />, 
    description: "Build strength and resilience with high-intensity boxing training." 
  },
  { 
    name: 'Badminton', 
    icon: <MdOutlineSportsTennis />, 
    description: "Sharpen your reflexes and skills with tailored coaching." 
  },
  { 
    name: 'Lawn Tennis', 
    icon: <MdOutlineSportsTennis />, 
    description: "Play like a champion on professional courts with expert guidance." 
  },
  { 
    name: 'Yoga', 
    icon: <TbYoga />, 
    description: "Boost flexibility and find peace through guided yoga sessions." 
  },
  { 
    name: 'Gymnastics', 
    icon: <GiGymBag />, 
    description: "Achieve new heights with expert acrobatic and flexibility training." 
  },
  { 
    name: 'Basketball', 
    icon: <MdSportsBasketball />, 
    description: "Improve agility, teamwork, and technique on premium courts." 
  },
  { 
    name: 'Pickleball', 
    icon: <RiPingPongFill />, 
    description: "Enjoy fast-paced fun blending tennis, badminton, and ping-pong." 
  },
];


const SportsOffered = () => {
  return (
    <section id="sports" className="py-20 bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A] text-white">
      <div className="container mx-auto px-8 py-2">
        <h2 className="text-6xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
          Explore Our Sports
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16">
          Join our sports club to get access to world-class coaching, facilities, and a range of sports activities tailored to help you achieve your goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl shadow-lg hover:shadow-2xl bg-gradient-to-r from-[#1F1F1F] to-[#333333] group overflow-hidden hover:bg-gradient-to-l hover:from-[#6CD123] hover:to-[#3A8C12] transition-all duration-500"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B5FF4D] transition-all duration-500"></div>
              <div className="relative flex flex-col items-center justify-center text-center">
                <motion.div
                  className="mb-6 text-6xl text-[#6CD123] group-hover:text-white transition-transform duration-500 group-hover:rotate-[360deg]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  {sport.icon}
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-300 group-hover:text-white transition-colors duration-500 mb-4">
                  {sport.name}
                </h3>
                <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  {sport.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-16 text-gray-500 text-lg">--- Terms and conditions apply ---</p>
      </div>
    </section>
  );
};

export default SportsOffered;
