import React from 'react';

import withTranslation from '../hoc/withTranslation';

const CookiesBar = (props) => {
   const { dictionary } = props;
   return (
      <div className="cookies-bar">
         <div className="cookies-bar__text">
            <p>{dictionary.cookies1}</p>
            <p>{dictionary.cookies2}</p>
         </div>
         <button className="cookies-bar__button" onClick={props.clicked}>
            {dictionary.understand}
         </button>
      </div>
   );
};

export default withTranslation(CookiesBar);
