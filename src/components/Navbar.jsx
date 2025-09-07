import { useState } from "react";
import { translations } from "../constants/translations";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";
import { FaGlobe } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <span className="text-lg font-bold tracking-wide">{t.name}</span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <ScrollLink
            className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
            to="hero"
            smooth={true}
            duration={300}
            offset={-80}
          >
            Home
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
            to="about"
            smooth={true}
            duration={300}
            offset={-80}
          >
            About
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
            to="resume"
            smooth={true}
            duration={300}
            offset={-80}
          >
            Resume
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
            to="portfolio"
            smooth={true}
            duration={300}
            offset={-80}
          >
            Portfolio
          </ScrollLink>

          {/* Botón de idioma desktop */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-black transition"
          >
            <FaGlobe className="text-base" />
            {lang === "es" ? "EN" : "ES"}
          </button>
        </nav>

        {/* Menú móvil: ícono hamburguesa */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-black bg-opacity-90 text-white space-y-3">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={300}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium cursor-pointer hover:text-blue-400 transition-colors"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={300}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium cursor-pointer hover:text-blue-400 transition-colors"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="resume"
            smooth={true}
            duration={300}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium cursor-pointer hover:text-blue-400 transition-colors"
          >
            Resume
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            smooth={true}
            duration={300}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium cursor-pointer hover:text-blue-400 transition-colors"
          >
            Portfolio
          </ScrollLink>

          {/* Botón de idioma móvil */}
          <button
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className="mt-2 flex items-center gap-1 px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-black transition"
          >
            <FaGlobe className="text-base" />
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      )}
    </header>
  );
}