import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';  // Assuming this icon is correct

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Footer Top: Logo and Social Media */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-[#3A3A3A] pb-6 mb-6">
          <a href="/" className="text-3xl font-extrabold text-[#6CD123] tracking-widest mb-4 lg:mb-0">Aspire Sports Club</a>
          
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61563041397359&mibextid=ZbWKwL" className="text-3xl hover:text-[#6CD123] transition duration-300" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/aspiresportsclub?igsh=NzJtajJmMDYxZTFo" className="text-3xl hover:text-[#6CD123] transition duration-300" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

       

        {/* Footer Bottom: Copyright */}
        <div className="text-center">
          <p className="text-lg mb-2">&copy; 2024 Aspire Sports Academy. All rights reserved.</p>
          <span>Developed by: <a href="https://musitech.in" className="text-[#6CD123] hover:text-[#8DE425] transition duration-300" target="_blank" rel="noopener noreferrer">MusiTech</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
