import React from "react";
import DirectorImage from "../assets/director.jpeg"; // Import the image correctly

const DirectorMessage = () => {
  return (
<div className="bg-gradient-to-br from-[#000000] via-[#2c2c2c] to-[#000000] py-10 px-1 md:px-4 lg:px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section - Image and Badge */}
        <div className="relative flex-shrink-0">
          {/* Circular Image */}
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg">
            <img
              src={DirectorImage} // Correct way to reference the imported image
              alt="Director"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-4 -left-4 bg-[#6CD123] text-white font-semibold text-center py-2 px-4 rounded-full shadow-md">
            Director of <br /> Aspire Sports Club
          </div>
        </div>

        {/* Right Section - Main Content */}
        <div className="flex-grow">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Director's <span className="text-[#6CD123]">Message</span>
          </h2>
          <p className="text-lg font-semibold text-[#6CD123] mb-4">
            "Sports is life... it teaches you lessons beyond the field."
          </p>
          <p className="text-lg text-white leading-relaxed mb-4">
            At Aspire Sports Club, we believe in the power of sports to shape
            individuals into leaders, team players, and resilient athletes. Our
            mission is to provide a nurturing environment where every athlete can
            push their limits, develop their skills, and achieve their personal
            best.
          </p>
          <p className="text-lg text-white leading-relaxed">
            We are committed to providing world-class facilities and expert coaching
            to help athletes of all ages and skill levels reach their full potential.
            Whether you’re just starting your journey or are a seasoned competitor,
            Aspire Sports Club is here to support your growth, both on and off the
            field.
          </p>
        </div>
      </div>

      {/* Bottom Section - Additional Text */}
      <div className="mt-10 max-w-5xl mx-auto text-white leading-relaxed px-2 md:px-6">
        <p className="mb-4 text-lg">
          “The only way to prove that you’re a good sport is to lose.” – Ernie Banks.
          At Aspire Sports Club, we emphasize the importance of sportsmanship, discipline,
          and teamwork. We foster an environment where athletes not only compete but
          also develop respect for their peers and coaches, learning lifelong values
          through sports.
        </p>
        <p className="text-lg">
          Our club has built a strong network within the sports community, opening
          doors for our athletes to participate in regional, national, and international
          competitions. With the support of passionate coaches and an enthusiastic
          team, we aim to bring out the best in every athlete and guide them toward
          achieving their athletic and personal goals.
        </p>
      </div>
    </div>
  );
};

export default DirectorMessage;
