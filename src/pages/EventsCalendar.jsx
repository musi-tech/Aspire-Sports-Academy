import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CalendarDays, ChevronLeft, ChevronRight, Info } from 'lucide-react';

/* ─── Event Types ─── */
const EVENT_TYPES = {
  Tournament:    { color: 'bg-red-500',    text: 'text-red-300',    border: 'border-red-400',    label: 'Tournament' },
  Camp:          { color: 'bg-blue-500',   text: 'text-blue-300',   border: 'border-blue-400',   label: 'Coaching Camp' },
  MembersDay:    { color: 'bg-[#6CD123]',  text: 'text-green-300',  border: 'border-green-400',  label: "Members Day" },
  Workshop:      { color: 'bg-purple-500', text: 'text-purple-300', border: 'border-purple-400', label: 'Workshop' },
  CelebrationDay:{ color: 'bg-amber-400',  text: 'text-amber-300',  border: 'border-amber-400',  label: 'Celebration' },
  FitnessWeek:   { color: 'bg-pink-500',   text: 'text-pink-300',   border: 'border-pink-400',   label: 'Fitness Week' },
  OpenDay:       { color: 'bg-cyan-500',   text: 'text-cyan-300',   border: 'border-cyan-400',   label: 'Open Day' },
};

/* ─── Full 2026 Events ─── */
const events = {
  '2026-01-01': [{ type: 'CelebrationDay', name: "New Year Open House" }],
  '2026-01-10': [{ type: 'Tournament',     name: 'Badminton Open (Juniors)' }],
  '2026-01-11': [{ type: 'Tournament',     name: 'Badminton Open (Juniors)' }],
  '2026-01-18': [{ type: 'MembersDay',     name: 'Members Appreciation Day' }],
  '2026-01-25': [{ type: 'Workshop',       name: 'Nutrition & Recovery Workshop' }],

  '2026-02-07': [{ type: 'Tournament',     name: 'Squash Singles League' }],
  '2026-02-08': [{ type: 'Tournament',     name: 'Squash Singles League' }],
  '2026-02-14': [{ type: 'CelebrationDay', name: "Valentine's Fitness Fiesta" }],
  '2026-02-21': [{ type: 'Camp',           name: 'Swimming Intensive Camp' }],
  '2026-02-22': [{ type: 'Camp',           name: 'Swimming Intensive Camp' }],
  '2026-02-28': [{ type: 'MembersDay',     name: 'Monthly Members Meet' }],

  '2026-03-01': [{ type: 'OpenDay',        name: 'Aspire Open Day' }],
  '2026-03-07': [{ type: 'Tournament',     name: 'Tennis Doubles Championship' }],
  '2026-03-08': [{ type: 'Tournament',     name: 'Tennis Doubles Championship' }],
  '2026-03-15': [{ type: 'FitnessWeek',   name: 'Fitness Awareness Week Kickoff' }],
  '2026-03-21': [{ type: 'Workshop',       name: 'Sports Injury Prevention' }],
  '2026-03-28': [{ type: 'MembersDay',     name: 'Monthly Members Meet' }],

  '2026-04-04': [{ type: 'Tournament',     name: 'Badminton Men\'s Singles' }],
  '2026-04-05': [{ type: 'Tournament',     name: 'Badminton Men\'s Singles' }],
  '2026-04-10': [{ type: 'Camp',           name: 'Cricket Coaching Camp' }],
  '2026-04-11': [{ type: 'Camp',           name: 'Cricket Coaching Camp' }],
  '2026-04-12': [{ type: 'Camp',           name: 'Cricket Coaching Camp' }],
  '2026-04-19': [{ type: 'Workshop',       name: 'Mental Fitness Workshop' }],
  '2026-04-25': [{ type: 'MembersDay',     name: 'Monthly Members Meet' }],

  '2026-05-02': [{ type: 'OpenDay',        name: 'Summer Sports Open Day' }],
  '2026-05-09': [{ type: 'Tournament',     name: 'Swimming Gala 2026' }],
  '2026-05-10': [{ type: 'Tournament',     name: 'Swimming Gala 2026' }],
  '2026-05-16': [{ type: 'FitnessWeek',   name: 'Summer Fitness Challenge' }],
  '2026-05-17': [{ type: 'FitnessWeek',   name: 'Summer Fitness Challenge' }],
  '2026-05-18': [{ type: 'FitnessWeek',   name: 'Summer Fitness Challenge' }],
  '2026-05-23': [{ type: 'Camp',           name: 'Badminton Skills Camp' }],
  '2026-05-30': [{ type: 'MembersDay',     name: 'Monthly Members Meet' }],

  '2026-06-06': [{ type: 'Tournament',     name: 'Squash Doubles League' }],
  '2026-06-07': [{ type: 'Tournament',     name: 'Squash Doubles League' }],
  '2026-06-13': [{ type: 'Workshop',       name: 'Yoga & Mindfulness Day' }],
  '2026-06-20': [{ type: 'Camp',           name: 'Tennis Intensive Camp' }],
  '2026-06-21': [{ type: 'Camp',           name: 'Tennis Intensive Camp' }],
  '2026-06-27': [{ type: 'MembersDay',     name: 'Monthly Members Meet' }],

  '2026-07-04': [{ type: 'OpenDay',        name: 'Mid-Year Open House' }],
  '2026-07-11': [{ type: 'Tournament',     name: 'Tennis Grand Prix' }],
  '2026-07-12': [{ type: 'Tournament',     name: 'Tennis Grand Prix' }],
  '2026-07-18': [{ type: 'FitnessWeek',   name: 'Monsoon Fitness Week' }],
  '2026-07-19': [{ type: 'FitnessWeek',   name: 'Monsoon Fitness Week' }],
  '2026-07-25': [{ type: 'MembersDay',     name: 'Monthly Members Meet' }],
  '2026-07-26': [{ type: 'Workshop',       name: 'Nutrition Masterclass' }],

  '2026-08-01': [{ type: 'Tournament',     name: 'Badminton Women\'s Singles' }],
  '2026-08-02': [{ type: 'Tournament',     name: 'Badminton Women\'s Singles' }],
  '2026-08-08': [{ type: 'Camp',           name: 'Junior Swimming Camp' }],
  '2026-08-09': [{ type: 'Camp',           name: 'Junior Swimming Camp' }],
  '2026-08-15': [{ type: 'CelebrationDay', name: 'Independence Day Fitness Run' }],
  '2026-08-22': [{ type: 'Workshop',       name: 'Strength & Conditioning Workshop' }],
  '2026-08-29': [{ type: 'MembersDay',     name: 'Members Appreciation Gala' }],

  '2026-09-05': [{ type: 'Tournament',     name: 'Multi-Sport Championship' }],
  '2026-09-06': [{ type: 'Tournament',     name: 'Multi-Sport Championship' }],
  '2026-09-07': [{ type: 'Tournament',     name: 'Multi-Sport Championship' }],
  '2026-09-12': [{ type: 'OpenDay',        name: 'Aspire Sports Discovery Day' }],
  '2026-09-19': [{ type: 'Camp',           name: 'Badminton Academy Camp' }],
  '2026-09-20': [{ type: 'Camp',           name: 'Badminton Academy Camp' }],
  '2026-09-26': [{ type: 'MembersDay',     name: 'Monthly Members Meet' }],

  '2026-10-03': [{ type: 'FitnessWeek',   name: 'Fitness Fest 2026' }],
  '2026-10-04': [{ type: 'FitnessWeek',   name: 'Fitness Fest 2026' }],
  '2026-10-05': [{ type: 'FitnessWeek',   name: 'Fitness Fest 2026' }],
  '2026-10-10': [{ type: 'Tournament',     name: 'Squash Open Championship' }],
  '2026-10-11': [{ type: 'Tournament',     name: 'Squash Open Championship' }],
  '2026-10-17': [{ type: 'Workshop',       name: 'Sports Psychology Talk' }],
  '2026-10-24': [{ type: 'CelebrationDay', name: 'Diwali Sports Night' }],
  '2026-10-31': [{ type: 'MembersDay',     name: 'Monthly Members Meet' }],

  '2026-11-07': [{ type: 'Tournament',     name: 'Annual Badminton Grand Slam' }],
  '2026-11-08': [{ type: 'Tournament',     name: 'Annual Badminton Grand Slam' }],
  '2026-11-14': [{ type: 'Camp',           name: 'Cricket T20 Camp' }],
  '2026-11-15': [{ type: 'Camp',           name: 'Cricket T20 Camp' }],
  '2026-11-21': [{ type: 'Workshop',       name: 'End-of-Year Wellness Workshop' }],
  '2026-11-28': [{ type: 'MembersDay',     name: 'Monthly Members Meet' }],

  '2026-12-05': [{ type: 'Tournament',     name: 'Year-End Swimming Finals' }],
  '2026-12-06': [{ type: 'Tournament',     name: 'Year-End Swimming Finals' }],
  '2026-12-12': [{ type: 'OpenDay',        name: 'Year-End Open House' }],
  '2026-12-19': [{ type: 'FitnessWeek',   name: 'New Year Countdown Fitness Week' }],
  '2026-12-20': [{ type: 'FitnessWeek',   name: 'New Year Countdown Fitness Week' }],
  '2026-12-25': [{ type: 'CelebrationDay', name: 'Christmas Sports Day' }],
  '2026-12-31': [{ type: 'CelebrationDay', name: 'New Year\'s Eve Celebration' }],
};

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

