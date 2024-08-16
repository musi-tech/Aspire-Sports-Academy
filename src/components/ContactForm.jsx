import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-[#1F1F1F] text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#FFFFFF]">Contact Us</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-[#2E2E2E] p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#FFFFFF]">Email Us</h3>
            <p className="text-[#CCCCCC]">example@example.com</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#FFFFFF]">Contact Number</h3>
            <p className="text-[#CCCCCC]">+123 456 7890</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl pb-5 font-bold text-[#FFFFFF]">Let's Talk on WhatsApp</h3>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-[#FFFFFF] px-6 py-3 rounded-lg font-bold"
            >
              Chat with us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
