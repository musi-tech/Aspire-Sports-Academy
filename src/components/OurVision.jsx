import React from 'react';
import { FaTrophy, FaUsers, FaLightbulb } from 'react-icons/fa';

const OurVision = () => {
  return (
    <div className="bg-black py-16 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Our <span className="text-[#6CD123]">Vision</span>
        </h2>
        <p className="text-lg text-gray-400">
          A future where sports excellence is a way of life, and every athlete is empowered to reach their peak potential.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Vision Block 1 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#1F1F1F] to-[#333333] rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="bg-[#6CD123] text-white rounded-full p-6 mb-6">
            <FaTrophy className="text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Creating Champions</h3>
          <p className="text-lg text-gray-400">
            Our vision is to build a legacy of champions who set benchmarks of excellence in every arena.
          </p>
        </div>

        {/* Vision Block 2 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#1F1F1F] to-[#333333] rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="bg-[#6CD123] text-white rounded-full p-6 mb-6">
            <FaUsers className="text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Inclusive Sports Community</h3>
          <p className="text-lg text-gray-400">
            Aspire Sports Club envisions a thriving community where every individual, regardless of background, can engage in sports and grow.
          </p>
        </div>

        {/* Vision Block 3 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#1F1F1F] to-[#333333] rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="bg-[#6CD123] text-white rounded-full p-6 mb-6">
            <FaLightbulb className="text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Innovating Sports Training</h3>
          <p className="text-lg text-gray-400">
            We aim to revolutionize the way athletes train and develop by incorporating cutting-edge technology and innovative methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
