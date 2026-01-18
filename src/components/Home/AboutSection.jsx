import { motion } from "framer-motion";
import { FaCode, FaProjectDiagram, FaRocket } from "react-icons/fa";

const technologies = [
  "JavaScript",
  "Java",
  "SQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "WordPress",
  "Git",
  "GitHub",
  "Axios",
  "React Query",
  "VS Code",
];

const stats = [
  { icon: <FaProjectDiagram />, value: "15+", label: "Projects Completed" },
  { icon: <FaCode />, value: "1+", label: "Years Experience" },
  { icon: <FaRocket />, value: "Fast", label: "Delivery & Quality" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-[100dvh] flex items-start pt-14 bg-gray-900"
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
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Who I am, what I do, and the technologies I work with.
          </p>
        </motion.div>
        {/* STATS */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/20 blur-2xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-cyan-500/10 blur-2xl rounded-full" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl">
                  {s.icon}
                </div>
                <div>
                  <p className="text-2xl font-extrabold">{s.value}</p>
                  <p className="text-gray-400 text-sm">{s.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* MAIN GRID */}
            {/* LEFT — ABOUT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-8"
            >
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-purple-500/15 blur-3xl rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-cyan-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">
                  Software Engineer / Full Stack Developer
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  I am a{" "}
                  <span className="text-purple-400 font-semibold">
                    Software Engineer
                  </span>{" "}
                  with experience in full-stack web application development using the{" "}
                  <span className="text-purple-400 font-semibold">MERN stack</span>{" "}
                  (MongoDB, Express.js, React.js, Node.js), along with{" "}
                  <span className="text-purple-400 font-semibold">Next.js</span> and{" "}
                  <span className="text-purple-400 font-semibold">WordPress</span>.
                </p>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  I have worked on ERP-level applications, real-time systems, and
                  business websites where I focused on frontend development, REST API
                  integration, performance optimization, and reusable component architecture.
                </p>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Along with JavaScript, I also have a solid foundation in{" "}
                  <span className="text-purple-400 font-semibold">Java</span> and{" "}
                  <span className="text-purple-400 font-semibold">SQL</span>, which helps me
                  understand backend logic and database-driven applications.
                </p>

              </div>
            </motion.div>

           {/* RIGHT — TECH */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-8"
            >
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-purple-500/15 blur-3xl rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-cyan-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6">
                  Tools & Technologies
                </h3>

                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm px-4 py-2 rounded-full bg-gray-950 border border-gray-800 text-gray-300
                                hover:border-purple-500 hover:text-purple-300 transition cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
