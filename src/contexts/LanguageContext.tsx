import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
  translations: Record<Language, Record<string, string>>;
}

export const LanguageProvider = ({ children, translations }: LanguageProviderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [language, setLanguageState] = useState<Language>(() => {
    return location.pathname.startsWith("/ru") ? "ru" : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const currentPath = location.pathname;
    
    if (lang === "ru") {
      if (!currentPath.startsWith("/ru")) {
        navigate(`/ru${currentPath === "/" ? "" : currentPath}`);
      }
    } else {
      if (currentPath.startsWith("/ru")) {
        navigate(currentPath.replace("/ru", "") || "/");
      }
    }
  };

  useEffect(() => {
    const isRuPath = location.pathname.startsWith("/ru");
    const shouldBeRu = language === "ru";
    
    if (isRuPath !== shouldBeRu) {
      setLanguageState(isRuPath ? "ru" : "en");
    }
  }, [location.pathname]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
