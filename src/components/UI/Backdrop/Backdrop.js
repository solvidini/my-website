import React from "react";

import "./Backdrop.scss";

const Backdrop = props =>
  props.show && (
    <div className="backdrop" onClick={props.clicked}></div>
  );

export default Backdrop;
