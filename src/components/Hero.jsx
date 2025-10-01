import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../assets/C1.webp';
import hero2 from '../assets/C2.webp';
import hero3 from '../assets/C3.webp';
import hero4 from '../assets/new11.webp';
import hero5 from '../assets/new12.webp';
import hero6 from '../assets/new13.webp';
import hero7 from '../assets/new14.webp';
import hero8 from '../assets/hp11.webp';

import aspireLogo from '../assets/aspire_logo_hori.svg';

const galleryImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8   ];

const Hero = () => {
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
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="w-full h-screen">
              <img
                src={image}
                alt={`Hero gallery image ${index + 1}`}
                className="w-full h-full object-cover brightness-[0.6]"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-6">
        <motion.img
          src={aspireLogo}
          alt="Aspire Sports Club Logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-72 md:w-96 mb-6 animate-float"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="backdrop- rounded-xl px-6 py-8 md:px-12 md:py-10 max-w-3xl"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 mb-6 animate-gradient">
            Where Passion Meets Performance
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium">
            Train with the Best, Play Like a Champion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#services"
            className="px-8 py-3 rounded-full text-lg font-bold shadow-lg bg-[#6CD123] hover:bg-[#5BB61D]  text-black transition-all duration-300 hover:scale-105"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-lg font-bold border border-[#6CD123] text-[#6CD123] hover:bg-[#6CD123] hover:text-black transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Custom CSS Animation */}
      <style>
        {`
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientShift 6s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
