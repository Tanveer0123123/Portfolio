import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Img1 from "../../assets/power-track-logo2.png";
import Img2 from "../../assets/hommlie2.png";
import Img3 from "../../assets/project-portfolio.png";
import Img4 from "../../assets/np3.png";
import Img5 from "../../assets/project-ecommerce.jpg";
import Img6 from "../../assets/project-ecommerce2.jpg";



const projects = [
  {
    title: "Power Track Gym",
    desc: "Modern and fully responsive gym website with membership plans, trainer profiles, trial booking, and an engaging user-friendly interface.",
    tech: ["React Js", "Tailwind"],
    image: Img1,
    github: "https://github.com/Tanveer0123123/power-track-gym",
    live: "https://www.powertrackgym.com/",
  },
  {
    title: "Hommlie",
    desc: "Modern home services platform with a responsive interface for exploring services, managing bookings, and delivering a seamless user experience.",
    tech: ["React", "Node", "Express", "My Sql"],
    image: Img2,
    github: "https://github.com/Tanveer0123123/hommlie-full-stack-project",
    live: "https://hommlie-full-stack-project.vercel.app/",
  },
  {
    title: "Portfolio Website",
    desc: "Modern and fully responsive portfolio website designed to showcase my technical skills, projects, experience, and professional profile with smooth animations and a clean user-friendly interface.",
    tech: ["React Js", "Tailwind"],
    image: Img3,
    github: "https://github.com/Tanveer0123123/Portfolio",
    live: "https://www.tanveeralamansari.com/",
  },

  /* ---------- NEW PROJECTS ---------- */

  {
    title: "Now & Fast Transport",
    desc: "Professional and fully responsive transport business website designed to showcase transportation services, company information, and provide a smooth user experience across all devices.",
    tech: ["React Js", "Node js", "Mongo Db"],
    image: Img4,
    github: "https://github.com/Tanveer0123123/packers-movers-project",
    live: "https://www.nowandfasttransport.com/",
  },
  {
    title: "WordPress Custom Website",
    desc: "Custom and fully responsive WordPress website developed with a modern design, customized theme components, optimized layouts, and CMS functionality to provide an easy-to-manage and engaging user experience.",
    tech: ["WordPress", "PHP"],
    image: Img5,
    github: "#",
    live: "#",
  },
  {
    title: "ERP Management System",
    desc: "ERP-level web application with dashboards, role-based access, and data management.",
    tech: ["React Js", "Node js", "REST API"],
    image: Img6,
    github: "#",
    live: "#",
  },
];


const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 flex items-start pt-14 bg-gray-950"
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
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of the projects that demonstrate my experience with
            full-stack and modern web development.
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

      </div>
    </section>
  );
};

export default ProjectsSection;
