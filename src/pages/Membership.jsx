import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';


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
    },
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
    <>
    <Header />
    <section id="membership-plan" className="py-16 bg-gradient-to-r from-[#1F1F1F] to-[#2C2C2C] text-[#D8DBD5]">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
          Membership Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-xl bg-gradient-to-br from-[#2E2E2E] to-[#454545] shadow-lg group hover:shadow-2xl hover:bg-gradient-to-bl hover:from-[#6CD123] hover:to-[#3A8C12] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B5FF4D] transition-all duration-500"></div>
              <div className="relative text-center">
                <h3 className="text-3xl font-bold mb-4 text-[#6CD123] group-hover:text-white transition-colors duration-500">
                  {plan.title}
                </h3>
                <p className="text-4xl font-extrabold mb-2 text-[#D8DBD5] group-hover:text-white transition-colors duration-500">
                  {plan.price}
                </p>
                <p className="text-lg mb-6 text-[#7C7C7C] group-hover:text-[#D8DBD5] transition-colors duration-500">
                  {plan.period}
                </p>
                <ul className="text-left space-y-3 text-[#D8DBD5]">
                  {plan.details.map((detail, i) => (
                    <li key={i} className="relative pl-5 before:absolute before:content-['•'] before:left-0 before:text-[#6CD123] group-hover:before:text-white transition-colors duration-500">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Testimonials />
    <Footer />
    </>
  );
};

export default MembershipPlans;
