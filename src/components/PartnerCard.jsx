
// PartnerCard.jsx
import React from "react";

const PartnerCard = ({ logo, name, description }) => {
  return (
    <div className="relative p-8 rounded-xl bg-gradient-to-br from-[#2E2E2E] to-[#454545] shadow-lg group hover:shadow-2xl hover:bg-gradient-to-bl hover:from-[#6CD123] hover:to-[#3A8C12] transition-all duration-500 overflow-hidden">
      <img src={logo} alt={name} className="w-62 h-32 object-cover mx-auto mb-4" />
      <h2 className="text-2xl font-semibold text-center mb-2 text-[#6CD123]">{name}</h2>
      <p className="text-center text-white">{description}</p>
    </div>
  );
};

export default PartnerCard;
