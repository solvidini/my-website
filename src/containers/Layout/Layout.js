import React, { useState, useEffect, useRef } from "react";

import "./Layout.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Header from "../../components/Content/Header/Header";
import Footer from "../../components/Content/Footer/Footer";
import { animateScroll } from "react-scroll";
import ArrowUp from "../../components/UI/ArrowUp/ArrowUp";

const Layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [stickyToolbar, setStickyToolbar] = useState(false);
  const ref = useRef(null);

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
    const height = ref.current ? ref.current.offsetHeight - 50 : 0;

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
      <Header refe={ref}>
        <Toolbar
          sideDrawerToggleClicked={sideDrawerToggleHandler}
          sticky={stickyToolbar}
        />
      </Header>
      {/* <SideDrawer open={sideDrawerIsVisible} closed={sideDrawerClosedHandler} /> */}
      {props.children}
      <Footer />
      {stickyToolbar && (
        <div onClick={animateScroll.scrollToTop} className="arrow-top">
          <ArrowUp />
        </div>
      )}
    </React.Fragment>
  );
};

export default Layout;
