import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <section className="bg-black py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        {/* Right Side - Contact Form (Show First on Small Screens) */}
         <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 bg-[#1A1A1A] rounded-lg shadow-lg p-10 flex flex-col justify-center items-center space-y-10"
        >
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Mail className="w-8 h-8 text-[#6CD123]" />
            </div>
            <h3 className="text-2xl text-white font-semibold mb-2">Email Us</h3>
            <p className="text-gray-300 text-lg">contact@aspiresportsclub.com</p>
          </div>

          <div className="w-2/3 border-t border-gray-700"></div>

          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Phone className="w-8 h-8 text-[#6CD123]" />
            </div>
            <h3 className="text-2xl text-white font-semibold mb-2">Call Us</h3>
            <p className="text-gray-300 text-lg">+91 8956585865</p>
          </div>
        </motion.div>
        {/* Left Side - Google Map (Show Second on Small Screens) */}
        <div className="order-2 md:order-2 w-full h-[300px] md:h-full">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d118401.5624283538!2d73.8919631649906!3d18.492493376114417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4e584abdf0795b93%3A0x909fef5d3c6be300!2sManjari%20Farm%20Rd%2C%20behind%20Grand%20Bay%20Society%2C%20Pune%2C%20Maharashtra%20412307!3m2!1d18.4925112!2d73.9743649!5e1!3m2!1sen!2sin!4v1728539955853!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Aspire Sports Club Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
