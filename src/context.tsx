import React, { useState, useEffect } from 'react';

// Translations
import polish from './translations/pl.json';
import english from './translations/en.json';

export const LanguageContext = React.createContext({});

type Props = {
   children: React.ReactChildren
}

export const LanguageProvider = (props: Props) => {
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

   const changeLanguage = (e: any) => {
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
         {props.children}
      </LanguageContext.Provider>
   );
};
