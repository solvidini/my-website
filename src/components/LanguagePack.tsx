import React from 'react';
import { CSSTransition } from 'react-transition-group';

import withTranslation from '../hoc/withTranslation';

const LanguagePack = (props: any) => {
   const { showToggler, forwardedRef, visible, language, changeLanguage, dictionary } = props;
   return (
      <div className="language-pack" title="ENG / PL" onClick={showToggler} ref={forwardedRef}>
         <div className="language-pack__toggler">
            <span style={{ pointerEvents: 'none' }}>
               {dictionary.language}&nbsp;
               <i
                  className={
                     visible
                        ? 'fas fa-caret-down language-pack__toggler-icon language-pack__toggler-icon--active '
                        : 'fas fa-caret-down language-pack__toggler-icon'
                  }
               ></i>
            </span>
         </div>
         <CSSTransition in={visible} mountOnEnter unmountOnExit timeout={200} classNames="lpa">
            <div className={'language-pack__dropdown'}>
               <button
                  className={
                     language === 'pl'
                        ? 'language-pack__select language-pack__select--active'
                        : 'language-pack__select'
                  }
                  onClick={changeLanguage}
                  data-language="pl"
               >
                  Polski
               </button>
               <button
                  className={
                     language === 'en'
                        ? 'language-pack__select language-pack__select--active'
                        : 'language-pack__select'
                  }
                  onClick={changeLanguage}
                  data-language="en"
               >
                  English
               </button>
            </div>
         </CSSTransition>
      </div>
   );
};

export default withTranslation(LanguagePack);
