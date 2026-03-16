import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Clock, User, Flame, Filter } from 'lucide-react';

const schedule = {
  Monday: [
    { time: '6:00 AM – 7:00 AM',   class: 'Yoga Flow',       coach: 'Priya Sharma',    level: 'All Levels', category: 'Wellness',   color: 'from-teal-400 to-cyan-500' },
    { time: '7:30 AM – 8:30 AM',   class: 'HIIT Blast',      coach: 'Arjun Mehta',     level: 'Intermediate', category: 'Cardio',    color: 'from-red-500 to-orange-400' },
    { time: '9:00 AM – 10:00 AM',  class: 'Badminton Drills',coach: 'Sanjay Verma',    level: 'All Levels', category: 'Sport',     color: 'from-yellow-400 to-amber-500' },
    { time: '5:00 PM – 6:00 PM',   class: 'Zumba',           coach: 'Riya Patel',      level: 'All Levels', category: 'Dance',     color: 'from-pink-500 to-rose-400' },
    { time: '6:30 PM – 7:30 PM',   class: 'Strength & Tone', coach: 'Karan Singh',     level: 'Advanced',   category: 'Strength',  color: 'from-purple-500 to-indigo-500' },
    { time: '8:00 PM – 9:00 PM',   class: 'Swim Conditioning',coach:'Nita Roy',         level: 'Intermediate', category: 'Aqua',   color: 'from-blue-500 to-cyan-400' },
  ],
  Tuesday: [
    { time: '6:00 AM – 7:00 AM',   class: 'Pilates Core',    coach: 'Priya Sharma',    level: 'All Levels', category: 'Wellness',   color: 'from-teal-400 to-cyan-500' },
    { time: '7:30 AM – 8:30 AM',   class: 'Box Fitness',     coach: 'Arjun Mehta',     level: 'Intermediate', category: 'Cardio',  color: 'from-red-500 to-orange-400' },
    { time: '9:00 AM – 10:00 AM',  class: 'Tennis Coaching', coach: 'Dev Ramesh',      level: 'Beginner',   category: 'Sport',     color: 'from-yellow-400 to-amber-500' },
    { time: '5:00 PM – 6:00 PM',   class: 'Spin Cycle',      coach: 'Karan Singh',     level: 'All Levels', category: 'Cardio',    color: 'from-red-500 to-orange-400' },
    { time: '6:30 PM – 7:30 PM',   class: 'Aqua Aerobics',   coach: 'Nita Roy',        level: 'All Levels', category: 'Aqua',      color: 'from-blue-500 to-cyan-400' },
    { time: '8:00 PM – 9:00 PM',   class: 'Functional Fit',  coach: 'Sanjay Verma',    level: 'Advanced',   category: 'Strength',  color: 'from-purple-500 to-indigo-500' },
  ],
  Wednesday: [
    { time: '6:00 AM – 7:00 AM',   class: 'Sunrise Yoga',    coach: 'Riya Patel',      level: 'All Levels', category: 'Wellness',   color: 'from-teal-400 to-cyan-500' },
    { time: '7:30 AM – 8:30 AM',   class: 'Tabata Burn',     coach: 'Arjun Mehta',     level: 'Advanced',   category: 'Cardio',    color: 'from-red-500 to-orange-400' },
    { time: '9:00 AM – 10:00 AM',  class: 'Squash Session',  coach: 'Dev Ramesh',      level: 'Intermediate', category: 'Sport',  color: 'from-yellow-400 to-amber-500' },
    { time: '5:00 PM – 6:00 PM',   class: 'Dance Cardio',    coach: 'Riya Patel',      level: 'All Levels', category: 'Dance',     color: 'from-pink-500 to-rose-400' },
    { time: '6:30 PM – 7:30 PM',   class: 'Power Lifting',   coach: 'Karan Singh',     level: 'Advanced',   category: 'Strength',  color: 'from-purple-500 to-indigo-500' },
    { time: '8:00 PM – 9:00 PM',   class: 'Swim Laps',       coach: 'Nita Roy',        level: 'All Levels', category: 'Aqua',      color: 'from-blue-500 to-cyan-400' },
  ],
  Thursday: [
    { time: '6:00 AM – 7:00 AM',   class: 'Meditation Flow', coach: 'Priya Sharma',    level: 'All Levels', category: 'Wellness',   color: 'from-teal-400 to-cyan-500' },
    { time: '7:30 AM – 8:30 AM',   class: 'Circuit Training',coach: 'Arjun Mehta',     level: 'Intermediate', category: 'Cardio',  color: 'from-red-500 to-orange-400' },
    { time: '9:00 AM – 10:00 AM',  class: 'Badminton Match', coach: 'Sanjay Verma',    level: 'All Levels', category: 'Sport',     color: 'from-yellow-400 to-amber-500' },
    { time: '5:00 PM – 6:00 PM',   class: 'Kickboxing',      coach: 'Karan Singh',     level: 'Intermediate', category: 'Cardio', color: 'from-red-500 to-orange-400' },
    { time: '6:30 PM – 7:30 PM',   class: 'Barre Fusion',    coach: 'Riya Patel',      level: 'All Levels', category: 'Dance',     color: 'from-pink-500 to-rose-400' },
    { time: '8:00 PM – 9:00 PM',   class: 'Pool Relay',      coach: 'Nita Roy',        level: 'All Levels', category: 'Aqua',      color: 'from-blue-500 to-cyan-400' },
  ],
  Friday: [
    { time: '6:00 AM – 7:00 AM',   class: 'Yoga Restore',    coach: 'Priya Sharma',    level: 'All Levels', category: 'Wellness',   color: 'from-teal-400 to-cyan-500' },
    { time: '7:30 AM – 8:30 AM',   class: 'HIIT Finisher',   coach: 'Arjun Mehta',     level: 'Advanced',   category: 'Cardio',    color: 'from-red-500 to-orange-400' },
    { time: '9:00 AM – 10:00 AM',  class: 'Tennis Match Play',coach: 'Dev Ramesh',     level: 'Intermediate', category: 'Sport',  color: 'from-yellow-400 to-amber-500' },
    { time: '5:00 PM – 6:00 PM',   class: 'Zumba Party',     coach: 'Riya Patel',      level: 'All Levels', category: 'Dance',     color: 'from-pink-500 to-rose-400' },
    { time: '6:30 PM – 7:30 PM',   class: 'Strength Peak',   coach: 'Karan Singh',     level: 'Advanced',   category: 'Strength',  color: 'from-purple-500 to-indigo-500' },
  ],
  Saturday: [
    { time: '7:00 AM – 8:00 AM',   class: 'Morning Run Club',coach: 'Sanjay Verma',    level: 'All Levels', category: 'Cardio',    color: 'from-red-500 to-orange-400' },
    { time: '8:30 AM – 9:30 AM',   class: 'Family Yoga',     coach: 'Priya Sharma',    level: 'All Levels', category: 'Wellness',   color: 'from-teal-400 to-cyan-500' },
    { time: '10:00 AM – 11:00 AM', class: 'Junior Badminton',coach: 'Dev Ramesh',      level: 'Beginner',   category: 'Sport',     color: 'from-yellow-400 to-amber-500' },
    { time: '11:00 AM – 12:00 PM', class: 'Aqua Splash Kids',coach: 'Nita Roy',        level: 'All Levels', category: 'Aqua',      color: 'from-blue-500 to-cyan-400' },
    { time: '5:00 PM – 6:30 PM',   class: 'Members Open Gym',coach: 'Karan Singh',     level: 'All Levels', category: 'Strength',  color: 'from-purple-500 to-indigo-500' },
    { time: '7:00 PM – 8:00 PM',   class: 'Dance Night',     coach: 'Riya Patel',      level: 'All Levels', category: 'Dance',     color: 'from-pink-500 to-rose-400' },
  ],
};

