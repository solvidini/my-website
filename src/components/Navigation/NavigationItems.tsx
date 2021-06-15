import React from 'react';

import withTranslation from '../../hoc/withTranslation';
import { Dictionary } from '../../languageContext';

import NavigationItem from './NavigationItem';

interface Props {
   isOpened: boolean,
   onClick: (() => void) & React.MouseEventHandler<HTMLButtonElement>,
   dictionary: Dictionary
}

const NavigationItems = (props: Props) => {
   const { isOpened, onClick = () => { }, dictionary } = props;
   return (
      <ul className="navigation">
         <NavigationItem to="top" isOpened={isOpened} onClick={onClick}>
            {dictionary.nav.home}
         </NavigationItem>
         <NavigationItem to="section-about" isOpened={isOpened} onClick={onClick}>
            {dictionary.nav.about}
         </NavigationItem>
         <NavigationItem to="section-skills" isOpened={isOpened} onClick={onClick}>
            {dictionary.nav.skills}
         </NavigationItem>
         <NavigationItem to="section-offer" isOpened={isOpened} onClick={onClick}>
            {dictionary.nav.offer}
         </NavigationItem>
         <NavigationItem to="section-portfolio" isOpened={isOpened} onClick={onClick}>
            {dictionary.nav.portfolio}
         </NavigationItem>
         <NavigationItem to="section-contact" isOpened={isOpened} onClick={onClick}>
            {dictionary.nav.contact}
         </NavigationItem>
      </ul>
   );
};

export default withTranslation(NavigationItems);
