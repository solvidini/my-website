import React, { useContext } from 'react';

import { LanguageContext } from '../languageContext';

const withTranslation = (Component) => {
   return (props) => {
      const { language = '', changeLanguage = () => {}, dictionary = {} } = useContext(
         LanguageContext
      );

      return (
         <Component
            language={language}
            changeLanguage={changeLanguage}
            dictionary={dictionary}
            {...props}
         />
      );
   };
};

export default withTranslation;
