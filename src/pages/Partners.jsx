import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaHandshake, FaGlobeAsia, FaTrophy, FaEnvelope, FaPhone, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const swi = require('../assets/swi.jpg');
const padukone = require('../assets/padukone.webp');
const garyy = require('../assets/garyy.png');
const spolto = require('../assets/spolto.jpg');
const abc = require('../assets/abc.avif');

const partners = [
  {
    id: 1,
    logo: swi,
    name: 'Waveline Sports Pvt. Ltd.',
    tagline: 'Michael Phelps Swimming Program — India',
    sport: 'Swimming',
    sportEmoji: '🏊‍♂️',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/40',
    accent: '#38BDF8',
    badge: 'bg-blue-500/20 text-blue-300',
    highlights: ['Master License — Michael Phelps Program', '25+ Locations across India', 'Operations since 2015', 'Superior swim instruction year-round'],
    description: `We hold the Master License to conduct the Michael Phelps Swimming Program across India. With a mission to provide high-quality swim instruction with unsurpassed customer service, Waveline Sports Pvt. Ltd. started operations in the year 2015.

Today, that principle remains the backbone of our company which has expanded to more than 25 locations across the subcontinent. We provide consistent, superior instruction at each of our centers with an optimum learning environment year-round. Each instructor is hand-picked for their love of swimming and trained to help every swimmer reach their full potential.`,
  },
  {
    id: 2,
    logo: padukone,
    name: 'Padukone School of Badminton',
    tagline: 'World-Class Badminton Grassroots Development',
    sport: 'Badminton',
    sportEmoji: '🏸',
    gradient: 'from-red-600/20 to-pink-600/20',
    border: 'border-red-500/40',
    accent: '#FB7185',
    badge: 'bg-red-500/20 text-red-300',
    highlights: ['National-level player development', 'Certified coaches', 'Long-term athlete development focus', 'Intense camps & academies'],
    description: `Padukone School of Badminton brings world-class badminton coaching and grassroots development programs. With a focus on technique, fitness and competitive mindset, they run academies and camps that have produced national-level players. Their certified coaches emphasize long-term athlete development and sportsmanship.`,
  },
 
];

const partnerBenefits = [
  'Co-branding across all Aspire marketing channels',
  'Access to 1000+ active members monthly',
  'Joint events and community engagement programs',
  'Premium infrastructure for partner programs',
  'Revenue-sharing partnership model',
  'Digital and social media promotions',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Partners() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">

        {/* ─── HERO ─── */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[#6CD123]/8 blur-3xl -top-48 left-1/2 -translate-x-1/2 animate-pulse" />
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #6CD12340 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-[#6CD123]/10 border border-[#6CD123]/30 rounded-full px-5 py-2 text-[#6CD123] text-sm font-semibold mb-6 uppercase tracking-widest"
            >
              <FaHandshake /> Strategic Collaborations
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            >
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
                Partners
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Aspire Sports Academy collaborates with globally recognised sports brands
              to deliver premium coaching programs across every discipline we offer.
            </motion.p>

            {/* stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {[['5+', 'Global Partners'], ['7', 'Sports Disciplines'], ['25+', 'Locations Served']].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <div className="text-4xl font-extrabold text-[#6CD123]">{val}</div>
                  <div className="text-gray-400 text-sm mt-1">{lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── PARTNER CARDS ─── */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-950 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-widest text-[#6CD123] mb-3">Trusted Brands</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                World-Class{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
                  Collaborations
                </span>
              </h2>
              <div className="w-20 h-1 bg-[#6CD123] mx-auto rounded-full" />
            </motion.div>

            <div className="space-y-8">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.5}
                  className={`bg-gradient-to-br ${partner.gradient} border ${partner.border} rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500`}
                  style={{ boxShadow: expanded === partner.id ? `0 0 60px ${partner.accent}15` : undefined }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* logo side */}
                    <div className="lg:w-1/3 bg-black/40 p-8 flex flex-col items-center justify-center gap-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-48 max-w-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`text-sm font-semibold px-4 py-1.5 rounded-full ${partner.badge}`}>
                        {partner.sportEmoji} {partner.sport}
                      </span>
                    </div>

                    {/* content side */}
                    <div className="lg:w-2/3 p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-[#6CD123] transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 italic">{partner.tagline}</p>

                      <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                        {partner.description.split('\n\n')[0]}
                      </p>

                      {/* highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {partner.highlights.map((h, j) => (
                          <div key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                            <FaCheckCircle style={{ color: partner.accent }} className="flex-shrink-0" />
                            {h}
                          </div>
                        ))}
                      </div>

                      {/* toggle full description */}
                      {partner.description.includes('\n\n') && (
                        <>
                          {expanded === partner.id && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-gray-400 text-sm leading-relaxed mb-4"
                            >
                              {partner.description.split('\n\n').slice(1).join('\n\n')}
                            </motion.p>
                          )}
                          <button
                            onClick={() => setExpanded(expanded === partner.id ? null : partner.id)}
                            className="flex items-center gap-2 text-sm font-semibold transition-colors"
                            style={{ color: partner.accent }}
                          >
                            {expanded === partner.id ? 'Show less' : 'Read more'}
                            <FaArrowRight className={`transition-transform duration-300 ${expanded === partner.id ? 'rotate-90' : ''}`} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BECOME A PARTNER ─── */}
        <section className="py-24 bg-black px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <p className="text-sm uppercase tracking-widest text-[#6CD123] mb-3">Join Our Network</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Become an{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
                    Aspire Partner
                  </span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Are you a sports brand, coaching institute or fitness company looking to expand your reach?
                  Partner with Aspire Sports Academy and tap into our thriving community of athletes,
                  families and sports enthusiasts in Nagpur.
                </p>

                <div className="space-y-3 mb-8">
                  {partnerBenefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <FaCheckCircle className="text-[#6CD123] flex-shrink-0" />
                      {benefit}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="lg:w-1/2 bg-gradient-to-br from-gray-900 to-black border border-[#6CD123]/30 rounded-3xl p-8 shadow-2xl shadow-[#6CD123]/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#6CD123]/10 flex items-center justify-center mb-6">
                  <FaHandshake className="text-[#6CD123] text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                <p className="text-gray-400 mb-6">
                  Send us a message and our partnerships team will reach out within 48 hours.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:contact@aspiresportsclub.com"
                    className="flex items-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] text-black font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#6CD123]/30 justify-center"
                  >
                    <FaEnvelope /> contact@aspiresportsclub.com
                  </a>
                  <a
                    href="mailto:aspiresportsclub@gmail.com"
                    className="flex items-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] text-black font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#6CD123]/30 justify-center"
                  >
                    <FaEnvelope /> aspiresportsclub@gmail.com
                  </a>
                  <a
                    href="tel:+917066870033"
                    className="flex items-center gap-3 w-full px-6 py-4 border border-[#6CD123]/50 text-[#6CD123] font-semibold rounded-2xl hover:bg-[#6CD123]/10 transition-all duration-300 justify-center"
                  >
                    <FaPhone /> +91 89565 85865
                  </a>
                </div>

              
              </motion.div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
