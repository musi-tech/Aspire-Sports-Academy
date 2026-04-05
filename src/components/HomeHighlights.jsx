import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, CalendarDays, ArrowRight } from 'lucide-react';

const cards = [
 
  {
    icon: CalendarDays,
    title: 'Upcoming Events',
    subtitle: '2026 Annual Event Calendar',
    description:
      'Stay on top of tournaments, member days, coaching camps, and special celebrations. Never miss an exciting event at Aspire Sports Club.',
    cta: 'View Calendar',
    to: '/events',
    color: 'from-amber-400 to-orange-500',
    glow: 'rgba(251,191,36,0.35)',
    bg: 'from-amber-400/15 to-orange-500/15',
    tag: '50+ Events / Year',
  },
];

const HomeHighlights = () => {
  return (
    <section
      id="highlights"
      className="relative py-20 bg-gradient-to-br from-[#050505] via-[#0d0d0d] to-[#111] overflow-hidden"
    >
      {/* Subtle radial blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #6CD123, transparent)' }} />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1 bg-[#6CD123]/10 border border-[#6CD123]/30 text-[#6CD123] text-sm font-semibold rounded-full uppercase tracking-widest mb-4">
            What's On
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] mb-4">
            Stay Active &amp; Informed
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our structured fitness classes and a full calendar of exciting events planned
            for 2026 at Aspire Sports Club.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#222] hover:border-white/25 transition-all duration-500"
                style={{ boxShadow: `0 0 0 0 ${card.glow}` }}
              >
                {/* Hover glow bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Tag badge */}
                  <span className={`self-start px-3 py-1 bg-gradient-to-r ${card.color} text-black text-xs font-bold rounded-full mb-5`}>
                    {card.tag}
                  </span>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} mb-5 shadow-lg`}>
                    <Icon size={28} className="text-black" />
                  </div>

                  {/* Text */}
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{card.subtitle}</p>
                  <h3 className={`text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${card.color}`}>
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-7">
                    {card.description}
                  </p>

                  {/* CTA */}
                  <Link to={card.to}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full py-3 rounded-2xl bg-gradient-to-r ${card.color} text-black font-bold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300`}
                    >
                      {card.cta}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;
