import React from "react";

import "./About.scss";
import justMe from "../../../assets/images/just-me.jpg";

const Contact = props => {
  return (
    <section className="section-about" name="section-about">
      <div className="section-about__content">
        <h2 className="section-header">
          <span className="section-header__pre">Kilka słów o&nbsp;mnie</span>
          <span className="section-header__name" style={{fontSize: "3rem"}}>Samuel Kędziora -</span>{" "}
          <span className="no-wrap" style={{fontSize: "3rem"}}>Frontend Web Developer</span>
        </h2>
        <div className="about-me">
          <div className="about-me__image">
            <img className="image" src={justMe} alt="Just me" />
          </div>
          <div className="about-me__text">
            <p className="about-me__text__paragraph">
              Jestem studentem trzeciego roku informatyki na&nbsp;Uniwersytecie
              Śląskim, chętnym do rozpoczęcia swojej kariery w&nbsp;IT.
            </p>
            <p className="about-me__text__paragraph">
              Moim celem jest zdobywanie praktycznego doświadczenia
              w&nbsp;różnych technologiach webowych. Interesują mnie trendy
              z&nbsp;zakresu tworzenia stron www, aplikacji webowych, blogów
              oraz sklepów internetowych, jak i&nbsp;zagadnień z&nbsp;UI oraz
              UX. Rozwijam swoje umiejętności głównie ze&nbsp;strony front-end'u,
              ale&nbsp;nie odpuszczam i&nbsp;back-end’u.
            </p>
            <p className="about-me__text__paragraph">
              Osobiście jestem bardzo pracowitą osobą, która pasjonuje się
              nowymi technologiami i&nbsp;koncentruje na&nbsp;rozwoju osobistym.
              Umiem pracować samodzielnie jak i&nbsp;w&nbsp;zespole.
            </p>
          </div>
        </div>
        <div className="skills">
          <div className="skills__row">
            <h3 className="skills__row__title">Technologie główne</h3>
            <ul className="skills__row__list">
              <li className="skills__row__list__item">React</li>
              <li className="skills__row__list__item">ES6 / JS / JQuery</li>
              <li className="skills__row__list__item">CSS / Sass</li>
              <li className="skills__row__list__item">Redux</li>
              <li className="skills__row__list__item">
                RWD <span className="no-wrap">(Responsive Web Design)</span>
              </li>
              <li className="skills__row__list__item">UI Design</li>
              <li className="skills__row__list__item">Git</li>
            </ul>
          </div>
          <div className="skills__row">
            <h3 className="skills__row__title">Inne technologie</h3>
            <ul className="skills__row__list">
              <li className="skills__row__list__item">REST API</li>
              <li className="skills__row__list__item">Spring / Spring Boot</li>
              <li className="skills__row__list__item">Java</li>
              <li className="skills__row__list__item">Symfony 4</li>
              <li className="skills__row__list__item">php</li>
              <li className="skills__row__list__item">SQL</li>
              <li className="skills__row__list__item">C++</li>
            </ul>
          </div>
          <div className="skills__row">
            <h3 className="skills__row__title">Oprogramowanie</h3>
            <ul className="skills__row__list">
              <li className="skills__row__list__item">Visual Studio Code</li>
              <li className="skills__row__list__item">Photoshop</li>
              <li className="skills__row__list__item">PhpStorm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
