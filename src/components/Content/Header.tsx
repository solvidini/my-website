import React, { forwardRef, RefObject, memo, FC } from 'react';

import withTranslation from '../../hoc/withTranslation';

import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';
import Particles from 'react-particles-js';

import ArrowDown from '../UI/ArrowDown/ArrowDown';
import ParticlesConfig from '../../utils/particlesjs-config';
import { Dictionary } from './../../languageContext';

interface Props {
   dictionary: Dictionary,
   forwardedRef: (instance: HTMLElement | null) => void,
   hideCanvas: boolean
}

const Header: FC<Props> = (props) => {
   const { dictionary, hideCanvas, children, forwardedRef } = props;

   const words = dictionary.header.wordsArray;

   return (
      <header className="header" id="top" ref={forwardedRef}>
         {!hideCanvas && <Particles params={ParticlesConfig} width="100vw" height="98vh" />}
         <div className="header__text-box">
            <h1 className="heading-primary">Web Developer</h1>
            <div className="heading-paragraph">Samuel Kędziora</div>
            <ReactTypingEffect
               className="typewriter-container"
               speed={38}
               text={words}
               eraseSpeed={11}
               eraseDelay={3000}
               typingDelay={1000}
               cursor="_"
            />
         </div>
         <div className="header__arrow-down">
            <Link
               to={'section-about'}
               spy={true}
               smooth={true}
               hashSpy={true}
               duration={1500}
               isDynamic={true}
               offset={0}
               ignoreCancelEvents={false}
            >
               <ArrowDown />
            </Link>
         </div>
         {children}
      </header>
   );
};

export default withTranslation(memo(Header));
