import React, { useContext, MouseEventHandler } from 'react';

import { LanguageContext } from '../context';

interface Props {
  clicked: MouseEventHandler
};

const CookiesBar = ({ clicked }: Props) => {
  const context = useContext(LanguageContext);
  const { dictionary: { cookies1, cookies2, understand } }: any = context;
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

export default CookiesBar;
