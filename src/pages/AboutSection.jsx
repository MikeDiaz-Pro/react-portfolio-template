import { FaGithub, FaLinkedin } from "react-icons/fa";
import { translations } from "../constants/translations";
import img_profile from "../assets/profile.png";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen (arriba en mobile, derecha en desktop) */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={img_profile}
            alt="Miguel Díaz"
            className="rounded-xl shadow-lg object-cover w-full max-w-xs"
          />
        </div>

        {/* Texto (abajo en mobile, izquierda en desktop) */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{t.aboutTitle}</h2>
          <p className="text-gray-300 mb-4">{t.aboutText1}</p>
          <p className="text-gray-400 mb-4">{t.aboutText2}</p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
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
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
            >
              {t.portfolio}
            </a>
          </div>

          <p className="text-sm mt-6 text-gray-500">{t.location}</p>
        </div>
      </div>
    </section>
  );
}