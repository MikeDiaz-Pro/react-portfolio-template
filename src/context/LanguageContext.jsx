import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {    
    return localStorage.getItem("lang") || "en";
  });

  const toggleLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  
  useEffect(() => {
    const syncLang = () => {
      const storedLang = localStorage.getItem("lang");
      if (storedLang && storedLang !== lang) {
        setLang(storedLang);
      }
    };
    window.addEventListener("storage", syncLang);
    return () => window.removeEventListener("storage", syncLang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);