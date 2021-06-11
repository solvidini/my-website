import React, { useContext } from 'react';

import { LanguageContext } from '../languageContext';

const withTranslation = (Component: any) => {
   return (props: any) => {
      const { language = '', changeLanguage = () => { }, dictionary = {} } = useContext(
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
