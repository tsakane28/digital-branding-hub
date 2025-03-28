
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type LanguageType = "en" | "es" | "fr" | "zh";

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>(() => {
    // Try to get the language from localStorage first
    const savedLanguage = localStorage.getItem("preferredLanguage") as LanguageType;
    
    // If there's no saved language, check browser language or default to English
    if (!savedLanguage) {
      const browserLang = navigator.language.split('-')[0];
      if (["en", "es", "fr", "zh"].includes(browserLang)) {
        return browserLang as LanguageType;
      }
      return "en";
    }
    
    return savedLanguage;
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
