import { FaGithub, FaLinkedin } from "react-icons/fa";
import { translations } from "../constants/translations";
import { useLanguage } from "../context/LanguageContext";



export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="bg-[#0f0f0f] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

        <p className="text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} {t.name}. {t.footerRights}.
        </p>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
          >
            {t.portfolio}
          </a>
        </div>
      </div>
    </footer>
  );
}