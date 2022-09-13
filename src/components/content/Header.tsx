import React, { RefObject, FC } from 'react'
import { useTranslation } from 'react-i18next'
import ReactTypingEffect from 'react-typing-effect'
import { Link } from 'react-scroll'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import ArrowDown from 'src/components/ui/ArrowDown/ArrowDown'
import ParticlesConfig from 'src/configurations/particlesjs-config'
import { ImageLoaderContext } from 'src/utils/image-loader-context'

interface IHeader {
  children: React.ReactNode
  forwardedRef: RefObject<HTMLHeadElement>
}

const Header: FC<IHeader> = ({ children, forwardedRef }) => {
  const { images } = React.useContext(ImageLoaderContext)
  const { t } = useTranslation()

  const particlesInit = React.useCallback(async main => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }, [])

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
      <Particles
        id='header-particles'
        init={particlesInit}
        options={ParticlesConfig}
        width='100%'
        height='100%'
      />
      <div className='header__text-box'>
        <h1 className='heading-primary' data-text='FRONT UP!'>
          FRONT UP!
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
        <Link to='about-me' smooth duration={1500}>
          <ArrowDown />
        </Link>
      </div>
      {children}
    </header>
  )
}

export default Header
