import React, { useState, useEffect, useRef } from 'react';

import Toolbar from '../components/Navigation/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer';
import Header from '../components/Content/Header';
import Footer from '../components/Content/Footer';
import { animateScroll } from 'react-scroll';
import ArrowUp from '../components/UI/ArrowUp/ArrowUp';
import { CSSTransition } from 'react-transition-group';
import Logo from '../components/Logo';
import CookiesBar from '../components/CookiesBar';
import LanguagePack from '../components/LanguagePack';

const Layout = (props) => {
   const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
   const [languageDropdownIsVisible, setLanguageDropdownIsVisible] = useState(false);
   const [cookiesBarIsVisible, setCookiesBarIsVisible] = useState(false);
   const [scrollY, setScrollY] = useState(0);
   const [stickyToolbar, setStickyToolbar] = useState(false);
   const [hideHeaderCanvas, setHideHeaderCanvas] = useState(false);
   const headerRef = useRef(null);
   const toolbarRef = useRef(null);
   const languagePackRef = useRef(null);

   const yOffset = () => {
      setScrollY(window.pageYOffset);
   };

   useEffect(() => {
      window.addEventListener('scroll', yOffset);
      window.addEventListener('click', languagePackClosedHandler);

      return () => {
         window.removeEventListener('scroll', yOffset);
         window.removeEventListener('click', languagePackClosedHandler);
      };
   });

   useEffect(() => {
      if (localStorage.getItem('cookiesAccepted')) {
         setCookiesBarIsVisible(false);
      } else {
         setTimeout(() => {
            setCookiesBarIsVisible(true);
         }, 5000);
      }
   }, [setCookiesBarIsVisible]);

   useEffect(() => {
      const toolbarHeight = toolbarRef.current ? toolbarRef.current.offsetHeight : 50;
      const height = headerRef.current ? headerRef.current.offsetHeight - toolbarHeight : 0;

      if (scrollY > height) {
         setStickyToolbar(true);
         setHideHeaderCanvas(true);
      } else {
         setStickyToolbar(false);
         setHideHeaderCanvas(false);
      }
   }, [setStickyToolbar, scrollY]);

   const sideDrawerToggleHandler = () => {
      setSideDrawerIsVisible(!sideDrawerIsVisible);
   };

   const sideDrawerClosedHandler = () => {
      setSideDrawerIsVisible(false);
   };

   const languagePackToggleHandler = () => {
      setLanguageDropdownIsVisible(!languageDropdownIsVisible);
   };

   const languagePackClosedHandler = (e) => {
      if (languagePackRef.current) {
         if (!languagePackRef.current.contains(e.target)) {
            setLanguageDropdownIsVisible(false);
         }
      }
   };

   const acceptedCookiesHandler = () => {
      setCookiesBarIsVisible(false);
      localStorage.setItem('cookiesAccepted', true);
   };

   return (
      <>
         {!sideDrawerIsVisible && <Logo />}
         {!sideDrawerIsVisible && (
            <LanguagePack
               visible={languageDropdownIsVisible}
               showToggler={languagePackToggleHandler}
               languagePackRef={languagePackRef}
            />
         )}
         {cookiesBarIsVisible && <CookiesBar clicked={acceptedCookiesHandler} />}
         <Header headerRef={headerRef} hideCanvas={hideHeaderCanvas}>
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
         <CSSTransition
            in={stickyToolbar}
            mountOnEnter
            unmountOnExit
            timeout={500}
            classNames="fade"
         >
            <div onClick={animateScroll.scrollToTop} className="arrow-top">
               <ArrowUp />
            </div>
         </CSSTransition>
      </>
   );
};

export default Layout;
