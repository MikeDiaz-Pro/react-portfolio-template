import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { translations } from "../constants/translations";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";


export default function HeroSection() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <section
        id="hero"
        className="min-h-screen bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center text-white flex items-center justify-center px-4"
        >
        <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.name}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">{t.title}</p>

            <div className="flex justify-center space-x-4 mb-6">
            <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-2xl"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-2xl"
            >
                <FaLinkedin />
            </a>          
            </div>

            <div className="space-x-4">
                <ScrollLink className="cursor-pointer px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition" to="resume" smooth={true} duration={500} offset={-80}>{t.resume}</ScrollLink>
                <ScrollLink className="cursor-pointer px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition" to="about" smooth={true} duration={500} offset={-80}>{lang === "es" ? "Sobre mí" : "About Me"}</ScrollLink>         
            </div>
        </motion.div>
        </section>
    );
}