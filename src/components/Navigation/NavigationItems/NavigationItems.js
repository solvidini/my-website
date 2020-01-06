import React, { useContext } from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { LanguageContext } from '../../../context';

const NavigationItems = props => {
	const context = useContext(LanguageContext);
	return (
		<ul className="navigation-items">
			<NavigationItem to="top" offset={-50} opened={props.opened} clicked={props.clicked}>
				{context.dictionary.nav.home}
			</NavigationItem>
			<NavigationItem to="section-about" offset={-50} opened={props.opened} clicked={props.clicked}>
				{context.dictionary.nav.about}
			</NavigationItem>
			<NavigationItem to="section-offer" offset={-50} opened={props.opened} clicked={props.clicked}>
				{context.dictionary.nav.offer}
			</NavigationItem>
			<NavigationItem to="section-portfolio" offset={-30} opened={props.opened} clicked={props.clicked}>
				{context.dictionary.nav.portfolio}
			</NavigationItem>
		</ul>
	);
};

export default NavigationItems;
