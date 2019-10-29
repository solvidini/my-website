import React from "react";

import "./Footer.scss";
import linkedinIcon from "../../assets/svg/linkedin-in-brands.svg";
import githubIcon from "../../assets/svg/github-brands.svg";
import logo from "../../assets/images/logo.png";

const Footer = props => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer" name="section-contact">
      <div className="footer__top">
        <div className="footer__top__item">
          <span>Frontend Web Developer</span>
          <span>&mdash;Samuel Kędziora&mdash;</span>
        </div>
        <div className="footer__top__logo">
          <img className="footer__logo" src={logo} alt="Logo" />
        </div>
        <div className="footer__top__item">
          <span>contact@samuelk.pl</span>
          <span>samukedo@gmail.com</span>
        </div>
      </div>
      <div className="footer__social">
        <a
          className="footer__social__link"
          href="https://www.linkedin.com/in/samuel-k%C4%99dziora-b45b86159/"
        >
          <img
            className="footer__social__icon"
            src={linkedinIcon}
            alt="Linkedin Icon"
          />
        </a>
        <a className="footer__social__link" href="https://github.com/ssazero">
          <img
            className="footer__social__icon"
            src={githubIcon}
            alt="Linkedin Icon"
          />
        </a>
      </div>
      <div className="footer__copyright">
        <span className="no-wrap">
          Samuel Kędziora &nbsp;&copy; <b>{currentDate}</b>
        </span>
        <span className="no-wrap">Wszelkie prawa zastrzeżone.</span>
      </div>
    </footer>
  );
};

export default Footer;
