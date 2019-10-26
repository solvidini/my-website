import React from "react";

import "./Header.scss";
import Typewriter from "../../../shared/Typewriter/Typewriter";
import Logo from "../../Logo/Logo";

const Header = props => {
  const words = [
    "Welcome to my website",
    "I'm an IT student",
    "React, JS, SASS"
  ];

  return (
    <header className="header" id="section-header" ref={props.refe}>
      <div className="header__logo-box">
        <Logo />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">Samuel Kędziora</h1>
        <div className="typewriter-container">
          <Typewriter words={words} />
        </div>
      </div>
      {props.children}
    </header>
  );
};

export default Header;
