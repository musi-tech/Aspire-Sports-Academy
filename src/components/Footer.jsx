// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-6 bg-[#040404] text-[#D8DBD5]">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="/" className="text-2xl font-bold text-[#6CD123]">Aspire Sports Academy</a>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-xl hover:text-[#6CD123]"><FaFacebook /></a>
          <a href="#" className="text-xl hover:text-[#6CD123]"><FaTwitter /></a>
          <a href="#" className="text-xl hover:text-[#6CD123]"><FaInstagram /></a>
          <a href="#" className="text-xl hover:text-[#6CD123]"><FaLinkedin /></a>
        </div>
        <p>&copy; 2024 Aspire Sports Academy. All rights reserved.</p>
        <span>Developed by: <a href="https://musitech.in" className='text-[#6CD123]'>MusiTech</a></span>
      </div>
    </footer>
  );
};

export default Footer;
