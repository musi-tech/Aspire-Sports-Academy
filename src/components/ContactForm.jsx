import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-[#121212] to-[#1F1F1F] text-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]"
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#2E2E2E] p-12 rounded-2xl shadow-xl mx-auto max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left text-[#FFFFFF]"
          >
            {/* Email */}
            <div className="flex flex-col items-center lg:items-start">
              <FaEnvelope className="text-4xl text-[#6CD123] mb-6" />
              <h3 className="text-3xl font-bold mb-4">Email Us</h3>
              <p className="text-lg text-[#CCCCCC]">example@example.com</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center lg:items-start">
              <FaPhoneAlt className="text-4xl text-[#6CD123] mb-6" />
              <h3 className="text-3xl font-bold mb-4">Call Us</h3>
              <p className="text-lg text-[#CCCCCC]">+123 456 7890</p>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center lg:items-start">
              <FaWhatsapp className="text-4xl text-[#25D366] mb-6" />
              <h3 className="text-3xl font-bold mb-4">WhatsApp Us</h3>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-[#FFFFFF] px-8 py-2 mt-1 rounded-lg font-bold hover:bg-[#1EBB5A] transition-all duration-300"
              >
                Chat Now
              </a>
            </div>
          </motion.div>

          {/* Contact Form or Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-[#B5FF4D] font-semibold text-xl mb-4">
              We're here to assist you 24/7. Reach out via any platform!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
