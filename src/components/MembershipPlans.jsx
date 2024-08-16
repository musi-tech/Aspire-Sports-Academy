// components/MembershipPlans.js
import React from 'react';
import { motion } from 'framer-motion';

const MembershipPlans = () => {
  const plans = [
    {
      title: "Individual Membership",
      price: "₹55,000/-",
      period: "Annually",
      details: [
        "1 Adult",
        "All access to the Sports Club",
        "Individual member is permitted to select any one sport for coaching."
      ]
    },
    {
      title: "Couple Membership",
      price: "₹75,000/-",
      period: "Annually",
      details: [
        "2 Adults",
        "All access to the Sports Club",
        "Any 1 member can choose any one sport for coaching."
      ]
    },
    {
      title: "Family Club Membership",
      price: "₹1,00,000/-",
      period: "Annually",
      details: [
        "2 Adults + 2 kids (Below 13)",
        "All access to the Sports Club",
        "Any 2 members are permitted to select any one sport for coaching."
      ]
    }
  ];

  return (
    <section id="membership-plan" className="py-16 bg-[#1F1F1F] text-[#D8DBD5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#6CD123]">Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#2E2E2E] p-6 rounded-lg border border-[#6CD123] shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#6CD123]">{plan.title}</h3>
              <p className="text-3xl font-bold mb-2 text-[#D8DBD5]">{plan.price}</p>
              <p className="text-lg mb-6 text-[#7C7C7C]">{plan.period}</p>
              <ul className="text-left mb-6">
                {plan.details.map((detail, i) => (
                  <li key={i} className="mb-2 text-[#D8DBD5]">• {detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-[#D8DBD5]">
          <p>Terms and Conditions:</p>
          <p>Offer valid for a limited period.</p>
          <p>Membership rights are reserved by the club.</p>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
