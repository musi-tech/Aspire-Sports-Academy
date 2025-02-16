import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaHandshake, FaVolleyballBall, FaBrain } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-br from-[#1F1F1F] text-white to-[#0A0A0A] py-16 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Why <span className="text-[#6CD123]">Choose Us?</span>
        </h2>
        <p className="text-lg text-gray-400">
          Discover what makes Aspire Sports the perfect place for your athletic journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-[#1F1F1F] to-[#333333] p-8 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaUserGraduate className="text-6xl text-[#6CD123]" />
          </div>
          <h3 className="text-xl font-bold text-white text-center mb-2">
            Certified Coaches
          </h3>
          <p className="text-gray-400 text-center">
            Our coaches are certified professionals, ensuring top-tier guidance and expertise for all athletes.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-[#1F1F1F] to-[#333333] p-8 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaHandshake className="text-6xl text-[#6CD123]" />
          </div>
          <h3 className="text-xl font-bold text-white text-center mb-2">
            Community Spirit
          </h3>
          <p className="text-gray-400 text-center">
            Aspire fosters a strong sense of camaraderie, bringing together athletes of all levels.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-[#1F1F1F] to-[#333333] p-8 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaVolleyballBall className="text-6xl text-[#6CD123]" />
          </div>
          <h3 className="text-xl font-bold text-white text-center mb-2">
            Multisport Facilities
          </h3>
          <p className="text-gray-400 text-center">
            Our facilities cater to a variety of sports, offering versatility and support for athletic growth and fitness.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-[#1F1F1F] to-[#333333] p-8 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaBrain className="text-6xl text-[#6CD123]" />
          </div>
          <h3 className="text-xl font-bold text-white text-center mb-2">
            Holistic Development
          </h3>
          <p className="text-gray-400 text-center">
            We emphasize not just physical fitness but also mental strength and teamwork.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
