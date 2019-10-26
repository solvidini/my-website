import React from "react";
// import { Link } from "react-scroll";

import "./NavigationItem.scss";

const NavigationItem = props => (
  <li className="navigation-item">
    <a href={props.to}
      className="navigation-item__link"
      // to={props.to}
      // spy={true}
      // smooth={true}
      // hashSpy={true}
      // duration={500}
      // isDynamic={true}
      // offset={-15}
      // ignoreCancelEvents={false}
      // onClick={props.clicked}
    >
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
