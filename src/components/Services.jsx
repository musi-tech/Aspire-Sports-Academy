// components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaRunning, FaBasketballBall } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaTrophy />,
      title: 'B2B Facilities',
      description: 'Access to top-notch stadiums, turfs, and swimming pools for various sports.',
    },
    {
      icon: <FaRunning />,
      title: 'Coaching Packages',
      description: 'Expert coaching in 12 different sports to help you reach your peak performance.',
    },
    {
      icon: <FaBasketballBall />,
      title: 'Memberships',
      description: 'Flexible membership options for individuals, couples, and families.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-[#040404] text-[#D8DBD5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#6CD123]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1F1F1F] p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[#6CD123] text-white p-4 rounded-full text-5xl">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
