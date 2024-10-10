import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUserMd, faThLarge, faEarthAfrica, faMedkit, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

// Sample facilities data with icons
const facilities = [
  {
    title: "Hostel",
    description: "Comfortable and safe accommodation for athletes, providing a conducive environment for training and rest.",
    icon: faBed, // Use Font Awesome icon
  },
  {
    title: "Physiotherapy",
    description: "Professional physiotherapy services to ensure athletes stay fit and recover quickly from injuries.",
    icon: faUserMd, // Use Font Awesome icon
  },
  {
    title: "Sport Mat",
    description: "High-quality sports mats for training in various indoor activities, ensuring safety and performance.",
    icon: faThLarge, // Use Font Awesome icon
  },
  {
    title: "Mud Ground",
    description: "A well-maintained mud ground suitable for various outdoor sports and activities.",
    icon: faEarthAfrica, // Use Font Awesome icon
  },
  {
    title: "Medical Assistance",
    description: "On-site medical support available for immediate care and attention during training and events.",
    icon: faMedkit, // Use Font Awesome icon
  },
  {
    title: "Gym",
    description: "A state-of-the-art gym equipped with modern fitness equipment for strength and conditioning.",
    icon: faWeightHanging, // Use Font Awesome icon
  },
];

const AcademyFacilities = () => {
  return (
    <section id="facilities" className="py-16 bg-gradient-to-br from-[#121212] to-[#1F1F1F] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl text-center font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]"
        >
          Our Facilities
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-[#2E2E2E] p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 relative overflow-hidden flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FontAwesomeIcon icon={facility.icon} className="text-5xl mb-4 text-[#6CD123]" />
              <h3 className="text-3xl font-bold mb-4 text-[#6CD123]">{facility.title}</h3>
              <p className="text-lg mb-4 text-center">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyFacilities;
