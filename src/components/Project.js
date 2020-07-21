import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileAlt,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';

import { LanguageContext } from '../context';
import Effect from 'react-reveal/Fade';

const Project = (props) => {
  const context = useContext(LanguageContext);
  return (
    <Effect>
      <div className="projects__item">
        <div className="projects__item-drawer">
          <h4 className="projects__item-title">{props.title}</h4>
          <p className="projects__item-description">
            {props.description}
          </p>
          <FontAwesomeIcon
            icon={props.mobile ? faMobileAlt : faLaptop}
            className="projects__item-icon"
            title={props.mobile ? 'Mobile project' : 'Web project'}
          />
        </div>
        {props.live ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="projects__item-link projects__item-link--right"
            href={props.live}
          >
            {props.mobile
              ? context.dictionary.portfolio.project.install
              : context.dictionary.portfolio.project.preview}
          </a>
        ) : (
          <span
            className="projects__item-link projects__item-link--right"
            title={context.dictionary.portfolio.project.noLink}
            style={{ textDecoration: 'line-through', color: '#bbb' }}
          >
            {props.mobile
              ? context.dictionary.portfolio.project.install
              : context.dictionary.portfolio.project.preview}
          </span>
        )}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="projects__item-link projects__item-link--left"
          href={props.github}
        >
          GitHub
        </a>
        <div className="projects__item-image-container">
          <img
            draggable="false"
            className="projects__item-image"
            src={props.source}
            alt={'Project ' + props.title}
          />
        </div>
      </div>
    </Effect>
  );
};

export default Project;
