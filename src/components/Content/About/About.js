import React, { useContext } from 'react';

import './About.scss';
import justMe from '../../../assets/images/just-me.jpg';
import { LanguageContext } from '../../../context';
import Effect from 'react-reveal/Fade';

const Contact = props => {
	const context = useContext(LanguageContext);
	return (
		<section className="section-about-wraper" name="section-about">
			<div className="section-about">
				<div className="section-about__content">
					<h2 className="section-header">
						<span className="section-header__pre">{context.dictionary.about.header}</span>
						<span className="section-header__name" style={{ fontSize: '3rem' }}>
							Samuel Kędziora -
						</span>{' '}
						<span className="no-wrap" style={{ fontSize: '3rem' }}>
							Frontend Web Developer
						</span>
					</h2>
					<div className="about-me">
						<Effect>
							<div className="about-me__image">
								<img className="image" src={justMe} alt="Just me" />
							</div>
						</Effect>
						<Effect>
							<div className="about-me__text">
								<p className="about-me__text__paragraph">{context.dictionary.about.aboutMe}</p>
							</div>
						</Effect>
					</div>
					<div className="skills">
						<div className="skills__row">
							<h3 className="skills__row__title">{context.dictionary.about.skillsTitle1}</h3>
							<Effect>
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
							</Effect>
						</div>
						<div className="skills__row">
							<h3 className="skills__row__title">{context.dictionary.about.skillsTitle2}</h3>
							<Effect>
								<ul className="skills__row__list">
									<li className="skills__row__list__item">REST API</li>
									<li className="skills__row__list__item">Spring / Spring Boot</li>
									<li className="skills__row__list__item">Java</li>
									<li className="skills__row__list__item">Symfony 4</li>
									<li className="skills__row__list__item">php</li>
									<li className="skills__row__list__item">SQL</li>
									<li className="skills__row__list__item">C++</li>
								</ul>
							</Effect>
						</div>
						<div className="skills__row">
							<h3 className="skills__row__title">{context.dictionary.about.skillsTitle3}</h3>
							<Effect>
								<ul className="skills__row__list">
									<li className="skills__row__list__item">Visual Studio Code</li>
									<li className="skills__row__list__item">Eclipse</li>
									<li className="skills__row__list__item">Photoshop</li>
									<li className="skills__row__list__item">PhpStorm</li>
								</ul>
							</Effect>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
