import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const ContactSection = ({ heading }) => {
  return (
    <section id="contact" className="py-16 bg-[#1A1A1A] text-center -mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
          Contact Us
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-[#1F1F1F] to-[#333333] p-8 rounded-lg shadow-xl flex flex-col md:flex-row justify-between items-center"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title" className="sr-only">Contact Information</h2>

          <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/3 flex flex-col md:flex-row items-center">
            <FaEnvelope className="text-[#6CD123] text-3xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 text-lg font-bold">info@aspire.in</p>
            </div>
          </div>

          <div className="border-t border-b border-gray-600 py-6 md:border-none md:py-0 md:mx-8 md:w-1/3 flex flex-col md:flex-row items-center">
            <FaPhoneAlt className="text-[#6CD123] text-3xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Contact Number</h3>
              <p className="text-gray-400 text-lg font-bold">+91 9579455452</p>
            </div>
          </div>

          <div className="text-center md:w-1/3">
            <h3 className="text-2xl font-semibold text-white mb-4">Let's Talk on WhatsApp</h3>
            <a
              href="https://wa.me/919579455452"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6CD123] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition duration-300 flex items-center justify-center"
            >
              <IoLogoWhatsapp className="mr-2 text-2xl" />
              Chat with us
            </a>
          </div>
        </motion.div>

        {/* Optional: Add a contact form or social media links here */}
      </div>
    </section>
  );
};

export default ContactSection;
