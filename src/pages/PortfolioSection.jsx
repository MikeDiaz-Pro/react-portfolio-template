import { translations } from "../constants/translations";
import { useLanguage } from "../context/LanguageContext";


export default function PortfolioSection() {
    const { lang } = useLanguage();
    const t = translations[lang];
    return (
        <section id="portfolio" className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.portfolioTitle}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((project, index) => (
                <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
                >
                <div>
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-sm text-gray-400 mb-1">{project.tech}</p>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                </div>              
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}