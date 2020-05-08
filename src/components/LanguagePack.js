import React, { useContext } from 'react';

import { LanguageContext } from '../context';

const LanguagePack = (props) => {
  const context = useContext(LanguageContext);
  return (
    <div
      className="language-pack"
      title="ENG / PL"
      onClick={props.showToggler}
      ref={props.languagePackRef}
    >
      <div className="language-pack__toggler">
        <span style={{ pointerEvents: 'none' }}>
          {context.dictionary.language}&nbsp;
          <i
            className={
              props.visible
                ? 'fas fa-caret-down language-pack__toggler-icon language-pack__toggler-icon--active '
                : 'fas fa-caret-down language-pack__toggler-icon'
            }
          ></i>
        </span>
      </div>
      <div
        className={
          props.visible
            ? 'language-pack__dropdown language-pack__dropdown--visible'
            : 'language-pack__dropdown'
        }
      >
        <button
          className={
            context.language === 'pl'
              ? 'language-pack__select language-pack__select--active'
              : 'language-pack__select'
          }
          onClick={context.changeLanguage}
          data-language="pl"
        >
          Polski
        </button>
        <button
          className={
            context.language === 'en'
              ? 'language-pack__select language-pack__select--active'
              : 'language-pack__select'
          }
          onClick={context.changeLanguage}
          data-language="en"
        >
          English
        </button>
      </div>
    </div>
  );
};

export default LanguagePack;
