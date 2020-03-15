import React from "react";

import "./Backdrop.scss";

const Backdrop = props => 
  props.show ? (
    <div className={props.notVisible ? "backdrop" : "backdrop backdrop--visible"} onClick={props.clicked}></div>
  ) : null;

export default Backdrop;
