import React, { useContext } from 'react';

import './Project.scss';
import { LanguageContext } from '../../context';

const Project = props => {
	const context = useContext(LanguageContext);
	return (
		<div className="projects__item">
			<div className="projects__item__drawer">
				<h4 className="projects__item__title">{props.title}</h4>
				<p className="projects__item__description">{props.description}</p>
			</div>
			{props.live ? (
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="projects__item__link projects__item__link--right"
					href={props.live}
				>
					{context.dictionary.portfolio.project.preview}
				</a>
			) : (
				<span
					className="projects__item__link projects__item__link--right"
					title={context.dictionary.portfolio.project.noLink}
					style={{ textDecoration: 'line-through', color: '#bbb' }}
				>
					{context.dictionary.portfolio.project.preview}
				</span>
			)}
			<a
				target="_blank"
				rel="noopener noreferrer"
				className="projects__item__link projects__item__link--left"
				href={props.github}
			>
				GitHub
			</a>
			<img className="projects__item__image" src={props.source} alt={'Project ' + props.title} />
		</div>
	);
};

export default Project;
