import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaFlag, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SportsServices from '../components/SportsServices';
import Facilities from '../components/Facilities';

const Services = () => {
  const services = [
    {
      icon: <FaCalendarAlt />,
      title: 'Booking',
      description: 'Book our top-notch facilities for your personal or professional events.',
    },
    {
      icon: <FaFlag />,
      title: 'Events',
      description: 'Participate in or host exciting sports events and tournaments.',
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Coaching',
      description: 'Get expert coaching across multiple sports to enhance your skills.',
    },
    {
      icon: <FaUserFriends />,
      title: 'Membership',
      description: 'Join our community with flexible membership plans for individuals and families.',
    },
  ];

  return (
    <>
      <Header />

      <section id="services" className="py-16 bg-gradient-to-r from-[#040404] to-[#0A0A0A] text-[#D8DBD5]">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative p-10 rounded-xl bg-gradient-to-br from-[#1F1F1F] to-[#333333] shadow-lg group hover:shadow-2xl transition-all duration-500 overflow-hidden hover:bg-gradient-to-bl hover:from-[#6CD123] hover:to-[#3A8C12]"
              >
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B5FF4D] transition-all duration-500"></div>
                <div className="relative flex flex-col items-center justify-center text-center">
                  <motion.div
                    className="bg-[#6CD123] p-6 rounded-full text-5xl text-white mb-8 transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#D8DBD5] mb-4 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-lg group-hover:text-[#D8DBD5] transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SportsServices />
      <Footer />
    </>
  );
};

export default Services;
