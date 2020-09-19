import React, { useContext } from "react";

import Project from "../Project";
import fotobudka from "../../assets/images/projects/project-fotobudka.gif";
import mySite from "../../assets/images/projects/project-my-site.gif";
import yourTurn from "../../assets/images/projects/project-your-turn.jpg";
import projectW from "../../assets/images/projects/project-projektw.gif";
import pizzaBuilder from "../../assets/images/projects/project-pizza-builder.gif";
import bregulaInsurances from "../../assets/images/projects/project-bregula-insurances.gif";
import dailyTasks from "../../assets/images/projects/project-daily-tasks.jpg";
import canvas1 from "../../assets/images/projects/project-canvas-1.gif";
import swpiu from "../../assets/images/projects/project-swpiu.gif";
import button from "../../assets/images/projects/project-button.gif";
import calculator from "../../assets/images/projects/project-calculator.png";
import { LanguageContext } from "../../context";

const Portfolio = (props) => {
  const context = useContext(LanguageContext);
  return (
    <section name="section-portfolio" className="section-portfolio">
      <div className="section-portfolio__content">
        <h2 className="section-header section-header--white">
          <span className="section-header__title">Portfolio</span>
          <span className="section-header__post">
            {context.dictionary.portfolio.post}
          </span>
        </h2>
        <div className="projects">
          <Project
            title={context.dictionary.portfolio.projectW.title}
            description={context.dictionary.portfolio.projectW.description}
            github="private"
            live="http://projektw.pl"
            source={projectW}
          />
          <Project
            title="SWPIU"
            description={context.dictionary.portfolio.swpiu.description}
            github="https://github.com/ssazero/eng-proj-client"
            live="http://swpiu.samuelk.pl/"
            source={swpiu}
          />
          <Project
            title="Pizza Builder"
            description={context.dictionary.portfolio.pizzaBuilder.description}
            github="https://github.com/ssazero/pizza-builder"
            live="https://pizza-builder-6412e.web.app/"
            source={pizzaBuilder}
          />
          <Project
            title="Tapicernia Button"
            description={context.dictionary.portfolio.button.description}
            github="private"
            live="http://www.pracownia-button.pl/"
            source={button}
          />
          <Project
            title="Calculator"
            description={context.dictionary.portfolio.calculator.description}
            github="https://github.com/ssazero/calculator"
            live="https://ssazero.github.io/calculator/"
            source={calculator}
          />
          <Project
            title="Bregula Ubezpieczenia"
            description={context.dictionary.portfolio.bregula.description}
            github="private"
            live="http://bregulaubezpieczenia.pl/"
            source={bregulaInsurances}
          />
          <Project
            title="Daily Tasks"
            description={context.dictionary.portfolio.dailyTasks.description}
            github="https://github.com/ssazero/daily-tasks"
            source={dailyTasks}
            mobile
            live="https://expo.io/@ssazero/daily-tasks"
          />
            <Project
              title="My Site"
              description={context.dictionary.portfolio.mySite.description}
              github="https://github.com/ssazero/my-site"
              live="/"
              source={mySite}
            />
          <Project
            title="Your Turn"
            description={context.dictionary.portfolio.yourTurn.description}
            github="https://github.com/ssazero/your-turn"
            source={yourTurn}
          />
          <Project
            title="Fotobudka Premium Box"
            description={context.dictionary.portfolio.fotobudka.description}
            github="private"
            live="http://fotobudka-premiumbox.pl"
            source={fotobudka}
          />
          <Project
            title="Canvas Animation"
            description={context.dictionary.portfolio.canvas1.description}
            github="https://github.com/ssazero/canvas-project-one"
            live="https://ssazero.github.io/canvas-project-one/"
            source={canvas1}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
