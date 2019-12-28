import React from 'react';

import './Portfolio.scss';
import Project from './../../Project/Project';
import fotobudka from '../../../assets/images/project-fotobudka.jpg';
import mySite from '../../../assets/images/project-my-site.jpg';
import yourTurn from '../../../assets/images/project-your-turn.jpg';
import projectW from '../../../assets/images/project-projektw.jpg';
import pizzaBuilder from '../../../assets/images/project-pizza-builder.jpg';

const Portfolio = props => {
	return (
		<section name="section-portfolio" className="section-portfolio">
			<h2 className="section-header">
				<span className="section-header__title">Portfolio</span>
				<span className="section-header__post">Wykonane&nbsp;projekty</span>
			</h2>
			<div className="projects">
				<Project
					title="Projekt&nbsp;W"
					description="Strona - Portfolio&nbsp;firmy."
					github="https://github.com/ssazero/project-w"
					live="http://projektw.pl"
					source={projectW}
				/>
          <Project
            title="Pizza Builder"
            description="Aplikacja - Tworzenie i zamawianie pizzy."
            github="https://github.com/ssazero/pizza-builder"
            live="https://pizza-builder-6412e.web.app/"
            source={pizzaBuilder}
          />
				<Project
					title="Your&nbsp;Turn"
					description="Aplikacja - Podział obowiązków domowych."
					github="https://github.com/ssazero/your-turn"
					source={yourTurn}
				/>
				<Project
					title="Front-end Developer"
					description="Strona - Portfolio&nbsp;własne."
					github="https://github.com/ssazero/my-site"
					live="/"
					source={mySite}
				/>
				<Project
					title="Fotobudka Premium&nbsp;Box"
					description="Strona - Wizytówka&nbsp;firmy."
					github="https://github.com/ssazero/fotobudka"
					live="http://fotobudka-premiumbox.pl"
					source={fotobudka}
				/>
			</div>
		</section>
	);
};

export default Portfolio;
