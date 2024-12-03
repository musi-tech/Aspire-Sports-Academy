import React from 'react';
import { FaBalanceScale, FaChartLine, FaCalendarCheck } from 'react-icons/fa';

const OurMission = () => {
  return (
    <div className="bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A] text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Our <span className="text-[#6CD123]">Mission</span>
        </h2>
        <p className="text-lg text-gray-400">
          Inspiring excellence, fostering growth, and empowering athletes to achieve their highest potential.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Mission Block 1 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#1F1F1F] to-[#333333] rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="bg-[#6CD123] text-white rounded-full p-6 mb-6">
            <FaBalanceScale className="text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Encouraging Balanced Living</h3>
          <p className="text-lg text-gray-400">
            Promoting a healthy balance between physical activity, mental well-being, and personal development to support a fulfilling life.
          </p>
        </div>

        {/* Mission Block 2 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#1F1F1F] to-[#333333] rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="bg-[#6CD123] text-white rounded-full p-6 mb-6">
            <FaChartLine className="text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Supporting Talent and Growth</h3>
          <p className="text-lg text-gray-400">
            Cultivating an environment where individuals of all skill levels can unlock their potential, refine their talents, and achieve personal and athletic growth.
          </p>
        </div>

        {/* Mission Block 3 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#1F1F1F] to-[#333333] rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="bg-[#6CD123] text-white rounded-full p-6 mb-6">
            <FaCalendarCheck className="text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Host Exceptional Corporate Events</h3>
          <p className="text-lg text-gray-400">
            Offer versatile spaces and top-tier facilities for team-building activities, sports tournaments, and other corporate events designed to inspire collaboration and camaraderie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
