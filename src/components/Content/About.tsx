import React from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'

import justMe from '../../assets/images/me.png'
import Image from '../UI/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faGithub, faLinkedin, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const { t } = useTranslation()
  const aboutMeRef = React.useRef(null)

  React.useEffect(() => {
    gsap.from(aboutMeRef.current, {
      duration: 1.2,
      ease: 'power1',
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#section-about',
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    })
  }, [])

  return (
    <section className='section-about' id='section-about'>
      <div className='section-about__content'>
        <h2 className='section-header'>
          <span className='section-header__pre'>{t('About.Header')}</span>
          <span className='section-header__name' style={{ fontSize: '3rem' }}>
            Samuel Kędziora -
          </span>
          <span style={{ fontSize: '3rem' }}> Web&nbsp;Developer</span>
        </h2>
        <div className='about-me' ref={aboutMeRef}>
          <Image
            className='about-me__image'
            src={justMe}
            alt='Just me'
            spinnerClass='spinner-icon--about'
          />
          <div className='about-me__info'>
            <p className='about-me__info-paragraph'>{t('About.Content')}</p>
            <div className='about-me__links'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='about-me__link'
                href='https://soundcloud.com/ssazero'
                title='SoundCloud'
              >
                <FontAwesomeIcon icon={faSoundcloud} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='about-me__link'
                href='https://github.com/ssazero'
                title='GitHub'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='about-me__link'
                href='https://www.linkedin.com/in/ssazero/'
                title='LinkedIn'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='about-me__link'
                href='https://codepen.io/ssazero'
                title='CodePen'
              >
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
