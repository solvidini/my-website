import React from "react";
import { Link } from "react-scroll";

import "./NavigationItem.scss";

const NavigationItem = props => (
  <li className="navigation-item">
    <Link
      className="navigation-item__link"
      data-hover={props.children}
      to={props.to}
      spy={true}
      smooth={true}
      hashSpy={true}
      duration={500}
      isDynamic={true}
      offset={-10}
      activeClass="navigation-item--active"
      ignoreCancelEvents={false}
      onClick={props.clicked}
    >
      {props.children}
    </Link>
  </li>
);

export default NavigationItem;
