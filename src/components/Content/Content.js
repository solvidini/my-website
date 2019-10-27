import React from "react";

import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

import "./Content.scss";

const Content = () => {
  return (
    <div className="content">
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default Content;
