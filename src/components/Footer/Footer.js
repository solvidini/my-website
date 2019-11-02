import React from "react";

import "./Footer.scss";

const Footer = props => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer" name="section-contact">
      <div className="footer__top">
        <div className="footer__top__logo">&nbsp;</div>
        <div className="footer__top__item">
          <h4>
            Kontakt <i class="far fa-envelope"></i>
          </h4>
          <span>
            contact@samuelk.pl<a href="mailto:contact@samuelk.pl"> &rarr;</a>
          </span>
          <span>
            samukedo@gmail.com<a href="mailto:samukedo@gmail.com"> &rarr;</a>
          </span>
        </div>
        <div className="footer__top__item">
          <h4>
            CV <i class="far fa-address-card"></i>
          </h4>
          <a
            href="https://docs.google.com/document/d/1KyYiSiBsq8Lc8nhOA8K3UFCMr0r5hVnkSdl9uidR8Lc/edit?usp=sharing"
            title="Curriculum vitae PL"
          >
            Curriculum vitae PL
          </a>
          <a
            href="https://docs.google.com/document/d/1lmQmuafOFvkSBoKYF8b_ny6XoHf_qqf0jZlUhjwYnss/edit?usp=sharing"
            title="Curriculum vitae ENG"
          >
            Curriculum vitae ENG
          </a>
        </div>
        <div className="footer__top__item">
          Offer icons made by{" "}
          <span>
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>
            ,
          </span>
          <span>
            <a
              href="https://www.flaticon.com/authors/elias-bikbulatov"
              title="Elias Bikbulatov"
            >
              Elias Bikbulatov
            </a>
          </span>
          <span>
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </span>
        </div>
      </div>
      <div className="footer__social">
        <a
          className="footer__social__link"
          href="https://www.linkedin.com/in/samuel-k%C4%99dziora-b45b86159/"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a className="footer__social__link" href="https://github.com/ssazero">
          <i class="fab fa-github"></i>
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
