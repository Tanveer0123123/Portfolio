import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useState } from "react";

const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please enter your Name and Mobile Number.");
      return;
    }

    setLoading(true);

    try {
      // ✅ 1) Send Email via Web3Forms 
      const payload = {
        access_key: "8776430b-7d8b-43b4-9508-986ce87c5083",
        subject: "New Portfolio Enquiry",
        from_name: "Portfolio Contact Form",
        ...formData,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Email sending failed. Please try again!");
        setLoading(false);
        return;
      }

      // ✅ 2) WhatsApp open with enquiry details
      const whatsappNumber = "8084410021"; // with country code
      const text = `*New Portfolio Enquiry*%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Email: ${formData.email}%0A
Message: ${formData.message}`;

      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");

      // success alert + clear form
      alert("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-gray-900">
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
            Contact <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to work together? Feel free to reach
            out to me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT — CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid gap-5">
              {/* Email */}
              <div className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition">
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/20 blur-2xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-cyan-500/10 blur-2xl rounded-full" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:tanveer0123123@gmail.com"
                      className="text-gray-200 font-medium break-all hover:text-purple-400 transition"
                    >
                      tanveer0123123@gmail.com
                    </a>

                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition">
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/20 blur-2xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-cyan-500/10 blur-2xl rounded-full" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-gray-200 font-medium">
                      +91 80844 10021
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition">
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/20 blur-2xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-cyan-500/10 blur-2xl rounded-full" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-200 font-medium">Bhopal, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — CONTACT FORM */}
          <motion.form
            onSubmit={handleSubmit} //  important
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gray-900 border border-gray-800 p-8 rounded-2xl space-y-5"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/15 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-2">
                Send a <span className="text-purple-400">Message</span>
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Fill the form and I’ll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-950 border border-gray-800 rounded-xl outline-none
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-600/30 transition"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-950 border border-gray-800 rounded-xl outline-none
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-600/30 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-950 border border-gray-800 rounded-xl outline-none
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-600/30 transition"
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-950 border border-gray-800 rounded-xl outline-none resize-none
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-600/30 transition"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl font-semibold transition
                  bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </div>
            </div>
          </motion.form>
        </div>

        {/* About Text */}
        <div className=" mt-24 bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-3">
            Let’s build something{" "}
            <span className="text-purple-400">impactful</span>
          </h3>

          <p className="text-gray-400 leading-relaxed text-sm">
            I am open to freelance opportunities, full-time roles, and exciting
            collaborations. I love building modern, fast, and user-friendly web
            experiences that solve real problems.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm mt-4">
            If you have an idea or a project in mind, let’s connect and create
            something premium together.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href="mailto:tanveer0123123@gmail.com"
              className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://wa.me/918084410021"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-gray-700 hover:border-purple-500 transition font-semibold flex items-center gap-2"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
