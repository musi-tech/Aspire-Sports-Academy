import { motion } from "framer-motion";

export default function SportsCard({ sport }) {
  return (
    <motion.div
      key={sport.name}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8"
    >
      <img
        src={sport.image}
        alt={sport.name}
        className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64"
      />
      <div className="text-left md:w-1/2">
        <h3 className="text-2xl font-semibold mb-2">{sport.emoji} {sport.name}</h3>
        <p className="text-gray-700 mb-2">{sport.description}</p>
        <span className="inline-block mt-4 px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
          Available
        </span>
      </div>
    </motion.div>
  );
}
