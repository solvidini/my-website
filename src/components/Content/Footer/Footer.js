import React from "react";

import "./Footer.scss";

const Footer = props => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>
        <a className="footer__link" href="/">
          &copy; <b>{currentDate}</b> Samuel Kędziora
        </a>
      </span>
    </footer>
  );
};

export default Footer;
