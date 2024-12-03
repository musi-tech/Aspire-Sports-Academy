import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';


const ContactForm = () => {
  return (
    <>
      <Header />
      <Map />
      <section id="contact" className="py-16 bg-gradient-to-br from-[#121212] to-[#1F1F1F] text-center">
        <div className="container mx-auto px-6 md:px-12 py-16">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]"
          >
            Get In Touch
          </motion.h2>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#2E2E2E] p-12 rounded-3xl shadow-2xl mx-auto max-w-5xl hover:shadow-[0px_0px_30px_10px_rgba(108,209,35,0.8)] transition-shadow duration-500"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left text-[#FFFFFF]"
            >
              {/* Email */}
              <div className="flex flex-col items-center lg:items-start">
                <FaEnvelope className="text-5xl text-[#6cd123] mb-6" />
                <h3 className="text-3xl font-bold mb-4">Email Us</h3>
                <p className="text-lg text-[#CCCCCC] hover:text-[#6cd123] transition-colors duration-300">
                  contact@aspiresportsclub.com
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center lg:items-start">
                <FaPhoneAlt className="text-5xl text-[#6cd123] mb-6" />
                <h3 className="text-3xl font-bold mb-4">Call Us</h3>
                <p className="text-lg text-[#CCCCCC] hover:text-[#6cd123] transition-colors duration-300">
                  +91 9378404040
                </p>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center lg:items-start">
                <IoLogoWhatsapp className="text-5xl text-[#6cd123] mb-6" />
                <h3 className="text-3xl font-bold mb-4">WhatsApp Us</h3>
                <a
                  href="https://wa.me/+919378404040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#6CD123] hover:bg-[#5BB61D] text-[#FFFFFF] px-8 py-3 mt-1 rounded-xl font-bold hover:scale-105 transition-transform duration-300"
                >
                  Chat Now
                </a>
              </div>
            </motion.div>

            {/* Additional Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-[#6cd123] font-semibold text-2xl mb-4">
                Our team is available 24/7 to assist you. Reach out anytime!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactForm;
