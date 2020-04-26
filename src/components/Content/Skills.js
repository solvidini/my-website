import React, { useContext } from "react";

import { LanguageContext } from "../../context";
import Technology from "../Technology";

import css3 from "../../assets/images/technologies/css3.png";
import git from "../../assets/images/technologies/git.png";
import html5 from "../../assets/images/technologies/html5.png";
import java from "../../assets/images/technologies/java.png";
import js from "../../assets/images/technologies/js.png";
import mongodb from "../../assets/images/technologies/mongodb.png";
import mysql from "../../assets/images/technologies/mysql.png";
import nodejs from "../../assets/images/technologies/nodejs.png";
import php from "../../assets/images/technologies/php.png";
import ps from "../../assets/images/technologies/ps.png";
import reactNative from "../../assets/images/technologies/react-native.png";
import react from "../../assets/images/technologies/react.png";
import redux from "../../assets/images/technologies/redux.png";
import sass from "../../assets/images/technologies/sass.png";
import springBoot from "../../assets/images/technologies/spring-boot.png";
import symfony from "../../assets/images/technologies/symfony.png";
import vsc from "../../assets/images/technologies/vsc.png";

const Skills = (props) => {
  const context = useContext(LanguageContext);
  return (
    <section className="section-skills" name="section-skills">
      <h2 className="section-header section-header--white">
        <span className="section-header__title">
          {context.dictionary.skills.header}
        </span>
        <span className="section-header__post">
          {context.dictionary.skills.post}
        </span>
      </h2>
      <div className="technologies">
        <Technology src={react} name="React" />
        <Technology src={js} name="JavaScript ES6+" />
        <Technology src={nodejs} name="Node.js" />
        <Technology src={html5} name="HTML5" />
        <Technology src={css3} name="CSS3" />
        <Technology src={sass} name="Sass" />
        <Technology src={redux} name="Redux" />
        <Technology src={reactNative} name="React Native" />
        <Technology src={git} name="Git" />
        <Technology src={mongodb} name="MongoDB" />
        <Technology src={mysql} name="MySQL" />
        <Technology src={vsc} name="Visual Studio Code" />
        <Technology src={ps} name="Photoshop" />
        <Technology src={symfony} name="Symfony 4" />
        <Technology src={php} name="php" />
        <Technology src={springBoot} name="Spring Boot" />
        <Technology src={java} name="Java" />
      </div>
    </section>
  );
};

export default Skills;