const days = Object.keys(schedule);
const categories = ['All', 'Wellness', 'Cardio', 'Strength', 'Aqua', 'Sport', 'Dance'];

const categoryColors = {
  Wellness: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
  Cardio:   'bg-red-500/20 text-red-300 border-red-500/40',
  Strength: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  Aqua:     'bg-blue-500/20 text-blue-300 border-blue-500/40',
  Sport:    'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
  Dance:    'bg-pink-500/20 text-pink-300 border-pink-500/40',
};

const ClassCard = ({ cls, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="relative p-5 rounded-2xl bg-[#1a1a1a] border border-white/10 hover:border-white/25 hover:-translate-y-1 transition-all duration-300 group"
  >
    <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-gradient-to-b ${cls.color}`} />
    <div className="pl-2">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryColors[cls.category]}`}>
          {cls.category}
        </span>
        <span className="text-xs text-gray-500">{cls.level}</span>
      </div>
      <h4 className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${cls.color} mb-2`}>
        {cls.class}
      </h4>
      <div className="flex items-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1"><Clock size={11} className="text-[#6CD123]" /> {cls.time}</span>
        <span className="flex items-center gap-1"><User size={11} className="text-[#6CD123]" /> {cls.coach}</span>
      </div>
    </div>
  </motion.div>
);

const GroupFitness = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = schedule[activeDay].filter(
    c => activeCategory === 'All' || c.category === activeCategory
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0d0d0d] to-[#111] text-white pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-[#6CD123]/10 border border-[#6CD123]/30 text-[#6CD123] text-sm font-semibold rounded-full uppercase tracking-widest mb-6">
              <Flame size={14} /> Group Fitness
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
              Weekly Timetable
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose your day, pick your class, and show up ready. Our certified coaches lead every session with energy and expertise.
            </p>
          </motion.div>

          {/* Day tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {days.map(day => (
              <motion.button
                key={day}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDay(day)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeDay === day
                    ? 'bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] text-black shadow-lg shadow-[#6CD123]/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                {day}
              </motion.button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Filter size={14} className="text-gray-500 self-center mr-1" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#6CD123] text-black border-[#6CD123]'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Class cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {filtered.length > 0 ? filtered.map((cls, i) => (
              <ClassCard key={i} cls={cls} index={i} />
            )) : (
              <p className="col-span-3 text-center text-gray-500 py-12">No classes for this filter.</p>
            )}
          </div>

          {/* Legend */}
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {Object.entries(categoryColors).map(([cat, cls]) => (
              <span key={cat} className={`px-3 py-1 rounded-full text-xs font-semibold border ${cls}`}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GroupFitness;
