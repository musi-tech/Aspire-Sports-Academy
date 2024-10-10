import React from 'react';

const AgencyStory = () => {
  return (
    <div className="bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Aspire <span className="text-[#6CD123]">Story</span>
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Discover our journey, values, and commitment to excellence in sports.
          </p>
          <p className="text-base text-gray-300 mb-6 leading-relaxed">
            At Aspire Sports, we believe in unlocking the potential of every athlete through exceptional coaching, state-of-the-art facilities, and an unyielding passion for sports. From our humble beginnings to becoming a premier destination for sports training, our story is one of growth, dedication, and success.
          </p>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            Our team of professional coaches and sports experts strives to nurture talent, cultivate sportsmanship, and drive athletes to achieve their personal best. We are more than just a club—we are a family united by the love of sports, empowering athletes to rise above challenges and reach new heights.
          </p>
          <a
            href="/about"
            className="inline-block text-center px-6 py-3 bg-gradient-to-r from-[#6CD123] to-[#38BDF8] text-white text-base font-medium rounded-full shadow-lg hover:from-[#38BDF8] hover:to-[#6CD123] transition duration-300"
          >
            Learn More About Us
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={require('../assets/C8.jpg')}
            alt="Aspire Sports Academy"
            className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AgencyStory;
