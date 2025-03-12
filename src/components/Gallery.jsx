import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images directly
import hero1 from "../assets/new12.JPG";
import hero2 from "../assets/G2.jpg";
import hero3 from "../assets/new11.JPG";
import hero4 from "../assets/G4.jpg";
import hero5 from "../assets/G5.jpg";
import hero6 from "../assets/G6.jpg";
import hero7 from "../assets/G7.jpg";
import hero8 from "../assets/G8.jpg";
import hero9 from "../assets/G9.jpg";
import hero10 from "../assets/G10.jpg";
import hero11 from "../assets/new13.JPG";
import hero12 from "../assets/new14.JPG";

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
  hero11,
  hero12,
];

const SportsGalleryCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#121212] to-[#1F1F1F] text-center">
      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]"
        >
          Our Sports Gallery
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
          <motion.div
            className="flex items-center justify-center w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={galleryImages[index]}
              alt={`Sport ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-opacity duration-300"
            />
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/80 transition"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/80 transition"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6">
          {galleryImages.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                i === index ? "bg-green-400 scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsGalleryCarousel;
