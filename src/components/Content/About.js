import React, { useContext } from 'react';

import justMe from '../../assets/images/me.png';
import { LanguageContext } from '../../context.tsx';
import Effect from 'react-reveal/Fade';

const About = (props) => {
  const context = useContext(LanguageContext);
  return (
    <div className="section-drop-shadow">
      <section className="section-about" name="section-about">
        <div className="section-about__content">
          <h2 className="section-header">
            <span className="section-header__pre">
              {context.dictionary.about.header}
            </span>
            <span
              className="section-header__name"
              style={{ fontSize: '3rem' }}
            >
              Samuel Kędziora -
            </span>
            <span style={{ fontSize: '3rem' }}>
              {' '}
              Web&nbsp;Developer
            </span>
          </h2>
          <div className="about-me">
            <Effect>
              <div className="about-me__image-container">
                <img
                  className="about-me__image"
                  src={justMe}
                  alt="Just me"
                />
              </div>
            </Effect>
            <Effect>
              <div className="about-me__text">
                <p className="about-me__text-paragraph">
                  {context.dictionary.about.aboutMe}
                </p>
              </div>
            </Effect>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
