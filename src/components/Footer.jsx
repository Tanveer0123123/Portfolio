import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/Tanveer0123123" },
    { icon: FaInstagram, link: "https://instagram.com/shahab-jade-tanveer" },
    { icon: FaLinkedinIn, link: "www.linkedin.com/in/tanveer-alam-ansari-4b193226b" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* BRAND / ABOUT */}
        <div>
          <h2 className="text-2xl font-bold text-purple-500 mb-4">
            Tanveer Alam Ansari
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I build modern, responsive, and scalable web applications using
            the MERN stack, Next.js, and modern UI technologies to help
            businesses grow online.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
      border border-gray-700 hover:bg-purple-600 hover:border-purple-600 transition"
              >
                <item.icon />
              </a>
            ))}
          </div>

          {/* Help Line */}
          <div className="flex items-center gap-4 mt-8">
            <div className="bg-purple-600 p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm text-gray-400">Need Help?</p>
              <p className="font-semibold text-white">+91 80844 10021</p>
            </div>
          </div>
        </div>

        {/* SERVICES / LINKS */}
        <div className="grid grid-cols-2 gap-10">

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "Website Development",
                "React Development",
                "MERN Stack Apps",
                "Next.js Development",
                "WordPress Websites",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:text-purple-500 transition"
                >
                  <IoIosArrowForward className="text-purple-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">
              Useful Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
                { name: "Hire Me", path: "/hire-me" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-purple-500 transition"
                  >
                    <IoIosArrowForward className="text-purple-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-white">
            Contact Us
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <MdLocationOn className="text-purple-500 text-xl mt-1" />
              <span>Bhopal, India</span>
            </li>

            <li className="flex gap-3">
              <FaPhoneAlt className="text-purple-500 mt-1" />
              <span>+91 80844 10021</span>
            </li>

            <li className="flex gap-3">
              <MdEmail className="text-purple-500 mt-1" />
              <span>tanveer0123123@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-md">
        © {new Date().getFullYear()} Tanveer Alam Ansari. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
