import React from "react";

import "./NavigationItems.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className="navigation-items">
    <NavigationItem to="#section-header" clicked={props.clicked}>
      Home
    </NavigationItem>
    <NavigationItem to="#section-about" clicked={props.clicked}>
      About
    </NavigationItem>
    <NavigationItem to="#section-info" clicked={props.clicked}>
      Info
    </NavigationItem>
  </ul>
);

export default NavigationItems;
