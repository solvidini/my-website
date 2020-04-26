import React from "react";

import About from "./About";
import Portfolio from "./Portfolio";
import Offer from "./Offer";
import Skills from "./Skills";

const Content = () => {
  return (
      <main>
        <About />
        <Skills />
        <Offer />
        <Portfolio />
      </main>
  );
};

export default Content;
