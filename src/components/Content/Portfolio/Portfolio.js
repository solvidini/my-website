import React from "react";

import "./Portfolio.scss";
import fotobudka from "../../../assets/images/laptop-fotobudka.jpg";
import mySite from "../../../assets/images/laptop-my-site.jpg";
import yourTurn from "../../../assets/images/laptop-your-turn.jpg";

const Portfolio = props => {
  return (
    <section name="section-portfolio" className="section-portfolio">
      <h2 className="section-header">
        <span className="section-header__title">Portfolio</span>
        <span className="section-header__post">
          Dodawane będą tu różne projekty, które wykonałem.
        </span>
      </h2>
      <div className="projects">
        <div className="projects__item">
          <div className="projects__item__curtain">
            <h4 className="projects__item__curtain__title">
              Fotobudka Premium Box
            </h4>
            <p className="projects__item__curtain__description">
              Wizytówka - Strona firmy
            </p>
            <div className="projects__item__curtain__links">
              <a href="https://github.com/ssazero/fotobudka">GitHub</a>{" "}
              <a href="http://fotobudka-premiumbox.pl">PODGLĄD</a>
            </div>
          </div>
          <img
            className="projects__item__image"
            src={fotobudka}
            alt="Project Fotobudka"
          />
        </div>
        <div className="projects__item">
          <div className="projects__item__curtain">
            <h4 className="projects__item__curtain__title">
              Frontend Developer
            </h4>
            <p className="projects__item__curtain__description">
              Portfolio - Strona własna.
            </p>
            <div className="projects__item__curtain__links">
              <a href="https://github.com/ssazero/my-site">GitHub</a>{" "}
              <a href="/">PODGLĄD</a>
            </div>
          </div>
          <img
            className="projects__item__image"
            src={mySite}
            alt="Project My Site"
          />
        </div>
        <div className="projects__item">
          <div className="projects__item__curtain">
            <h4 className="projects__item__curtain__title">Your Turn</h4>
            <p className="projects__item__curtain__description">
              Aplikacja - Podział obowiązków domowych.
            </p>
            <div className="projects__item__curtain__links">
              <a href="https://github.com/ssazero/your-turn">GitHub</a>{" "}
              <a
                className="link-disabled"
                title="Strona nie została jeszcze umieszczona w sieci :(."
              >
                PODGLĄD
              </a>
            </div>
          </div>
          <img
            className="projects__item__image"
            src={yourTurn}
            alt="Project Your Turn"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
