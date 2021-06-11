import React, { useState, useEffect, createContext, ChangeEvent, FC } from 'react';

// Translations
import polish from './translations/pl.json';
import english from './translations/en.json';

export interface Dictionary {
   [index: string]: any
}

export interface LC {
   language: string,
   changeLanguage: Function
   dictionary: Dictionary
}


export const LanguageContext = createContext<LC>({ language: 'pl', changeLanguage: () => { }, dictionary: {} });

export const LanguageProvider: FC<{}> = ({ children }) => {
   const [language, setLanguage] = useState('pl');
   const [dictionary, setDictionary] = useState(polish);

   useEffect(() => {
      const storedLanguage = localStorage.getItem('language') || '';
      if (storedLanguage) {
         setLanguage(storedLanguage);
      }
   }, []);

   useEffect(() => {
      if (language === 'pl') setDictionary(polish);
      else setDictionary(english);
   }, [language]);

   const changeLanguage = (e: ChangeEvent<{ dataset: any }>) => {
      e.preventDefault();
      const languageToChange = e.target.dataset.language;
      if (languageToChange !== 'pl' && languageToChange !== 'en') return;
      setLanguage(languageToChange);
      localStorage.setItem('language', languageToChange);
   };

   return (
      <LanguageContext.Provider
         value={{
            language: language,
            changeLanguage: changeLanguage,
            dictionary: dictionary,
         }}
      >
         {children}
      </LanguageContext.Provider>
   );
};
