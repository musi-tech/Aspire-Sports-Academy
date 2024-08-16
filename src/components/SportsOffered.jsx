import React from 'react';
import { motion } from 'framer-motion';
import { FaSwimmer, FaVolleyballBall, FaBoxing } from 'react-icons/fa';
import { GiCricketBat, GiGymBag } from 'react-icons/gi';
import { IoFootball } from "react-icons/io5";
import { MdOutlineSportsTennis, MdSportsBasketball } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { TbYoga } from "react-icons/tb";
import { PiBoxingGloveFill } from "react-icons/pi";
import { RiPingPongFill } from "react-icons/ri";

const sports = [
  { name: 'Swimming', icon: <FaSwimmer />, pricing: { monthly: '₹ 3,000/-', quarterly: '₹ 8,100/-' } },
  { name: 'Cricket', icon: <GiCricketBat />, pricing: { monthly: '₹ 2,500/-', quarterly: '₹ 6,750/-' } },
  { name: 'Football', icon: <IoFootball />, pricing: { monthly: '₹ 2,500/-', quarterly: '₹ 5,900/-' } },
  { name: 'Toddler Discovery Program', icon: <CgGym />, pricing: { monthly: '₹ 2,500/-' } },
  { name: 'Volleyball', icon: <FaVolleyballBall />, pricing: { monthly: '₹ 2,500/-' } },
  { name: 'Boxing', icon: <PiBoxingGloveFill />, pricing: { monthly: '₹ 3,000/-', quarterly: '₹ 8,100/-' } },
  { name: 'Badminton', icon: <MdOutlineSportsTennis />, pricing: { monthly: '₹ 2,500/-' } },
  { name: 'Lawn Tennis', icon: <MdOutlineSportsTennis />, pricing: { monthly: '₹ 2,500/-' } },
  { name: 'Yoga', icon: <TbYoga />, pricing: { monthly: '₹ 1,800/-', quarterly: '₹ 4,860/-' } },
  { name: 'Gymnastic', icon: <GiGymBag />, pricing: { monthly: '₹ 2,000/-' } },
  { name: 'Basketball', icon: <MdSportsBasketball />, pricing: { monthly: '₹ 1,500/-' } },
  { name: 'Pickleball', icon: <RiPingPongFill />, pricing: { monthly: '₹ 2,500/-' } },
];

const SportsOffered = () => {
  return (
    <section id="sports" className="py-16 bg-[#040404] text-[#D8DBD5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#6CD123]">Sports We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center hover:bg-[#6CD123] hover:text-[#040404] transition-colors duration-300"
            >
              <div className="mb-4 text-4xl text-[#6CD123]">
                {sport.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{sport.name}</h3>
              <div className="mt-2">
                <p>Monthly: {sport.pricing.monthly}</p>
                {sport.pricing.quarterly && <p>Quarterly: {sport.pricing.quarterly}</p>}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm">--------- Terms And Conditions Applied ---------</p>
      </div>
    </section>
  );
};

export default SportsOffered;