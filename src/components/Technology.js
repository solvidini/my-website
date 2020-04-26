import React from "react";

import Effect from "react-reveal/Fade";

const Technology = (props) => {
  return (
    <Effect>
      <div className="technologies__item" title={props.name}>
        <img
          className="technologies__item-image"
          src={props.src}
          alt={props.name}
        />
      </div>
    </Effect>
  );
};

export default Technology;
