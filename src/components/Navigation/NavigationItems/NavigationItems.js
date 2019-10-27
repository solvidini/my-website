import React from "react";

import "./NavigationItems.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className="navigation-items">
    <NavigationItem to="top" clicked={props.clicked}>
      Home
    </NavigationItem>
    <NavigationItem to="section-about" clicked={props.clicked}>
      O mnie
    </NavigationItem>
    <NavigationItem to="section-portfolio" clicked={props.clicked}>
      Portfolio
    </NavigationItem>
    <NavigationItem to="section-contact" clicked={props.clicked}>
      Kontakt
    </NavigationItem>
  </ul>
);

export default NavigationItems;
