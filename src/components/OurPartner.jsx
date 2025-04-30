import React from "react";
import PartnerCard from "./PartnerCard";

const partners = [
  {
    id: 1,
    logo: require("../assets/swi.jpg"),
    name: "Waveline Sports Pvt. Ltd.",
    description: `We hold the Master License to conduct the Michael Phelps Swimming Program across India.
    
With a mission to provide high-quality swim instruction with unsurpassed customer service, Waveline Sports Pvt. Ltd. started operations in the year 2015.

Today, that principle remains the backbone of our company which has expanded to more than 25 locations across the subcontinent.

We provide consistent, superior instruction at each of our centers with an optimum learning environment year-round. Each instructor is hand-picked for their love of swimming and trained to help every swimmer reach their full potential.`,
  },
  // You can add more partners here as needed
];

const OurPartners = () => {
  return (
    <div className="bg-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Stylish header section */}
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-widest text-green-600 mb-2">Collaborations</h2>
          <h1 className="text-5xl font-bold text-white mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">Partners</span></h1>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>
        
        {/* Partners display section */}
        <div className="flex flex-wrap justify-center">
          {partners.map((partner) => (
            <div key={partner.id} className="w-full lg:w-10/12 xl:w-8/12 mb-12">
              <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform transition duration-300 hover:scale-102 hover:shadow-green-400/20">
                <div className="flex flex-col md:flex-row">
                  {/* Logo section */}
                  <div className="md:w-1/3 p-8 flex items-center justify-center bg-gray-900">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-64 object-contain rounded-lg"
                    />
                  </div>
                  
                  {/* Content section */}
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] mb-4">
                      {partner.name}
                    </h3>
                    <div className="prose prose-lg prose-invert">
                      {partner.description.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-300">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="mt-6">
                      <button className="px-6 py-3 bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] hover:bg-green-600 text-black font-bold rounded-full transition duration-300 transform hover:-translate-y-1">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;