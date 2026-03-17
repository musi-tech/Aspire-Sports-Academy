import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  FaTrophy, FaUsers, FaChalkboardTeacher, FaHeartbeat,
  FaSwimmer, FaTableTennis, FaFutbol, FaBasketballBall, FaRunning,
  FaMedal, FaBriefcase, FaEnvelope, FaPhone, FaArrowRight
} from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi';

const jobOpenings = [
  {
    id: 1,
    title: 'Swimming Coach',
    type: 'Full-Time',
    location: 'Nagpur, MH',
    icon: <FaSwimmer className="text-blue-400 text-3xl" />,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/40',
    badge: 'bg-blue-500/20 text-blue-300',
    description:
      'Lead swimming training sessions for kids and adults. Michael Phelps program certified coaches preferred.',
    requirements: ['3+ years coaching experience', 'RLSS/STA certification', 'Strong communication skills'],
  },
  {
    id: 2,
    title: 'Cricket Coach',
    type: 'Full-Time',
    location: 'Nagpur, MH',
    icon: <GiCricketBat className="text-green-400 text-3xl" />,
    gradient: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/40',
    badge: 'bg-green-500/20 text-green-300',
    description:
      'Develop youth cricket talent. Experience in batting techniques, bowling drills and match analysis required.',
    requirements: ['BCCI Level 2 or above', '4+ years coaching', 'Video analysis experience'],
  },
  {
    id: 3,
    title: 'Badminton Coach',
    type: 'Full-Time',
    location: 'Nagpur, MH',
    icon: <span className="text-3xl">🏸</span>,
    gradient: 'from-red-500/20 to-pink-500/20',
    border: 'border-red-500/40',
    badge: 'bg-red-500/20 text-red-300',
    description:
      'Train players at grassroots and advanced levels in partnership with the Padukone School of Badminton.',
    requirements: ['BAI certification preferred', '3+ years coaching', 'Competitive match experience'],
  },
  {
    id: 4,
    title: 'Lawn Tennis Coach',
    type: 'Full-Time',
    location: 'Nagpur, MH',
    icon: <FaTableTennis className="text-yellow-400 text-3xl" />,
    gradient: 'from-yellow-500/20 to-green-500/20',
    border: 'border-yellow-500/40',
    badge: 'bg-yellow-500/20 text-yellow-300',
    description:
      'Coach players on footwork, strokes and match tactics. Association with Spolto Lawn Tennis program is a plus.',
    requirements: ['AITA certification', '3+ years coaching', 'Experience with junior players'],
  },
  {
    id: 5,
    title: 'Football Coach',
    type: 'Full-Time',
    location: 'Nagpur, MH',
    icon: <FaFutbol className="text-orange-400 text-3xl" />,
    gradient: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/40',
    badge: 'bg-orange-500/20 text-orange-300',
    description:
      'Deliver football training programs for youth. Emphasis on skill-building, tactical awareness and team play.',
    requirements: ['AFC D License or above', '3+ years coaching', 'Youth development background'],
  },
  {
    id: 6,
    title: 'Basketball Coach',
    type: 'Full-Time',
    location: 'Nagpur, MH',
    icon: <FaBasketballBall className="text-purple-400 text-3xl" />,
    gradient: 'from-purple-500/20 to-indigo-500/20',
    border: 'border-purple-500/40',
    badge: 'bg-purple-500/20 text-purple-300',
    description:
      'Inspire young athletes in basketball fundamentals, team strategies and competitive play.',
    requirements: ['BAF certification', '3+ years experience', 'Positive attitude & passion for youth'],
  },
  {
    id: 7,
    title: 'Toddler Activity Coordinator',
    type: 'Part-Time / Full-Time',
    location: 'Nagpur, MH',
    icon: <FaRunning className="text-pink-400 text-3xl" />,
    gradient: 'from-pink-500/20 to-purple-500/20',
    border: 'border-pink-500/40',
    badge: 'bg-pink-500/20 text-pink-300',
    description:
      'Design and lead play-based movement activities for toddlers. Early childhood education background preferred.',
    requirements: ['Early childhood education background', 'Patient & creative personality', 'First aid trained'],
  },
  {
    id: 8,
    title: 'Academy Operations Manager',
    type: 'Full-Time',
    location: 'Nagpur, MH',
    icon: <FaBriefcase className="text-gray-300 text-3xl" />,
    gradient: 'from-gray-500/20 to-slate-500/20',
    border: 'border-gray-500/40',
    badge: 'bg-gray-500/20 text-gray-300',
    description:
      'Manage day-to-day operations, member relations, scheduling and coordination across all sports verticals.',
    requirements: ['2+ years in sports/academy management', 'Strong organizational skills', 'Team leadership'],
  },
];

