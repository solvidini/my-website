import React from 'react';

import Effect from 'react-reveal/Fade';

const Technology = (props) => {
  return (
    <Effect>
      <div className="technologies__item" style={{ ...props.style }}>
        <img
          className="technologies__item-image"
          src={props.src}
          alt={props.name}
        />
        <div className="technologies__item-label">{props.name}</div>
      </div>
    </Effect>
  );
};

export default Technology;
