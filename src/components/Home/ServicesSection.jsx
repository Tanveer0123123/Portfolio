import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaPaintBrush,
  FaRedoAlt,
  FaWordpress,
  FaPlug,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";


const services = [
  {
    title: "Website Development",
    desc: "Fast, responsive, and modern websites tailored for business needs.",
    icon: <FaLaptopCode />,
  },
  {
    title: "React Development",
    desc: "Scalable single-page applications using React.js and clean architecture.",
    icon: <FaReact />,
  },
  {
    title: "Full Stack (MERN)",
    desc: "Complete MERN stack solutions with secure backend and RESTful APIs.",
    icon: <FaServer />,
  },
  {
    title: "UI / UX Design",
    desc: "Clean, user-friendly interfaces focused on usability and performance.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Website Redesign",
    desc: "Modernize existing websites with better UI and responsiveness.",
    icon: <FaRedoAlt />,
  },
  {
    title: "Next.js Development",
    desc: "SEO-friendly and high-performance web applications using Next.js.",
    icon: <SiNextdotjs />,
  },
  {
    title: "WordPress Development",
    desc: "Custom WordPress websites, themes, and CMS enhancements.",
    icon: <FaWordpress />,
  },
  {
    title: "API Integration",
    desc: "Third-party API integration using Axios and React Query.",
    icon: <FaPlug />,
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="min-h-[100dvh] flex items-center bg-gray-900"
    >
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
            My <span className="text-purple-500">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional services I offer to build scalable, modern, and
            high-quality web applications.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative bg-gray-900 p-6 rounded-xl border border-gray-800
                        hover:border-purple-500 hover:-translate-y-2 transition overflow-hidden"
            >
              {/* Glow Accent */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/20 blur-2xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-cyan-500/10 blur-2xl rounded-full" />

              {/* Icon */}
              <div className="text-4xl text-purple-500 mb-4 relative z-10">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
