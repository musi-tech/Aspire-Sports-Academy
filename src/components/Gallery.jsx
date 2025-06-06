import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

// Import images directly
import hero1 from "../assets/new12.webp";
import hero2 from "../assets/G2.webp";
import hero3 from "../assets/new11.webp";
import hero4 from "../assets/G4.webp";
import hero5 from "../assets/G5.webp";
import hero6 from "../assets/G6.webp";
import hero7 from "../assets/G7.webp";
import hero8 from "../assets/G8.webp";
import hero9 from "../assets/G9.webp";
import hero10 from "../assets/G10.webp";
import hero11 from "../assets/new13.webp";
import hero12 from "../assets/new14.webp";

const galleryImages = [
  hero1, hero2, hero3, hero4, hero5, hero6, 
  hero7, hero8, hero9, hero10, hero11, hero12
];

const SportsGalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying && !lightboxOpen) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, lightboxOpen]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % galleryImages.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;
    
    if (difference > 50) {
      goToNext();
    } else if (difference < -50) {
      goToPrevious();
    }
  };

  // Lightbox toggle
  const toggleLightbox = () => {
    setLightboxOpen(!lightboxOpen);
    setIsAutoPlaying(!lightboxOpen ? false : true);
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title with decorative elements */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-green-500 uppercase tracking-wider text-sm font-medium">Explore Our</span>
            <h2 className="text-5xl font-bold mt-2 mb-4">Sports <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">Gallery</span></h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </motion.div>
        </div>

        {/* Main carousel container */}
        <div className="max-w-5xl mx-auto">
          {/* Image showcase */}
          <div 
            className="relative rounded-xl overflow-hidden shadow-2xl shadow-green-500/10 bg-gray-900 aspect-video"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Progress bar */}
            {isAutoPlaying && (
              <motion.div 
                className="absolute top-0 left-0 h-1 bg-green-400 z-20"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear", repeat: isAutoPlaying ? Infinity : 0 }}
              />
            )}
            
            {/* Main image with animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <img
                  src={galleryImages[currentIndex]}
                  alt={`Sports Gallery ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Fullscreen button */}
            <button
              onClick={toggleLightbox}
              className="absolute top-4 right-4 bg-black/60 p-2 rounded-full hover:bg-green-500 transition-colors duration-300 text-white z-20"
            >
              <FaExpand />
            </button>

            {/* Navigation arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                onClick={goToPrevious}
                className="bg-black/40 hover:bg-green-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110"
              >
                <FaChevronLeft className="text-white" />
              </button>
              
              <button
                onClick={goToNext}
                className="bg-black/40 hover:bg-green-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110"
              >
                <FaChevronRight className="text-white" />
              </button>
            </div>

            {/* Image counter overlay */}
            <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full text-sm">
              {currentIndex + 1}/{galleryImages.length}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-6 overflow-hidden">
            <div className="flex justify-center space-x-2 py-2 overflow-x-auto">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    currentIndex === index ? 'scale-110 z-10' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`h-16 w-24 object-cover rounded-md ${
                      currentIndex === index ? 'ring-2 ring-green-400' : ''
                    }`}
                  />
                  {currentIndex === index && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-green-400 rounded-full"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={toggleLightbox}
        >
          <div 
            className="relative max-w-6xl max-h-screen" 
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentIndex]}
              alt={`Fullscreen ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
            
            <button
              onClick={toggleLightbox}
              className="absolute top-4 right-4 bg-black/60 p-3 rounded-full hover:bg-red-500 text-white"
            >
              ✕
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={goToPrevious}
                className="bg-black/60 hover:bg-green-500 p-3 rounded-full text-white"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="bg-black/60 hover:bg-green-500 p-3 rounded-full text-white"
              >
                <FaChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default SportsGalleryCarousel;