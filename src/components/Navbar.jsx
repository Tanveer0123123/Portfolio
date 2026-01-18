import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

 
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-gray-900/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-purple-500"
            onClick={() => setOpen(false)}
          >
            Tanveer Alam Ansari
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-purple-500">Home</Link>
            <Link to="/about" className="hover:text-purple-500">About</Link>
            <Link to="/services" className="hover:text-purple-500">Services</Link>
            <Link to="/projects" className="hover:text-purple-500">Projects</Link>
            <Link to="/contact" className="hover:text-purple-500">Contact</Link>

            <Link
              to="/hire-me"
              className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Spacer (Navbar height fix) */}
      <div className="h-[65px]" />

      {/* Overlay (click outside to close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gray-900 z-[60]
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
          <span className="text-xl font-bold text-purple-500">
            Tanveer.dev
          </span>
          <button
            className="text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-6 py-6 space-y-5">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <Link
            to="/hire-me"
            onClick={() => setOpen(false)}
            className="mt-4 text-center bg-purple-600 hover:bg-purple-700 py-3 rounded-lg"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
