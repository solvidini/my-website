import React from "react";

import "./Header.scss";
import ReactTypingEffect from "react-typing-effect";
import ArrowDown from "../UI/ArrowDown/ArrowDown";
import { Link } from "react-scroll";

const Header = React.memo(props => {
  const words = [
    "Witam na mojej stronie!",
    "Znajdziesz tu informacje na mój temat oraz projekty, które wykonałem.",
    "W zakładce \"Portfolio\" będą na bieżąco dodawane moje projekty."
  ];

  return (
    <header className="header" id="top" ref={props.headerRef}>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <div className="anim-move-in anim-move-in--left">Front-end</div>
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
          to={"section-about"}
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
