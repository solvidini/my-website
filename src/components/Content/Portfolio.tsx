import React from 'react';

import withTranslation from '../../hoc/withTranslation';
import { Dictionary } from './../../languageContext';

import Project from '../Project';
import fotobudka from '../../assets/images/projects/project-fotobudka.gif';
import mySite from '../../assets/images/projects/project-my-site.gif';
import yourTurn from '../../assets/images/projects/project-your-turn.jpg';
import projectW from '../../assets/images/projects/project-projektw.gif';
import pizzaBuilder from '../../assets/images/projects/project-pizza-builder.gif';
import bregulaInsurances from '../../assets/images/projects/project-bregula-insurances.gif';
import dailyTasks from '../../assets/images/projects/project-daily-tasks.jpg';
import canvas1 from '../../assets/images/projects/project-canvas-1.gif';
import swpiu from '../../assets/images/projects/project-swpiu.gif';
import button from '../../assets/images/projects/project-button.gif';
import calculator from '../../assets/images/projects/project-calculator.png';
import mot from '../../assets/images/projects/project-mot.gif';
import annsr from '../../assets/images/projects/project-annsr.gif';

interface Props {
   dictionary: Dictionary
}

const Portfolio = (props: Props) => {
   const { dictionary } = props;
   return (
      <section className="section-portfolio" id="section-portfolio">
         <div className="section-portfolio__content">
            <h2 className="section-header section-header--white">
               <span className="section-header__title">Portfolio</span>
               <span className="section-header__post">{dictionary.portfolio.post}</span>
            </h2>
            <div className="projects">
               <Project
                  title={dictionary.portfolio.projectW.title}
                  description={dictionary.portfolio.projectW.description}
                  live="http://projektw.pl"
                  source={projectW}
               />
               <Project
                  title="SWPIU"
                  description={dictionary.portfolio.swpiu.description}
                  github="https://github.com/ssazero/eng-proj-client"
                  live="http://swpiu.samuelk.pl/"
                  source={swpiu}
               />
               <Project
                  title="Pizza Builder"
                  description={dictionary.portfolio.pizzaBuilder.description}
                  github="https://github.com/ssazero/pizza-builder"
                  live="https://pizza-builder-6412e.web.app/"
                  source={pizzaBuilder}
               />
               <Project
                  title="Tapicernia Button"
                  description={dictionary.portfolio.button.description}
                  live="http://www.pracownia-button.pl/"
                  source={button}
               />
               <Project
                  title="Multiple Object Tracking"
                  description={dictionary.portfolio.mot.description}
                  github="https://github.com/ssazero/multiple-object-tracking"
                  live="https://ssazero.github.io/multiple-object-tracking/"
                  source={mot}
               />
               <Project
                  title="Calculator"
                  description={dictionary.portfolio.calculator.description}
                  github="https://github.com/ssazero/calculator"
                  live="https://ssazero.github.io/calculator/"
                  source={calculator}
               />
               <Project
                  title="Bregula Ubezpieczenia"
                  description={dictionary.portfolio.bregula.description}
                  live="http://bregulaubezpieczenia.pl/"
                  source={bregulaInsurances}
               />
               <Project
                  title="ANN Symbol Recognition"
                  description={dictionary.portfolio.annsr.description}
                  github="https://github.com/ssazero/ann-symbol-recognition"
                  live="https://ssazero.github.io/ann-symbol-recognition/"
                  source={annsr}
               />
               <Project
                  title="Daily Tasks"
                  description={dictionary.portfolio.dailyTasks.description}
                  github="https://github.com/ssazero/daily-tasks"
                  source={dailyTasks}
                  mobile
                  live="https://expo.io/@ssazero/daily-tasks"
               />
               <Project
                  title="My Site"
                  description={dictionary.portfolio.mySite.description}
                  github="https://github.com/ssazero/my-site"
                  live="/"
                  source={mySite}
               />
               <Project
                  title="Your Turn"
                  description={dictionary.portfolio.yourTurn.description}
                  github="https://github.com/ssazero/your-turn"
                  source={yourTurn}
               />
               <Project
                  title="Fotobudka Premium Box"
                  description={dictionary.portfolio.fotobudka.description}
                  live="http://fotobudka-premiumbox.pl"
                  source={fotobudka}
               />
               <Project
                  title="Canvas Animation"
                  description={dictionary.portfolio.canvas1.description}
                  github="https://github.com/ssazero/canvas-project-one"
                  live="https://ssazero.github.io/canvas-project-one/"
                  source={canvas1}
               />
            </div>
         </div>
      </section>
   );
};

export default withTranslation(Portfolio);
