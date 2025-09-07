import { translations } from "../constants/translations";
import { useLanguage } from "../context/LanguageContext";

export default function ResumeSection() {
    const { lang } = useLanguage();
    const t = translations[lang];
    return (
        <section id="resume" className="bg-[#121212] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

            {/* Título */}
            <h2 className="text-3xl font-bold mb-10 text-center">{t.resumeTitle}</h2>

            {/* Experiencia */}
            <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-4">{t.experienceTitle}</h3>
            {t.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                <h4 className="text-xl font-bold">{exp.role} · {exp.company}</h4>
                <p className="text-gray-400 text-sm mb-1">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>

            {/* Skills */}
            <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-4">{t.skillsTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.skills.map((group, index) => (
                <div key={index}>
                    <h4 className="text-lg font-bold mb-2">{group.category}</h4>
                    <ul className="list-disc list-inside text-gray-300 text-sm">
                    {group.items.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            </div>

            {/* Educación e Idiomas */}
            <div className="grid md:grid-cols-2 gap-10">
            <div>
                <h3 className="text-2xl font-semibold mb-2">{t.educationTitle}</h3>
                <p className="text-white font-bold">{t.education.degree}</p>
                <p className="text-gray-300 text-sm">{t.education.school}</p>
                <p className="text-gray-400 text-sm">{t.education.period}</p>
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-2">{t.languagesTitle}</h3>
                <ul className="text-gray-300 text-sm list-disc list-inside">
                {t.languages.map((lang, index) => (
                    <li key={index}>{lang}</li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        </section>
    );
}