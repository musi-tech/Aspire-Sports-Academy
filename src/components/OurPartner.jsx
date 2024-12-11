// OurPartners.jsx
import React from "react";
import PartnerCard from "./PartnerCard"; // Import PartnerCard component

const partners = [
  {
    id: 1,
    logo: require("../assets/swi.jpg"), // Correct way to use require for images
    name: "Partner 1",
    description: `We, at WAVELINE SPORTS PVT. LTD., hold the Master License to conduct the Michael Phelps Swimming Program across India.

With a mission to provide high-quality swim instruction with unsurpassed customer service, Waveline Sports Pvt. Ltd. started operations in the year 2015.

Today, that principle remains the backbone of our company which has expanded to more than 25 locations across the subcontinent.

With this passion for the sport of swimming, it’s important to us to provide consistent, superior instruction at each of our centers where we make sure to provide an optimum learning environment year-round.

More importantly, each of our instructors is hand-picked for their love of the sport of swimming and trained to provide quality swim instruction for every swimmer of every ability to reach their full potential.`,
  },
];

const OurPartners = () => {
  return (
    <div className="bg-black min-h-screen py-10">
      <h1 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
        Our Partners
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {partners.map((partner) => (
          <PartnerCard
            key={partner.id}
            logo={partner.logo}
            name={partner.name}
            description={partner.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
