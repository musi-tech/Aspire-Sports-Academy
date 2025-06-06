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
         
          <p className="text-base text-gray-300 mb-6 leading-relaxed">
          At Aspire Sports Club, we are dedicated to creating a space where families can come together, stay active, and build meaningful connections. Located in Pune, our club offers a wide range of sports and fitness activities for all ages and skill levels.
          </p>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
          Our mission goes beyond just physical fitness. We provide holistic coaching that nurtures both mental and physical health, ensuring the overall well-being of every individual. Through our programs, we emphasize sportsmanship values, discipline, and resilience, helping members grow as athletes and as individuals.

          </p>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
          With state-of-the-art facilities, certified coaches, and a supportive environment, we inspire a love for sports, develop athletes, and motivate a balanced, healthy lifestyle. Whether you’re here to learn, compete, or simply enjoy quality time, Aspire Sports Club is the perfect destination.
          </p>

          <p className="text-base text-gray-300 mb-8 leading-relaxed">
          Join us to experience a community that celebrates growth, fosters champions, and builds a foundation for lifelong wellness.
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
            src={require('../assets/C8.webp')}
            alt="Aspire Sports Academy"
            className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AgencyStory;
