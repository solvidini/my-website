import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop } from '@fortawesome/free-solid-svg-icons';

import { LanguageContext } from '../context';
import Effect from 'react-reveal/Fade';

const Project = (props) => {
   const context = useContext(LanguageContext);
   const { title, description, mobile, live, github, source } = props;
   let githubButton, previewButton;

   if (github === 'private') {
      githubButton = (
         <span
            className="projects__item-link projects__item-link--left custom-label-container"
            style={{ textDecoration: 'line-through', color: '#bbb' }}
         >
            GitHub
            <div className="custom-label custom-label--project custom-label--project--1">
               {context.dictionary.portfolio.project.noGithubLink}
            </div>
         </span>
      );
   } else {
      githubButton = (
         <a
            target="_blank"
            rel="noopener noreferrer"
            className="projects__item-link projects__item-link--left"
            href={github}
         >
            GitHub
         </a>
      );
   }

   if (live) {
      previewButton = (
         <a
            target="_blank"
            rel="noopener noreferrer"
            className="projects__item-link projects__item-link--right"
            href={live}
         >
            {mobile
               ? context.dictionary.portfolio.project.install
               : context.dictionary.portfolio.project.preview}
         </a>
      );
   } else {
      previewButton = (
         <span
            className="projects__item-link projects__item-link--right custom-label-container"
            style={{ textDecoration: 'line-through', color: '#bbb' }}
         >
            {mobile
               ? context.dictionary.portfolio.project.install
               : context.dictionary.portfolio.project.preview}
            <div className="custom-label custom-label--project custom-label--project--2">
               {context.dictionary.portfolio.project.noLiveLink}
            </div>
         </span>
      );
   }

   return (
      <Effect>
         <div className="projects__item">
            <div className="projects__item-drawer">
               <h4 className="projects__item-title">{title}</h4>
               <p className="projects__item-description">{description}</p>
               <FontAwesomeIcon
                  icon={mobile ? faMobileAlt : faLaptop}
                  className="projects__item-icon"
                  title={mobile ? 'Mobile project' : 'Web project'}
               />
            </div>
            {githubButton}
            {previewButton}
            <div className="projects__item-image-container">
               <img
                  draggable="false"
                  className="projects__item-image"
                  src={source}
                  alt={'Project ' + title}
               />
            </div>
         </div>
      </Effect>
   );
};

export default Project;
