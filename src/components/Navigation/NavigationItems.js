import React, { useContext } from "react";

import NavigationItem from "./NavigationItem";
import { LanguageContext } from "../../context";

const NavigationItems = (props) => {
  const context = useContext(LanguageContext);
  return (
    <ul className="navigation">
      <NavigationItem to="top" opened={props.opened} clicked={props.clicked}>
        {context.dictionary.nav.home}
      </NavigationItem>
      <NavigationItem
        to="section-about"
        opened={props.opened}
        clicked={props.clicked}
      >
        {context.dictionary.nav.about}
      </NavigationItem>
      <NavigationItem
        to="section-skills"
        opened={props.opened}
        clicked={props.clicked}
      >
        {context.dictionary.nav.skills}
      </NavigationItem>
      <NavigationItem
        to="section-offer"
        opened={props.opened}
        clicked={props.clicked}
      >
        {context.dictionary.nav.offer}
      </NavigationItem>
      <NavigationItem
        to="section-portfolio"
        opened={props.opened}
        clicked={props.clicked}
      >
        {context.dictionary.nav.portfolio}
      </NavigationItem>
      <NavigationItem
        to="section-contact"
        opened={props.opened}
        clicked={props.clicked}
      >
        {context.dictionary.nav.contact}
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
