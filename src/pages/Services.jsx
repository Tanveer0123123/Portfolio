import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaPaintBrush,
  FaRedoAlt,
  FaWordpress,
  FaPlug,
  FaCheckCircle,
  FaPhoneAlt,
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

const processSteps = [
  {
    title: "Discuss Requirement",
    desc: "We understand your goal, features and timeline.",
  },
  {
    title: "UI Design + Planning",
    desc: "Clean UI + proper structure for performance & scaling.",
  },
  {
    title: "Development",
    desc: "Fast coding with modern tech & clean architecture.",
  },
  {
    title: "Testing + Delivery",
    desc: "Responsive testing and smooth deployment support.",
  },
];

const Services = () => {
  return (
    <>
      {/* TOP BREADCRUMB HERO */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-4xl font-bold text-purple-500">
            My Services
          </h2>
          <p className="mt-4 text-gray-400">Home / My Services</p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="min-h-screen flex items-center bg-gray-900">
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

          {/* NEW SECTION: WORK PROCESS */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h3 className="text-3xl md:text-4xl font-bold">
                How I <span className="text-purple-500">Work</span>
              </h3>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
                Simple, transparent and professional workflow for best results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/15 flex items-center justify-center text-purple-400">
                      <FaCheckCircle />
                    </div>
                    <h4 className="font-semibold text-lg">{step.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/*NEW SECTION: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 rounded-2xl p-10 md:p-14 border border-gray-800 bg-gradient-to-r from-purple-500/10 via-gray-900 to-cyan-500/10 relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Let’s build something{" "}
                  <span className="text-purple-400">amazing</span>
                </h3>
                <p className="text-gray-300 mt-3 max-w-xl">
                  Want a modern website or web app? I’m open for freelance &
                  collaborations. Let’s talk and start your project.
                </p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="/contact"
                  className="px-7 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition font-semibold"
                >
                  Contact Me
                </a>
                <a
                  href="tel:+91 8084410021"
                  className="px-7 py-3 rounded-xl border border-gray-700 hover:border-purple-500 transition font-semibold flex items-center gap-2"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
