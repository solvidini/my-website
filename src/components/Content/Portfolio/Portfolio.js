import React from "react";

import "./Portfolio.scss";
import fotobudka from "../../../assets/images/project-fotobudka.jpg";
import mySite from "../../../assets/images/project-my-site.jpg";
import yourTurn from "../../../assets/images/project-your-turn.jpg";
import projectW from "../../../assets/images/project-projektw.jpg";

const Portfolio = props => {
  return (
    <section name="section-portfolio" className="section-portfolio">
      <h2 className="section-header">
        <span className="section-header__title">Portfolio</span>
        <span className="section-header__post">Wykonane&nbsp;projekty</span>
      </h2>
      <div className="projects">
        <div className="projects__item">
          <div className="projects__item__curtain">
            <h4 className="projects__item__curtain__title">Projekt&nbsp;W</h4>
            <p className="projects__item__curtain__description">
              Strona - Portfolio&nbsp;firmy.
            </p>
            <div className="projects__item__curtain__links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ssazero/project-w"
              >
                GitHub
              </a>{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://projektw.pl"
              >
                PODGLĄD
              </a>
            </div>
          </div>
          <img
            className="projects__item__image"
            src={projectW}
            alt="Project Fotobudka"
          />
        </div>
        <div className="projects__item">
          <div className="projects__item__curtain">
            <h4 className="projects__item__curtain__title">Your&nbsp;Turn</h4>
            <p className="projects__item__curtain__description">
              Aplikacja - Podział obowiązków domowych.
            </p>
            <div className="projects__item__curtain__links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ssazero/your-turn"
              >
                GitHub
              </a>{" "}
              <span
                className="link-disabled"
                title="Strona nie została jeszcze umieszczona w sieci :(."
              >
                PODGLĄD
              </span>
            </div>
          </div>
          <img
            className="projects__item__image"
            src={yourTurn}
            alt="Project Your Turn"
          />
        </div>
        <div className="projects__item">
          <div className="projects__item__curtain">
            <h4 className="projects__item__curtain__title">
              Front-end Developer
            </h4>
            <p className="projects__item__curtain__description">
              Strona - Portfolio&nbsp;własne.
            </p>
            <div className="projects__item__curtain__links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ssazero/my-site"
              >
                GitHub
              </a>{" "}
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
            <h4 className="projects__item__curtain__title">
              Fotobudka Premium&nbsp;Box
            </h4>
            <p className="projects__item__curtain__description">
              Strona - Wizytówka&nbsp;firmy.
            </p>
            <div className="projects__item__curtain__links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ssazero/fotobudka"
              >
                GitHub
              </a>{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://fotobudka-premiumbox.pl"
              >
                PODGLĄD
              </a>
            </div>
          </div>
          <img
            className="projects__item__image"
            src={fotobudka}
            alt="Project Fotobudka"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
