import React, { RefObject, FC } from 'react'

import ReactTypingEffect from 'react-typing-effect'
import { Link } from 'react-scroll'
import Particles from 'react-tsparticles'

import ArrowDown from '../UI/ArrowDown/ArrowDown'
import ParticlesConfig from '../../utils/particlesjs-config'
import { useTranslation } from 'react-i18next'

interface IHeader {
   forwardedRef: RefObject<HTMLHeadElement>,
   hideCanvas: boolean
}

const Header: FC<IHeader> = ({ children, hideCanvas, forwardedRef }) => {
   const { t } = useTranslation()

   const words = [
      t('Header.SentenceArray.0'),
      t('Header.SentenceArray.1'),
      t('Header.SentenceArray.2'),
   ]

   return (
      <header className="header" id="top" ref={forwardedRef}>
         <Particles id='header-particles' canvasClassName='header-particles' params={ParticlesConfig} width="100%" height="100%" />
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
               cursorClassName="typewriter-cursor"
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
   )
}

export default Header
