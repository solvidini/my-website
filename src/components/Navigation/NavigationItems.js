import React, { useContext } from 'react';

import NavigationItem from './NavigationItem';
import { LanguageContext } from '../../context';

const NavigationItems = props => {
	const context = useContext(LanguageContext);
	return (
		<ul className="navigation">
			<NavigationItem to="top" offset={-50} opened={props.opened} clicked={props.clicked}>
				{context.dictionary.nav.home}
			</NavigationItem>
			<NavigationItem to="section-about" offset={-50} opened={props.opened} clicked={props.clicked}>
				{context.dictionary.nav.about}
			</NavigationItem>
			<NavigationItem to="section-skills" offset={-50} opened={props.opened} clicked={props.clicked}>
				{context.dictionary.nav.skills}
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
