import React, { useState, useEffect, useRef, useContext } from 'react';

import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { animateScroll } from 'react-scroll';
import ArrowUp from '../../components/UI/ArrowUp/ArrowUp';
import { CSSTransition } from 'react-transition-group';
import Logo from '../../components/Logo/Logo';
import { LanguageContext } from '../../context';

const Layout = props => {
	const context = useContext(LanguageContext);
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const [stickyToolbar, setStickyToolbar] = useState(false);
	const headerRef = useRef(null);
	const toolbarRef = useRef(null);

	const yOffset = () => {
		setScrollY(window.pageYOffset);
	};

	useEffect(() => {
		const watchScroll = () => {
			window.addEventListener('scroll', yOffset);
		};
		watchScroll();
		return () => {
			window.removeEventListener('scroll', yOffset);
		};
	});

	useEffect(() => {
		const toolbarHeight = toolbarRef.current ? toolbarRef.current.offsetHeight : 50;
		const height = headerRef.current ? headerRef.current.offsetHeight - toolbarHeight : 0;

		if (scrollY > height) {
			setStickyToolbar(true);
		} else {
			setStickyToolbar(false);
		}
	}, [setStickyToolbar, scrollY]);

	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};

	const sideDrawerClosedHandler = () => {
		setSideDrawerIsVisible(false);
	};

	return (
		<React.Fragment>
			{!sideDrawerIsVisible && <Logo />}
			{!sideDrawerIsVisible && (
				<div className="language-pack">
					<div className="language-pack__toggler">
						{context.dictionary.language}&nbsp;
						<i className="fas fa-caret-down language-pack__toggler-icon"></i>
					</div>
					<div className="language-pack__dropdown">
						<button className="language-pack__select" onClick={context.changeLanguage} data-language="pl">
							Polski
						</button>
						<button className="language-pack__select" onClick={context.changeLanguage} data-language="en">
							English
						</button>
					</div>
				</div>
			)}
			<Header headerRef={headerRef}>
				<Toolbar
					toolbarRef={toolbarRef}
					sideDrawerToggleClicked={sideDrawerToggleHandler}
					sideDrawerIsVisible={sideDrawerIsVisible}
					sticky={stickyToolbar}
				/>
			</Header>
			<SideDrawer opened={sideDrawerIsVisible} closed={sideDrawerClosedHandler} />
			{props.children}
			<Footer />
			<CSSTransition in={stickyToolbar} mountOnEnter unmountOnExit timeout={500} classNames="fade">
				<div onClick={animateScroll.scrollToTop} className="arrow-top">
					<ArrowUp />
				</div>
			</CSSTransition>
		</React.Fragment>
	);
};

export default Layout;
