import React from 'react'
import gsap from 'gsap'
import { Trans, useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faGithub, faLinkedinIn, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

import Image from 'src/components/ui/Image'
import { ImageLoaderContext } from 'src/utils/image-loader-context'
import { AudioPlayer } from '../AudioPlayer'
import classNames from 'classnames'

const About = () => {
  const { images } = React.useContext(ImageLoaderContext)
  const { t } = useTranslation()
  const aboutMeRef = React.useRef(null)
  const userAgent = navigator.userAgent

  React.useEffect(() => {
    gsap.from(aboutMeRef.current, {
      duration: 1.2,
      ease: 'power1',
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#about-me',
        start: 'top center+=200',
        toggleActions: 'play none none reverse',
      },
    })
  }, [])

  return (
    <section className='section-about' id='about-me'>
      <div className='section-about__content'>
        <h2 className='section-header'>
          <span className='section-header__pre'>{t('About.Header')}</span>
          <span className='section-header__name' style={{ fontSize: '3rem' }}>
            Samuel Kędziora -
          </span>
          <span style={{ fontSize: '3rem' }}> Frontend&nbsp;Engineer</span>
        </h2>
        <div className='about-me' ref={aboutMeRef}>
          <div className='about-me__content'>
            <Image className='about-me__image' src={images.justMe} alt='Just me' />
            <div className='about-me__info'>
              <p className='about-me__info-paragraph'>
                <Trans i18nKey='About.Content'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://soundcloud.com/solvidi'
                    className='link'
                  >
                    SoundCloud
                  </a>
                </Trans>
              </p>
            </div>
          </div>
          <div className='about-me__links'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='about-me__link'
              href='https://soundcloud.com/solvidi'
              title='SoundCloud'
            >
              <FontAwesomeIcon icon={faSoundcloud} />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='about-me__link'
              href='https://github.com/solvidini'
              title='GitHub'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='about-me__link'
              href='https://www.linkedin.com/in/samuelkedziora/'
              title='LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='about-me__link'
              href='https://codepen.io/solvidi'
              title='CodePen'
            >
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'audio',
          userAgent.includes('Chrome') && 'audio--chrome',
          userAgent.includes('Safari') && 'audio--safari',
          userAgent.includes('Firefox') && 'audio--firefox',
        )}
      >
        <AudioPlayer />
      </div>
    </section>
  )
}

export default About
