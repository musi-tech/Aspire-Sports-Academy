import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images directly
import hero1 from '../assets/C1.jpg';
import hero2 from '../assets/C2.jpg';
import hero3 from '../assets/C3.jpg';
import hero4 from '../assets/new11.JPG';
import hero5 from '../assets/new12.JPG';
import hero6 from '../assets/new13.JPG';
import hero7 from '../assets/new14.JPG';


// Import the Aspire logo
import aspireLogo from '../assets/aspire_logo_hori.svg';

const galleryImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
];

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'ease-in-out',
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="w-full h-screen">
              <img
                src={image}
                alt={`Hero gallery image ${index + 1}`}
                className="w-full h-full object-cover brightness-75"
              />
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white">
        <motion.img
          src={aspireLogo}
          alt="Aspire Sports Club Logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-72 md:w-96 mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="will-change-transform text-xl md:text-3xl mb-8 max-w-4xl mx-auto text-gray-300"
        >
          Where Passion Meets Performance. Train with the Best, Play Like a Champion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="will-change-transform flex space-x-4"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-[#6CD123] hover:bg-[#5BB61D] transition-all duration-300 rounded-full text-lg font-bold text-black shadow-lg"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-[#6CD123] text-[#6CD123] hover:bg-[#6CD123] hover:text-black transition-all duration-300 rounded-full text-lg font-bold shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
