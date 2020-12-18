import React, { useContext } from 'react';

import { LanguageContext } from '../context';

const CookiesBar = (props) => {
   const context = useContext(LanguageContext);
   return (
      <div className="cookies-bar">
         <div className="cookies-bar__text">
            <p>{context.dictionary.cookies1}</p>
            <p>{context.dictionary.cookies2}</p>
         </div>
         <button className="cookies-bar__button" onClick={props.clicked}>
            {context.dictionary.understand}
         </button>
      </div>
   );
};

export default CookiesBar;
