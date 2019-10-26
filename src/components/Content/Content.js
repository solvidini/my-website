import React from "react";

import About from "./About/About";
import Info from "./Info/Info";

import "./Content.scss";

const Content = () => {
  return (
    <div className="content">
      <main>
        <About />
        <Info />
      </main>
    </div>
  );
};

export default Content;
