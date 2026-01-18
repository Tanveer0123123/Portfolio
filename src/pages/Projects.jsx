import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Img1 from "../assets/project-ecommerce.jpg";
import Img2 from "../assets/project-ecommerce2.jpg";
import Img3 from "../assets/project-portfolio.png";

const projects = [
  {
    title: "E-Commerce Web App",
    desc: "Full-stack e-commerce app with authentication, cart, and order management.",
    tech: ["React", "Node", "Express", "MongoDB"],
    image: Img1,
    github: "#",
    live: "#",
  },
  {
    title: "Real-Time Chat App",
    desc: "Real-time chat application with private & group chats using Socket.io.",
    tech: ["MERN", "Socket.io", "JWT"],
    image: Img2,
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio website to showcase skills, projects, and experience.",
    tech: ["React", "Tailwind"],
    image: Img3,
    github: "#",
    live: "#",
  },

  /* ---------- NEW PROJECTS ---------- */

  {
    title: "ERP Management System",
    desc: "ERP-level web application with dashboards, role-based access, and data management.",
    tech: ["React", "Next.js", "REST API"],
    image: Img1,
    github: "#",
    live: "#",
  },
  {
    title: "Business Website",
    desc: "Professional business website with responsive UI and performance optimization.",
    tech: ["React", "Tailwind CSS"],
    image: Img2,
    github: "#",
    live: "#",
  },
  {
    title: "WordPress Custom Website",
    desc: "Custom WordPress website with theme customization and CMS enhancements.",
    tech: ["WordPress", "PHP"],
    image: Img3,
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <>
     <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-4xl md:text-4xl font-bold text-purple-500">
            My Projects
          </h2>
          <p className="mt-4 text-gray-400">Home / My Projects</p>
        </div>
      </section>

    <section id="projects" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of the projects that demonstrate my experience with full-stack
            and modern web development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800
              hover:border-purple-500 hover:-translate-y-2 transition duration-300"
            >
              {/* Glow Accents */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4
                  opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-900/80 border border-gray-700 p-3 rounded-full 
                    hover:border-purple-500 hover:text-purple-400 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-900/80 border border-gray-700 p-3 rounded-full 
                    hover:border-purple-500 hover:text-purple-400 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-gray-300
                      group-hover:border-purple-500/60 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom line glow */}
              <div className="h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/*  EXTRA CTA SECTION */}
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
                Want to see more{" "}
                <span className="text-purple-400">projects?</span>
              </h3>
              <p className="text-gray-300 mt-3 max-w-xl">
                I build clean and scalable web apps. If you want a website or web
                application for your business, let’s connect.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/hire-me"
                className="px-7 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition font-semibold"
              >
                Hire Me
              </a>
              <a
                href="https://github.com/Tanveer0123123"
                className="px-7 py-3 rounded-xl border border-gray-700 hover:border-purple-500 transition font-semibold"
              >
                View GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Projects;
