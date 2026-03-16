import React from 'react';
import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';

const hours = [
  { day: 'Monday – Thursday', time: '5:30 am – 10:00 pm' },
  { day: 'Friday', time: '5:30 am – 8:00 pm' },
  { day: 'Saturday', time: '6:00 am – 8:00 pm' },
  { day: 'Sunday', time: '7:00 am – 8:00 pm' },
  { day: 'Public Holidays', time: '7:00 am – 7:00 pm' },
];

const OperatingHours = () => {
  return (
    <section
      id="operating-hours"
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f1a0a 0%, #1a2e10 50%, #0f1a0a 100%)',
      }}
    >
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #6CD123, transparent)', transform: 'translate(-30%, -30%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #6CD123, transparent)', transform: 'translate(30%, 30%)' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left – heading & description */}
          <motion.div
            className="lg:w-1/2 text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FiClock className="text-[#6CD123] text-3xl" />
              <span className="text-[#6CD123] font-semibold uppercase tracking-widest text-sm">
                We're Open
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Operating{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
                Hours
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Aspire Sports Club is open throughout the week to accommodate your training schedule.
              Come in, train hard, and achieve your goals.
            </p>
            <p className="text-sm text-[#6CD123] italic font-medium">
              * Daily hours are subject to change on special occasions.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Closed: New Year's Day, Good Friday, Christmas Day and Boxing Day.
            </p>
          </motion.div>

          {/* Right – hours card */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(108,209,35,0.2)',
              }}
            >
              {/* Card header */}
              <div
                className="px-8 py-5"
                style={{ background: 'linear-gradient(90deg, #6CD123, #B5FF4D)' }}
              >
                <h3 className="text-black font-extrabold text-xl tracking-wide uppercase">
                  Regular Hours
                </h3>
              </div>

              {/* Hours rows */}
              <div className="divide-y divide-white/10">
                {hours.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center px-8 py-4 group hover:bg-white/5 transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                      {item.day}
                    </span>
                    <span className="text-[#6CD123] font-bold text-sm md:text-base">
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Card footer */}
              <div className="px-8 py-4 text-center" style={{ background: 'rgba(108,209,35,0.08)' }}>
                <p className="text-gray-400 text-sm">
                  For holiday hours, please{' '}
                  <a href="#contact" className="text-[#6CD123] hover:underline font-semibold">
                    contact us
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OperatingHours;
