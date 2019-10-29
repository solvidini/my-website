import React from "react";

import "./NavigationItems.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className="navigation-items">
    <NavigationItem to="top" opened={props.opened} clicked={props.clicked}>
      Home
    </NavigationItem>
    <NavigationItem
      to="section-about"
      opened={props.opened}
      clicked={props.clicked}
    >
      O mnie
    </NavigationItem>
    <NavigationItem
      to="section-portfolio"
      opened={props.opened}
      clicked={props.clicked}
    >
      Portfolio
    </NavigationItem>
    <NavigationItem
      to="section-contact"
      opened={props.opened}
      clicked={props.clicked}
    >
      Kontakt
    </NavigationItem>
  </ul>
);

export default NavigationItems;
