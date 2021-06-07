import React from 'react';

import withTranslation from '../../hoc/withTranslation';

import NavigationItem from './NavigationItem';

const NavigationItems = (props) => {
   const { opened = () => {}, clicked = () => {}, dictionary } = props;
   return (
      <ul className="navigation">
         <NavigationItem to="top" opened={opened} clicked={clicked}>
            {dictionary.nav.home}
         </NavigationItem>
         <NavigationItem to="section-about" opened={opened} clicked={clicked}>
            {dictionary.nav.about}
         </NavigationItem>
         <NavigationItem to="section-skills" opened={opened} clicked={clicked}>
            {dictionary.nav.skills}
         </NavigationItem>
         <NavigationItem to="section-offer" opened={opened} clicked={clicked}>
            {dictionary.nav.offer}
         </NavigationItem>
         <NavigationItem to="section-portfolio" opened={opened} clicked={clicked}>
            {dictionary.nav.portfolio}
         </NavigationItem>
         <NavigationItem to="section-contact" opened={opened} clicked={clicked}>
            {dictionary.nav.contact}
         </NavigationItem>
      </ul>
   );
};

export default withTranslation(NavigationItems);
