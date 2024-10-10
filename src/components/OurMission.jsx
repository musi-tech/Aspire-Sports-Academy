import React from 'react';
import { FaBullseye, FaRunning, FaHeartbeat } from 'react-icons/fa';

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
            <FaBullseye className="text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Developing Champions</h3>
          <p className="text-lg text-gray-400">
            We are committed to nurturing the next generation of champions through holistic training and discipline.
          </p>
        </div>

        {/* Mission Block 2 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#1F1F1F] to-[#333333] rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="bg-[#6CD123] text-white rounded-full p-6 mb-6">
            <FaRunning className="text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Promoting Fitness & Health</h3>
          <p className="text-lg text-gray-400">
            Aspire Sports Club promotes a healthy lifestyle and fitness culture by engaging athletes in comprehensive training programs.
          </p>
        </div>

        {/* Mission Block 3 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#1F1F1F] to-[#333333] rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="bg-[#6CD123] text-white rounded-full p-6 mb-6">
            <FaHeartbeat className="text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Building Community & Spirit</h3>
          <p className="text-lg text-gray-400">
            We foster a strong sense of community, encouraging teamwork, mutual respect, and unity among athletes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
