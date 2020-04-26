import React, { useState, useEffect, useRef } from "react";

import Toolbar from "../components/Navigation/Toolbar";
import SideDrawer from "../components/Navigation/SideDrawer";
import Header from "../components/Content/Header";
import Footer from "../components/Content/Footer";
import { animateScroll } from "react-scroll";
import ArrowUp from "../components/UI/ArrowUp/ArrowUp";
import { CSSTransition } from "react-transition-group";
import Logo from "../components/Logo";
import LanguagePack from "../components/LanguagePack";

const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const [languageDropdownIsVisible, setLanguageDropdownIsVisible] = useState(
    false
  );
  const [scrollY, setScrollY] = useState(0);
  const [stickyToolbar, setStickyToolbar] = useState(false);
  const [hideHeaderCanvas, setHideHeaderCanvas] = useState(false);
  const headerRef = useRef(null);
  const toolbarRef = useRef(null);

  const yOffset = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", yOffset);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", yOffset);
    };
  });

  useEffect(() => {
    const toolbarHeight = toolbarRef.current
      ? toolbarRef.current.offsetHeight
      : 50;
    const height = headerRef.current
      ? headerRef.current.offsetHeight - toolbarHeight
      : 0;

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

  const languagePackClosedHandler = () => {
    setLanguageDropdownIsVisible(false);
  };

  return (
    <React.Fragment>
      {!sideDrawerIsVisible && <Logo />}
      {!sideDrawerIsVisible && (
        <LanguagePack
          visible={languageDropdownIsVisible}
          clicked={languagePackToggleHandler}
          closed={languagePackClosedHandler}
        />
      )}
      <Header headerRef={headerRef} hideCanvas={hideHeaderCanvas}>
        <Toolbar
          toolbarRef={toolbarRef}
          sideDrawerToggleClicked={sideDrawerToggleHandler}
          sideDrawerIsVisible={sideDrawerIsVisible}
          sticky={stickyToolbar}
        />
      </Header>
      <SideDrawer
        opened={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      />
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
    </React.Fragment>
  );
};

export default Layout;
