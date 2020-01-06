import React, { useContext } from 'react';

import './Header.scss';
import ReactTypingEffect from 'react-typing-effect';
import ArrowDown from '../UI/ArrowDown/ArrowDown';
import { Link } from 'react-scroll';
import { LanguageContext } from '../../context';

// Translations
import * as translationPL from '../../translations/pl.json';
import * as translationEN from '../../translations/en.json';

const Header = React.memo(props => {
	const context = useContext(LanguageContext);

	const words = context.language === 'pl' ? translationPL.header.wordsArray : translationEN.header.wordsArray;

	return (
		<header className="header" name="top" ref={props.headerRef}>
			<div className="header__text-box">
				<h1 className="heading-primary">
					<div className="anim-move-in anim-move-in--left">Front-end</div>{' '}
					<div className="anim-move-in anim-move-in--right">Developer</div>
				</h1>
				<div className="heading-paragraph">Samuel Kędziora</div>
				<ReactTypingEffect
					className="typewriter-container"
					speed={40}
					text={words}
					eraseDelay={3000}
					cursor="_"
				/>
			</div>
			<div className="header__arrow-down">
				<Link
					to={'section-about'}
					spy={true}
					smooth={true}
					hashSpy={true}
					duration={1500}
					isDynamic={true}
					offset={-10}
					ignoreCancelEvents={false}
				>
					<ArrowDown />
				</Link>
			</div>
			{props.children}
		</header>
	);
});

export default Header;
