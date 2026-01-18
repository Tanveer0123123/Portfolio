import { motion } from "framer-motion";
import { FaCheckCircle, FaRocket, FaUsers, FaShieldAlt } from "react-icons/fa";

/* ------------------------------
   Why Choose Me Data
--------------------------------*/
const reasons = [
  {
    title: "Quality & Clean Code",
    desc: "I focus on writing clean, maintainable, and scalable code following best practices and modern standards.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Modern Technologies",
    desc: "Experienced with MERN stack, Next.js, Tailwind CSS, and modern web tools to build future-ready applications.",
    icon: <FaRocket />,
  },
  {
    title: "Client-Centric Approach",
    desc: "I understand client requirements clearly and deliver solutions that align with business goals.",
    icon: <FaUsers />,
  },
  {
    title: "Secure & Reliable",
    desc: "I build applications with security, performance, and reliability in mind for long-term success.",
    icon: <FaShieldAlt />,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="text-purple-500">Choose Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here’s why clients and companies trust me for building
            high-quality web applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-gray-900 p-7 rounded-2xl border border-gray-800
              hover:border-purple-500 hover:-translate-y-2 transition duration-300"
            >
              {/* Glow Accent */}
              <div className="absolute -top-14 -right-14 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-14 -left-14 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

              {/* Icon Box */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Gradient Line */}
              <div className="h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500 mt-7" />
            </motion.div>
          ))}
        </div>

        {/* */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl p-10 md:p-14 border border-gray-800 bg-gradient-to-r from-purple-500/10 via-gray-900 to-cyan-500/10 relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Let’s create something{" "}
                <span className="text-purple-400">amazing</span>
              </h3>
              <p className="text-gray-300 mt-3 max-w-xl">
                If you need a premium website or web app for your business, I’m
                ready to help you with modern design and clean development.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/hire-me"
                className="px-7 py-3 rounded-xl font-semibold transition
                bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90"
              >
                Hire Me
              </a>
              <a
                href="/contact"
                className="px-7 py-3 rounded-xl border border-gray-700 hover:border-purple-500 transition font-semibold"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
