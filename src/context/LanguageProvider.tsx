import React, { createContext, useState, useContext, ReactNode } from 'react';

const LanguageContext = createContext<any>(null);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isSpanish, setIsSpanish] = useState(true); 

  const toggleLanguage = () => {
    setIsSpanish(prevLang => !prevLang);
  };

  return (
    <LanguageContext.Provider value={{ isSpanish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
