import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import TanveerImg from "../../assets/Tanveer-photo1.jpg"

const titles = [
  "Software Engineer",
  "MERN Stack Developer",
  "React Developer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Typing animation logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-purple-500">
              Tanveer Alam Ansari
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl mt-4 font-medium text-gray-300">
            {titles[index]}
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Software Engineer with experience in building scalable and
            high-performance web applications using the MERN stack,
            Next.js, and WordPress. Focused on clean UI, performance
            optimization, and secure backend integration.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/hire-me"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition"
            >
              Hire Me
            </a>

            <a
              href="/Tanveer_Resume.pdf"
              download
              className="border border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8 text-2xl">
            <a
              href="https://github.com/Tanveer0123123"
              target="_blank"
              className="hover:text-purple-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="www.linkedin.com/in/tanveer-alam-ansari-4b193226b"
              target="_blank"
              className="hover:text-purple-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/shahab-jade-tanveer"
              target="_blank"
              className="hover:text-purple-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative order-1 md:order-2"
        >
          {/* Glow */}
          <div className="absolute w-72 h-72 bg-purple-600/30 blur-3xl rounded-full" />

          {/* Image */}
          <motion.div
            className="relative w-72 md:w-96 aspect-square"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <img
              src={TanveerImg}
              alt="Tanveer Ansari"
              className="w-full h-full lg:h-[450px] object-cover rounded-full border-4 border-[#A855F7] shadow-lg shadow-purple-500/50"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
