import React from 'react';
import { motion } from 'framer-motion';

// Import images directly
import hero1 from '../assets/G1.jpg';
import hero2 from '../assets/G2.jpg';
import hero3 from '../assets/G3.jpg';
import hero4 from '../assets/G4.jpg';
import hero5 from '../assets/G5.jpg';
import hero6 from '../assets/G6.jpg';
import hero7 from '../assets/G7.jpg';
import hero8 from '../assets/G8.jpg';
import hero9 from '../assets/G9.jpg';
import hero10 from '../assets/G10.jpg';

const galleryImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
  hero10,
];

const SportsGallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gradient-to-br from-[#121212] to-[#1F1F1F] text-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]"
        >
          Our Sports Gallery
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 laser-border"
            >
              <img
                src={image}
                alt={`Sport ${index + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SportsGallery;
