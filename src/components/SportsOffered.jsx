import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Target, Zap, Trophy, Star, ArrowRight, Clock, CheckCircle } from 'lucide-react';

const currentSports = [
  {
    name: 'Swimming',
    icon: '🏊‍♂️',
    description: "Master your strokes and boost endurance in our world-class Olympic pools.",
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    name: 'Cricket',
    icon: '🏏',
    description: "Refine your batting, bowling, and strategy with expert training.",
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-green-500/10'
  },
  {
    name: 'Football',
    icon: '⚽',
    description: "Train like a pro with action-packed drills on premium fields.",
    color: 'from-orange-500 to-yellow-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    name: 'Toddler Discovery',
    icon: '🧸',
    description: "Fuel your toddler's growth with fun, guided activities.",
    color: 'from-pink-500 to-rose-400',
    bgColor: 'bg-pink-500/10'
  },
  {
    name: 'Basketball',
    icon: '🏀',
    description: "Improve agility, teamwork, and technique on premium courts.",
    color: 'from-purple-500 to-violet-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    name: 'Lawn Tennis',
    icon: '🎾',
    description: "Play like a champion on professional courts with expert guidance.",
    color: 'from-teal-500 to-cyan-400',
    bgColor: 'bg-teal-500/10'
  },
  {
    name: 'Badminton',
    icon: '🏸',
    description: "Sharpen your reflexes and skills with tailored coaching.",
    color: 'from-indigo-500 to-blue-400',
    bgColor: 'bg-indigo-500/10'
  }
];

const upcomingSports = [
  {
    name: 'Pickleball',
    icon: '🏓',
    description: "Enjoy fast-paced fun blending tennis, badminton, and ping-pong.",
    color: 'from-amber-500 to-orange-400',
    bgColor: 'bg-amber-500/10'
  },
  {
    name: 'Gymnastics',
    icon: '🤸‍♀️',
    description: "Achieve new heights with expert acrobatic and flexibility training.",
    color: 'from-red-500 to-pink-400',
    bgColor: 'bg-red-500/10'
  },
  {
    name: 'Yoga',
    icon: '🧘‍♀️',
    description: "Boost flexibility and find peace through guided yoga sessions.",
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-500/10'
  },
  {
    name: 'Volleyball',
    icon: '🏐',
    description: "Perfect your serves, blocks, and teamwork with professional coaching.",
    color: 'from-sky-500 to-blue-400',
    bgColor: 'bg-sky-500/10'
  },
  {
    name: 'Boxing',
    icon: '🥊',
    description: "Build strength and resilience with high-intensity boxing training.",
    color: 'from-slate-500 to-gray-400',
    bgColor: 'bg-slate-500/10'
  }
];

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const SportCard = ({ sport, index, isUpcoming = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`relative p-8 rounded-3xl overflow-hidden transition-all duration-700 ${sport.bgColor} backdrop-blur-sm border border-white/10 hover:border-white/30`}>
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${sport.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          animate={isHovered ? {
            boxShadow: `0 0 30px ${sport.color.includes('blue') ? '#3b82f6' : sport.color.includes('green') ? '#10b981' : '#f59e0b'}40`
          } : { boxShadow: 'none' }}
          transition={{ duration: 0.3 }}
        />

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          {isUpcoming ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-center gap-1 px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-semibold rounded-full border border-amber-500/30"
            >
              <Clock size={12} />
              Coming Soon
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-300 text-xs font-semibold rounded-full border border-green-500/30"
            >
              <CheckCircle size={12} />
              Available
            </motion.div>
          )}
        </div>

        <div className="relative z-10 text-center">
          {/* Icon with pulse animation */}
          <motion.div
            className="mb-6 text-7xl"
            animate={isHovered ? {
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            } : { scale: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            {sport.icon}
          </motion.div>

          {/* Title with gradient text */}
          <motion.h3
            className={`text-2xl font-bold mb-4 bg-gradient-to-r ${sport.color} bg-clip-text text-transparent`}
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {sport.name}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-sm leading-relaxed mb-6"
            animate={isHovered ? { y: -5 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {sport.description}
          </motion.p>

          {/* Action button */}
          <motion.button
            className={`group/btn relative px-6 py-3 bg-gradient-to-r ${sport.color} text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isUpcoming}
          >
            <span className="relative z-10 flex items-center gap-2">
              {isUpcoming ? 'Notify Me' : 'Learn More'}
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ title, subtitle, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <motion.div
      className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] rounded-full mb-6"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <Icon size={32} className="text-black" />
    </motion.div>
    <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
      {title}
    </h2>
    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
      {subtitle}
    </p>
  </motion.div>
);

const SportsOffered = () => {
  const [activeTab, setActiveTab] = useState('current');

  return (
    <section id="sports" className="relative py-20 bg-gradient-to-br from-[#0A0A0A] via-[#1F1F1F] to-[#0A0A0A] text-white overflow-hidden">
      <FloatingParticles />

      <div className="container mx-auto px-8 relative z-10">
        {/* Main Header */}
        <SectionHeader
          title="Explore Our Sports Universe"
          subtitle="Join our sports club to access world-class coaching, facilities, and activities designed to elevate your athletic journey."
          icon={Trophy}
        />

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-white/5 rounded-full p-2 backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'current'
                ? 'bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] text-black'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              <CheckCircle size={18} />
              Current Sports ({currentSports.length})
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'upcoming'
                ? 'bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] text-black'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              <Clock size={18} />
              Coming Soon ({upcomingSports.length})
            </button>
          </div>
        </motion.div>

        {/* Sports Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {(activeTab === 'current' ? currentSports : upcomingSports).map((sport, index) => (
              <SportCard
                key={sport.name}
                sport={sport}
                index={index}
                isUpcoming={activeTab === 'upcoming'}
              />
            ))}
          </motion.div>
        </AnimatePresence>

       

      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#6CD123]/10 to-transparent" />
    </section>
  );
};

export default SportsOffered;