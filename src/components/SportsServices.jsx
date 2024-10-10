import React from 'react';
import { motion } from 'framer-motion';

// Sample service data
const services = [
  {
    title: "Training Programs",
    description: "Our specialized training programs are designed to enhance skills, physical fitness, and mental strength. We offer personalized coaching in various sports.",
    examples: [
      "Individual coaching",
      "Group training sessions",
      "Skill development workshops",
    ],
  },
  {
    title: "Sports Facilities",
    description: "State-of-the-art facilities that include everything you need for effective training and competition.",
    examples: [
      "Indoor and outdoor fields",
      "Gym and fitness center",
      "Physiotherapy and medical assistance",
    ],
  },
  {
    title: "Competitions and Tournaments",
    description: "We organize and host local, regional, and national competitions to provide athletes with opportunities to showcase their skills.",
    examples: [
      "Annual tournaments",
      "Friendly matches",
      "Participation in leagues",
    ],
  },
  {
    title: "Youth Development Programs",
    description: "Our youth programs focus on instilling discipline, teamwork, and sportsmanship in young athletes.",
    examples: [
      "Summer camps",
      "After-school training sessions",
      "Talent identification programs",
    ],
  },
  {
    title: "Wellness and Recovery",
    description: "Promoting overall health and recovery through nutrition counseling, mental training, and injury rehabilitation.",
    examples: [
      "Nutrition workshops",
      "Mental health support",
      "Recovery sessions and techniques",
    ],
  },
];

const ServicesPage = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-br from-[#121212] to-[#1F1F1F] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl text-center font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]"
        >
          Sports Evolution
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative p-10 rounded-xl bg-gradient-to-br from-[#1F1F1F] to-[#333333] shadow-lg group hover:shadow-2xl transition-all duration-500 overflow-hidden hover:bg-gradient-to-bl hover:from-[#6CD123] hover:to-[#3A8C12]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#D8DBD5] mb-4 group-hover:text-white transition-colors duration-500">{service.title}</h3>
              <p className="text-lg mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-[#CCCCCC]">
                {service.examples.map((example, idx) => (
                  <li key={idx}>{example}</li>
                ))}
              </ul>
              <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-[#6CD123]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
