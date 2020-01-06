import React, { useContext } from 'react';

import './Portfolio.scss';
import Project from './../../Project/Project';
import fotobudka from '../../../assets/images/project-fotobudka.jpg';
import mySite from '../../../assets/images/project-my-site.jpg';
import yourTurn from '../../../assets/images/project-your-turn.jpg';
import projectW from '../../../assets/images/project-projektw.jpg';
import pizzaBuilder from '../../../assets/images/project-pizza-builder.jpg';
import { LanguageContext } from '../../../context';

const Portfolio = props => {
	const context = useContext(LanguageContext);
	return (
		<section name="section-portfolio" className="section-portfolio">
			<h2 className="section-header">
				<span className="section-header__title">Portfolio</span>
				<span className="section-header__post">{context.dictionary.portfolio.post}</span>
			</h2>
			<div className="projects">
				<Project
					title={context.dictionary.portfolio.projectW.title}
					description={context.dictionary.portfolio.projectW.description}
					github="https://github.com/ssazero/project-w"
					live="http://projektw.pl"
					source={projectW}
				/>
				<Project
					title="Pizza Builder"
					description={context.dictionary.portfolio.pizzaBuilder.description}
					github="https://github.com/ssazero/pizza-builder"
					live="https://pizza-builder-6412e.web.app/"
					source={pizzaBuilder}
				/>
				<Project
					title="Your Turn"
					description={context.dictionary.portfolio.yourTurn.description}
					github="https://github.com/ssazero/your-turn"
					source={yourTurn}
				/>
				<Project
					title="My-site"
					description={context.dictionary.portfolio.mySite.description}
					github="https://github.com/ssazero/my-site"
					live="/"
					source={mySite}
				/>
				<Project
					title="Fotobudka Premium Box"
					description={context.dictionary.portfolio.fotobudka.description}
					github="https://github.com/ssazero/fotobudka"
					live="http://fotobudka-premiumbox.pl"
					source={fotobudka}
				/>
			</div>
		</section>
	);
};

export default Portfolio;
