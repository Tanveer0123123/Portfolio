import { useMemo } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { name: "Rahul Sharma", role: "Startup Founder", feedback: "Tanveer did an excellent job building our web application. The UI was clean, responsive, and the performance was outstanding.", rating: 5 },
  { name: "Ankit Verma", role: "Business Owner", feedback: "Very professional and dedicated developer. Delivered the project on time and exceeded our expectations.", rating: 5 },
  { name: "Priya Singh", role: "Product Manager", feedback: "Great experience working with Tanveer. He understands requirements well and builds scalable solutions.", rating: 4 },
  { name: "Aman Khan", role: "Agency Owner", feedback: "Excellent communication and fast delivery. Very clean design with modern UI. Highly recommended!", rating: 5 },
  { name: "Neha Gupta", role: "Entrepreneur", feedback: "Reliable developer with great understanding of UI/UX. He delivered exactly what I needed.", rating: 5 },
];

const TestimonialsSection = () => {

  const duplicatedTestimonials = useMemo(() => [...testimonials, ...testimonials, ...testimonials], []);

  return (
    <section className="bg-gray-950 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Client <span className="text-purple-500">Testimonials</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            What clients and collaborators say about working with me.
          </p>
        </motion.div>

        {/* Smooth Loop Container */}
        <div className="relative flex overflow-hidden group">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{
              x: ["0%", "-33.33%"], // Move by one full set of testimonials
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50, // Adjust for speed
                ease: "linear",
              },
            }}
            // Pause on hover
            whileHover={{ transition: { duration: 50, ease: "linear" } }}
          >
            {duplicatedTestimonials.map((item, i) => (
              <div
                key={i}
                className="w-[350px] md:w-[400px] flex-shrink-0"
              >
                <div className="group/card relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-purple-500/50 transition duration-300 h-full">
                  {/* Decorative Glows */}
                  <div className="absolute -top-14 -right-14 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

                  {/* Stars */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-1 mb-4">
                      {[...Array(item.rating)].map((_, starIndex) => (
                        <FaStar key={starIndex} className="text-yellow-500 text-sm" />
                      ))}

                    </div>
                    <FaQuoteLeft className="text-purple-500/20 text-3xl" />
                  </div>

                  

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                    “{item.feedback}”
                  </p>

                  <div>
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{item.role}</p>
                  </div>

                  {/* Bottom highlight line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover/card:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays for "Fade Out" effect on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />
        </div>

        <p className="text-center text-gray-600 text-xs mt-10 tracking-widest uppercase">
          Hover to slow down
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;