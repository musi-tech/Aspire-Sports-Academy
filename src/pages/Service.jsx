

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trophy, Users, GraduationCap, ArrowRight, Sparkles, Star, CheckCircle, Clock, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SportsServices from '../components/SportsServices';


const services = [
  {
    icon: Calendar,
    title: 'Premium Facility Booking',
    shortTitle: 'Booking',
    description: 'Reserve our world-class facilities for personal training, corporate events, or special occasions.',
    features: ['24/7 Online Booking', 'Flexible Time Slots', 'Premium Equipment', 'Private Sessions'],
    color: 'from-blue-500 to-cyan-400',
    bgGradient: 'from-blue-500/20 to-cyan-400/20',
    glowColor: 'shadow-blue-500/30',
    stats: '500+ Bookings/Month'
  },
  {
    icon: Trophy,
    title: 'Tournaments & Events',
    shortTitle: 'Events',
    description: 'Join thrilling competitions and exclusive sporting events throughout the year.',
    features: ['Weekly Tournaments', 'Professional Events', 'Awards & Prizes', 'Community Leagues'],
    color: 'from-amber-500 to-orange-400',
    bgGradient: 'from-amber-500/20 to-orange-400/20',
    glowColor: 'shadow-amber-500/30',
    stats: '50+ Events/Year'
  },
  {
    icon: GraduationCap,
    title: 'Expert Coaching Programs',
    shortTitle: 'Coaching',
    description: 'Learn from certified professionals and elevate your game to championship levels.',
    features: ['Certified Coaches', 'Personal Training', 'Group Sessions', 'Skill Assessment'],
    color: 'from-emerald-500 to-teal-400',
    bgGradient: 'from-emerald-500/20 to-teal-400/20',
    glowColor: 'shadow-emerald-500/30',
    stats: '25+ Expert Coaches'
  },
  {
    icon: Users,
    title: 'Exclusive Membership',
    shortTitle: 'Membership',
    description: 'Become part of our elite sports community with premium benefits and privileges.',
    features: ['Family Packages', 'VIP Access', 'Member Discounts', 'Priority Booking'],
    color: 'from-purple-500 to-pink-400',
    bgGradient: 'from-purple-500/20 to-pink-400/20',
    glowColor: 'shadow-purple-500/30',
    stats: '1000+ Happy Members'
  }
];

const FloatingElements = () => {
  const elements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 3,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-[#6CD123]/30 to-[#B5FF4D]/30 blur-sm"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay
          }}
        />
      ))}
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{ 
        y: -15, 
        rotateY: 8,
        transition: { duration: 0.4 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Main Card */}
      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-[#1A1A1A]/80 to-[#2A2A2A]/80 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-700 hover:border-white/30">
        
        {/* Animated Background Glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Glowing Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          animate={isHovered ? { 
            boxShadow: `0 20px 60px -10px ${service.glowColor.split('/')[0].replace('shadow-', '').replace('-500', '')}40` 
          } : { boxShadow: 'none' }}
          transition={{ duration: 0.4 }}
        />

        {/* Stats Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
          className="absolute top-4 right-4 px-3 py-1 bg-[#6CD123]/20 text-[#B5FF4D] text-xs font-bold rounded-full border border-[#6CD123]/30"
        >
          {service.stats}
        </motion.div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon Section */}
          <div className="text-center mb-6">
            <motion.div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} mb-4 shadow-lg`}
              animate={isHovered ? { 
                scale: [1, 1.2, 1.1],
                rotate: [0, 10, -5, 0],
              } : { scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <IconComponent size={32} className="text-white" />
            </motion.div>
            
            {/* Floating sparkles around icon */}
            <AnimatePresence>
              {isHovered && (
                <motion.div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        x: [0, Math.cos(i * 60 * Math.PI / 180) * 40],
                        y: [0, Math.sin(i * 60 * Math.PI / 180) * 40],
                      }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    >
                      <Sparkles size={12} className="text-[#B5FF4D]" />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content */}
          <div className="text-center flex-grow">
            <motion.h3
              className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {service.title}
            </motion.h3>

            <motion.p
              className="text-gray-300 text-sm leading-relaxed mb-6"
              animate={isHovered ? { y: -5 } : { y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {service.description}
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-2 text-xs">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-1 text-gray-400"
                  >
                    <CheckCircle size={12} className="text-[#6CD123]" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        {/* Action Button */}
<a
  href="https://wa.me/918956585865?text=Hello,%20can%20I%20get%20more%20info%20on%20this%3F"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    className={`relative w-full py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-2xl overflow-hidden group/btn transition-all duration-300 hover:shadow-lg`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    animate={isHovered ? { y: 0 } : { y: 10 }}
    transition={{ duration: 0.3 }}
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      Learn More
      <ArrowRight
        size={16}
        className="group-hover/btn:translate-x-1 transition-transform duration-300"
      />
    </span>
    <motion.div
      className="absolute inset-0 bg-white/20"
      initial={{ x: '-100%' }}
      whileHover={{ x: '100%' }}
      transition={{ duration: 0.6 }}
    />
  </motion.button>
</a>

        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (

    <>
    <Header />
    <section 
      id="services" 
      className="relative py-20 bg-gradient-to-br from-[#040404] via-[#0A0A0A] to-[#1A1A1A] text-[#D8DBD5] overflow-hidden"
    >
      <FloatingElements />
      
      {/* Dynamic gradient background that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #6CD12320 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
        

          <motion.h2
            className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] pt-20"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Premium Services
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience excellence with our comprehensive range of professional sports services, 
            designed to elevate your athletic journey and community experience.
          </motion.p>

          {/* Service count indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/5 rounded-full border border-white/10"
          >
            <Zap size={16} className="text-[#6CD123]" />
            <span className="text-sm font-semibold">{services.length} Premium Services Available</span>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
        
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#6CD123]/5 to-transparent" />
    </section>

    <SportsServices />
    <Footer />
    </> 
  );
};

export default Services;