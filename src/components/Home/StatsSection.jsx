import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaSmile,
  FaTools,
  FaCalendarAlt,
} from "react-icons/fa";


const stats = [
  { label: "Projects Completed", value: 15, icon: <FaProjectDiagram /> },
  { label: "Happy Clients", value: 15, icon: <FaSmile /> },
  { label: "Technologies Used", value: 16, icon: <FaTools /> },
  { label: "Months Experience", value: 12, icon: <FaCalendarAlt /> },
];


const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}+</span>;
};

const StatsSection = () => {
  return (
    <section className="bg-gray-950 py-12 border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-purple-500">Achievements</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Numbers that reflect my work experience and growth in web development.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center
              hover:border-purple-500 hover:-translate-y-2 transition duration-300"
            >
              {/* Glow Accent */}
              <div className="absolute -top-14 -right-14 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-14 -left-14 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

              {/* Icon */}
              <div className="relative z-10 mx-auto w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl mb-5">
                {stat.icon}
              </div>

              {/* Counter */}
              <h3 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white">
                <Counter target={stat.value} />
              </h3>

              {/* Label */}
              <p className="relative z-10 text-gray-400 mt-2 text-sm md:text-base">
                {stat.label}
              </p>

              {/* Bottom Gradient Line */}
              <div className="h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500 mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