const pad = n => String(n).padStart(2, '0');
const dateKey = (year, month, day) => `${year}-${pad(month + 1)}-${pad(day)}`;

const MonthCalendar = ({ month, year, onDayClick, selectedDay }) => {
  const daysInMonth = getDaysInMonth(month, year);
  const startDay = getFirstDayOfMonth(month, year);
  const cells = [];

  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const todayKey = dateKey(year, month, new Date().getDate());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden"
    >
      {/* Month header */}
      <div className="bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] px-4 py-3">
        <h3 className="text-black font-extrabold text-base tracking-wide">{MONTHS[month]} 2026</h3>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 bg-[#1a1a1a] border-b border-white/10">
        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
          <div key={d} className="text-center text-[10px] font-bold text-gray-500 py-2">{d}</div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-0">
        {cells.map((day, idx) => {
          if (!day) return <div key={`empty-${idx}`} className="h-10" />;
          const key = dateKey(year, month, day);
          const dayEvents = events[key] || [];
          const hasEvent = dayEvents.length > 0;
          const isSelected = selectedDay === key;

          return (
            <button
              key={key}
              onClick={() => hasEvent && onDayClick(key)}
              className={`relative h-10 flex items-center justify-center text-xs font-medium transition-all duration-200 ${
                hasEvent ? 'cursor-pointer hover:bg-white/10' : 'cursor-default'
              } ${isSelected ? 'bg-white/15 rounded' : ''}`}
            >
              <span className={`w-7 h-7 flex items-center justify-center rounded-full text-xs ${
                hasEvent
                  ? `${EVENT_TYPES[dayEvents[0].type].color} text-white font-bold`
                  : 'text-gray-400'
              }`}>
                {day}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

const EventsCalendar = () => {
  const year = 2026;
  const [selectedDay, setSelectedDay] = useState(null);
  const [viewMonth, setViewMonth] = useState(0);

  const selectedEvents = selectedDay ? events[selectedDay] || [] : [];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0d0d0d] to-[#111] text-white pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8">

          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-semibold rounded-full uppercase tracking-widest mb-6">
              <CalendarDays size={14} /> 2026 Events
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Event Calendar 2026
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your full year view of tournaments, coaching camps, member days, workshops, and celebrations at Aspire Sports Club.
            </p>
          </motion.div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.values(EVENT_TYPES).map(({ color, label }) => (
              <span key={label} className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <span className={`w-3 h-3 rounded-full ${color} inline-block`} /> {label}
              </span>
            ))}
          </div>

          {/* Click hint */}
          <p className="text-center text-gray-600 text-xs mb-8 flex items-center justify-center gap-1">
            <Info size={12} /> Click a coloured date to see event details
          </p>

          {/* Event detail panel */}
          {selectedDay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-12 max-w-2xl mx-auto bg-[#1a1a1a] border border-white/15 rounded-2xl p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white">
                  {new Date(selectedDay + 'T00:00:00').toLocaleDateString('en-IN', {
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </h3>
                <button onClick={() => setSelectedDay(null)} className="text-gray-500 hover:text-white text-xl leading-none">×</button>
              </div>
              {selectedEvents.map((ev, i) => {
                const t = EVENT_TYPES[ev.type];
                return (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${t.border} bg-white/5 mb-2`}>
                    <span className={`w-3 h-3 rounded-full ${t.color}`} />
                    <div>
                      <p className={`text-sm font-bold ${t.text}`}>{ev.name}</p>
                      <p className="text-xs text-gray-500">{t.label}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* All 12 months grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {MONTHS.map((_, m) => (
              <MonthCalendar
                key={m}
                month={m}
                year={year}
                onDayClick={setSelectedDay}
                selectedDay={selectedDay}
              />
            ))}
          </div>

          {/* Upcoming events list */}
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-6 text-center">
              All Scheduled Events
            </h2>
            <div className="grid gap-3 max-w-3xl mx-auto">
              {Object.entries(events)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([date, evList]) =>
                  evList.map((ev, k) => {
                    const t = EVENT_TYPES[ev.type];
                    return (
                      <motion.div
                        key={`${date}-${k}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-4 p-4 bg-[#111] border border-white/10 rounded-xl hover:border-white/20 transition-all"
                      >
                        <div className={`w-12 h-12 rounded-xl ${t.color} flex-shrink-0 flex flex-col items-center justify-center text-white`}>
                          <span className="text-lg font-extrabold leading-none">{parseInt(date.split('-')[2])}</span>
                          <span className="text-[9px] font-semibold uppercase">{MONTHS[parseInt(date.split('-')[1]) - 1].slice(0, 3)}</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{ev.name}</p>
                          <p className={`text-xs ${t.text}`}>{t.label}</p>
                        </div>
                      </motion.div>
                    );
                  })
                )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsCalendar;
