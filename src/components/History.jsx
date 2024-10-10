import React from 'react';
import { FaTrophy, FaStar, FaFlag, FaMedal } from 'react-icons/fa';

const ClubHistory = () => {
  return (
    <div className="bg-black py-16 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Our <span className="text-[#6CD123]">Club History</span>
        </h2>
        <p className="text-lg text-gray-400">
          A journey of excellence, from humble beginnings to creating champions.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-7xl mx-auto">
        <div className="border-l border-gray-700">
          {/* Timeline Entry 1 */}
          <div className="mb-10 ml-10">
            <div className="flex items-center mb-1">
              <div className="bg-[#6CD123] text-white rounded-full p-4 shadow-lg">
                <FaFlag className="text-2xl" />
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-white">
                2005 - Club Founded
              </h3>
            </div>
            <p className="text-gray-400 text-lg ml-14">
              Aspire Sports Club was established with a vision to promote sportsmanship, health, and excellence. From our modest start, we’ve grown into a community committed to nurturing athletic talent.
            </p>
          </div>

          {/* Timeline Entry 2 */}
          <div className="mb-10 ml-10">
            <div className="flex items-center mb-1">
              <div className="bg-[#6CD123] text-white rounded-full p-4 shadow-lg">
                <FaTrophy className="text-2xl" />
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-white">
                2010 - First Championship Victory
              </h3>
            </div>
            <p className="text-gray-400 text-lg ml-14">
              In just five years, we celebrated our first major victory, marking the start of a tradition of excellence in both regional and national tournaments.
            </p>
          </div>

          {/* Timeline Entry 3 */}
          <div className="mb-10 ml-10">
            <div className="flex items-center mb-1">
              <div className="bg-[#6CD123] text-white rounded-full p-4 shadow-lg">
                <FaMedal className="text-2xl" />
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-white">
                2015 - National Recognition
              </h3>
            </div>
            <p className="text-gray-400 text-lg ml-14">
              Our athletes gained national recognition, with multiple players representing our club in prestigious national events and championships.
            </p>
          </div>

          {/* Timeline Entry 4 */}
          <div className="mb-10 ml-10">
            <div className="flex items-center mb-1">
              <div className="bg-[#6CD123] text-white rounded-full p-4 shadow-lg">
                <FaStar className="text-2xl" />
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-white">
                2020 - Expansion and New Facilities
              </h3>
            </div>
            <p className="text-gray-400 text-lg ml-14">
              With growing membership and achievements, we expanded our facilities to include state-of-the-art gyms, training centers, and world-class fields.
            </p>
          </div>

          {/* Timeline Entry 5 */}
          <div className="ml-10">
            <div className="flex items-center mb-1">
              <div className="bg-[#6CD123] text-white rounded-full p-4 shadow-lg">
                <FaTrophy className="text-2xl" />
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-white">
                Present - Continuing the Legacy
              </h3>
            </div>
            <p className="text-gray-400 text-lg ml-14">
              Today, Aspire Sports Club stands as a beacon of excellence, helping athletes reach their peak potential and creating champions in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubHistory;
