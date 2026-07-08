import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-purple-500">GP</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          <li>
            <a href="#home" className="hover:text-purple-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-purple-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-purple-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-purple-400 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-purple-400 transition">
              Experience
            </a>
          </li>

          <li>
            <a
              href="#certificates"
              className="hover:text-purple-400 transition"
            >
              Certificates
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-slate-800">
          <ul className="flex flex-col text-center">
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="block py-4 hover:bg-purple-600"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block py-4 hover:bg-purple-600"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="block py-4 hover:bg-purple-600"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="block py-4 hover:bg-purple-600"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#education"
                onClick={() => setMenuOpen(false)}
                className="block py-4 hover:bg-purple-600"
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="block py-4 hover:bg-purple-600"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#certificates"
                onClick={() => setMenuOpen(false)}
                className="block py-4 hover:bg-purple-600"
              >
                Certificates
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block py-4 hover:bg-purple-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
