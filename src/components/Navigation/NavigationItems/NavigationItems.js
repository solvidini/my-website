import React from "react";

import "./NavigationItems.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className="navigation-items">
    <NavigationItem to="top" offset={-50} opened={props.opened} clicked={props.clicked}>
      Home
    </NavigationItem>
    <NavigationItem
      to="section-about"
      offset={-50}
      opened={props.opened}
      clicked={props.clicked}
    >
      O mnie
    </NavigationItem>
    <NavigationItem
      to="section-offer"
      offset={-50}
      opened={props.opened}
      clicked={props.clicked}
    >
      Oferta
    </NavigationItem>
    <NavigationItem
      to="section-portfolio"
      offset={-30}
      opened={props.opened}
      clicked={props.clicked}
    >
      Portfolio
    </NavigationItem>
  </ul>
);

export default NavigationItems;
