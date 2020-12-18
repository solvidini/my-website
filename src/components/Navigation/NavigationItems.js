import React, { useContext } from 'react';

import NavigationItem from './NavigationItem';
import { LanguageContext } from '../../context';

const NavigationItems = (props) => {
   const { opened = () => {}, clicked = () => {} } = props;
   const context = useContext(LanguageContext);
   return (
      <ul className="navigation">
         <NavigationItem to="top" opened={opened} clicked={clicked}>
            {context.dictionary.nav.home}
         </NavigationItem>
         <NavigationItem to="section-about" opened={opened} clicked={clicked}>
            {context.dictionary.nav.about}
         </NavigationItem>
         <NavigationItem to="section-skills" opened={opened} clicked={clicked}>
            {context.dictionary.nav.skills}
         </NavigationItem>
         <NavigationItem to="section-offer" opened={opened} clicked={clicked}>
            {context.dictionary.nav.offer}
         </NavigationItem>
         <NavigationItem to="section-portfolio" opened={opened} clicked={clicked}>
            {context.dictionary.nav.portfolio}
         </NavigationItem>
         <NavigationItem to="section-contact" opened={opened} clicked={clicked}>
            {context.dictionary.nav.contact}
         </NavigationItem>
      </ul>
   );
};

export default NavigationItems;
