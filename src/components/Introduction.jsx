import React from 'react';

const AgencyStory = () => {
  return (
    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-gray-100 mb-4">
            About Aspire Story
          </h2>
          <p className="text-lg text-gray-400 mb-4">
            Check out our company story and work process
          </p>
          <p className="text-base text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
          <p className="text-base text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <a
            href="/about"
            className="inline-block w-36 text-center px-4
    py-2 bg-green-500 text-white text-sm font-medium rounded-full shadow-lg hover:bg-green-600 transition"
          >
            More About Us
          </a>

        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="https://funny-daffodil-350bc9.netlify.app/immio.jpg"
            alt="Our Agency Story"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AgencyStory;
