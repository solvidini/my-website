import React, { RefObject, FC } from 'react'

import ReactTypingEffect from 'react-typing-effect'
import { Link } from 'react-scroll'
import Particles from 'react-tsparticles'

import ArrowDown from '../UI/ArrowDown/ArrowDown'
import ParticlesConfig from '../../configurations/particlesjs-config'
import { useTranslation } from 'react-i18next'
import { ImageLoaderContext } from '../../utils/ImageLoaderContext'

interface IHeader {
  forwardedRef: RefObject<HTMLHeadElement>
  hideCanvas: boolean
}

const Header: FC<IHeader> = ({ children, hideCanvas, forwardedRef }) => {
  const { images } = React.useContext(ImageLoaderContext)
  const { t } = useTranslation()

  const words = [`${t('Header.SentenceArray.0')} 😉`, t('Header.SentenceArray.1')]

  const headerStyles = {
    backgroundImage: `linear-gradient(
        135deg,
        #f5d68133 0%,
        #1d1d204d 25%,
        #1d1d2066 75%,
        #ee346233 100%
      ),
      url(${images.headerImage})`,
  }

  return (
    <header className='header' id='top' ref={forwardedRef} style={headerStyles}>
      {!hideCanvas && (
        <Particles
          id='header-particles'
          canvasClassName='header-particles'
          params={ParticlesConfig}
          width='100%'
          height='100%'
        />
      )}
      <div className='header__text-box'>
        <h1 className='heading-primary' data-text='FRONTEND ENGINEER'>
          FRONTEND ENGINEER
        </h1>
        <div className='heading-paragraph'>Samuel Kędziora</div>
        <ReactTypingEffect
          className='typewriter-container'
          speed={26}
          text={words}
          eraseSpeed={11}
          eraseDelay={3000}
          typingDelay={1000}
          cursor='_'
          cursorClassName='typewriter-cursor'
        />
      </div>
      <div className='header__arrow-down'>
        <Link to='section-about' smooth duration={1500}>
          <ArrowDown />
        </Link>
      </div>
      {children}
    </header>
  )
}

export default Header
