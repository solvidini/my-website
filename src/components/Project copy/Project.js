import React from 'react';

import './Project.scss';

const Project = props => (
	<div className="projects__item">
		<div className="projects__item__curtain">
			<h4 className="projects__item__curtain__title">{props.title}</h4>
			<p className="projects__item__curtain__description">{props.description}</p>
			<div className="projects__item__curtain__links">
				<a target="_blank" rel="noopener noreferrer" href={props.github}>
					GitHub
				</a>{' '}
				{props.live ? (
					<a target="_blank" rel="noopener noreferrer" href={props.live}>
						PODGLĄD
					</a>
				) : (
					<span className="link-disabled" title="Strona nie została jeszcze umieszczona w sieci :(.">
						PODGLĄD
					</span>
				)}
			</div>
		</div>
		<img className="projects__item__image" src={props.source} alt={'Project ' + props.title} />
	</div>
);

export default Project;