const perks = [
  { icon: <FaTrophy className="text-yellow-400 text-3xl" />, title: 'Champion Culture', text: 'Work alongside national-level athletes and top coaches in a high-performance environment.' },
  { icon: <FaMedal className="text-green-400 text-3xl" />, title: 'Growth & Certifications', text: 'Access to funded certifications, workshops and career development programs.' },
  { icon: <FaHeartbeat className="text-red-400 text-3xl" />, title: 'Health & Wellness', text: 'Free access to all Aspire facilities — gym, pools, courts and more.' },
  { icon: <FaUsers className="text-blue-400 text-3xl" />, title: 'Collaborative Team', text: 'Join a passionate, diverse team united by a love for sports and youth development.' },
  { icon: <FaChalkboardTeacher className="text-purple-400 text-3xl" />, title: 'Mentorship Programs', text: 'Work with experienced coaches and management who invest in your professional growth.' },
  { icon: <FaHeartbeat className="text-orange-400 text-3xl" />, title: 'Competitive Compensation', text: 'Attractive salary packages with performance-based incentives and bonuses.' },
];

const sportsOffered = [
  { name: 'Swimming', emoji: '🏊‍♂️', color: 'from-blue-400 to-cyan-500' },
  { name: 'Cricket', emoji: '🏏', color: 'from-green-400 to-emerald-500' },
  { name: 'Football', emoji: '⚽', color: 'from-orange-400 to-red-500' },
  { name: 'Basketball', emoji: '🏀', color: 'from-purple-400 to-indigo-500' },
  { name: 'Lawn Tennis', emoji: '🎾', color: 'from-yellow-400 to-lime-500' },
  { name: 'Badminton', emoji: '🏸', color: 'from-red-400 to-pink-500' },
  { name: 'Toddler Discovery', emoji: '🧸', color: 'from-pink-400 to-purple-500' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">

        {/* ─── HERO ─── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
          {/* animated bg blobs */}
          <div className="absolute inset-0 z-0">
            <div className="absolute w-[500px] h-[500px] rounded-full bg-[#6CD123]/10 blur-3xl -top-32 -left-32 animate-pulse" />
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#6CD123]/5 blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #6CD12330 1px, transparent 0)',
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
              <FaBriefcase className="text-xs" /> We're Hiring
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            >
              Build a Career in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
                Sports
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Join Aspire Sports Academy and shape the next generation of champions.
              Whether you're a coach, coordinator or operator — your passion belongs here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#openings"
                className="px-8 py-4 bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] text-black font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#6CD123]/30"
              >
                View Open Positions
              </a>
              <a
                href="#apply"
                className="px-8 py-4 border border-[#6CD123] text-[#6CD123] font-bold rounded-full text-lg hover:bg-[#6CD123]/10 transition-all duration-300"
              >
                Apply Now
              </a>
            </motion.div>
          </div>

          {/* floating sport pills */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 pb-10 flex-wrap px-4">
            {sportsOffered.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className={`bg-gradient-to-r ${s.color} text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg`}
              >
                <span>{s.emoji}</span> {s.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── WHY JOIN US ─── */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-950 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-widest text-[#6CD123] mb-3">Why Aspire?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Perks of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">Joining Our Team</span>
              </h2>
              <div className="w-20 h-1 bg-[#6CD123] mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6 hover:border-[#6CD123]/50 hover:bg-gray-900 transition-all duration-300 group"
                >
                  <div className="mb-4">{perk.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#6CD123] transition-colors">{perk.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{perk.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ABOUT THE ACADEMY ─── */}
        <section className="py-24 bg-gray-950 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <p className="text-sm uppercase tracking-widest text-[#6CD123] mb-3">About Aspire</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  A Place Where{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
                    Champions
                  </span>{' '}
                  Are Made
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  Aspire Sports Academy is Nagpur's premier multi-sport facility, offering world-class infrastructure
                  and coaching across 7 sports disciplines. Our academy runs programs in partnership with globally
                  recognized brands like Michael Phelps Swimming, Padukone Badminton, Gary Kirsten Cricket, and more.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  With hundreds of athletes trained every month and a team of passionate professionals,
                  Aspire is committed to making sports accessible, enjoyable and performance-driven for all ages.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[['500+', 'Athletes Monthly'], ['7', 'Sports Disciplines'], ['5+', 'Global Partners']].map(([stat, label]) => (
                    <div key={label} className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
                      <div className="text-3xl font-extrabold text-[#6CD123]">{stat}</div>
                      <div className="text-gray-400 text-sm mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="lg:w-1/2 grid grid-cols-2 gap-4"
              >
                {[
                  'https://res.cloudinary.com/dutlotmmd/image/upload/v1754418524/hypxfeaepoojb59qu3al.jpg',
                  'https://res.cloudinary.com/dutlotmmd/image/upload/v1754420552/f4kfr0pgp6oijvn8v75h.jpg',
                  'https://res.cloudinary.com/dutlotmmd/image/upload/v1754419897/oyeulfw7jrhncvaw7pua.jpg',
                  'https://res.cloudinary.com/dutlotmmd/image/upload/v1754421785/sdshsunx7q1cczfeemyo.jpg',
                ].map((src, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden aspect-square shadow-xl">
                    <img src={src} alt="Aspire facility" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── OPEN POSITIONS ─── */}
        <section id="openings" className="py-24 bg-black px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-widest text-[#6CD123] mb-3">Now Hiring</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">Positions</span>
              </h2>
              <div className="w-20 h-1 bg-[#6CD123] mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobOpenings.map((job, i) => (
                <motion.div
                  key={job.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i % 4}
                  className={`bg-gradient-to-br ${job.gradient} border ${job.border} rounded-2xl p-6 cursor-pointer hover:scale-[1.02] transition-all duration-300 group`}
                  onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-black/30 flex items-center justify-center">
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#6CD123] transition-colors">{job.title}</h3>
                        <p className="text-gray-400 text-sm">{job.location}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${job.badge}`}>{job.type}</span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{job.description}</p>

                  {selectedJob?.id === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="border-t border-white/10 pt-4 mt-4"
                    >
                      <p className="text-[#6CD123] text-sm font-semibold mb-2">Requirements:</p>
                      <ul className="space-y-1">
                        {job.requirements.map((req, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6CD123] flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  <div className="flex items-center gap-1 text-[#6CD123] text-sm font-semibold mt-4">
                    {selectedJob?.id === job.id ? 'Hide details' : 'View requirements'}
                    <FaArrowRight className={`transition-transform duration-300 ${selectedJob?.id === job.id ? 'rotate-90' : ''}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── APPLY CTA ─── */}
        <section id="apply" className="py-24 bg-gradient-to-b from-gray-950 to-black px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-black border border-[#6CD123]/30 rounded-3xl p-10 md:p-16 shadow-2xl shadow-[#6CD123]/10"
            >
              <div className="w-16 h-16 rounded-full bg-[#6CD123]/10 flex items-center justify-center mx-auto mb-6">
                <FaEnvelope className="text-[#6CD123] text-3xl" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
                  Join the Team?
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Send your resume and a brief note about your passion for sports to our HR team.
                We review every application carefully and respond within 5 business days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:contact@aspiresportsclub.com"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#6CD123]/30"
                >
                  <FaEnvelope /> contact@aspiresportsclub.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <FaPhone className="text-[#6CD123]" />
                Or call us at{' '}
                <a href="tel:+919876543210" className="text-[#6CD123] hover:underline">+91 89565 85865</a>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
