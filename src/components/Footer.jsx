import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6"; // assuming this icon is correct


const Footer = () => {
  return (
    <footer className="py-6 bg-[#040404] text-[#D8DBD5]">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="/" className="text-2xl font-bold text-[#6CD123]">Aspire Sports Academy</a>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-2xl hover:text-[#6CD123]" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" className="text-2xl hover:text-[#6CD123]" aria-label="Twitter"><FaXTwitter /></a>
          <a href="#" className="text-2xl hover:text-[#6CD123]" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="text-2xl hover:text-[#6CD123]" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="/terms-and-conditions" className="text-lg hover:text-[#6CD123]" rel="noopener noreferrer">Terms of Service</a>
          <a href="/privacy-policy" className="text-lg hover:text-[#6CD123]" rel="noopener noreferrer">Privacy Policy</a>
        </div>

        <p>&copy; 2024 Aspire Sports Academy. All rights reserved.</p>
        <span>Developed by: <a href="https://musitech.in" className="text-[#6CD123]" target="_blank" rel="noopener noreferrer">MusiTech</a></span>
      </div>
    </footer>
  );
};

export default Footer;
