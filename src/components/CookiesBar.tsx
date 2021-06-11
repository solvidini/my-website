import React, { useContext, MouseEventHandler } from 'react';

import withTranslation from '../hoc/withTranslation';
import { Dictionary } from './../languageContext';

interface Props {
  clicked: MouseEventHandler,
  dictionary: Dictionary
};

const CookiesBar = (props: Props) => {
  const { dictionary: { cookies1, cookies2, understand }, clicked } = props;
  return (
    <div className="cookies-bar">
      <div className="cookies-bar__text">
        <p>{cookies1}</p>
        <p>{cookies2}</p>
      </div>
      <button className="cookies-bar__button" onClick={clicked}>
        {understand}
      </button>
    </div>
  );
};

export default withTranslation(CookiesBar);
