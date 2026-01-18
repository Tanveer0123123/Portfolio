import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const packages = [
  {
    name: "Basic",
    price: "₹4,999",
    tag: "Landing Page",
    desc: "Perfect for personal portfolio or single page business landing.",
    features: [
      "1 Page Responsive Website",
      "Modern UI Design",
      "Fast Loading",
      "Contact Form",
      "Basic SEO Setup",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "₹9,999",
    tag: "Business Website",
    desc: "Great for small businesses with multiple pages and better UX.",
    features: [
      "Up to 5 Pages",
      "Premium UI + Animations",
      "WhatsApp Integration",
      "SEO Friendly Structure",
      "Deployment Support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹19,999",
    tag: "Web App / MERN",
    desc: "For startups needing a powerful app with backend & admin panel.",
    features: [
      "Full Stack MERN App",
      "Auth + Dashboard",
      "API Integration",
      "Admin Panel",
      "1 Month Support",
    ],
    highlight: false,
  },
];

const HireMePage = () => {
  return (
    <>
      {/* TOP HERO (same as services) */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-4xl font-bold text-purple-500">
            Hire Me
          </h2>
          <p className="mt-4 text-gray-400">Home / Hire Me</p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-gray-900">
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
              Let’s Work <span className="text-purple-500">Together</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              I build modern, fast and scalable websites & web apps. Choose a
              package or contact me for custom requirements.
            </p>
          </motion.div>

          {/* PACKAGES */}
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-2xl border p-7 bg-gray-900 transition
                  ${
                    pkg.highlight
                      ? "border-purple-500/60 hover:border-purple-500"
                      : "border-gray-800 hover:border-purple-500"
                  }
                  hover:-translate-y-2`}
              >
                {/* Glow */}
                <div className="absolute -top-14 -right-14 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-14 -left-14 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

                {/* Badge */}
                {pkg.highlight && (
                  <div className="relative z-10 inline-block text-xs font-semibold px-3 py-1 rounded-full
                    bg-purple-500/15 border border-purple-500/30 text-purple-300 mb-4">
                    Most Popular
                  </div>
                )}

                <div className="relative z-10">
                  <p className="text-gray-400 text-sm">{pkg.tag}</p>
                  <h3 className="text-2xl font-bold mt-1">{pkg.name}</h3>

                  <div className="mt-4 flex items-end gap-2">
                    <p className="text-4xl font-extrabold text-white">
                      {pkg.price}
                    </p>
                    <span className="text-gray-400 text-sm">/project</span>
                  </div>

                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                    {pkg.desc}
                  </p>

                  {/* Features */}
                  <div className="mt-6 space-y-3">
                    {pkg.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <FaCheckCircle className="text-purple-400" />
                        <p className="text-gray-300 text-sm">{f}</p>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href="/contact"
                    className={`mt-8 inline-flex w-full items-center justify-center px-6 py-3 rounded-xl font-semibold transition
                      ${
                        pkg.highlight
                          ? "bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90"
                          : "border border-gray-700 hover:border-purple-500"
                      }`}
                  >
                    Choose Plan
                  </a>
                </div>

                {/* Bottom line */}
                <div className="h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* EXTRA CTA */}
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
                  Need a <span className="text-purple-400">custom</span> project?
                </h3>
                <p className="text-gray-300 mt-3 max-w-xl">
                  Send your requirement and I’ll suggest the best solution with
                  timeline & cost estimate.
                </p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="mailto:tanveer0123123@gmail.com"
                  className="px-7 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition font-semibold flex items-center gap-2"
                >
                  <FaEnvelope /> Email
                </a>

                <a
                  href="https://wa.me/918084410021"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3 rounded-xl border border-gray-700 hover:border-purple-500 transition font-semibold flex items-center gap-2"
                >
                  <FaWhatsapp /> WhatsApp
                </a>

                <a
                  href="tel:+918084410021"
                  className="px-7 py-3 rounded-xl border border-gray-700 hover:border-purple-500 transition font-semibold flex items-center gap-2"
                >
                  <FaPhoneAlt /> Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HireMePage;
